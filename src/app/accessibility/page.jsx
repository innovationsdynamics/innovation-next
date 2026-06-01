import Accessibility from '@/views/Accessibility';

export const metadata = {
  title: "Accessibility Statement | Innovation Dynamics Group",
  description: "Learn about our commitment to web accessibility at Innovation Dynamics Group.",
  keywords: "accessibility statement, web accessibility, ADA compliance, Innovation Dynamics Group accessibility",
  robots: "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  authors: [{ name: "Innovation Dynamics Group LLC" }],
  alternates: { canonical: "https://innovationdynamicsgroup.com/accessibility/" },
  openGraph: {
    title: "Accessibility Statement | Innovation Dynamics Group",
    description: "Learn about our commitment to web accessibility at Innovation Dynamics Group.",
    url: "https://innovationdynamicsgroup.com/accessibility/",
    siteName: "Innovation Dynamics Group",
    type: "website",
    locale: "en_US",
    images: [
      {
        url: "https://innovationdynamicsgroup.com/idg-logo.png",
        width: 1200,
        height: 630,
        alt: "Accessibility Statement - Innovation Dynamics Group",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Accessibility Statement | Innovation Dynamics Group",
    description: "Learn about our commitment to web accessibility at Innovation Dynamics Group.",
    images: [
      "https://innovationdynamicsgroup.com/idg-logo.png",
    ],
  },
};

export default function Page() { return <Accessibility />; }
