"use client";

import SplashScreen from "@/components/splash-screen/SplashScreen";
import { melonPop } from "@/styles/fonts";
import { useState } from "react";

export default function HomePage() {
	const [showLanding, setShowLanding] = useState(false);

	return (
		<>
			{!showLanding ? (
				<SplashScreen onFinish={() => setShowLanding(true)} />
			) : (
				<main className="min-h-screen flex items-center justify-center">
					<div className="text-center">
						<h1 className={`text-3xl md:text-5xl text-[#28282B] ${melonPop.className}`}>Under Development</h1>
						<div className="mt-1 text-sm md:text-lg text-gray-500">
							<p>Our website is currently under construction.</p>
							<p>Please check back later.</p>
						</div>
					</div>
				</main>
			)}
		</>
	);
}