"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Plus, Minus } from "lucide-react";

interface OrbitControllerProps {
	orbits: Array<{
		radius: number;
		iconCount: number;
		animationClass: string;
	}>;
	setOrbits: React.Dispatch<
		React.SetStateAction<
			Array<{
				radius: number;
				iconCount: number;
				animationClass: string;
			}>
		>
	>;
}

export function OrbitController({ orbits, setOrbits }: OrbitControllerProps) {
	const [newOrbit, setNewOrbit] = useState({
		radius: 150,
		iconCount: 5,
		animationClass: "animate-slow-spin",
	});

	const addOrbit = () => {
		setOrbits([...orbits, { ...newOrbit }]);
	};

	const removeOrbit = (index: number) => {
		setOrbits(orbits.filter((_, i) => i !== index));
	};

	const updateOrbit = (
		index: number,
		field: string,
		value: number | string
	) => {
		const updatedOrbits = [...orbits];
		updatedOrbits[index] = {
			...updatedOrbits[index],
			[field]: value,
		};
		setOrbits(updatedOrbits);
	};

	return (
		<div className="bg-gray-800/80 backdrop-blur-sm border border-gray-700 rounded-lg p-4 mb-8">
			<h3 className="text-xl font-bold text-white mb-4">Orbit Controller</h3>

			<div className="space-y-4">
				{orbits.map((orbit, index) => (
					<div
						key={index}
						className="flex items-center gap-4 p-2 border border-gray-700 rounded-md"
					>
						<div className="flex-1">
							<Label htmlFor={`radius-${index}`} className="text-gray-300">
								Radius
							</Label>
							<Input
								id={`radius-${index}`}
								type="number"
								value={orbit.radius}
								onChange={(e) =>
									updateOrbit(index, "radius", Number.parseInt(e.target.value))
								}
								className="bg-gray-700 text-white border-gray-600"
							/>
						</div>
						<div className="flex-1">
							<Label htmlFor={`icons-${index}`} className="text-gray-300">
								Icons
							</Label>
							<Input
								id={`icons-${index}`}
								type="number"
								value={orbit.iconCount}
								onChange={(e) =>
									updateOrbit(
										index,
										"iconCount",
										Number.parseInt(e.target.value)
									)
								}
								className="bg-gray-700 text-white border-gray-600"
							/>
						</div>
						<div className="flex-1">
							<Label htmlFor={`animation-${index}`} className="text-gray-300">
								Animation
							</Label>
							<select
								id={`animation-${index}`}
								value={orbit.animationClass}
								onChange={(e) =>
									updateOrbit(index, "animationClass", e.target.value)
								}
								className="w-full h-10 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md"
							>
								<option value="animate-slow-spin">Slow Spin</option>
								<option value="animate-reverse-spin">Reverse Spin</option>
								<option value="animate-fast-spin">Fast Spin</option>
							</select>
						</div>
						<Button
							variant="destructive"
							size="icon"
							onClick={() => removeOrbit(index)}
							className="mt-6"
						>
							<Minus className="h-4 w-4" />
						</Button>
					</div>
				))}
			</div>

			<div className="mt-4 p-3 border border-gray-700 rounded-md">
				<h4 className="text-white mb-2">Add New Orbit</h4>
				<div className="flex items-end gap-4">
					<div className="flex-1">
						<Label htmlFor="new-radius" className="text-gray-300">
							Radius
						</Label>
						<Input
							id="new-radius"
							type="number"
							value={newOrbit.radius}
							onChange={(e) =>
								setNewOrbit({
									...newOrbit,
									radius: Number.parseInt(e.target.value),
								})
							}
							className="bg-gray-700 text-white border-gray-600"
						/>
					</div>
					<div className="flex-1">
						<Label htmlFor="new-icons" className="text-gray-300">
							Icons
						</Label>
						<Input
							id="new-icons"
							type="number"
							value={newOrbit.iconCount}
							onChange={(e) =>
								setNewOrbit({
									...newOrbit,
									iconCount: Number.parseInt(e.target.value),
								})
							}
							className="bg-gray-700 text-white border-gray-600"
						/>
					</div>
					<div className="flex-1">
						<Label htmlFor="new-animation" className="text-gray-300">
							Animation
						</Label>
						<select
							id="new-animation"
							value={newOrbit.animationClass}
							onChange={(e) =>
								setNewOrbit({ ...newOrbit, animationClass: e.target.value })
							}
							className="w-full h-10 px-3 py-2 bg-gray-700 text-white border border-gray-600 rounded-md"
						>
							<option value="animate-slow-spin">Slow Spin</option>
							<option value="animate-reverse-spin">Reverse Spin</option>
							<option value="animate-fast-spin">Fast Spin</option>
						</select>
					</div>
					<Button
						variant="default"
						onClick={addOrbit}
						className="bg-gradient-to-r from-purple-500 to-teal-400"
					>
						<Plus className="h-4 w-4 mr-2" />
						Add
					</Button>
				</div>
			</div>
		</div>
	);
}
