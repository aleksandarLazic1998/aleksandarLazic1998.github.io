"use client";

import { motion } from "framer-motion";
import { Icons, IconsEnum } from "./ui/icons";
import { createElement } from "react";

export function Skills() {
	const frontendSkills = [
		{ name: "JavaScript", icon: IconsEnum.javascript },
		{ name: "TypeScript", icon: IconsEnum.typescript },
		{ name: "React", icon: IconsEnum.react },
		{ name: "Next.js", icon: IconsEnum.nextjs },
		{ name: "Redux", icon: IconsEnum.redux },
		{ name: "Tailwind CSS", icon: IconsEnum.tailwind },
		{ name: "Sass", icon: IconsEnum.sass },
		{ name: "CSS", icon: IconsEnum.css },
	];

	const backendSkills = [
		{ name: "Node.js", icon: IconsEnum["node.js"] },
		{ name: "Express", icon: IconsEnum.express },
		{ name: "Nest.js", icon: IconsEnum.nest },
		{ name: "PostgreSQL", icon: IconsEnum.postgresql },
		{ name: "MongoDB", icon: IconsEnum.mongodb },
		{ name: "Redis", icon: IconsEnum.redis },
		{ name: "GraphQL", icon: IconsEnum.graphql },
		{ name: "Sequelize", icon: IconsEnum.sequelize },
		{ name: "Mongoose", icon: IconsEnum.mongoose },
		{ name: "MySQL", icon: IconsEnum.mysql },
	];

	// jest = "jest", //
	const otherSkills = [
		{ name: "Docker", icon: IconsEnum.docker },
		{ name: "Git", icon: IconsEnum.git },
		{ name: "CI/CD", icon: IconsEnum.ci_cd },
		{ name: "Testing", icon: IconsEnum.jest },
		{ name: "Supabase", icon: IconsEnum.supabase },
		{ name: "AWS", icon: IconsEnum.aws },
		{ name: "Nginx", icon: IconsEnum.nginx },
	];

	const SkillBar = ({ name, level }: { name: string; level: number }) => (
		<motion.div
			className="mb-6"
			initial={{ opacity: 0, x: -20 }}
			whileInView={{ opacity: 1, x: 0 }}
			transition={{ duration: 0.5 }}
			viewport={{ once: true }}
		>
			<div className="flex justify-between mb-2">
				<span className="text-gray-300">{name}</span>
				<span className="text-gray-400">{level}%</span>
			</div>
			<div className="h-2 bg-gray-700 rounded-full overflow-hidden">
				<motion.div
					className="h-full bg-gradient-to-r from-purple-500 to-teal-400"
					initial={{ width: 0 }}
					whileInView={{ width: `${level}%` }}
					transition={{ duration: 1, delay: 0.2 }}
					viewport={{ once: true }}
				></motion.div>
			</div>
		</motion.div>
	);

	return (
		<section id="skills" className="py-20 bg-gray-900/50">
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
							My Skills
						</span>
					</h2>
					<div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"></div>
					<p tabIndex={0} className="text-gray-400 mt-6 max-w-2xl mx-auto">
						Over 4 years of experience has allowed me to develop a diverse skill
						set across both frontend and backend technologies.
					</p>
				</motion.div>

				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
					<div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
						<h3 className="text-xl font-bold text-white mb-6 flex items-center">
							<span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
							Frontend Development
						</h3>
						<section
							tabIndex={0}
							aria-label="Frontend Skill List"
							className="flex flex-wrap justify-between gap-4"
						>
							{frontendSkills.map((skill) => {
								return createElement(Icons, {
									icon: skill.icon,
									key: skill.icon,
									className: "h-16 w-16",
								});
							})}
						</section>
					</div>

					<div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300">
						<h3 className="text-xl font-bold text-white mb-6 flex items-center">
							<span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
							Backend Development
						</h3>
						<section
							tabIndex={0}
							aria-label="Backend Skill List"
							className="flex flex-wrap justify-between gap-4"
						>
							{backendSkills.map((skill) => {
								return createElement(Icons, {
									icon: skill.icon,
									key: skill.icon,
									className: "h-16 w-16",
								});
							})}
						</section>
					</div>

					<div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300 lg:col-span-1 md:col-span-2">
						<h3 className="text-xl font-bold text-white mb-6 flex items-center">
							<span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
							Other Skills
						</h3>
						<section
							tabIndex={0}
							aria-label="Other Skill List"
							className="flex flex-wrap justify-between gap-4"
						>
							{otherSkills.map((skill) => {
								return createElement(Icons, {
									icon: skill.icon,
									key: skill.icon,
									className: "h-16 w-16",
								});
							})}
						</section>
					</div>
				</div>
			</div>
		</section>
	);
}
