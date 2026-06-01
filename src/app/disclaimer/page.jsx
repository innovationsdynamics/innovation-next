import Disclaimer from '@/views/Disclaimer';
export const metadata = {
  title: "Disclaimer | Innovation Dynamics Group",
  description: "Read our legal disclaimer for Innovation Dynamics Group LLC.",
  keywords: "innovation dynamics group, disclaimer, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/disclaimer/" },
  openGraph: {
    title: "Disclaimer | Innovation Dynamics Group",
    description: "Read our legal disclaimer for Innovation Dynamics Group LLC.",
    url: "https://innovationdynamicsgroup.com/disclaimer/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Disclaimer | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Disclaimer | Innovation Dynamics Group",
    description: "Read our legal disclaimer for Innovation Dynamics Group LLC.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Disclaimer />; }
