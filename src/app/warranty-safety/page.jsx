import WarrantySafety from '@/views/WarrantySafety';

export const metadata = {
  title: "Warranty & Safety Information | Innovation Dynamics Group",
  description:
    "Learn about manufacturer warranties, printer safety guidelines, maintenance recommendations, and proper product care at Innovation Dynamics Group LLC.",
  keywords:
    "innovation dynamics group, warranty information, printer warranty, printer safety, scanner safety, printer maintenance, office equipment, product care",
  robots:
    "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: {
    canonical: "https://innovationdynamicsgroup.com/warranty-safety/",
  },
  openGraph: {
    title: "Warranty & Safety Information | Innovation Dynamics Group",
    description:
      "Learn about manufacturer warranties, printer safety guidelines, maintenance recommendations, and proper product care at Innovation Dynamics Group LLC.",
    url: "https://innovationdynamicsgroup.com/warranty-safety/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Warranty & Safety Information | Innovation Dynamics Group",
    description:
      "Learn about manufacturer warranties, printer safety guidelines, maintenance recommendations, and proper product care at Innovation Dynamics Group LLC.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() {
  return <WarrantySafety />;
}