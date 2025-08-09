"use client";

import { HoverEffect } from "./ui/CardHoverEffect";
import { motion } from "framer-motion";
import { LayoutDashboard, Cloud, Settings, Database, Server } from "lucide-react";

export function Skill() {
	return (
		<section id="skills" className="pt-20 py-20">
			<motion.h1
				className="heading"
				initial={{ opacity: 0, y: 30 }}
				whileInView={{ opacity: 1, y: 0 }}
				transition={{ duration: 0.6 }}
				viewport={{ once: true }}
			>
				My Tech <span className="text-purple">Arsenal</span>
			</motion.h1>

			<div className="max-w-5xl mx-auto px-8 mt-5">
				<HoverEffect items={skills} />
			</div>
		</section>
	);
}

export const skills = [
	{
		title: "Frontend",
		description: [
			"HTML",
			"CSS",
			"JavaScript",
			"React.js",
			"Tailwind CSS",
			"Framer Motion",
		],
		link: "",
        icon: <LayoutDashboard className="w-5 h-5 text-purple-500" />
	},
	{
		title: "Backend",
		description: [
			"Node.js",
			"Express.js",
			"REST API",
			"GraphQL",
		],
		link: "",
        icon: <Server className="w-5 h-5 text-blue-500" />
	},
	{
		title: "Database",
		description: [
			"MongoDB",
			"PostgreSQL",
			"MySQL",
			"Firebase",
		],
		link: "",
        icon: <Database className="w-5 h-5 text-green-500" />
	},
	{
		title: "DevOps",
		description: [
			"Git",
			"GitHub Actions",
			"Docker",
			"Vercel",
			"Netlify",
		],
		link: "",
        icon: <Cloud className="w-5 h-5 text-cyan-500" />
	},
	{
		title: "Specialized Skills",
		description: [
			"Three.js",
			"Socket.IO",
			"Stripe API",
			"OpenAI API",
		],
		link: "",
        icon: <Settings className="w-5 h-5 text-orange-500" />
	},
];
