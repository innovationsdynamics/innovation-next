import Resources from '@/views/Resources';

export const metadata = {
  title: "Resources & Support | Innovation Dynamics Group",
  description: "Access technical resources, driver links, and support information at Innovation Dynamics Group.",
  keywords: "innovation dynamics group, resources, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/resources/" },
  openGraph: {
    title: "Resources & Support | Innovation Dynamics Group",
    description: "Access technical resources, driver links, and support information at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/resources/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Resources & Support | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Resources & Support | Innovation Dynamics Group",
    description: "Access technical resources, driver links, and support information at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Resources />; }
