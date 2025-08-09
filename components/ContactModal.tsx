"use client";

import React, {useRef, useEffect, useState} from "react";
import emailjs from "@emailjs/browser";
import MagicButton from "./ui/MagicButton";

type Props = {
	isOpen: boolean;
	onClose: () => void;
};

export default function ContactModal({isOpen, onClose}: Props) {
	const formRef = useRef<HTMLFormElement | null>(null);
	const [loading, setLoading] = useState(false);

	const SERVICE_ID = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID!;
	const TEMPLATE_ID = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID!;
	const PUBLIC_KEY = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY!;

	// prevent body scroll while modal open
	useEffect(() => {
		if (isOpen) {
			document.body.style.overflow = "hidden";
		} else {
			document.body.style.overflow = "";
		}
		return () => {
			document.body.style.overflow = "";
		};
	}, [isOpen]);

	if (!isOpen) return null;

	const sendEmail = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!formRef.current) return;
		setLoading(true);

		try {
			// sendForm reads inputs by name attribute
			await emailjs.sendForm(
				SERVICE_ID,
				TEMPLATE_ID,
				formRef.current,
				PUBLIC_KEY
			);
			setLoading(false);
			// optional: show toast / success UI
			alert("Message sent — thank you!");
			onClose();
		} catch (err) {
			console.error("EmailJS error:", err);
			setLoading(false);
			alert("Failed to send message. Try again later.");
		}
	};

	return (
		<div className="fixed inset-0 z-50 flex items-center justify-center p-3">

			<div
				onClick={onClose}
				className="absolute inset-0 bg-gradient-to-br from-black/70 via-purple-900/20 to-black/70 backdrop-blur-xl animate-pulse"
				style={{animationDuration: "3s"}}
			/>
				<div className="relative z-10 w-full max-w-lg mx-auto transform transition-all duration-500 ease-out scale-100 opacity-100">
					<div className="relative bg-white/95 dark:bg-gray-900/95 backdrop-blur-2xl rounded-md shadow-2xl border border-white/30 dark:border-gray-700/50 overflow-hidden">
						<div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-2xl blur-sm"></div>

						<div className="relative bg-white/90 dark:bg-gray-900/90 backdrop-blur-xl rounded-2xl p-5">
							<div className="text-center mb-5">
								<h3 className="text-2xl font-bold bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent mb-1">
									Let&apos;s Connect
								</h3>
								<p className="text-gray-600 dark:text-gray-400 text-sm">
									I&apos;d love to hear from you ✨
								</p>
								<div className="w-10 h-0.5 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full mx-auto mt-2"></div>
							</div>

							<form ref={formRef} onSubmit={sendEmail} className="space-y-4">
								<div className="group relative">
									<input
										name="from_name"
										type="text"
										required
										placeholder="Your name"
										className="w-full p-3 rounded-lg border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm group-hover:shadow-lg"
									/>
									<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
								</div>

								<div className="group relative">
									<input
										name="from_email"
										type="email"
										required
										placeholder="Your email"
										className="w-full p-3 rounded-lg border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm group-hover:shadow-lg"
									/>
									<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
								</div>

								<div className="group relative">
									<textarea
										name="message"
										required
										placeholder="Your message"
										rows={3}
										className="w-full p-3 rounded-lg border-2 border-gray-200/50 dark:border-gray-700/50 bg-white/70 dark:bg-gray-800/70 backdrop-blur-sm focus:border-blue-500 dark:focus:border-blue-400 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 dark:text-white placeholder-gray-500 dark:placeholder-gray-400 text-sm resize-none group-hover:shadow-lg"
									/>
									<div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
								</div>

								<div className="flex justify-center gap-2 pt-3">
									<div className="flex-1">
										<button
											type="button"
											onClick={onClose}
											disabled={loading}
											className="w-full transform hover:scale-105 transition-transform duration-200"
										>
											<MagicButton title="Cancel" />
										</button>
									</div>

									<div className="flex-1">
										<button
											type="submit"
											disabled={loading}
											className="w-full transform hover:scale-105 transition-transform duration-200"
										>
											<MagicButton title={loading ? "Sending..." : "Send"} />
										</button>
									</div>
								</div>
							</form>

							{loading && (
								<div className="absolute inset-0 bg-white/80 dark:bg-gray-900/80 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center">
									<div className="relative">
										<div className="animate-spin rounded-full h-8 w-8 border-4 border-blue-500/30"></div>
										<div className="animate-spin rounded-full h-8 w-8 border-4 border-transparent border-t-blue-500 absolute inset-0"></div>
									</div>
									<p className="mt-2 text-gray-600 dark:text-gray-400 font-medium text-xs">
										Sending...
									</p>
								</div>
							)}
						</div>
					</div>
				</div>
		</div>
	);
}
