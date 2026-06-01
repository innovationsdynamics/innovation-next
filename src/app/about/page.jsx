import About from '@/views/About';

export const metadata = {
  title: "About Us | Innovation Dynamics Group | Independent Printer Retailer",
  description: "Learn about Innovation Dynamics Group LLC, a registered independent online retailer based in Blaine, Minnesota, specializing in professional printing solutions.",
  keywords: "about innovation dynamics group, printer retailer blaine minnesota, independent online retailer, printing solutions, IDG printers",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/about/" },
  openGraph: {
    title: "About Us | Innovation Dynamics Group",
    description: "Learn about Innovation Dynamics Group LLC, a registered independent online retailer based in Blaine, Minnesota, specializing in professional printing solutions.",
    url: "https://innovationdynamicsgroup.com/about/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "About Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us | Innovation Dynamics Group",
    description: "Learn about Innovation Dynamics Group LLC, a registered independent online retailer based in Blaine, Minnesota, specializing in professional printing solutions.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <About />; }
