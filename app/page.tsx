import { Hero } from "@/components/hero";
import { Navbar } from "@/components/navbar";
import { About } from "@/components/about";
import { Skills } from "@/components/skills";
import { Projects } from "@/components/projects";
import { Contact } from "@/components/contact";
import { Footer } from "@/components/footer";
import { BackgroundAnimation } from "@/components/background-animation";
import CanvasCursor from "@/components/ui/canvas-cursor";

export default function Home() {
  return (
    <>
      <div className="relative min-h-screen overflow-hidden bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950">
        <BackgroundAnimation />
        <CanvasCursor />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
