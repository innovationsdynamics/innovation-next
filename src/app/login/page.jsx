import Login from '@/views/Login';

export const metadata = {
  title: "Login | Innovation Dynamics Group",
  description: "Sign in to your Innovation Dynamics Group account to manage your orders and profile.",
  keywords: "innovation dynamics group, login, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/login/" },
  openGraph: {
    title: "Login | Innovation Dynamics Group",
    description: "Sign in to your Innovation Dynamics Group account to manage your orders and profile.",
    url: "https://innovationdynamicsgroup.com/login/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Login | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Login | Innovation Dynamics Group",
    description: "Sign in to your Innovation Dynamics Group account to manage your orders and profile.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Login />; }
