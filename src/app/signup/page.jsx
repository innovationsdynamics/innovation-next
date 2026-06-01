import Signup from '@/views/Signup';

export const metadata = {
  title: "Sign Up | Innovation Dynamics Group",
  description: "Create an account at Innovation Dynamics Group to track your orders and manage your printing needs.",
  keywords: "innovation dynamics group, signup, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/signup/" },
  openGraph: {
    title: "Sign Up | Innovation Dynamics Group",
    description: "Create an account at Innovation Dynamics Group to track your orders and manage your printing needs.",
    url: "https://innovationdynamicsgroup.com/signup/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Sign Up | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Sign Up | Innovation Dynamics Group",
    description: "Create an account at Innovation Dynamics Group to track your orders and manage your printing needs.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Signup />; }
