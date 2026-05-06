"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Building2, ExternalLink, Calendar } from "lucide-react"

const experiences = [
  {
    title: "Full Stack Developer",
    company: "Dotsquares",
    companyUrl: "https://dotsquares.com",
    location: "India",
    period: "2023 — Present",
    type: "Full-time",
    description:
      "Spearheading frontend architecture for Effica — an AI-powered multi-tenant CRM platform — building scalable UI with React/Next.js integrated with .NET backend services.",
    responsibilities: [
      "Architected and built scalable, responsive UI for the Effica AI-based CRM platform using React.js, Next.js, and TypeScript",
      "Engineered AI chatbot integration for intelligent user assistance, automated responses, and contextual recommendations",
      "Implemented real-time chat system using SignalR with group messaging, file sharing, emoji support, and live typing indicators",
      "Designed and optimized complex state management for multi-tenant enterprise datasets using Redux and Context API",
      "Integrated REST APIs with .NET backend services for seamless cross-module communication (HR, Finance, Intake & Onboarding)",
      "Improved website accessibility and UI performance through ADA-compliant design and code-splitting strategies",
      "Awarded Employee of the Month (June 2025) for exceptional contributions to the Effica project",
    ],
    technologies: ["React.js", "Next.js", "TypeScript", ".NET", "SignalR", "Redux", "Tailwind CSS", "REST API"],
  },
  {
    title: "Junior Developer",
    company: "Dotsquares",
    companyUrl: "https://dotsquares.com",
    location: "India",
    period: "2022 — 2023",
    type: "Full-time",
    description:
      "Developed foundational skills in full-stack development while contributing to production-grade projects and learning enterprise patterns.",
    responsibilities: [
      "Developed MERN-based features for internal and client projects under senior developer mentorship",
      "Implemented reusable component libraries, CRUD operations, and responsive UI improvements",
      "Participated in code reviews, debugging sessions, and agile sprint planning",
      "Built proficiency in Git workflows, CI/CD pipelines, and collaborative development practices",
    ],
    technologies: ["JavaScript", "React", "Node.js", "MongoDB", "Express", "Git"],
  },
]

function ExperienceCard({ 
  experience, 
  index, 
  isInView 
}: { 
  experience: typeof experiences[0]
  index: number
  isInView: boolean 
}) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative group"
    >
      {/* Timeline connector */}
      <div className="absolute left-0 md:left-8 top-0 bottom-0 w-px bg-border" />
      
      {/* Timeline dot */}
      <motion.div
        animate={{ scale: isHovered ? 1.2 : 1 }}
        className="absolute left-0 md:left-8 top-8 w-3 h-3 -translate-x-1/2 rounded-full bg-primary border-4 border-background z-10"
      />

      {/* Content card */}
      <div className={`ml-6 md:ml-20 relative overflow-hidden rounded-2xl border transition-all duration-500 ${isHovered ? 'border-primary/50 shadow-2xl shadow-primary/10 bg-card' : 'border-border/50 bg-card/50'}`}>
        {/* Header */}
        <div className="p-6 pb-4">
          <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
            <div>
              <div className="flex items-center gap-2 mb-1">
                <Calendar className="h-4 w-4 text-primary" />
                <span className="text-sm font-mono text-primary">{experience.period}</span>
                <span className="px-2 py-0.5 text-xs rounded-full bg-primary/10 text-primary border border-primary/20">
                  {experience.type}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-foreground">{experience.title}</h3>
              <a
                href={experience.companyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1 text-primary hover:underline font-medium group/link"
              >
                <Building2 className="h-4 w-4" />
                {experience.company}
                <ExternalLink className="h-3 w-3 opacity-0 group-hover/link:opacity-100 transition-opacity" />
              </a>
            </div>
          </div>

          <p className="text-muted-foreground mb-4">{experience.description}</p>
        </div>

        {/* Responsibilities */}
        <div className="px-6 pb-4">
          <ul className="space-y-2">
            {experience.responsibilities.map((item, i) => (
              <motion.li
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                className="flex items-start gap-3 text-sm text-muted-foreground"
              >
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                {item}
              </motion.li>
            ))}
          </ul>
        </div>

        {/* Technologies */}
        <div className="px-6 pb-6">
          <div className="flex flex-wrap gap-2">
            {experience.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 text-xs font-mono rounded-lg bg-secondary/80 text-secondary-foreground border border-border/50"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Hover gradient */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: isHovered ? 1 : 0 }}
          className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5 pointer-events-none"
        />
      </div>
    </motion.div>
  )
}

export function ExperienceSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="experience" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16 max-w-4xl mx-auto">
            <span className="text-primary font-mono text-sm">04.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Work Experience
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Timeline */}
          <div className="max-w-4xl mx-auto space-y-12">
            {experiences.map((experience, index) => (
              <ExperienceCard
                key={experience.title + experience.period}
                experience={experience}
                index={index}
                isInView={isInView}
              />
            ))}
          </div>

          {/* Education note */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="max-w-4xl mx-auto mt-16 ml-6 md:ml-20 p-6 rounded-2xl glass border border-border/50"
          >
            <h3 className="text-lg font-semibold text-foreground mb-4 flex items-center gap-2">
              <span className="text-2xl">🎓</span>
              Education
            </h3>
            <div className="space-y-3">
              <div>
                <p className="font-medium text-foreground">Master of Technology (M.Tech)</p>
                <p className="text-sm text-muted-foreground">Singhania University</p>
              </div>
              <div>
                <p className="font-medium text-foreground">Bachelor of Technology (B.Tech)</p>
                <p className="text-sm text-muted-foreground">Abdul Kalam Technical University</p>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
