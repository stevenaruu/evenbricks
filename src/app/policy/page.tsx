"use client";

import { Metadata } from 'next';
import StaggeredMenu from "@/components/staggered-menu/StaggeredMenu";
import { useSplashScreen } from "@/lib/context/SplashScreenContext";

const menuItems = [
	{ label: 'Home', ariaLabel: 'Go to home page', link: '/' },
	{ label: 'Collection', ariaLabel: 'View our collection', link: '/collection' },
	{ label: 'About Us', ariaLabel: 'Learn more about us', link: '/about' },
	{ label: 'Policy', ariaLabel: 'View our policy', link: '/policy' }
];

const socialItems = [
	{ label: 'Instagram', link: 'https://www.instagram.com/evenbricks' },
	{ label: 'Tiktok', link: 'https://www.tiktok.com/@evenbricks' },
];

export default function PolicyPage() {
	const { setSplashSkipped } = useSplashScreen();

	const handleHomeClick = () => {
		setSplashSkipped(true);
	};

	return (
		<div className="min-h-screen w-full">
			<StaggeredMenu
				position="right"
				items={menuItems}
				socialItems={socialItems}
				displaySocials
				displayItemNumbering={true}
				menuButtonColor="#28282B"
				openMenuButtonColor="#28282B"
				changeMenuColorOnOpen={true}
				colors={['#28282B', '#28282B']}
				logoUrl="https://buzympvtkooktptyhmhb.supabase.co/storage/v1/object/public/assets/evenbricks-text.png"
				accentColor="#28282B"
				onMenuOpen={() => console.log('Menu opened')}
				onMenuClose={() => console.log('Menu closed')}
			/>
			<div className="flex items-center justify-center min-h-screen">
				<div className="text-center px-6">
					<h1 className="text-4xl md:text-5xl font-bold mb-4">Policy Page</h1>
					<p className="text-lg text-gray-600">Design akan disesuaikan kemudian</p>
				</div>
			</div>
		</div>
	);
}
