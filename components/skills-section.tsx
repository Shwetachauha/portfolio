"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"

const skillCategories = [
  {
    title: "Frontend",
    skills: [
      { name: "React.js", level: 95 },
      { name: "Next.js", level: 92 },
      { name: "JavaScript", level: 95 },
      { name: "TypeScript", level: 90 },
      { name: "Tailwind CSS", level: 92 },
      { name: "Redux", level: 88 },
    ],
  },
  {
    title: "Backend & APIs",
    skills: [
      { name: "Node.js", level: 80 },
      { name: "API Integration", level: 90 },
      { name: "SignalR", level: 82 },
    ],
  },
  {
    title: "Databases",
    skills: [
      { name: "MySQL", level: 70 },
      { name: "MongoDB", level: 70 },
       { name: "PostgreSQL", level: 72 },
    ],
  },
  {
    title: "Tools & Libraries",
    skills: [
      { name: "Framer Motion", level: 85 },
      { name: "shadcn/ui", level: 88 },
      { name: "Lucide", level: 85 },
      { name: "GitHub", level: 90 },
     { name: "Git & CI/CD", level: 90 },
      

    ],
  },
  {
    title: "Deployment & Analytics",
    skills: [
      { name: "Vercel", level: 88 },
      { name: "Facebook Pixel", level: 80 },
      { name: "Microsoft Clarity", level: 82 },
      { name: "Intercom", level: 78 },
      { name: "Google Font API", level: 85 },
    ],
  },
  {
    title: "Other Skills",
    skills: [
      { name: "Requirements Gathering", level: 88 },
      { name: "Problem Solving", level: 92 },
      { name: "SDLC Understanding", level: 85 },
    ],
  },
]

function SkillBar({ skill, index, isInView }: { skill: { name: string; level: number }; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group"
    >
      <div className="flex justify-between items-center mb-2">
        <span className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
          {skill.name}
        </span>
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0.7 }}
          className="text-xs font-mono text-muted-foreground"
        >
          {skill.level}%
        </motion.span>
      </div>
      <div className="h-2 bg-secondary rounded-full overflow-hidden">
        <motion.div
          initial={{ width: 0 }}
          animate={isInView ? { width: `${skill.level}%` } : { width: 0 }}
          transition={{ duration: 1, delay: 0.2 + index * 0.1, ease: "easeOut" }}
          className={`h-full rounded-full bg-gradient-to-r from-primary to-accent relative ${isHovered ? 'shadow-lg shadow-primary/30' : ''}`}
        >
          {/* Shine effect */}
          <motion.div
            initial={{ x: "-100%" }}
            animate={isInView ? { x: "200%" } : { x: "-100%" }}
            transition={{ duration: 1.5, delay: 1 + index * 0.1 }}
            className="absolute inset-0 w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent"
          />
        </motion.div>
      </div>
    </motion.div>
  )
}

export function SkillsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="skills" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10 grid-pattern opacity-30" />

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
            <span className="text-primary font-mono text-sm">02.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Skills & Expertise
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Skills grid */}
          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {skillCategories.map((category, categoryIndex) => (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.15 }}
                className="p-6 rounded-2xl glass border border-border/50 hover:border-primary/30 transition-colors"
              >
                <div className="flex items-center gap-3 mb-6">
                  <div className="w-2 h-2 rounded-full bg-primary" />
                  <h3 className="text-xl font-semibold text-foreground">{category.title}</h3>
                </div>
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <SkillBar
                      key={skill.name}
                      skill={skill}
                      index={skillIndex}
                      isInView={isInView}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Tech logos carousel */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16 text-center"
          >
            <p className="text-sm text-muted-foreground mb-6 font-mono">Technologies I work with</p>
            <div className="flex flex-wrap justify-center gap-4">
              {["React", "Next.js", "TypeScript", "Node.js", "Tailwind", "Vercel", "MongoDB", "GitHub"].map((tech, index) => (
                <motion.div
                  key={tech}
                  whileHover={{ scale: 1.1, y: -4 }}
                  className="px-5 py-3 rounded-xl bg-secondary/50 border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default"
                >
                  <span className="text-sm font-medium text-foreground">{tech}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
