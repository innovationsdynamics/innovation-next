import RefundPolicy from '@/views/RefundPolicy';

export const metadata = {
  title: "Refund Policy | Innovation Dynamics Group",
  description: "Learn about our refund process and eligibility at Innovation Dynamics Group.",
  keywords: "innovation dynamics group, refund policy, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/refund-policy/" },
  openGraph: {
    title: "Refund Policy | Innovation Dynamics Group",
    description: "Learn about our refund process and eligibility at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/refund-policy/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Refund Policy | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Refund Policy | Innovation Dynamics Group",
    description: "Learn about our refund process and eligibility at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <RefundPolicy />; }
