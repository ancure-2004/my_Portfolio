"use client";

import {FaGithub} from "react-icons/fa6";
import {motion} from "framer-motion";
import {projects} from "@/data";
import {PinContainer} from "./ui/3d-pin";
import {LinkPreview} from "./ui/LinkPreview";
import {FaLink} from "react-icons/fa";
import {AnimatedTooltip} from "./ui/AnimatedToolTip";
import {image} from "motion/react-client";

const RecentProjects = () => {
	return (
		<div id="projects" className="pt-20 pb-20 mt-10">
			<motion.h1
				className="heading"
				initial={{opacity: 0, y: 30}}
				whileInView={{opacity: 1, y: 0}}
				transition={{duration: 0.6}}
				viewport={{once: true}}
			>
				A small selection of{" "}
				<span className="text-purple">recent projects</span>
			</motion.h1>

			<div className="flex flex-col gap-16 mt-12">
				{projects.map((item, index) => (
					<motion.div
						key={index}
						className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16"
						initial={{opacity: 0, y: 50}}
						whileInView={{opacity: 1, y: 0}}
						transition={{duration: 0.7, delay: index * 0.2}}
						viewport={{once: false}}
					>
						{/* LEFT: Image with PinContainer */}
						<div className="w-full h-full lg:w-[50%] flex justify-center">
							<PinContainer title={item.name} href={item.link}>
								<div className="relative flex items-center justify-center sm:w-[500px] w-[80vw] overflow-hidden sm:h-[40vh] h-[30vh]">
									<div
										className="relative w-full h-full overflow-hidden lg:rounded-3xl"
										style={{backgroundColor: "#13162D"}}
									>
										<img src="/bg.png" alt="bgimg" />
									</div>
									<img
										src={item.img}
										alt="cover"
										className="z-10 absolute bottom-0"
									/>
								</div>
							</PinContainer>
						</div>

						{/* RIGHT: Text + Details */}
						<div className="w-full lg:w-[50%] flex flex-col justify-center">
							<h1 className="font-bold lg:text-2xl md:text-xl text-lg line-clamp-1">
								{item.title}
							</h1>
							<p className="lg:text-lg font-light text-sm text-[#BEC1DD] my-4 line-clamp-3">
								{item.des}
							</p>

							<div className="flex flex-row item-center justify-between">
								{/* Links */}
								<div className="flex items-center justify-between gap-2">
									<LinkPreview
										url={item.link}
										videoSrc={item.video}
									>
										<p className="flex items-center mt-4 text-purple lg:text-xl text-sm">
											Live
											<FaLink className="ml-2" color="#CBACF9" />
										</p>
									</LinkPreview>
									<LinkPreview
										url={item.link}
										videoSrc={item.video}
									>
										<p className="flex items-center mt-4 text-purple lg:text-xl text-sm">
											Code
											<FaGithub className="ml-2" color="#CBACF9" />
										</p>
									</LinkPreview>
								</div>

								{/* Tech stack icons */}
                <div
                  className="rounded-full flex justify-center items-center"
                  style={{
                    transform: `translateX(-${5 * index * 2}px)`,
                  }}
                >
                  <AnimatedTooltip
                    items={item.iconLists.map((icon, idx) => ({
                      id: idx,
                      name: item.toolNames[idx],
                      designation: "",
                      image: icon,
                    }))}
                  />
                </div>
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</div>
	);
};

export default RecentProjects;
