import ReturnExchange from '@/views/ReturnExchange';

export const metadata = {
  title: "Return & Exchange | Innovation Dynamics Group",
  description: "View our return and exchange procedures at Innovation Dynamics Group.",
  keywords: "innovation dynamics group, return exchange, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/return-exchange/" },
  openGraph: {
    title: "Return & Exchange | Innovation Dynamics Group",
    description: "View our return and exchange procedures at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/return-exchange/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Return & Exchange | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Return & Exchange | Innovation Dynamics Group",
    description: "View our return and exchange procedures at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <ReturnExchange />; }
