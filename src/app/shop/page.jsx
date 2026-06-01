import Printers from '@/components/Printers';
export const metadata = {
  title: "Shop All Products | Innovation Dynamics Group",
  description: "Shop all HP printers and supplies at Innovation Dynamics Group. Browse our full catalog of home, office, laser, and inkjet solutions.",
  keywords: "innovation dynamics group, shop, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/shop/" },
  openGraph: {
    title: "Shop All Products | Innovation Dynamics Group",
    description: "Shop all HP printers and supplies at Innovation Dynamics Group. Browse our full catalog of home, office, laser, and inkjet solutions.",
    url: "https://innovationdynamicsgroup.com/shop/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Shop All Products | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shop All Products | Innovation Dynamics Group",
    description: "Shop all HP printers and supplies at Innovation Dynamics Group. Browse our full catalog of home, office, laser, and inkjet solutions.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};
export default function Page() { return <Printers />; }
