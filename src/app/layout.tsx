import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://balaji-plumber-services.vercel.app'),
  title: {
    default: 'Balaji Plumber Services | Best Plumber in Miyapur & Hafeezpet, Hyderabad | 24/7',
    template: '%s | Balaji Plumber Services Hyderabad',
  },
  description:
    'Balaji Plumber Services — #1 rated plumber in Miyapur & Hafeezpet, Hyderabad. 5-star Google rated. Pipe leak repair, bathroom plumbing, drainage cleaning, tap repair & 24/7 emergency plumbing. Call +91 96520 40779.',
  keywords: [
    'plumber in Miyapur',
    'plumber Hafeezpet',
    'plumber Hyderabad',
    'Balaji Plumber Services',
    'plumbing services Miyapur',
    'pipe leak repair Miyapur',
    'bathroom plumbing Hyderabad',
    'drainage cleaning Miyapur',
    'tap repair Hyderabad',
    'emergency plumber Hyderabad',
    '24/7 plumber Miyapur',
    'best plumber near Miyapur',
    'water line installation Hyderabad',
    'toilet repair Miyapur',
    'blocked drain repair Hafeezpet',
    'kitchen plumbing Hyderabad',
    'CPVC pipe installation Miyapur',
    'plumber near me Hyderabad',
    'affordable plumber Miyapur',
    'plumber Kukatpally',
    'plumber KPHB Colony',
    'plumber Chandanagar',
  ],
  authors: [{ name: 'Balaji Plumber Services' }],
  creator: 'Balaji Plumber Services',
  publisher: 'Balaji Plumber Services',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://balaji-plumber-services.vercel.app',
    siteName: 'Balaji Plumber Services',
    title: 'Balaji Plumber Services | #1 Plumber in Miyapur & Hafeezpet, Hyderabad',
    description:
      'Top-rated plumbing services in Miyapur, Hafeezpet & Hyderabad. Pipe leak repair, bathroom plumbing, drainage cleaning, 24/7 emergency service. 5.0★ Google rated. Call +91 96520 40779.',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Balaji Plumber Services — Trusted Plumber in Miyapur, Hyderabad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Balaji Plumber Services | Best Plumber in Miyapur, Hyderabad',
    description:
      '5-star rated plumbing services in Miyapur & Hafeezpet, Hyderabad. Available 24/7. Call +91 96520 40779.',
    images: ['/og-image.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: 'https://balaji-plumber-services.vercel.app',
  },
  verification: {
    // Add Google Search Console verification code here
    // google: 'your-verification-code',
  },
  other: {
    'geo.region': 'IN-TG',
    'geo.placename': 'Miyapur, Hyderabad',
    'geo.position': '17.4931;78.3570',
    'ICBM': '17.4931, 78.3570',
  },
};

// JSON-LD Structured Data
const jsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'LocalBusiness',
      '@id': 'https://balaji-plumber-services.vercel.app/#business',
      name: 'Balaji Plumber Services',
      description:
        'Balaji Plumber Services provides reliable and professional plumbing services for homes, offices, apartments, and commercial properties in Miyapur, Hafeezpet, and greater Hyderabad. Services include pipe leakage repair, tap and faucet repair, bathroom and kitchen plumbing, drainage cleaning, water pipe installations, and sanitary fittings.',
      url: 'https://balaji-plumber-services.vercel.app',
      telephone: '+919652040779',
      email: 'balajiplumberservices@gmail.com',
      address: {
        '@type': 'PostalAddress',
        streetAddress: '44/1, Mathrusree Nagar',
        addressLocality: 'Hafeezpet',
        addressRegion: 'Telangana',
        postalCode: '500049',
        addressCountry: 'IN',
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: 17.4931,
        longitude: 78.3570,
      },
      image: 'https://balaji-plumber-services.vercel.app/og-image.png',
      priceRange: '₹₹',
      openingHoursSpecification: {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: [
          'Monday',
          'Tuesday',
          'Wednesday',
          'Thursday',
          'Friday',
          'Saturday',
          'Sunday',
        ],
        opens: '00:00',
        closes: '23:59',
      },
      aggregateRating: {
        '@type': 'AggregateRating',
        ratingValue: '5.0',
        reviewCount: '30',
        bestRating: '5',
        worstRating: '1',
      },
      areaServed: [
        { '@type': 'City', name: 'Hyderabad' },
        { '@type': 'Place', name: 'Miyapur' },
        { '@type': 'Place', name: 'Hafeezpet' },
        { '@type': 'Place', name: 'Kukatpally' },
        { '@type': 'Place', name: 'KPHB Colony' },
        { '@type': 'Place', name: 'Chandanagar' },
        { '@type': 'Place', name: 'Manikonda' },
        { '@type': 'Place', name: 'Gachibowli' },
        { '@type': 'Place', name: 'Kondapur' },
      ],
      sameAs: [],
    },
    {
      '@type': 'WebSite',
      '@id': 'https://balaji-plumber-services.vercel.app/#website',
      url: 'https://balaji-plumber-services.vercel.app',
      name: 'Balaji Plumber Services',
      publisher: {
        '@id': 'https://balaji-plumber-services.vercel.app/#business',
      },
    },
    {
      '@type': 'Service',
      '@id': 'https://balaji-plumber-services.vercel.app/#plumbing-services',
      serviceType: 'Plumbing',
      provider: {
        '@id': 'https://balaji-plumber-services.vercel.app/#business',
      },
      areaServed: {
        '@type': 'City',
        name: 'Hyderabad',
      },
      hasOfferCatalog: {
        '@type': 'OfferCatalog',
        name: 'Plumbing Services',
        itemListElement: [
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Pipe Leak Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bathroom Plumbing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Kitchen Plumbing' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Drainage Cleaning' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Tap Repair & Replacement' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Toilet Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Shower Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Water Line Installation' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Blocked Drain Repair' } },
          { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'CPVC Pipe Installation' } },
        ],
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <meta name="theme-color" content="#1e6fd1" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="antialiased bg-white text-gray-900">{children}</body>
    </html>
  );
}
