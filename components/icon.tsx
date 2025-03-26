export const size = {
	width: 32,
	height: 32,
};
export const contentType = "image/svg+xml";

export default function PortfolioIcon() {
	return (
		<svg
			xmlns="http://www.w3.org/2000/svg"
			viewBox="0 0 32 32"
			width={32}
			height={32}
			fill="none"
		>
			<circle cx="16" cy="16" r="16" fill="url(#gradient)" />
			<defs>
				<linearGradient
					id="gradient"
					x1="0"
					y1="0"
					x2="32"
					y2="32"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="#1e3a5f" /> {/* Dark navy blue */}
					<stop offset="1" stopColor="#d4b483" /> {/* Gold/beige accent */}
				</linearGradient>
			</defs>
			<text
				x="16"
				y="22"
				fontSize="14"
				fontWeight="bold"
				fontFamily="sans-serif"
				textAnchor="middle"
				fill="white"
			>
				AL
			</text>
		</svg>
	);
}
