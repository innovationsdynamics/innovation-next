import FAQs from '@/views/FAQs';

export const metadata = {
  title: "Frequently Asked Questions | Innovation Dynamics Group",
  description: "Find answers to common questions about our printers, supplies, ordering process, and shipping policies at Innovation Dynamics Group.",
  keywords: "innovation dynamics group, faqs, printers, office supplies, printer retailer",
  robots: "index, follow",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/faqs/" },
  openGraph: {
    title: "Frequently Asked Questions | Innovation Dynamics Group",
    description: "Find answers to common questions about our printers, supplies, ordering process, and shipping policies at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/faqs/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Frequently Asked Questions | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Frequently Asked Questions | Innovation Dynamics Group",
    description: "Find answers to common questions about our printers, supplies, ordering process, and shipping policies at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <FAQs />; }
