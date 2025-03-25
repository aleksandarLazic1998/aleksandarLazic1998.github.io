"use client";

import Link from "next/link";

export function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className="py-12 border-t border-gray-800 relative overflow-hidden">
			<div className="container relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
					<div className="md:col-span-2">
						<Link
							href="/"
							className="text-2xl font-bold text-white mb-4 inline-block"
						>
							<span className="text-purple-500">A</span>
							<span className="text-teal-400">L</span>
						</Link>
						<p className="text-gray-400 mb-6 max-w-md">
							Software developer specialized in React and Node.js Ecosystem,
							building scalable and performant web applications with modern
							technologies.
						</p>
						<div className="flex space-x-4">
							<Link
								href="https://www.linkedin.com/in/aleksandar-lazic-1474911b8/"
								className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-purple-500/20 transition-colors duration-300"
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
								className="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center hover:bg-teal-500/20 transition-colors duration-300"
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

					<div>
						<h3 className="text-lg font-semibold text-white mb-4">
							Navigation
						</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#home"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									className="text-gray-400 hover:text-white transition-colors"
								>
									About
								</Link>
							</li>
							<li>
								<Link
									href="#skills"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Skills
								</Link>
							</li>
							<li>
								<Link
									href="#projects"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Projects
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Contact
								</Link>
							</li>
						</ul>
					</div>

					<div>
						<h3 className="text-lg font-semibold text-white mb-4">Services</h3>
						<ul className="space-y-2">
							<li>
								<Link
									href="#skills"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Web Development
								</Link>
							</li>
							<li>
								<Link
									href="#skills"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Frontend Development
								</Link>
							</li>
							<li>
								<Link
									href="#skills"
									className="text-gray-400 hover:text-white transition-colors"
								>
									Backend Development
								</Link>
							</li>
							<li>
								<Link
									href="#skills"
									className="text-gray-400 hover:text-white transition-colors"
								>
									API Development
								</Link>
							</li>
						</ul>
					</div>
				</div>

				<div className="mt-12 pt-8 border-t border-gray-800 text-center">
					<p className="text-gray-500">
						© {currentYear} Aleksandar Lazić. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	);
}
