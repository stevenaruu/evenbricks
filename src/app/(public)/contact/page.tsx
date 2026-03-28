import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Get in touch with Evenbricks. We would love to hear from you and discuss your custom brick needs.',
  openGraph: {
    title: 'Contact Us | Evenbricks',
    description: 'Get in touch with Evenbricks. We would love to hear from you and discuss your custom brick needs.',
    url: 'https://evenbricks.id/contact',
    type: 'website',
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Page</h1>
        <p className="text-lg text-gray-600">Design akan disesuaikan kemudian</p>
      </div>
    </div>
  );
}
