import Home from '@/views/Home';

export const metadata = {
  title: "Innovation Dynamics Group — Top Picks for Home & Office Printers",
  description: "Find the perfect inkjet printer with buying guides and honest comparisons. Shop home and office printers at Innovation Dynamics Group.",
  keywords: "inkjet printer, wireless printer, photo printer, laser printer, printer buying guide, home printer, office printer, inkjet vs laser, multifunction printer, all-in-one printer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/" },
  openGraph: {
    title: "Innovation Dynamics Group — Top Picks for Home & Office Printers",
    description: "Find the perfect inkjet printer with buying guides and honest comparisons. Shop home and office printers at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Innovation Dynamics Group - Top Picks for Home and Office Printers",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Innovation Dynamics Group — Top Picks for Home & Office Printers",
    description: "Find the perfect inkjet printer with buying guides and honest comparisons. Shop home and office printers at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/hero/hero-right.png",
    ],
  },
};

export default function Page() {
  return <Home />;
}
