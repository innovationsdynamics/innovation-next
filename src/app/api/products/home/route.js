import { NextResponse } from 'next/server';
import { connectDB } from '@/lib/db/connect';
import Product from '@/lib/models/Product';
import Category from '@/lib/models/Category';

export async function GET() {
  await connectDB();

  const categories = await Category.find({
    name: { $in: ['Laser', 'Inkjet', 'Ink & Toner'] },
  }).lean();

  const findCatId = (name) => {
    const cat = categories.find((c) => c.name.toLowerCase() === name.toLowerCase());
    return cat ? cat._id : null;
  };

  const getCategoryProducts = async (slug, usage = false) => {
    try {
      let query = {};
      query.brand = { $regex: 'HP', $options: 'i' };
      if (usage) {
        query.usageCategory = { $in: [slug] };
      } else {
        const catId = findCatId(slug);
        if (catId) query.category = catId;
        else return [];
      }
      return await Product.find(query).limit(4).populate('category', 'name').lean();
    } catch (err) {
      console.error(`Error fetching products for ${slug}:`, err);
      return [];
    }
  };

  const results = await Promise.all([
    getCategoryProducts('Home', true),
    getCategoryProducts('Office', true),
    getCategoryProducts('Laser'),
    getCategoryProducts('Inkjet'),
    getCategoryProducts('Ink & Toner'),
  ]);

  return NextResponse.json({
    home: results[0],
    office: results[1],
    laser: results[2],
    inkjet: results[3],
    toner: results[4],
  });
}
