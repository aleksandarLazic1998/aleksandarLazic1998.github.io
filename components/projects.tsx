"use client";

import { useState, useRef, useEffect } from "react";
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
import { ExternalLink, Github, Maximize2, Eye, EyeOff } from "lucide-react";
import Link from "next/link";
import { ScrollArea } from "@/components/ui/scroll-area";

import benefitiLogo1 from "../public/benefiti-logo-1.png";
import benefitiLogo2 from "../public/benefiti-logo-2.png";
import cmmcLogo1 from "../public/cmmc-logo-1.png";
import cmmcLogo2 from "../public/cmmc-logo-2.png";
import eprotokolLogo1 from "../public/e-protokol-1.png";
import eprotokolLogo2 from "../public/e-protokol-2.png";
import tapSpotsLogo1 from "../public/tapspots-logo-1.png";
import tapSpotsLogo2 from "../public/tapspots-logo-2.png";
import scfLogo1 from "../public/scf-logo-1.png";
import scfLogo2 from "../public/scf-logo-2.png";
import eosLogo1 from "../public/energy-icon.png";
import bitcnLogo1 from "../public/8bitcn-logo-1.png";

export function Projects() {
	const [activeFilter, setActiveFilter] = useState("all");
	const [expanded, setExpanded] = useState(false);
	const projectsContainerRef = useRef(null);

	// Mock data for projects
	const projects = [
		{
			id: 0,
			title: "8bitcn-ui",
			description:
				"A set of retro-designed, accessible components and a code distribution platform. Open Source. Open Code.",
			image: bitcnLogo1,
			image2: bitcnLogo1,
			category: ["all", "frontend", "open-source"],
			technologies: ["Next.js", "TypeScript", "Tailwind", "Shadcn"],
			role: "Open Source Contributor",
			details: [
				"Created Pagination component.",
				"Created Toast notification component.",
				"Created Breadcrumb component.",
				"Created Toggle Group component.",
				"Fix viewport issue for small screen.",
			],
			link: "https://www.8bitcn.com/",
			github: "https://github.com/TheOrcDev/8bitcn-ui",
		},
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
				"Azure Entra ID",
			],
			role: "Lead Full Stack Developer",
			details: [
				// Code Refactoring & Performance Optimization
				"Refactored the entire legacy codebase, improving maintainability, scalability, and readability.",
				"Eliminated memory leaks by restructuring event listeners, cleaning up asynchronous operations, and optimizing object references.",
				"Redesigned database queries, reducing API response times from 30 seconds to just 0.3.",
				"Implemented proper indexing and query optimization, preventing redundant database calls.",
				"Decoupled backend logic, implementing modular services and repositories for better separation of concerns.",

				// Frontend Enhancements
				"Redesigned core React patterns, optimizing component reusability and reducing unnecessary re-renders.",
				"Reworked the state management system, minimizing excessive API calls and ensuring efficient data handling.",
				"Fixed BEM and CSS structure, making styles more consistent, maintainable, and scalable.",
				"Enhanced UI responsiveness and performance, ensuring a smooth user experience.",

				// Authentication & Security Upgrades
				"Implemented OpenID authentication for Azure Entra ID, enabling secure multi-company access management.",
				"Strengthened authentication flows, ensuring secure session management and access control.",

				// DevOps & Infrastructure Improvements
				"Optimized Docker containerization, reducing build times and improving deployment efficiency.",
				"Replaced direct server-side image storage with Supabase Buckets, improving scalability and storage efficiency.",
				"Developed an advanced file-handling algorithm, enabling seamless downloads of large-scale files from Supabase Buckets without app crashes, browser freezes, or Chrome limitations.",
				"Implemented process monitoring with PM2, ensuring application stability and automatic recovery from crashes.",

				// Team Development & Mentorship
				"Mentored junior developers, guiding them in best practices for React, TypeScript, Node.js, and database optimization.",
				"Educated the team on scalable coding practices, improving long-term maintainability.",
				"Introduced clear documentation and coding standards, ensuring future developers can work efficiently.",
			],
			link: "https://www.benefiti.rs",
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
				"Leading Frontend Development in refactoring and optimizing performances of client side rendering of platform.",
				"Integrated best practices, Atomic design principles, ...etc.",
				"Debugged and fine-tuned applications to maintain optimal performance and user experience.",
				"Collaborated with Backend and UX/UI teams to create pixel perfect features with best functionality practices.",
				"Integrated Cypress for e2e testing",
			],
			link: "https://cmmcplus.com/",
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
				"Collaborated with Backend and UX/UI teams to create pixel perfect features with best functionality practices.",
				"Integrated Cypress for e2e testing",
			],
			link: "https://www.eprotokol.rs/",
			github: null,
		},
		{
			id: 4,
			title: "TapSpots",
			description:
				"Global beer tap management and discovery platform for pubs and consumers.",
			image: tapSpotsLogo1,
			image2: tapSpotsLogo2,
			category: ["all", "frontend"],
			technologies: [
				"React",
				"Redux",
				"JavaScript",
				"TypeScript",
				"JavaScript",
				"Redux Saga",
				"Bootstrap",
				"Sass",
				"Cypress",
				"Docker",
			],
			role: "Frontend (React.js) Developer",
			details: [
				"Leading Frontend Development in refactoring and optimizing performances of client side rendering of platform.",
				"Integrated best practices, Atomic design principles, ...etc.",
				"Debugged and fine-tuned applications to maintain optimal performance and user experience.",
				"Updated from legacy React code to latest version of React at that time.",
				"Migrated application from JavaScript to TypeScript",
				"Collaborated with Backend and UX/UI teams to create pixel perfect features with best functionality practices.",
				"Integrated Cypress for e2e testing.",
				"Educating and training Junior Developers.",
			],
			link: "https://tapspots.com/",
			github: "null",
		},
		{
			id: 5,
			title: "ScfConnect",
			description:
				"SCF Connect is an app for operationalizing the Secure Controls Framework (SCF) with a strong cybersecurity program in a cost-effective and user-friendly way.",
			image: scfLogo1,
			image2: scfLogo2,
			category: ["all", "frontend"],
			technologies: [
				"JavaScript",
				"jQuery",
				"thymeleaf",
				"HTML",
				"CSS3",
				"chart.js",
				"html",
			],
			role: "Lead Front End Developer",
			details: [
				"Leading Frontend Development in refactoring and optimizing performances of server side rendering of platform.",
				"Integrated best practices",
				"Debugged and fine-tuned applications to maintain optimal performance and user experience.",
				"Updated from legacy JQuery and JavaScript code to use latest conventions of writing code.",
				"Implemented webpack and babel.",
				"Implemented and created tech and user specific code conventions for working with thymeleaf at the organizational level",
				"Collaborated with Backend and UX/UI teams to create pixel perfect features with best functionality practices.",
			],
			link: "https://scfconnect.com/",
			github: null,
		},
		{
			id: 6,
			title: "Eos",
			description: "Energy saving and calculating platform.",
			image: eosLogo1,
			image2: eosLogo1,
			category: ["all", "frontend"],
			technologies: [
				"React",
				"Redux",
				"TypeScript",
				"PrimeReact",
				"Chart.js",
				"Sass",
				"Bootstrap",
			],
			role: "Frontend (React.js) Developer",
			details: [
				"Refactoring and optimizing performances of server side rendering of platform.",
				"Integrated best practices",
				"Debugged and fine-tuned applications to maintain optimal performance and user experience.",
				"Collaborated with Backend and UX/UI teams to create pixel perfect features with best functionality practices.",
			],
			link: "#",
			github: null,
		},
	];

	const filters = [
		{ id: "all", name: "All Projects" },
		{ id: "frontend", name: "Frontend" },
		{ id: "backend", name: "Backend" },
		{ id: "open-source", name: "Open Source" },
	];

	const filteredProjects = projects.filter((project) =>
		project.category.includes(activeFilter)
	);

	// Reset expanded state when filter changes
	useEffect(() => {
		setExpanded(false);
	}, [activeFilter]);

	// Animation variants for the container
	const containerVariants = {
		collapsed: {
			height: "auto",
			transition: {
				staggerChildren: 0.05,
				staggerDirection: -1,
			},
		},
		expanded: {
			height: "auto",
			transition: {
				staggerChildren: 0.1,
				delayChildren: 0.2,
			},
		},
	};

	// Animation variants for each project card
	const projectVariants = {
		hidden: (i) => ({
			opacity: 0,
			y: 50,
			scale: 0.9,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		}),
		visible: (i) => ({
			opacity: 1,
			y: 0,
			scale: 1,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
				delay: i * 0.1,
			},
		}),
		exit: (i) => ({
			opacity: 0,
			y: -20,
			scale: 0.9,
			transition: {
				type: "spring",
				damping: 12,
				stiffness: 100,
			},
		}),
	};

	// Toggle expanded state
	const toggleExpanded = () => {
		setExpanded(!expanded);

		// Scroll to the projects container with a slight delay to allow animation to start
		if (!expanded) {
			setTimeout(() => {
				projectsContainerRef.current?.scrollIntoView({
					behavior: "smooth",
					block: "start",
				});
			}, 100);
		}
	};

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

				<div className="flex flex-wrap justify-center gap-4 mb-12">
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

				<div ref={projectsContainerRef}>
					<motion.div
						variants={containerVariants}
						initial="collapsed"
						animate={expanded ? "expanded" : "collapsed"}
						className="relative"
					>
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{filteredProjects.map((project, index) => (
								<motion.div
									key={project.id}
									custom={index}
									variants={projectVariants}
									initial="hidden"
									animate={index < 3 || expanded ? "visible" : "hidden"}
									exit="exit"
									className={
										index >= 3 && !expanded
											? "absolute opacity-0 pointer-events-none"
											: ""
									}
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
												className="object-cover transition-transform duration-500 hover:scale-110"
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
															<Maximize2
																className="h-5 w-5"
																aria-hidden="true"
															/>
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
																<h4 className="text-lg font-semibold mb-2">
																	Role
																</h4>
																<p className="text-gray-300 mb-4">
																	{project.role}
																</p>

																<h4 className="text-lg font-semibold mb-2">
																	Details
																</h4>

																<ScrollArea className="h-64 rounded-md border p-4">
																	<ul className="space-y-2">
																		{project.details.map((detail, idx) => (
																			<li
																				key={idx}
																				className="text-gray-300 list-disc ml-4"
																			>
																				{detail}
																			</li>
																		))}
																	</ul>
																</ScrollArea>

																<h4 className="text-lg font-semibold mb-2 mt-4">
																	Technologies
																</h4>
																<div className="flex flex-wrap gap-2 mb-6">
																	{project.technologies.map((tech) => (
																		<Badge
																			key={tech}
																			variant="outline"
																			className="border-purple-500/50 text-gray-300"
																		>
																			{tech}
																		</Badge>
																	))}
																</div>

																<div className="flex gap-4 justify-end">
																	{project.link && (
																		<Link
																			className="bg-gradient-to-r from-purple-500 to-teal-400 text-white flex items-center px-4 py-2 rounded-lg"
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
																		<Link
																			href={project.github}
																			target="_blank"
																			className="border border-gray-700 text-white flex items-center px-4 py-2 rounded-lg hover:bg-gray-800"
																			aria-label={`View ${project.title} code on GitHub`}
																		>
																			View Code
																			<Github
																				className="ml-2 h-4 w-4"
																				aria-hidden="true"
																			/>
																		</Link>
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
								</motion.div>
							))}
						</div>
					</motion.div>
				</div>

				{filteredProjects.length > 3 && (
					<motion.div
						className="mt-16 text-center"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						transition={{ delay: 0.5 }}
					>
						<Button
							onClick={toggleExpanded}
							variant="outline"
							size="lg"
							className="group relative overflow-hidden border-2 border-purple-500/50 text-white hover:text-white hover:border-purple-500 transition-all duration-300"
						>
							<motion.div
								className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-teal-400/10"
								animate={{
									scale: expanded ? [1, 1.2, 1] : [1, 1.05, 1],
									opacity: expanded ? [0.2, 0.3, 0.2] : [0.1, 0.2, 0.1],
								}}
								transition={{
									repeat: Number.POSITIVE_INFINITY,
									duration: 3,
									ease: "easeInOut",
								}}
							/>
							<span className="relative flex items-center gap-2">
								{expanded ? (
									<>
										<EyeOff className="h-5 w-5" />
										Show Less
									</>
								) : (
									<>
										<Eye className="h-5 w-5" />
										Reveal All Projects
									</>
								)}
							</span>
						</Button>
					</motion.div>
				)}
			</div>
		</section>
	);
}
