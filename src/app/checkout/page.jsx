import Checkout from '@/views/Checkout';

export const metadata = {
  title: "Secure Checkout | Innovation Dynamics Group | Complete Your Purchase",
  description: "Complete your order with Innovation Dynamics Group. Secure checkout process with multiple payment options and fast shipping across the USA.",
  keywords: "innovation dynamics group, checkout, printers, office supplies, printer retailer",
  robots: "noindex, nofollow",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/checkout/" },
  openGraph: {
    title: "Secure Checkout | Innovation Dynamics Group | Complete Your Purchase",
    description: "Complete your order with Innovation Dynamics Group. Secure checkout process with multiple payment options and fast shipping across the USA.",
    url: "https://innovationdynamicsgroup.com/checkout/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Secure Checkout | Innovation Dynamics Group | Complete Your Purchase",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Secure Checkout | Innovation Dynamics Group | Complete Your Purchase",
    description: "Complete your order with Innovation Dynamics Group. Secure checkout process with multiple payment options and fast shipping across the USA.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Checkout />; }
