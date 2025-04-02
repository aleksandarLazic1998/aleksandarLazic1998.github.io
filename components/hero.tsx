"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
	ArrowRight,
	Code,
	Server,
	Zap,
	Database,
	Globe,
	Cpu,
	Cloud,
	Settings,
	Terminal,
	Layers,
	GitBranch,
} from "lucide-react";
import { Icons, IconsEnum } from "@/components/ui/icons";

interface IOrbitIcon {
	id: number;
	name: string;
	icon: React.ReactNode;
	color: string;
	className: string;
}

// Function to generate positions along a circle
const generatePositionsOnCircle = (icons: IOrbitIcon[], radius: number) => {
	const positions = [];
	for (let i = 0; i < icons.length; i++) {
		const angle = (i / icons.length) * Math.PI * 2; // Distribute evenly around the circle
		// Round to 2 decimal places to ensure consistent values between server and client
		const x = Number.parseFloat((Math.cos(angle) * radius).toFixed(2));
		const y = Number.parseFloat((Math.sin(angle) * radius).toFixed(2));
		positions.push({ x, y, angle, icon: icons[i] });
	}

	return positions;
};

export function Hero() {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const router = useRouter();

	const TECH_ICONS = [
		[
			{
				id: 1,
				name: "javascript",
				icon: IconsEnum.javascript,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 2,
				name: "typescript",
				icon: IconsEnum.typescript,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 3,
				name: "node.js",
				icon: IconsEnum["node.js"],
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 4,
				name: "next.js",
				icon: IconsEnum["nextjs"],
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 5,
				name: "react.js",
				icon: IconsEnum["react"],
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 6,
				name: "nest.js",
				icon: IconsEnum["nest"],
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
		],
		[
			{
				id: 1,
				name: "jest",
				icon: IconsEnum.jest,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 2,
				name: "docker",
				icon: IconsEnum.docker,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 3,
				name: "nginx",
				icon: IconsEnum.nginx,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 4,
				name: "aws",
				icon: IconsEnum.aws,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 5,
				name: "supabase",
				icon: IconsEnum.supabase,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
		],
		[
			{
				id: 1,
				name: "express.js",
				icon: IconsEnum.express,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 2,
				name: "sass",
				icon: IconsEnum.sass,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 3,
				name: "css",
				icon: IconsEnum.css,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 4,
				name: "tailwind",
				icon: IconsEnum.tailwind,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 5,
				name: "redux",
				icon: IconsEnum.redux,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 6,
				name: "postgresql",
				icon: IconsEnum.postgresql,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 7,
				name: "redis",
				icon: IconsEnum.redis,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 8,
				name: "mysql",
				icon: IconsEnum.mysql,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 9,
				name: "mongodb",
				icon: IconsEnum.mongodb,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
			{
				id: 10,
				name: "graphql",
				icon: IconsEnum.graphql,
				color: "#ffffff",
				className: "h-16 w-16 rounded-full",
			},
		],
	];

	// State for our orbital rings
	const [orbits, setOrbits] = useState([
		{
			radius: 150,
			icons: TECH_ICONS[0],
			animationClass: "animate-reverse-spin",
			id: 1,
		},
		{
			radius: 225,
			icons: TECH_ICONS[1],
			animationClass: "animate-normal-spin",
			id: 2,
		},
		{
			radius: 300,
			icons: TECH_ICONS[2],
			animationClass: "animate-reverse-spin",
			id: 3,
		},
	]);

	useEffect(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;

		const ctx = canvas.getContext("2d");
		if (!ctx) return;

		canvas.width = canvas.offsetWidth;
		canvas.height = canvas.offsetHeight;

		const particles: {
			x: number;
			y: number;
			radius: number;
			color: string;
			velocity: { x: number; y: number };
		}[] = [];

		const colors = ["#8B5CF6", "#2DD4BF", "#6366F1"];

		for (let i = 0; i < 50; i++) {
			const radius = Math.random() * 2 + 1;
			particles.push({
				x: Math.random() * canvas.width,
				y: Math.random() * canvas.height,
				radius,
				color: colors[Math.floor(Math.random() * colors.length)],
				velocity: {
					x: (Math.random() - 0.5) * 0.5,
					y: (Math.random() - 0.5) * 0.5,
				},
			});
		}

		const animate = () => {
			requestAnimationFrame(animate);
			ctx.clearRect(0, 0, canvas.width, canvas.height);

			particles.forEach((particle) => {
				particle.x += particle.velocity.x;
				particle.y += particle.velocity.y;

				if (particle.x < 0 || particle.x > canvas.width) {
					particle.velocity.x = -particle.velocity.x;
				}

				if (particle.y < 0 || particle.y > canvas.height) {
					particle.velocity.y = -particle.velocity.y;
				}

				ctx.beginPath();
				ctx.arc(particle.x, particle.y, particle.radius, 0, Math.PI * 2);
				ctx.fillStyle = particle.color;
				ctx.fill();
			});
		};

		animate();

		const handleResize = () => {
			canvas.width = canvas.offsetWidth;
			canvas.height = canvas.offsetHeight;
		};

		window.addEventListener("resize", handleResize);

		return () => {
			window.removeEventListener("resize", handleResize);
		};
	}, []);

	// Component to render a single orbital ring with icons
	const OrbitalRing = ({
		radius,
		icons,
		animationClass,
		id,
	}: {
		radius: number;
		icons: IOrbitIcon[];
		animationClass: string;
		id: number;
	}) => {
		const positions = generatePositionsOnCircle(icons, radius);

		return (
			<div
				className={`absolute w-[${radius * 2}px] h-[${
					radius * 2
				}px] rounded-full border-2 border-gray-700/50 ${animationClass}`}
				style={{ width: `${radius * 2}px`, height: `${radius * 2}px` }}
			>
				{positions.map((pos, index) => (
					<div
						key={index}
						className="absolute"
						style={{
							transform: `translate(${pos.x}px, ${pos.y}px) translate(-50%, -50%)`,
							left: "50%",
							top: "50%",
						}}
					>
						<div className="w-16 h-16 rounded-full bg-gray-800 border border-gray-700 flex items-center justify-center shadow-lg">
							{React.createElement(Icons, {
								icon: pos.icon.icon,
								key: pos.icon.id,
								className: pos.icon.className,
							})}
						</div>
					</div>
				))}
			</div>
		);
	};

	return (
		<section
			id="home"
			className="relative min-h-screen flex items-center pt-20"
		>
			<canvas
				ref={canvasRef}
				className="absolute inset-0 w-full h-full"
				aria-hidden="true"
			/>
			<div className="container relative z-10">
				<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
					<motion.div
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="inline-flex items-center px-3 py-1 rounded-full bg-gray-800/50 backdrop-blur-sm border border-gray-700 mb-6">
							<span className="w-2 h-2 rounded-full bg-green-500 mr-2"></span>
							<span className="text-sm text-gray-300">Available for work</span>
						</div>
						<h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 font-poppins">
							<span className="text-white">Hi, I'm </span>
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
								Aleksandar Lazić
							</span>
						</h1>
						<h2 className="text-2xl md:text-3xl font-medium text-gray-300 mb-6">
							Software Developer specialized in
							<span className="text-purple-400"> React</span> and
							<span className="text-teal-400"> Node.js</span> Ecosystem
						</h2>
						<p className="text-gray-400 text-lg mb-8 max-w-xl">
							Building scalable and performant web applications with modern
							technologies. Passionate about creating exceptional user
							experiences and robust backend systems.
						</p>
						<div className="flex flex-wrap gap-4">
							<Button
								className="bg-gradient-to-r from-purple-500 to-teal-400 hover:from-purple-600 hover:to-teal-500 text-white px-6 py-6 rounded-lg transition-all duration-300 shadow-lg hover:shadow-purple-500/20"
								onClick={() => router.push("#projects")}
							>
								View Projects
								<ArrowRight className="ml-2 h-5 w-5" />
							</Button>
							<Button
								variant="outline"
								className="border-gray-700 text-white hover:bg-gray-800 px-6 py-6 rounded-lg transition-all duration-300"
								onClick={() => router.push("#contact")}
							>
								Contact Me
							</Button>
						</div>
					</motion.div>

					<motion.div
						initial={{ opacity: 0, scale: 0.8 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8, delay: 0.2 }}
						className="relative hidden lg:block"
					>
						<div className="w-[600px] h-[600px] rounded-full  flex items-center justify-center ">
							<div className="absolute top-0 right-0 w-80 h-80 bg-purple-500/20 rounded-full filter blur-3xl"></div>
							<div className="absolute bottom-0 left-0 w-80 h-80 bg-teal-500/20 rounded-full filter blur-3xl"></div>

							{orbits.map((orbit) => {
								return (
									<OrbitalRing
										key={orbit.id}
										id={orbit.id}
										radius={orbit.radius}
										icons={orbit.icons}
										animationClass={orbit.animationClass}
									/>
								);
							})}

							<div className="w-[200px] h-[200px] rounded-full bg-gray-800/80 backdrop-blur-sm border border-gray-700 flex items-center justify-center shadow-lg z-10">
								<div className="text-center">
									<h3 className="text-2xl font-bold text-white mb-2">
										4+ Years
									</h3>
									<p className="text-gray-400">Experience</p>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
