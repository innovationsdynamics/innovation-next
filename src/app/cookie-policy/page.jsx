import CookiePolicy from '@/views/CookiePolicy';

export const metadata = {
  title: "Cookie Policy | Innovation Dynamics Group",
  description: "Learn how we use cookies to improve your experience at Innovation Dynamics Group.",
  keywords: "innovation dynamics group, cookie policy, printers, office supplies, printer retailer",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/cookie-policy/" },
  openGraph: {
    title: "Cookie Policy | Innovation Dynamics Group",
    description: "Learn how we use cookies to improve your experience at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/cookie-policy/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Cookie Policy | Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cookie Policy | Innovation Dynamics Group",
    description: "Learn how we use cookies to improve your experience at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <CookiePolicy />; }
