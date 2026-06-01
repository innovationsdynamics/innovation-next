export const API_BASE = '/api';

export const getImageUrl = (images, width = 440) => {
  if (!images || (Array.isArray(images) && images.length === 0)) {
    return 'https://placehold.co/600x600?text=No+Image';
  }

  let img = Array.isArray(images) ? images[0] : images;

  if (img.includes('res.cloudinary.com')) {
    if (img.includes('/upload/')) {
      img = img.replace('/upload/', `/upload/f_auto,q_auto,w_${width},c_limit/`);
    }
    return img;
  }

  if (img.startsWith('http')) return img;

  const path = img.startsWith('/') ? img : `/${img}`;
  return path;
};

export const resolveProductImage = (image) => {
  if (!image) return 'https://placehold.co/100';
  if (image.startsWith('http')) return image;
  return image.startsWith('/') ? image : `/${image}`;
};
