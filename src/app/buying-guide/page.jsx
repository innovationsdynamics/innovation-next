import BuyingGuide from '@/views/BuyingGuide';

export const metadata = {
  title: "Buying Guide | Innovation Dynamics Group",
  description: "Find the perfect printer with our expert Buying Guide at Innovation Dynamics Group. Tips and recommendations for every need.",
  keywords: "innovation dynamics group, buying guide, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/buying-guide/" },
  openGraph: {
    title: "Buying Guide | Innovation Dynamics Group",
    description: "Find the perfect printer with our expert Buying Guide at Innovation Dynamics Group. Tips and recommendations for every need.",
    url: "https://innovationdynamicsgroup.com/buying-guide/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Buying Guide | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Buying Guide | Innovation Dynamics Group",
    description: "Find the perfect printer with our expert Buying Guide at Innovation Dynamics Group. Tips and recommendations for every need.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <BuyingGuide />; }
