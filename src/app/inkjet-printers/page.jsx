import Printers from '@/components/Printers';

export const metadata = {
  title: "Inkjet Printers | Innovation Dynamics Group",
  description: "Discover versatile HP Inkjet Printers at Innovation Dynamics Group. Superior color printing for photos, marketing materials, and more.",
  keywords: "innovation dynamics group, inkjet printers, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/inkjet-printers/" },
  openGraph: {
    title: "Inkjet Printers | Innovation Dynamics Group",
    description: "Discover versatile HP Inkjet Printers at Innovation Dynamics Group. Superior color printing for photos, marketing materials, and more.",
    url: "https://innovationdynamicsgroup.com/inkjet-printers/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Inkjet Printers | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Inkjet Printers | Innovation Dynamics Group",
    description: "Discover versatile HP Inkjet Printers at Innovation Dynamics Group. Superior color printing for photos, marketing materials, and more.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Printers />; }
