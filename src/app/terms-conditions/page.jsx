import TermsConditions from '@/views/TermsConditions';

export const metadata = {
  title: "Terms & Conditions | Innovation Dynamics Group",
  description: "Review the Terms and Conditions of Innovation Dynamics Group LLC. Understand your rights and responsibilities when using our platform.",
  keywords: "innovation dynamics group, terms and conditions, terms of service, policies, legal",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/terms-conditions/" },
  openGraph: {
    title: "Terms & Conditions | Innovation Dynamics Group",
    description: "Review the Terms and Conditions of Innovation Dynamics Group LLC. Understand your rights and responsibilities when using our platform.",
    url: "https://innovationdynamicsgroup.com/terms-conditions/",
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
    title: "Terms & Conditions | Innovation Dynamics Group",
    description: "Review the Terms and Conditions of Innovation Dynamics Group LLC. Understand your rights and responsibilities when using our platform.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <TermsConditions />; }
