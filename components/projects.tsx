"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from "@/components/ui/dialog";
import { ExternalLink, Github, Maximize2 } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "./ui/scroll-area";

import benefitiLogo1 from "../public/benefiti-logo-1.png";
import benefitiLogo2 from "../public/benefiti-logo-2.png";
import cmmcLogo1 from "../public/cmmc-logo-1.png";
import cmmcLogo2 from "../public/cmmc-logo-2.png";
import eprotokolLogo1 from "../public/e-protokol-1.png";
import eprotokolLogo2 from "../public/e-protokol-2.png";

export function Projects() {
	const [activeFilter, setActiveFilter] = useState("all");

	const projects = [
		{
			id: 1,
			title: "Benefiti",
			description: "HR platform for employee benefits management",
			image: benefitiLogo1,
			image2: benefitiLogo2,
			category: ["all", "frontend", "backend"],
			technologies: [
				"JavaScript",
				"TypeScript",
				"React",
				"Next.js",
				"Redux",
				"Redux Thunk",
				"Sass",
				"CSS",
				"Shadcn",
				"Node.js",
				"Express",
				"PostgreSQL",
				"Redis",
				"Nest.js",
				"Docker",
				"Supabase",
				"Digital Ocean",
				"PM2",
				"NGNIX",
			],
			role: "Lead Full Stack Developer",
			details: [
				"Led the project as a lead Full-Stack developer.",
				"Refactored legacy code to improve maintainability and performance.",
				"Optimized back-end code, increasing speed by approximately 50%.",
				"Reengineered key React patterns to enhance performance and streamline code efficiency.",
			],
			link: "https://benefiti.rs/",
			github: null,
		},
		{
			id: 2,
			title: "CMMC+",
			description: "Security compliance management platform",
			image: cmmcLogo1,
			image2: cmmcLogo2,
			category: ["all", "frontend"],
			technologies: [
				"JavaScript",
				"React",
				"Redux",
				"Redux Saga",
				"React Context",
				"Bootstrap",
				"Sass",
			],
			role: "Frontend (React.js) Developer",
			details: [
				"Leading Frontend Developer in refactoring and optimizing performances.",
				"Revamped legacy systems by introducing code improvements and feature enhancements while ensuring seamless collaboration across teams.",
				"Debugged and fine-tuned applications to maintain optimal performance and user experience.",
			],
			link: "#",
			github: null,
		},
		{
			id: 3,
			title: "eProtokol",
			description: "Digital protocol system for organizations",
			image: eprotokolLogo1,
			image2: eprotokolLogo2,
			category: ["all", "frontend"],
			technologies: [
				"React",
				"Redux",
				"TypeScript",
				"Redux Saga",
				"Bootstrap",
				"Sass",
			],
			role: "Frontend (React.js) Developer",
			details: [
				"Leading Frontend Developer.",
				"Modernized legacy systems by enhancing code quality, introducing new features, and fostering seamless team collaboration.",
				"Diagnosed and resolved application issues to ensure peak performance and a smooth user experience.",
			],
			link: "https://www.eprotokol.rs/",
			github: null,
		},
	];

	const filters = [
		{ id: "all", name: "All Projects" },
		{ id: "frontend", name: "Frontend" },
		{ id: "backend", name: "Backend" },
	];

	const filteredProjects = projects.filter((project) =>
		project.category.includes(activeFilter)
	);

	return (
		<section id="projects" className="py-20" aria-labelledby="projects-heading">
			<div className="container">
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
					viewport={{ once: true }}
					className="text-center mb-16"
				>
					<h2
						id="projects-heading"
						className="text-3xl md:text-4xl font-bold mb-4 font-poppins"
					>
						<span
							className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400"
							aria-label="My Projects"
							tabIndex={0}
						>
							My Projects
						</span>
					</h2>
					<div
						className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"
						aria-hidden="true"
					></div>
					<p className="text-gray-400 mt-6 max-w-2xl mx-auto" tabIndex={0}>
						A selection of my recent work across different industries and
						technologies.
					</p>
				</motion.div>

				<div
					className="flex flex-wrap justify-center gap-4 mb-12"
					role="group"
					aria-label="Project filters"
				>
					{filters.map((filter) => (
						<Button
							key={filter.id}
							variant={activeFilter === filter.id ? "default" : "outline"}
							className={`
                ${
									activeFilter === filter.id
										? "bg-gradient-to-r from-purple-500 to-teal-400 text-white"
										: "border-gray-700 text-gray-300 hover:text-white hover:border-gray-600"
								}
              `}
							onClick={() => setActiveFilter(filter.id)}
							aria-pressed={activeFilter === filter.id}
							aria-label={`Filter by ${filter.name}`}
						>
							{filter.name}
						</Button>
					))}
				</div>

				<ul
					className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
					aria-label="Project list"
				>
					{filteredProjects.map((project, index) => (
						<motion.li
							key={project.id}
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
							viewport={{ once: true }}
						>
							<Card
								aria-label={`${project.title} project`}
								tabIndex={0}
								className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col"
							>
								<div className="relative h-48 overflow-hidden">
									<Image
										src={project.image || "/placeholder.svg"}
										alt={`${project.title} project thumbnail`}
										fill
										className="object-fill transition-transform duration-500 hover:scale-110"
									/>
									<div
										className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"
										aria-hidden="true"
									></div>
								</div>
								<CardHeader>
									<div className="flex justify-between items-start">
										<CardTitle className="text-white">
											{project.title}
										</CardTitle>
										<Dialog>
											<DialogTrigger asChild>
												<Button
													variant="ghost"
													size="icon"
													className="text-gray-400 hover:text-white"
													aria-label={`View details for ${project.title}`}
												>
													<Maximize2 className="h-5 w-5" aria-hidden="true" />
												</Button>
											</DialogTrigger>
											<DialogContent className="modal-sm overflow-y-auto bg-gray-900 border border-gray-800 text-white max-w-3xl">
												<DialogHeader>
													<DialogTitle className="text-2xl">
														{project.title}
													</DialogTitle>
													<DialogDescription className="text-gray-400">
														{project.description}
													</DialogDescription>
												</DialogHeader>
												<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
													<div className="relative h-[300px] rounded-lg overflow-hidden">
														<Image
															src={project.image2 || "/placeholder.svg"}
															alt={`${project.title} project screenshot`}
															fill
															className="object-contain"
														/>
													</div>
													<div>
														<h4 className="text-lg font-semibold mb-2">Role</h4>
														<p className="text-gray-300 mb-4">{project.role}</p>

														<h4 className="text-lg font-semibold mb-2">
															Details
														</h4>

														<section className="rounded-md border w-full h-64 overflow-y-auto p-2">
															{project.details.map((detail) => {
																return (
																	<li
																		key={detail}
																		className="text-gray-300 mb-4 list-disc"
																	>
																		{detail}
																	</li>
																);
															})}
														</section>

														<h4 className="text-lg font-semibold mb-2 mt-4">
															Technologies
														</h4>
														<ul
															className="flex flex-wrap gap-2 mb-6"
															aria-label="Technologies used"
														>
															{project.technologies.map((tech) => (
																<li key={tech}>
																	<Badge
																		variant="outline"
																		className="border-purple-500/50 text-gray-300"
																	>
																		{tech}
																	</Badge>
																</li>
															))}
														</ul>

														<div className="flex gap-4 justify-end">
															{project.link && (
																<Link
																	className="bg-gradient-to-r from-purple-500 to-teal-400 text-white flex items-center p-4 rounded-lg"
																	aria-label={`Visit ${project.title} website`}
																	href={project.link}
																	target="_blank"
																>
																	Visit Site
																	<ExternalLink
																		className="ml-2 h-4 w-4"
																		aria-hidden="true"
																	/>
																</Link>
															)}
															{project.github && (
																<Button
																	variant="outline"
																	className="border-gray-700"
																	aria-label={`View ${project.title} code on GitHub`}
																>
																	View Code
																	<Github
																		className="ml-2 h-4 w-4"
																		aria-hidden="true"
																	/>
																</Button>
															)}
														</div>
													</div>
												</div>
											</DialogContent>
										</Dialog>
									</div>
									<CardDescription className="text-gray-400">
										{project.description}
									</CardDescription>
								</CardHeader>
								<CardContent className="flex-grow">
									<div
										className="flex flex-wrap gap-2"
										aria-label="Technologies"
									>
										{project.technologies.slice(0, 4).map((tech) => (
											<Badge
												key={tech}
												variant="outline"
												className="border-gray-700 text-gray-300"
											>
												{tech}
											</Badge>
										))}
										{project.technologies.length > 4 && (
											<Badge
												variant="outline"
												className="border-gray-700 text-gray-300"
											>
												+{project.technologies.length - 4} more
											</Badge>
										)}
									</div>
								</CardContent>
								<CardFooter className="border-t border-gray-800 pt-4">
									<div className="flex justify-between w-full">
										<span className="text-sm text-gray-400">
											{project.role}
										</span>
										{project.link && (
											<Link
												className="text-purple-400 hover:text-purple-300 p-0 flex items-center"
												aria-label={`View ${project.title} project`}
												href={project.link}
												target="_blank"
											>
												View Project
												<ExternalLink
													className="ml-2 h-4 w-4"
													aria-hidden="true"
												/>
											</Link>
										)}
									</div>
								</CardFooter>
							</Card>
						</motion.li>
					))}
				</ul>
			</div>
		</section>
	);
}
