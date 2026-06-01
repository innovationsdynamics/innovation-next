import Contact from '@/views/Contact';

export const metadata = {
  title: "Contact Us | Innovation Dynamics Group",
  description: "Get in touch with Innovation Dynamics Group for support, sales inquiries, or technical assistance with your professional printing solutions.",
  keywords: "innovation dynamics group, contact, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/contact/" },
  openGraph: {
    title: "Contact Us | Innovation Dynamics Group",
    description: "Get in touch with Innovation Dynamics Group for support, sales inquiries, or technical assistance with your professional printing solutions.",
    url: "https://innovationdynamicsgroup.com/contact/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Contact Us | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Us | Innovation Dynamics Group",
    description: "Get in touch with Innovation Dynamics Group for support, sales inquiries, or technical assistance with your professional printing solutions.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Contact />; }
