import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Us',
  description: 'Learn more about Evenbricks and our mission to deliver high-quality custom bricks and collectible figures.',
  openGraph: {
    title: 'About Us | Evenbricks',
    description: 'Learn more about Evenbricks and our mission to deliver high-quality custom bricks and collectible figures.',
    url: 'https://evenbricks.id/about',
    type: 'website',
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">About Page</h1>
        <p className="text-lg text-gray-600">Design akan disesuaikan kemudian</p>
      </div>
    </div>
  );
}
