"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Menu, X } from "lucide-react";
import { motion } from "framer-motion";
import PortfolioIcon from "./icon";

export function Navbar() {
	const [scrolled, setScrolled] = useState(false);

	const navItems = [
		{ name: "Home", href: "#home" },
		{ name: "About", href: "#about" },
		{ name: "Skills", href: "#skills" },
		{ name: "Projects", href: "#projects" },
		{ name: "Contact", href: "#contact" },
	];

	const handleDownload = async () => {
		try {
			const pdfUrl = "/aleksandar_lazic_cv.pdf";

			const a = document.createElement("a");
			a.href = pdfUrl;
			a.download = "Aleksandar Lazic CV.pdf";
			document.body.appendChild(a);
			a.click();

			document.body.removeChild(a);
		} catch (error) {
			console.error("Error downloading the PDF:", error);
		}
	};

	return (
		<motion.header
			className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
				scrolled
					? "bg-gray-900/80 backdrop-blur-md py-3 shadow-lg"
					: "bg-transparent py-5"
			}`}
			initial={{ y: -100, opacity: 0 }}
			animate={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.5 }}
		>
			<div className="container flex items-center justify-between">
				<Link href="/" className="text-2xl font-bold text-white">
					<PortfolioIcon />
				</Link>

				<nav className="hidden md:flex items-center space-x-8">
					{navItems.map((item) => (
						<Link
							key={item.name}
							href={item.href}
							className="text-gray-300 hover:text-white transition-colors relative group"
						>
							{item.name}
							<span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-purple-500 to-teal-400 transition-all duration-300 group-hover:w-full"></span>
						</Link>
					))}
					<Button
						onClick={handleDownload}
						className="bg-gradient-to-r from-purple-500 to-teal-400 text-white hover:from-purple-600 hover:to-teal-500 transition-all duration-300"
					>
						Resume
					</Button>
				</nav>

				<Sheet>
					<SheetTrigger asChild className="md:hidden">
						<Button variant="ghost" size="icon" className="text-white">
							<Menu className="h-6 w-6" />
							<span className="sr-only">Toggle menu</span>
						</Button>
					</SheetTrigger>
					<SheetContent side="right" className="bg-gray-900 border-gray-800">
						<div className="flex flex-col h-full">
							<nav className="flex flex-col space-y-6 mt-10">
								{navItems.map((item) => (
									<Link
										key={item.name}
										href={item.href}
										className="text-xl text-gray-300 hover:text-white transition-colors"
									>
										{item.name}
									</Link>
								))}
								<Button
									onClick={handleDownload}
									className="bg-gradient-to-r from-purple-500 to-teal-400 text-white hover:from-purple-600 hover:to-teal-500 transition-all duration-300 mt-4"
								>
									Resume
								</Button>
							</nav>
						</div>
					</SheetContent>
				</Sheet>
			</div>
		</motion.header>
	);
}
