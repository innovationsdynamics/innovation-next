import Printers from '@/components/Printers';

export const metadata = {
  title: "Home Printers | Innovation Dynamics Group",
  description: "Shop high-quality HP Home Printers at Innovation Dynamics Group. Perfect for everyday printing, photos, and home office needs.",
  keywords: "innovation dynamics group, home printers, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/home-printers/" },
  openGraph: {
    title: "Home Printers | Innovation Dynamics Group",
    description: "Shop high-quality HP Home Printers at Innovation Dynamics Group. Perfect for everyday printing, photos, and home office needs.",
    url: "https://innovationdynamicsgroup.com/home-printers/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Home Printers | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Home Printers | Innovation Dynamics Group",
    description: "Shop high-quality HP Home Printers at Innovation Dynamics Group. Perfect for everyday printing, photos, and home office needs.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Printers />; }
