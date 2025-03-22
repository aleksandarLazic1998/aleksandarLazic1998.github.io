"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ExternalLink, Github, Maximize2 } from "lucide-react"

export function Projects() {
  const [activeFilter, setActiveFilter] = useState("all")

  const projects = [
    {
      id: 1,
      title: "Benefiti",
      description: "HR platform for employee benefits management",
      image: "https://placehold.co/600x400",
      category: ["all", "frontend", "backend"],
      technologies: ["React", "Next.js", "TypeScript", "Node.js", "Express", "PostgreSQL"],
      role: "Lead Developer",
      details:
        "Led the project as a lead developer. Refactored legacy code to improve maintainability and performance. Optimized back-end code, increasing speed by approximately 50%. Reengineered key React patterns to enhance performance and streamline code efficiency.",
      link: "#",
      github: null,
    },
    {
      id: 2,
      title: "CMMC+",
      description: "Security compliance management platform",
      image: "https://placehold.co/600x400",
      category: ["all", "frontend"],
      technologies: ["React", "Redux", "JavaScript", "Redux Saga", "Bootstrap", "Sass"],
      role: "Frontend Developer",
      details:
        "Revamped legacy systems by introducing code improvements and feature enhancements while ensuring seamless collaboration across teams. Debugged and fine-tuned applications to maintain optimal performance and user experience.",
      link: "#",
      github: null,
    },
    {
      id: 3,
      title: "eProtokol",
      description: "Digital protocol system for organizations",
      image: "https://placehold.co/600x400",
      category: ["all", "frontend"],
      technologies: ["React", "Redux", "TypeScript", "Redux Saga", "Bootstrap", "Sass"],
      role: "Frontend Developer",
      details:
        "Modernized legacy systems by enhancing code quality, introducing new features, and fostering seamless team collaboration. Diagnosed and resolved application issues to ensure peak performance and a smooth user experience.",
      link: "#",
      github: null,
    },
  ]

  const filters = [
    { id: "all", name: "All Projects" },
    { id: "frontend", name: "Frontend" },
    { id: "backend", name: "Backend" },
  ]

  const filteredProjects = projects.filter((project) => project.category.includes(activeFilter))

  return (
    <section id="projects" className="py-20">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
              My Projects
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            A selection of my recent work across different industries and technologies.
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
            >
              {filter.name}
            </Button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 overflow-hidden hover:border-purple-500/50 transition-all duration-300 h-full flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    fill
                    className="object-cover transition-transform duration-500 hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent opacity-60"></div>
                </div>
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{project.title}</CardTitle>
                    <Dialog>
                      <DialogTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-gray-400 hover:text-white">
                          <Maximize2 className="h-5 w-5" />
                          <span className="sr-only">View details</span>
                        </Button>
                      </DialogTrigger>
                      <DialogContent className="bg-gray-900 border border-gray-800 text-white max-w-3xl">
                        <DialogHeader>
                          <DialogTitle className="text-2xl">{project.title}</DialogTitle>
                          <DialogDescription className="text-gray-400">{project.description}</DialogDescription>
                        </DialogHeader>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                          <div className="relative h-[300px] rounded-lg overflow-hidden">
                            <Image
                              src={project.image || "/placeholder.svg"}
                              alt={project.title}
                              fill
                              className="object-cover"
                            />
                          </div>
                          <div>
                            <h4 className="text-lg font-semibold mb-2">Role</h4>
                            <p className="text-gray-300 mb-4">{project.role}</p>

                            <h4 className="text-lg font-semibold mb-2">Details</h4>
                            <p className="text-gray-300 mb-4">{project.details}</p>

                            <h4 className="text-lg font-semibold mb-2">Technologies</h4>
                            <div className="flex flex-wrap gap-2 mb-6">
                              {project.technologies.map((tech) => (
                                <Badge key={tech} variant="outline" className="border-purple-500/50 text-gray-300">
                                  {tech}
                                </Badge>
                              ))}
                            </div>

                            <div className="flex gap-4">
                              {project.link && (
                                <Button className="bg-gradient-to-r from-purple-500 to-teal-400 text-white">
                                  Visit Site
                                  <ExternalLink className="ml-2 h-4 w-4" />
                                </Button>
                              )}
                              {project.github && (
                                <Button variant="outline" className="border-gray-700">
                                  View Code
                                  <Github className="ml-2 h-4 w-4" />
                                </Button>
                              )}
                            </div>
                          </div>
                        </div>
                      </DialogContent>
                    </Dialog>
                  </div>
                  <CardDescription className="text-gray-400">{project.description}</CardDescription>
                </CardHeader>
                <CardContent className="flex-grow">
                  <div className="flex flex-wrap gap-2">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <Badge key={tech} variant="outline" className="border-gray-700 text-gray-300">
                        {tech}
                      </Badge>
                    ))}
                    {project.technologies.length > 4 && (
                      <Badge variant="outline" className="border-gray-700 text-gray-300">
                        +{project.technologies.length - 4} more
                      </Badge>
                    )}
                  </div>
                </CardContent>
                <CardFooter className="border-t border-gray-800 pt-4">
                  <div className="flex justify-between w-full">
                    <span className="text-sm text-gray-400">{project.role}</span>
                    {project.link && (
                      <Button variant="ghost" size="sm" className="text-purple-400 hover:text-purple-300 p-0">
                        View Project
                        <ExternalLink className="ml-2 h-4 w-4" />
                      </Button>
                    )}
                  </div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}

