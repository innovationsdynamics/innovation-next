import './globals.css';
import AppProviders from '@/components/providers/AppProviders';
import SiteShell from '@/components/layout/SiteShell';

export const metadata = {
  title: 'Innovation Dynamics Group | Printers & Office Supplies',
  description: 'Shop home printers, office printers, laser printers, inkjet printers, and ink & toner at Innovation Dynamics Group.',
  metadataBase: new URL(process.env.NEXT_PUBLIC_SITE_URL || 'https://innovationdynamicsgroup.com'),
  icons: {
    icon: '/vite.png',
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <script src="https://checkout.clover.com/sdk.js" async />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Store',
              name: 'Innovation Dynamics Group LLC',
              description:
                'Independent U.S. online retailer specializing in home printers, office printers, laser printers, inkjet printers, and ink & toner supplies.',
              url: 'https://innovationdynamicsgroup.com',
              logo: 'https://innovationdynamicsgroup.com/idg-logo.png',
              telephone: '+1-651-815-4630',
              email: 'support@innovationdynamicsgroup.com',
              address: {
                '@type': 'PostalAddress',
                streetAddress: '11397 Quincy St NE',
                addressLocality: 'Blaine',
                addressRegion: 'MN',
                postalCode: '55434',
                addressCountry: 'US',
              },
              areaServed: ['US', 'CA'],
              currenciesAccepted: 'USD',
              paymentAccepted: 'Credit Card, Debit Card',
              priceRange: '$$',
              hasOfferCatalog: {
                '@type': 'OfferCatalog',
                name: 'Printers & Supplies',
                itemListElement: [
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Product', name: 'Home Printers' },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Product', name: 'Office Printers' },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Product', name: 'Laser Printers' },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Product', name: 'Inkjet Printers' },
                  },
                  {
                    '@type': 'Offer',
                    itemOffered: { '@type': 'Product', name: 'Ink & Toner' },
                  },
                ],
              },
            }),
          }}
        />
      </head>
      <body>
        <AppProviders>
          <SiteShell>{children}</SiteShell>
        </AppProviders>
        <script src="//code.jivosite.com/widget/XjQJxqMY0d" async />
      </body>
    </html>
  );
}
