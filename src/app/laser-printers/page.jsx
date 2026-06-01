import Printers from '@/components/Printers';

export const metadata = {
  title: "Laser Printers | Innovation Dynamics Group",
  description: "Shop fast and efficient HP Laser Printers at Innovation Dynamics Group. Ideal for high-volume text printing and sharp documents.",
  keywords: "innovation dynamics group, laser printers, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/laser-printers/" },
  openGraph: {
    title: "Laser Printers | Innovation Dynamics Group",
    description: "Shop fast and efficient HP Laser Printers at Innovation Dynamics Group. Ideal for high-volume text printing and sharp documents.",
    url: "https://innovationdynamicsgroup.com/laser-printers/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Laser Printers | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Laser Printers | Innovation Dynamics Group",
    description: "Shop fast and efficient HP Laser Printers at Innovation Dynamics Group. Ideal for high-volume text printing and sharp documents.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Printers />; }
