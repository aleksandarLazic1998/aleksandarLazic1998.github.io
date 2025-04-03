"use client";

import type React from "react";

import { useState, type FormEvent } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
	Card,
	CardContent,
	CardDescription,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Mail, MapPin, Phone, Send } from "lucide-react";
import Link from "next/link";

export function Contact() {
	const [formData, setFormData] = useState({
		name: "",
		email: "",
		subject: "",
		message: "",
	});

	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitSuccess, setSubmitSuccess] = useState(false);

	const handleChange = (
		e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
	) => {
		const { name, value } = e.target;
		setFormData((prev) => ({ ...prev, [name]: value }));
	};

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault();
		setIsSubmitting(true);
		try {
			// setFormData({ name: "", email: "", subject: "", message: "" });

			const emailTo = "aleksandar.lazic.d@gmail.com";

			const sendEmail = `mailto:${emailTo}?subject=${encodeURIComponent(
				formData.subject
			)}&body=${encodeURIComponent(formData.message)}`;

			if (typeof window !== "undefined") {
				console.log(sendEmail);
				// Redirect to the mailto link
				window.location.href = sendEmail;
			}

			setIsSubmitting(false);
			setSubmitSuccess(true);
		} catch (error) {
			console.log(error);
		}
	};

	return (
		<section id="contact" className="py-20 bg-gray-900/50">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2
						tabIndex={0}
						className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
					>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
							Get In Touch
						</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"></div>
					<p tabIndex={0} className="text-gray-400 mt-6 max-w-2xl mx-auto">
						Have a project in mind or want to discuss potential opportunities?
						Feel free to reach out!
					</p>
				</motion.div>

				<div className="flex justify-center gap-12">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<Card className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full">
							<CardHeader>
								<CardTitle tabIndex={0} className="text-white text-2xl">
									Contact Information
								</CardTitle>
								<CardDescription tabIndex={0} className="text-gray-400">
									Feel free to reach out through any of these channels
								</CardDescription>
							</CardHeader>
							<CardContent className="space-y-6">
								<div className="flex items-start space-x-4">
									<div className="w-10 h-10 rounded-full bg-purple-500/20 flex items-center justify-center flex-shrink-0">
										<Mail className="h-5 w-5 text-purple-400" />
									</div>
									<div
										tabIndex={0}
										aria-label="Email"
										aria-description="Email me for any inquiries"
									>
										<h3 className="text-white font-medium">Email</h3>
										<p className="text-gray-400">
											aleksandar.lazic.d@gmail.com
										</p>
										<p className="text-sm text-gray-500 mt-1">
											Email me for any inquiries
										</p>
									</div>
								</div>

								<div
									tabIndex={0}
									aria-label="Phone"
									aria-description="Available during business hours"
									className="flex items-start space-x-4"
								>
									<div className="w-10 h-10 rounded-full bg-teal-500/20 flex items-center justify-center flex-shrink-0">
										<Phone className="h-5 w-5 text-teal-400" />
									</div>
									<div>
										<h3 className="text-white font-medium">Phone</h3>
										<p className="text-gray-400">+381 (60) 166-2469</p>
										<p className="text-sm text-gray-500 mt-1">
											Available during business hours
										</p>
									</div>
								</div>

								<div
									tabIndex={0}
									aria-label="Location"
									aria-description="Available for remote work worldwide"
									className="flex items-start space-x-4"
								>
									<div className="w-10 h-10 rounded-full bg-yellow-500/20 flex items-center justify-center flex-shrink-0">
										<MapPin className="h-5 w-5 text-yellow-400" />
									</div>
									<div>
										<h3 className="text-white font-medium">Location</h3>
										<p className="text-gray-400">Požarevac, Serbia</p>
										<p className="text-sm text-gray-500 mt-1">
											Available for remote work worldwide
										</p>
									</div>
								</div>

								<div
									tabIndex={0}
									className="pt-6 mt-6 border-t border-gray-800"
								>
									<h3 className="text-white font-medium mb-4">
										Connect with me
									</h3>
									<div className="flex space-x-4">
										<Link
											href="https://www.linkedin.com/in/aleksandar-lazic-1474911b8/"
											className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-purple-500/20 transition-colors duration-300"
											aria-label="LinkedIn"
											target="_blank"
										>
											<svg
												className="h-5 w-5 text-white"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
											</svg>
										</Link>
										<Link
											href="https://github.com/aleksandarLazic1998"
											className="w-10 h-10 rounded-full bg-gray-700 flex items-center justify-center hover:bg-teal-500/20 transition-colors duration-300"
											aria-label="GitHub"
											target="_blank"
										>
											<svg
												className="h-5 w-5 text-white"
												fill="currentColor"
												viewBox="0 0 24 24"
												aria-hidden="true"
											>
												<path
													fillRule="evenodd"
													d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
													clipRule="evenodd"
												/>
											</svg>
										</Link>
									</div>
								</div>
							</CardContent>
						</Card>
					</motion.div>

					{/* <motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<Card className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-teal-500/50 transition-all duration-300 h-full">
							<CardHeader>
								<CardTitle className="text-white text-2xl" tabIndex={0}>
									Send a Message
								</CardTitle>
								<CardDescription className="text-gray-400" tabIndex={0}>
									Fill out the form below and I'll get back to you as soon as
									possible
								</CardDescription>
							</CardHeader>
							<CardContent>
								<form onSubmit={handleSubmit} className="space-y-6">
									<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
										<div className="space-y-2">
											<label
												htmlFor="name"
												className="text-sm font-medium text-gray-300"
											>
												Your Name
											</label>
											<Input
												id="name"
												name="name"
												value={formData.name}
												onChange={handleChange}
												placeholder="John Doe"
												required
												className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
											/>
										</div>
										<div className="space-y-2">
											<label
												htmlFor="email"
												className="text-sm font-medium text-gray-300"
											>
												Your Email
											</label>
											<Input
												id="email"
												name="email"
												type="email"
												value={formData.email}
												onChange={handleChange}
												placeholder="john@example.com"
												required
												className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
											/>
										</div>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="subject"
											className="text-sm font-medium text-gray-300"
										>
											Subject
										</label>
										<Input
											id="subject"
											name="subject"
											value={formData.subject}
											onChange={handleChange}
											placeholder="Project Inquiry"
											required
											className="bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
										/>
									</div>

									<div className="space-y-2">
										<label
											htmlFor="message"
											className="text-sm font-medium text-gray-300"
										>
											Message
										</label>
										<Textarea
											id="message"
											name="message"
											value={formData.message}
											onChange={handleChange}
											placeholder="Tell me about your project..."
											required
											className="min-h-[150px] bg-gray-800/50 border-gray-700 text-white placeholder:text-gray-500 focus:border-purple-500"
										/>
									</div>

									<Button
										type="submit"
										disabled={isSubmitting}
										className={`w-full ${
											submitSuccess
												? "bg-green-600 hover:bg-green-700"
												: "bg-gradient-to-r from-purple-500 to-teal-400 hover:from-purple-600 hover:to-teal-500"
										} text-white transition-all duration-300`}
									>
										{isSubmitting ? (
											<span className="flex items-center">
												<svg
													className="animate-spin -ml-1 mr-2 h-4 w-4 text-white"
													xmlns="http://www.w3.org/2000/svg"
													fill="none"
													viewBox="0 0 24 24"
												>
													<circle
														className="opacity-25"
														cx="12"
														cy="12"
														r="10"
														stroke="currentColor"
														strokeWidth="4"
													></circle>
													<path
														className="opacity-75"
														fill="currentColor"
														d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
													></path>
												</svg>
												Sending...
											</span>
										) : submitSuccess ? (
											<span className="flex items-center">
												<svg
													className="-ml-1 mr-2 h-5 w-5"
													fill="none"
													stroke="currentColor"
													viewBox="0 0 24 24"
													xmlns="http://www.w3.org/2000/svg"
												>
													<path
														strokeLinecap="round"
														strokeLinejoin="round"
														strokeWidth="2"
														d="M5 13l4 4L19 7"
													></path>
												</svg>
												Message Sent!
											</span>
										) : (
											<span className="flex items-center">
												<Send className="mr-2 h-4 w-4" />
												Send Message
											</span>
										)}
									</Button>
								</form>
							</CardContent>
						</Card>
					</motion.div> */}
				</div>
			</div>
		</section>
	);
}
