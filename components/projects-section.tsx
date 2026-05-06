"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { ExternalLink, Layers, Bot, Truck, CheckSquare, Apple } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Effica CRM",
    subtitle: "AI-Powered Enterprise Platform",
    description:
      "A SaaS-based multi-tenant AI-powered CRM platform designed to manage multiple business operations. Built core modules including HR, Super Admin, Intake & Onboarding, and Finance with scalable, responsive UI using React and Next.js. Backend powered by .NET for robust enterprise-grade performance.",
    highlights: [
      "Integrated AI chatbot for intelligent user assistance and automated responses",
      "Real-time chat system using SignalR with group chat, file sharing, emoji support, and live typing indicators",
      "Dynamic dashboards with real-time notifications and data visualization",
      "Optimized performance and complex state management for large enterprise datasets",
      "Awarded Employee of the Month for exceptional contributions to this project"
    ],
    techStack: ["Next.js", "TypeScript", "Tailwind CSS", ".NET", "SignalR", "Redux", "REST API"],
    demo: "#",
    icon: Bot,
    gradient: "from-primary/20 via-accent/10 to-primary/5",
    featured: true,
  },
  {
    title: "Laundry Go",
    subtitle: "Admin Dashboard & Driver Tracking",
    description:
      "Comprehensive admin dashboard to manage drivers, customers, orders, service areas, and services. Features real-time driver tracking with Google Maps API integration for efficient order assignments.",
    highlights: [
      "Real-time driver tracking with Google Maps API",
      "Customer profiles and order tracking system",
      "Service area configurations and management",
      "Efficient order assignment algorithms"
    ],
    techStack: ["React", "Redux", "Node.js", "Express", "MongoDB", "Google Maps API"],
    demo: "#",
    icon: Truck,
    gradient: "from-accent/20 via-primary/10 to-accent/5",
    featured: true,
  },
  {
    title: "Task Flights",
    subtitle: "Collaboration & Workflow Tool",
    description:
      "Task-tracking and collaboration tool with team messaging and file sharing for seamless workflows. Designed as a scalable solution adaptable for startups to enterprises.",
    highlights: [
      "Customizable workflows and project boards",
      "Team messaging and file sharing",
      "Intuitive interface for diverse team needs",
      "Scalable architecture for growth"
    ],
    techStack: ["React", "Node.js", "MongoDB", "Express", "Socket.io"],
    demo: "#",
    icon: CheckSquare,
    gradient: "from-chart-3/20 via-primary/10 to-chart-3/5",
    featured: true,
  },
  {
    title: "Nutra Kiddos",
    subtitle: "Meal Planning Application",
    description:
      "MERN-based meal planner app with user-customized plans based on diet preferences, allergens, and budget constraints. Features admin CMS for recipe management.",
    highlights: [
      "Personalized meal plans based on dietary needs",
      "Admin CMS for recipe management",
      "Real-time content updates via backend portal",
      "Budget-aware meal suggestions"
    ],
    techStack: ["React", "Node.js", "Express", "MongoDB"],
    demo: "#",
    icon: Apple,
    gradient: "from-chart-4/20 via-accent/10 to-chart-4/5",
    featured: true,
  },
]

function ProjectCard({ project, index, isInView }: { project: typeof projects[0]; index: number; isInView: boolean }) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = project.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Featured badge for first project */}
      {index === 0 && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="px-3 py-1 text-xs font-mono bg-primary text-primary-foreground rounded-full">
            Featured Project
          </span>
        </div>
      )}

      <div className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 ${isHovered ? 'border-primary/50 shadow-2xl shadow-primary/10' : ''}`}>
        {/* Gradient background */}
        <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
        
        {/* Content */}
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start justify-between mb-6">
            <div className="flex items-center gap-4">
              <motion.div 
                animate={{ rotate: isHovered ? 360 : 0 }}
                transition={{ duration: 0.6 }}
                className="p-3 rounded-xl bg-primary/10 border border-primary/20"
              >
                <Icon className="h-6 w-6 text-primary" />
              </motion.div>
              <div>
                <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-sm text-muted-foreground font-mono">{project.subtitle}</p>
              </div>
            </div>
            <div className="flex gap-2">
              <Button
                variant="ghost"
                size="icon"
                className="h-10 w-10 rounded-xl hover:bg-primary/10 hover:text-primary"
                asChild
              >
                <a href={project.demo} target="_blank" rel="noopener noreferrer">
                  <ExternalLink className="h-5 w-5" />
                  <span className="sr-only">Live Demo</span>
                </a>
              </Button>
            </div>
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {project.description}
          </p>

          {/* Highlights */}
          <div className="mb-6">
            <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
              <Layers className="h-4 w-4 text-primary" />
              Key Contributions
            </h4>
            <ul className="space-y-2">
              {project.highlights.map((highlight, i) => (
                <motion.li
                  key={i}
                  initial={{ opacity: 0, x: -10 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                  transition={{ duration: 0.4, delay: 0.3 + i * 0.1 }}
                  className="flex items-start gap-2 text-sm text-muted-foreground"
                >
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  {highlight}
                </motion.li>
              ))}
            </ul>
          </div>

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2">
            {project.techStack.map((tech) => (
              <motion.span
                key={tech}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-3 py-1.5 text-xs font-mono rounded-lg bg-secondary/80 text-secondary-foreground border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-colors cursor-default"
              >
                {tech}
              </motion.span>
            ))}
          </div>
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-primary via-accent to-primary origin-left"
        />
      </div>
    </motion.div>
  )
}

export function ProjectsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="projects" className="py-32 relative">
      {/* Background decoration */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-accent/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
        >
          {/* Section header */}
          <div className="max-w-4xl mx-auto mb-16">
            <div className="flex items-center gap-4 mb-4">
              <span className="text-primary font-mono text-sm">03.</span>
              <h2 className="text-4xl md:text-5xl font-bold text-foreground">
                Featured Projects
              </h2>
            </div>
            <p className="text-muted-foreground text-lg max-w-2xl">
              A selection of projects I&apos;ve worked on, showcasing my expertise in building scalable applications and solving complex problems.
            </p>
          </div>

          {/* Projects grid */}
          <div className="grid gap-8 max-w-5xl mx-auto">
            {projects.map((project, index) => (
              <ProjectCard 
                key={project.title} 
                project={project} 
                index={index}
                isInView={isInView}
              />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
