"use client";

import Particles from "@/backgrounds/particles/Particles";
import CircularGallery from "@/components/circular-gallery/CircularGallery";
import SplashScreen from "@/components/splash-screen/SplashScreen";
import StaggeredMenu from "@/components/staggered-menu/StaggeredMenu";
import { useState, useEffect } from "react";
import { melonPop, poorStory } from "@/styles/fonts";
import { PlaceholdersAndVanishInput } from "@/components/placeholders-and-vanish-input/placeholders-and-vanish-input";
import { useSplashScreen } from "@/lib/context/SplashScreenContext";
import Image from "next/image";

export default function HomePage() {
	const [showLanding, setShowLanding] = useState(false);
	const { skipSplash, resetSplashState } = useSplashScreen();

	useEffect(() => {
		if (skipSplash) {
			setShowLanding(true);
			resetSplashState();
		}
	}, [skipSplash, resetSplashState]);

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

	const items: { image: string; text: string }[] = [
		{
			image: "https://buzympvtkooktptyhmhb.supabase.co/storage/v1/object/public/assets/evenbricks-logo.jpg",
			text: "COMING SOON",
		},
		{
			image: "https://buzympvtkooktptyhmhb.supabase.co/storage/v1/object/public/assets/evenbricks-logo.jpg",
			text: "COMING SOON",
		},
		{
			image: "https://buzympvtkooktptyhmhb.supabase.co/storage/v1/object/public/assets/evenbricks-logo.jpg",
			text: "COMING SOON",
		},
	];

	const placeholders = [
		"evenbricks.id@mail.com",
		"john.doe@mail.com",
	];

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value);
	};
	const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
		e.preventDefault();
		console.log("submitted");
	};

	return (
		<>
			{!showLanding ? (
				<SplashScreen onFinish={() => setShowLanding(true)} />
			) : (
				<>
					<div className="h-screen relative overflow-hidden">
						<div className="absolute inset-0 z-20">
							<CircularGallery
								bend={1}
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
							logoUrl="https://buzympvtkooktptyhmhb.supabase.co/storage/v1/object/public/assets/evenbricks-text.png"
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
					<div className="h-72 flex flex-col md:flex-row justify-center md:justify-between items-center px-6 md:px-20 border-t-2 border-b-2 border-gray-200 gap-6 md:gap-0 text-center md:text-left">
						<div className="flex flex-col gap-5 items-center md:items-start">
							<p className="text-3xl md:text-4xl">Subscribe to our emails</p>
							<PlaceholdersAndVanishInput
								placeholders={placeholders}
								onChange={handleChange}
								onSubmit={onSubmit}
							/>
						</div>
						<div className="flex gap-5">
							<Image
								className="cursor-pointer"
								onClick={() => window.open('https://www.instagram.com/evenbricks', '_blank')}
								src="/assets/icons/instagram.svg"
								alt="Instagram"
								width={24}
								height={24}
							/>
							<Image
								className="cursor-pointer"
								onClick={() => window.open('https://www.tiktok.com/@evenbricks', '_blank')}
								src="/assets/icons/tiktok.svg"
								alt="TikTok"
								width={24}
								height={24}
							/>
						</div>
					</div>
					<div className="h-72 relative overflow-visible bg-[#28282B]">
						<div className="absolute z-10 top-0 left-0 h-full w-full">
							<Particles
								particleColors={['#fff', '#fff']}
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
						<div className="flex flex-col justify-center items-center h-full w-full">
							<p className={`text-4xl md:text-5xl text-white ${melonPop.className}`}>
								Even Bricks
							</p>
							<p className={`text-sm md:text-lg text-white ${poorStory.className}`}>
								even if it takes many attempts, every brick finds its place.
							</p>
						</div>
					</div>
				</>
			)}
		</>
	);
}
