import GuideDetail, { getGuideBySlug } from '@/views/GuideDetail';
import { notFound } from 'next/navigation';

export async function generateMetadata({ params }) {
  const guide = getGuideBySlug(params.slug);
  if (!guide) {
    return { title: 'Guide Not Found' };
  }
  
  return {
    title: `${guide.title} | Innovation Dynamics Group`,
    description: `Learn all about ${guide.title} with our expert guide from Innovation Dynamics Group.`,
  };
}

export default function GuidePage({ params }) {
  const guide = getGuideBySlug(params.slug);
  
  if (!guide) {
    notFound();
  }

  return <GuideDetail guide={guide} />;
}
