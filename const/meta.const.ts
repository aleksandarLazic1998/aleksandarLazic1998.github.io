const og = {
	title: "Aleksandar Lazić",
	description: "Portfolio of Aleksandar Lazić.",
	type: "website",
	image: "/images/cover.jpg",
};

const metaSetting = {
	title: "Aleksandar Lazić | Software Developer",
	description:
		"Portfolio of Aleksandar Lazić, a Software Developer specialized in React and Node.js Ecosystem",
	generator: "Next.js",
	applicationName: "Aleksandar Lazić Portfolio",
	referrer: "origin-when-cross-origin",
	keywords: [
		"Next.js",
		"React",
		"JavaScript",
		"TypeScript",
		"Node.js",
		"Next.js",
		"Nest.js",
		"Front-end",
		"Back-end",
		"HTML",
		"CSS",
		"SASS",
		"Bootstrap",
		"Tailwind",
		"PostgreSQL",
		"MySQL",
		"MongoDB",
		"Redis",
		"Docker",
	],
	creator: "Aleksandar Lazić",
	publisher: "Aleksandar Lazić",
	openGraph: {
		title: og.title,
		description: og.description,
		// url: "https://" + window.location.origin,
		images: [{ url: og.image, alt: og.title }],
		type: og.type as
			| "website"
			| "article"
			| "book"
			| "profile"
			| "music.song"
			| "music.album"
			| "music.playlist"
			| "music.radio_station"
			| "video.movie"
			| "video.episode"
			| "video.tv_show"
			| "video.other",
		emails: "aleksandar.lazic.d@gmail.com",
		phoneNumbers: "+381601662469",
		locale: "en-us",
	},
};

export { metaSetting };
