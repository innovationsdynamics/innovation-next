import Printers from '@/components/Printers';

export const metadata = {
  title: "Office Printers | Innovation Dynamics Group",
  description: "Explore professional HP Office Printers at Innovation Dynamics Group. High-performance solutions for business productivity.",
  keywords: "innovation dynamics group, office printers, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/office-printers/" },
  openGraph: {
    title: "Office Printers | Innovation Dynamics Group",
    description: "Explore professional HP Office Printers at Innovation Dynamics Group. High-performance solutions for business productivity.",
    url: "https://innovationdynamicsgroup.com/office-printers/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Office Printers | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Office Printers | Innovation Dynamics Group",
    description: "Explore professional HP Office Printers at Innovation Dynamics Group. High-performance solutions for business productivity.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Printers />; }
