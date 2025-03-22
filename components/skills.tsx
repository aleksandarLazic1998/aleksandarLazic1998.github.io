"use client"

import { motion } from "framer-motion"

export function Skills() {
  const frontendSkills = [
    { name: "JavaScript", level: 90 },
    { name: "TypeScript", level: 85 },
    { name: "React", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Redux", level: 80 },
    { name: "Tailwind CSS", level: 85 },
    { name: "Styled Components", level: 80 },
    { name: "Shadcn", level: 75 },
  ]

  const backendSkills = [
    { name: "Node.js", level: 85 },
    { name: "Express", level: 85 },
    { name: "Nest.js", level: 80 },
    { name: "PostgreSQL", level: 75 },
    { name: "MongoDB", level: 80 },
    { name: "Redis", level: 70 },
    { name: "REST API", level: 90 },
    { name: "GraphQL", level: 75 },
  ]

  const otherSkills = [
    { name: "Docker", level: 75 },
    { name: "Git", level: 85 },
    { name: "CI/CD", level: 75 },
    { name: "Testing", level: 80 },
    { name: "Agile", level: 85 },
    { name: "PM2", level: 70 },
    { name: "Nginx", level: 65 },
  ]

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
  )

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
          <h2 className="text-3xl md:text-4xl font-bold mb-4 font-poppins">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-500 to-teal-400">
              My Skills
            </span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-purple-500 to-teal-400 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Over 4.5 years of experience has allowed me to develop a diverse skill set across both frontend and backend
            technologies.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-purple-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-purple-500 mr-2"></span>
              Frontend Development
            </h3>
            {frontendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-teal-500/50 transition-all duration-300">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-teal-500 mr-2"></span>
              Backend Development
            </h3>
            {backendSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>

          <div className="bg-gray-800/30 backdrop-blur-sm border border-gray-700 rounded-xl p-8 hover:border-yellow-500/50 transition-all duration-300 lg:col-span-1 md:col-span-2">
            <h3 className="text-xl font-bold text-white mb-6 flex items-center">
              <span className="w-3 h-3 rounded-full bg-yellow-500 mr-2"></span>
              Other Skills
            </h3>
            {otherSkills.map((skill) => (
              <SkillBar key={skill.name} name={skill.name} level={skill.level} />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

