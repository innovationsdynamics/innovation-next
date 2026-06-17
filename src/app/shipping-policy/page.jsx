import ShippingPolicy from '@/views/ShippingPolicy';

export const metadata = {
  title: "Shipping Policy | Innovation Dynamics Group | Independent Printer Retailer",
  description: "View our shipping rates, timelines, and logistical framework for the United States.",
  keywords: "innovation dynamics group, shipping policy, printers, office supplies, printer retailer",
  robots: "index, follow",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: {
    canonical: "https://innovationdynamicsgroup.com/shipping-policy/",
  },
  openGraph: {
    title: "Shipping Policy | Innovation Dynamics Group | Independent Printer Retailer",
    description: "View our shipping rates, timelines, and logistical framework for the United States.",
    url: "https://innovationdynamicsgroup.com/shipping-policy/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Shipping Policy | Innovation Dynamics Group | Independent Printer Retailer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Shipping Policy | Innovation Dynamics Group | Independent Printer Retailer",
    description: "View our shipping rates, timelines, and logistical framework for the United States.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() {
  return <ShippingPolicy />;
}