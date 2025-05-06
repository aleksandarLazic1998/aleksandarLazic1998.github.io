"use client";

import { motion } from "framer-motion";
import { Code2, Database, Layers } from "lucide-react";

export function About() {
	return (
		<section id="about" className="py-20 relative">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2
						className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
						tabIndex={0}
					>
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
							About Me
						</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"></div>
				</motion.div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.2 }}
						viewport={{ once: true }}
					>
						<div className="relative">
							<div className="w-full h-[400px] rounded-2xl overflow-hidden border-2 border-gray-800 relative z-10">
								<div className="absolute inset-0 bg-gradient-to-br from-purple-900/20 to-teal-900/20"></div>
								<div className="absolute inset-0 flex items-center justify-center">
									<div className="text-center p-8 backdrop-blur-sm bg-gray-900/50 rounded-xl border border-gray-800 max-w-md">
										<h3 className="text-2xl font-bold text-white mb-4">
											Software Developer
										</h3>
										<p className="text-gray-300 mb-6">
											Specialized in React and Node.js Ecosystem with 4+ years
											of experience building modern web applications.
										</p>
										<div className="grid grid-cols-3 gap-4">
											<div className="text-center">
												<div className="text-2xl font-bold text-purple-400">
													4+
												</div>
												<div className="text-sm text-gray-400">Years Exp</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-teal-400">
													10+
												</div>
												<div className="text-sm text-gray-400">Projects</div>
											</div>
											<div className="text-center">
												<div className="text-2xl font-bold text-yellow-400">
													3
												</div>
												<div className="text-sm text-gray-400">Industries</div>
											</div>
										</div>
									</div>
								</div>
							</div>
							<div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-purple-500/30 rounded-2xl -z-10"></div>
							<div className="absolute -top-6 -left-6 w-full h-full border-2 border-teal-500/30 rounded-2xl -z-10"></div>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, x: 30 }}
						whileInView={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.5, delay: 0.4 }}
						viewport={{ once: true }}
					>
						<h3 className="text-2xl font-bold text-white mb-6" tabIndex={0}>
							Passionate about building scalable applications
						</h3>
						<p className="text-gray-300 mb-8" tabIndex={0}>
							I'm a software developer with expertise in both frontend and
							backend development. My journey in tech has led me through various
							industries including HR Tech, Security Tech, and Dev Tech, where
							I've honed my skills in creating efficient, scalable and secure
							user-friendly applications.
						</p>
						<p className="text-gray-300 mb-8" tabIndex={0}>
							Currently, I'm focused on expanding my knowledge in Cloud
							Practitioner and Solution Architect AWS, with the goal of building
							scalable and secure applications.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
							<div
								tabIndex={0}
								aria-label="Frontend"
								aria-description="Crafting modern, high-performance, and accessible user interfaces with React, Next.js, and TypeScript. Focused on delivering pixel-perfect, intuitive, and responsive web applications with seamless user experiences."
								className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-purple-500/50 transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-lg bg-purple-500/20 flex items-center justify-center mb-4">
									<Code2 className="h-6 w-6 text-purple-400" />
								</div>
								<h4 className="text-lg font-semibold text-white mb-2">
									Frontend
								</h4>
								<p className="text-gray-400 text-sm">
									Crafting modern, high-performance, and accessible user
									interfaces with React, Next.js, and TypeScript.
								</p>
								<p className="text-gray-400 text-sm">
									Focused on delivering pixel-perfect, intuitive, and responsive
									web applications with seamless user experiences.
								</p>
							</div>

							<div
								tabIndex={0}
								aria-label="Backend"
								aria-description="Developing scalable and secure APIs using Node.js, Express, and NestJS. Implementing clean architecture principles, authentication, authorization, and microservices for robust back-end solutions."
								className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-teal-500/50 transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-lg bg-teal-500/20 flex items-center justify-center mb-4">
									<Database className="h-6 w-6 text-teal-400" />
								</div>
								<h4 className="text-lg font-semibold text-white mb-2">
									Backend
								</h4>
								<p className="text-gray-400 text-sm">
									Developing scalable and secure APIs using Node.js, Express,
									and NestJS.
								</p>
								<p className="text-gray-400 text-sm">
									Implementing clean architecture principles, authentication,
									authorization, and microservices for robust back-end
									solutions.
								</p>
							</div>

							<div
								tabIndex={0}
								aria-label="Databases"
								aria-description="Designing and managing high-performance databases with PostgreSQL, MySQL, and Redis.Optimizing queries, ensuring data integrity, and implementing efficient indexing and caching
									strategies."
								className="bg-gray-800/50 backdrop-blur-sm border border-gray-700 rounded-xl p-6 hover:border-yellow-500/50 transition-all duration-300"
							>
								<div className="w-12 h-12 rounded-lg bg-yellow-500/20 flex items-center justify-center mb-4">
									<Layers className="h-6 w-6 text-yellow-400" />
								</div>
								<h4 className="text-lg font-semibold text-white mb-2">
									Databases
								</h4>
								<p className="text-gray-400 text-sm">
									Designing and managing high-performance databases with
									PostgreSQL, MySQL, and Redis.
								</p>
								<p className="text-gray-400 text-sm">
									Optimizing queries, ensuring data integrity, and implementing
									efficient indexing and caching strategies.
								</p>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
