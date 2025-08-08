"use client";

import {useState} from "react";
import {IoCopyOutline} from "react-icons/io5";

import Lottie from "react-lottie";

import {cn} from "@/lib/utils";

import {BackgroundGradientAnimation} from "./GradientBg";
import {GlobeDemo} from "./GridGlobe";
import animationData from "@/data/confetti.json";
import MagicButton from "./MagicButton";

export const BentoGrid = ({
	className,
	children,
}: {
	className?: string;
	children?: React.ReactNode;
}) => {
	return (
		<div
			className={cn(
				"grid grid-cols-1 md:grid-cols-6 lg:grid-cols-5 md:grid-row-7 gap-4 lg:gap-8 mx-auto",
				className
			)}
		>
			{children}
		</div>
	);
};

export const BentoGridItem = ({
	className,
	id,
	title,
	description,
	img,
	imgClassName,
	titleClassName,
	spareImg,
}: {
	className?: string;
	id: number;
	title?: string | React.ReactNode;
	description?: string | React.ReactNode;
	img?: string;
	imgClassName?: string;
	titleClassName?: string;
	spareImg?: string;
}) => {
	const [copied, setCopied] = useState(false);

	const defaultOptions = {
		loop: copied,
		autoplay: copied,
		animationData: animationData,
		rendererSettings: {
			preserveAspectRatio: "xMidYMid slice",
		},
	};

	const handleCopy = () => {
		const text = "ankur2004tyagi@gmail.com";
		navigator.clipboard.writeText(text);
		setCopied(true);
	};

	return (
		<div
			className={cn(
				"row-span-1 relative overflow-hidden rounded-3xl border border-white/[0.1] group/bento hover:shadow-xl transition duration-200 shadow-input dark:shadow-none justify-between flex flex-col space-y-4",
				className
			)}
			style={{
				background: "rgb(4,7,29)",
				backgroundColor:
					"linear-gradient(90deg, rgba(4,7,29,1) 0%, rgba(12,14,35,1) 100%)",
			}}
		>
			<div className={`${id === 6 && "flex justify-center"} h-full`}>
				<div className="w-full h-full absolute">
					{img && (
						<img
							src={img}
							alt={img}
							className={cn(imgClassName, "object-cover object-center ")}
						/>
					)}
				</div>
				<div
					className={`absolute right-0 -bottom-5 ${
						id === 5 && "w-full opacity-80"
					} `}
				>
					{spareImg && (
						<img
							src={spareImg}
							alt={spareImg}
							className="object-cover object-center w-full h-full"
						/>
					)}
				</div>
				{id === 6 && (
					<BackgroundGradientAnimation></BackgroundGradientAnimation>
				)}

				<div
					className={cn(
						titleClassName,
						"group-hover/bento:translate-x-2 transition duration-200 relative md:h-full min-h-40 flex flex-col px-5 p-5 lg:p-10"
					)}
				>
					<div className="font-sans font-extralight md:max-w-full md:text-xs lg:text-base text-sm text-[#C1C2D3] z-10">
						{description}
						{id == 1 && (
							<div className="mt-7">
								<p className="mt-7">
									A full-stack developer passionate about building seamless,
									high-performance web applications from front to back.
								</p>
								<p className="mt-7">
									I craft engaging, interactive interfaces with modern
									JavaScript frameworks while also architecting robust, scalable
									backends.
								</p>
								<p className="mt-7">
									Whether it&apos;s designing smooth user experiences or
									optimizing server-side logic, I love turning ideas into fully
									realized digital products.
								</p>
							</div>
						)}
					</div>
					<div
						className={cn(
							"font-sans text-lg max-w-96 font-bold z-10",
							id === 2 ? "lg:text-2xl" : "lg:text-3xl"
						)}
					>
						{title}
					</div>

					{id === 2 && <GlobeDemo />}

					{id === 6 && (
						<div className="mt-5 relative">
							<div
								className={`absolute -bottom-5 right-0 ${
									copied ? "block" : "block"
								}`}
							>
								<Lottie options={defaultOptions} height={200} width={400} />
							</div>

							<MagicButton
								title={copied ? "Email is Copied!" : "Copy my email address"}
								icon={<IoCopyOutline />}
								position="left"
								handleClick={handleCopy}
								otherClasses="!bg-[#161A31]"
							/>
						</div>
					)}
				</div>
			</div>
		</div>
	);
};
