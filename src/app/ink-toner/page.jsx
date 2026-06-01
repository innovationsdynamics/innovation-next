import Printers from '@/components/Printers';

export const metadata = {
  title: "Ink & Toner | Innovation Dynamics Group",
  description: "Shop genuine HP Ink & Toner cartridges at Innovation Dynamics Group. Ensure high-quality prints and prolong your printer's life with original supplies.",
  keywords: "innovation dynamics group, ink toner, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/ink-toner/" },
  openGraph: {
    title: "Ink & Toner | Innovation Dynamics Group",
    description: "Shop genuine HP Ink & Toner cartridges at Innovation Dynamics Group. Ensure high-quality prints and prolong your printer",
    url: "https://innovationdynamicsgroup.com/ink-toner/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Ink & Toner | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Ink & Toner | Innovation Dynamics Group",
    description: "Shop genuine HP Ink & Toner cartridges at Innovation Dynamics Group. Ensure high-quality prints and prolong your printer",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Printers />; }
