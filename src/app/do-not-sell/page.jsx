import DoNotSell from '@/views/DoNotSell';

export const metadata = {
  title: "Do Not Sell My Information | Innovation Dynamics Group",
  description: "Exercise your right to opt-out of the sale of your personal information at Innovation Dynamics Group.",
  keywords: "innovation dynamics group, do not sell, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/do-not-sell/" },
  openGraph: {
    title: "Do Not Sell My Information | Innovation Dynamics Group",
    description: "Exercise your right to opt-out of the sale of your personal information at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/do-not-sell/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Do Not Sell My Information | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Do Not Sell My Information | Innovation Dynamics Group",
    description: "Exercise your right to opt-out of the sale of your personal information at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <DoNotSell />; }
