import React from "react";
import { FaLocationArrow } from "react-icons/fa";
import { FaDownload } from "react-icons/fa6";

import { cn } from "@/lib/utils";
import { TextGenerateEffect } from "./ui/TextGenerateEffect";
import MagicButton from "./ui/MagicButton";
import Spline from '@splinetool/react-spline/next';

const Hero1 = () => {
  return (
		<div className="pt-10 overflow-visible">
			<div className="lg:hidden flex h-screen w-full items-center justify-center bg-white dark:bg-black-100 absolute top-0 left-0">
				<div
					className={cn(
						"absolute inset-0",
						"[background-size:40px_40px]",
						"[background-image:linear-gradient(to_right,#e4e4e7_1px,transparent_1px),linear-gradient(to_bottom,#e4e4e7_1px,transparent_1px)]",
						"dark:[background-image:linear-gradient(to_right,#262626_1px,transparent_1px),linear-gradient(to_bottom,#262626_1px,transparent_1px)]"
					)}
				/>
				<div className="pointer-events-none absolute inset-0 flex items-center justify-center bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-black-100" />
			</div>
  
			<div className="flex justify-center lg:flex-col lg:justify-between relative my-20 lg:mt-20 z-10 overflow-visible lg:min-h-[600px]">
				<div className="max-w-[89vw] md:max-w-2xl lg:max-w-[40vw] flex flex-col items-center justify-center lg:items-start lg:pl-10">
					<h2 className="uppercase tracking-widest text-xs text-center text-blue-100 max-w-90">
						Web Dev Learner | Passionate Builder | Tech Explorer
					</h2>
  
					<TextGenerateEffect
						className="text-center lg:text-left text-[25px] md:text-3xl lg:text-4xl"
						words="Turning Curiosity into Real-World Web Projects"
					/>
  
					<p className="text-center md:tracking-wider mb-4 text-sm md:text-lg lg:text-2xl mt-4">
						Hi, I&apos;m Ankur — a Full Stack Developer..
					</p>
  
					<div className="flex flex-row gap-4 mt-10">
						<a href="#projects">
							<MagicButton
								title="Show my Work"
								icon={<FaLocationArrow />}
								position="right"
							/>
						</a>
						<a href="/Ankur_Resume.pdf"
						   target="_blank"
						   rel="noopener noreferrer"
						   download
						>
							<MagicButton
								title="Download CV"
								icon={<FaDownload />}
								position="right"
							/>
						</a>
					</div>
				</div>
				<Spline
					className="hidden lg:block absolute xl:right-[-28%] right-0 top-[-25%] overflow-visible h-[500px] lg:h-[500px] xl:h-[500px]"
					scene="https://prod.spline.design/y64kBFLZLkpUzeS9/scene.splinecode" 
				/>
			</div>
		</div>
	);
};

export default Hero1;
