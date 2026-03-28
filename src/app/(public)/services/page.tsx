import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore our services including custom bricks, character bricks, and precision parts manufacturing.',
  openGraph: {
    title: 'Services | Evenbricks',
    description: 'Explore our services including custom bricks, character bricks, and precision parts manufacturing.',
    url: 'https://evenbricks.id/services',
    type: 'website',
  },
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">Services Page</h1>
        <p className="text-lg text-gray-600">Design akan disesuaikan kemudian</p>
      </div>
    </div>
  );
}
