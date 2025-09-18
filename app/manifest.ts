import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Aleksandar Lazić Portfolio",
    short_name: "Aleksandar Lazić",
    description:
      "Portfolio of Aleksandar Lazić, Software Developer specializing in React and Node.js",
    start_url: "/",
    display: "standalone",
    background_color: "#0f0f23",
    theme_color: "#8B5CF6",
    orientation: "portrait",
    icons: [
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    categories: ["portfolio", "technology", "developer"],
    lang: "en-US",
    dir: "ltr",
  };
}
