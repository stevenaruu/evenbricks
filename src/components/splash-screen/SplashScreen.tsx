import SplitText from "@/components/split-text/SplitText";
import { melonPop, poorStory } from "@/styles/fonts";
import { useEffect, useState } from "react";

export default function SplashScreen({
	onFinish,
}: {
	onFinish: () => void;
}) {
	const [showTagline, setShowTagline] = useState(false);

	return (
		<div className="min-h-screen flex items-center justify-center flex-col">
			<SplitText
				key="title"
				text="Even Bricks"
				className={`text-4xl md:text-5xl text-[#28282B] text-center ${melonPop.className}`}
				delay={50}
				duration={1}
				ease="bounce.out"
				splitType="chars"
				from={{ opacity: 0, y: -40 }}
				to={{ opacity: 1, y: 0 }}
				threshold={0.1}
				rootMargin="-100px"
				textAlign="center"
				onLetterAnimationComplete={() => { setShowTagline(true) }}
			/>

			<div className="min-h-[40px] flex items-center justify-center">
				{showTagline &&
					<SplitText
						key="tagline"
						text="even if it takes many attempts, every brick finds its place."
						className={`
						text-sm
						md:text-lg
						text-[#28282B]
						text-center
						max-w-md
						${poorStory.className}
					`}
						delay={50}
						duration={1}
						ease="bounce.out"
						splitType="words"
						from={{ opacity: 0, y: -40 }}
						to={{ opacity: 1, y: 0 }}
						threshold={0.1}
						rootMargin="-100px"
						textAlign="center"
						onLetterAnimationComplete={() => {
							setTimeout(() => {
								onFinish()
							}, 500);
						}}
					/>
				}
			</div>
		</div>
	);
}