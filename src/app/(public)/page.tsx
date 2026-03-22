"use client";

import Particles from "@/backgrounds/particles/Particles";
import CircularGallery from "@/components/circular-gallery/CircularGallery";
import ScrollStack, { ScrollStackItem } from "@/components/scroll-stack/ScrollStack";
import SplashScreen from "@/components/splash-screen/SplashScreen";
import StaggeredMenu from "@/components/staggered-menu/StaggeredMenu";
import { melonPop } from "@/styles/fonts";
import { useState } from "react";

export default function HomePage() {
	const [showLanding, setShowLanding] = useState(true);

	const menuItems = [
		{ label: 'Home', ariaLabel: 'Go to home page', link: '/' },
		{ label: 'About', ariaLabel: 'Learn about us', link: '/about' },
		{ label: 'Services', ariaLabel: 'View our services', link: '/services' },
		{ label: 'Contact', ariaLabel: 'Get in touch', link: '/contact' }
	];

	const socialItems = [
		{ label: 'Instagram', link: 'https://www.instagram.com/evenbricks' },
		{ label: 'Tiktok', link: 'https://www.tiktok.com/@evenbricks' },
	];

	const items: { image: string; text: string }[] = [
		{
			image: "https://i.ibb.co/6VhhRfJ/Frame-1.jpg",
			text: "COMING SOON",
		},
		{
			image: "https://i.ibb.co/6VhhRfJ/Frame-1.jpg",
			text: "COMING SOON",
		},
		{
			image: "https://i.ibb.co/6VhhRfJ/Frame-1.jpg",
			text: "COMING SOON",
		},
	];

	return (
		<>
			{!showLanding ? (
				<SplashScreen onFinish={() => setShowLanding(true)} />
			) : (
				<>
					<div className="h-screen relative overflow-hidden">
						<div className="absolute inset-0 z-20">
							<CircularGallery
								bend={3}
								textColor="#28282B"
								borderRadius={0.05}
								scrollEase={0.02}
								scrollSpeed={2}
								items={items}
								font="700 20px Inter, Arial, sans-serif"
							/>
						</div>
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
							logoUrl="https://i.ibb.co/6VhhRfJ/Frame-1.jpg"
							accentColor="#28282B"
							onMenuOpen={() => console.log('Menu opened')}
							onMenuClose={() => console.log('Menu closed')}
						/>
						<div className="absolute z-10 top-0 h-full w-full">
							<Particles
								particleColors={['#28282B', '#28282B']}
								particleCount={200}
								particleSpread={10}
								speed={0.1}
								particleBaseSize={100}
								moveParticlesOnHover
								alphaParticles={false}
								disableRotation={false}
								pixelRatio={1}
							/>
						</div>
					</div>
				</>
			)}
		</>
	);
}