import ProductDetails from '@/views/ProductDetails';

export async function generateMetadata({ params }) {
	const id = params.id;
	let title = `Product ${id} • Innovation Dynamics`;
	let description = 'Product details, specifications, and purchasing options at Innovation Dynamics.';

	try {
		const res = await fetch(`/api/products/${id}`);
		if (res.ok) {
			const p = await res.json();
			title = `${p.title || p.name || `Product ${id}`} • Innovation Dynamics`;
			description = p.description ? p.description.substring(0, 160) : description;
			return {
				title,
				description,
				keywords: (p.tags || []).join(', ') || 'printers, ink, toner, product'
			};
		}
	} catch (e) {
		// ignore and fallback to defaults
	}

	return { title, description, keywords: 'printers, ink, toner, product' };
}

export default function Page() { return <ProductDetails />; }
