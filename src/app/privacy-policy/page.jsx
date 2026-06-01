import PrivacyPolicy from '@/views/PrivacyPolicy';

export const metadata = {
  title: "Privacy Policy | Innovation Dynamics Group | Independent Printer Retailer",
  description: "Review the Privacy Policy of Innovation Dynamics Group LLC. Understand how we handle your data with transparency and security.",
  keywords: "innovation dynamics group, privacy policy, printers, office supplies, printer retailer",
  robots: "index, follow",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/privacy-policy/" },
  openGraph: {
    title: "Privacy Policy | Innovation Dynamics Group | Independent Printer Retailer",
    description: "Review the Privacy Policy of Innovation Dynamics Group LLC. Understand how we handle your data with transparency and security.",
    url: "https://innovationdynamicsgroup.com/privacy-policy/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Privacy Policy | Innovation Dynamics Group | Independent Printer Retailer",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Privacy Policy | Innovation Dynamics Group | Independent Printer Retailer",
    description: "Review the Privacy Policy of Innovation Dynamics Group LLC. Understand how we handle your data with transparency and security.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <PrivacyPolicy />; }
