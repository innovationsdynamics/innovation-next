import Cart from '@/views/Cart';

export const metadata = {
  title: "Your Cart | Innovation Dynamics Group | Secure Checkout",
  description: "View your selected printers and supplies in your Innovation Dynamics Group shopping cart. Proceed to our secure checkout for fast, reliable shipping.",
  keywords: "innovation dynamics group, cart, printers, office supplies, printer retailer",
  robots: "noindex, follow",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/cart/" },
  openGraph: {
    title: "Your Cart | Innovation Dynamics Group | Secure Checkout",
    description: "View your selected printers and supplies in your Innovation Dynamics Group shopping cart. Proceed to our secure checkout for fast, reliable shipping.",
    url: "https://innovationdynamicsgroup.com/cart/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Your Cart | Innovation Dynamics Group | Secure Checkout",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Your Cart | Innovation Dynamics Group | Secure Checkout",
    description: "View your selected printers and supplies in your Innovation Dynamics Group shopping cart. Proceed to our secure checkout for fast, reliable shipping.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Cart />; }
