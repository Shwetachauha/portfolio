"use client"

import { motion, useInView } from "framer-motion"
import { useRef, useState } from "react"
import { Award, ExternalLink, Trophy, Cloud, Star } from "lucide-react"

const certifications = [
  {
    title: "Employee of the Month",
    issuer: "Dotsquares",
    date: "June 2025",
    description:
      "Awarded for exceptional contributions to the Effica AI-powered CRM platform, demonstrating outstanding technical leadership and delivery excellence.",
    icon: Trophy,
    gradient: "from-yellow-500/20 via-amber-500/10 to-yellow-500/5",
    borderColor: "hover:border-yellow-500/50",
    iconColor: "text-yellow-500",
    bgColor: "bg-yellow-500/10",
    featured: true,
  },
  {
    title: "Generative AI Leader",
    issuer: "Google Cloud — Coursera",
    date: "April 2026",
    description:
      "Professional Certificate covering 5 courses: AI foundational concepts, navigating the AI landscape, Gen AI apps, agents, and beyond chatbots.",
    verifyUrl: "https://coursera.org/verify/professional-cert/W5SDF5OC66IP",
    shareUrl: "https://coursera.org/share/220809454bbd4a7bf535d6a52d790102",
    icon: Cloud,
    gradient: "from-amber-500/20 via-orange-500/10 to-amber-500/5",
    borderColor: "hover:border-amber-500/50",
    iconColor: "text-amber-400",
    bgColor: "bg-amber-500/10",
    courses: [
      "Gen AI: Beyond the Chatbot",
      "Gen AI: Unlock Foundational Concepts",
      "Gen AI: Navigate the Landscape",
      "Gen AI Apps: Transform Your Work",
      "Gen AI Agents: Transform Your Organization",
    ],
    featured: true,
  },
]

function CertificationCard({
  cert,
  index,
  isInView,
}: {
  cert: (typeof certifications)[0]
  index: number
  isInView: boolean
}) {
  const [isHovered, setIsHovered] = useState(false)
  const Icon = cert.icon

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="group relative"
    >
      {/* Featured badge */}
      {cert.featured && (
        <div className="absolute -top-3 left-6 z-10">
          <span className="px-3 py-1 text-xs font-mono bg-primary text-primary-foreground rounded-full flex items-center gap-1">
            <Star className="h-3 w-3" />
            {index === 0 ? "Achievement" : "Professional Certificate"}
          </span>
        </div>
      )}

      <div
        className={`relative overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 ${cert.borderColor} ${isHovered ? "shadow-2xl shadow-primary/10" : ""}`}
      >
        {/* Gradient background */}
        <div
          className={`absolute inset-0 bg-gradient-to-br ${cert.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
        />

        {/* Content */}
        <div className="relative p-8">
          {/* Header */}
          <div className="flex items-start gap-4 mb-6">
            <motion.div
              animate={{ rotate: isHovered ? 10 : 0, scale: isHovered ? 1.1 : 1 }}
              transition={{ duration: 0.3 }}
              className={`p-4 rounded-xl ${cert.bgColor} border border-border/30`}
            >
              <Icon className={`h-7 w-7 ${cert.iconColor}`} />
            </motion.div>
            <div className="flex-1">
              <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                {cert.title}
              </h3>
              <p className="text-sm text-muted-foreground font-mono mt-1">
                {cert.issuer} • {cert.date}
              </p>
            </div>
            {cert.shareUrl && (
              <motion.a
                href={cert.shareUrl}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="p-2 rounded-lg hover:bg-primary/10 transition-colors"
              >
                <ExternalLink className="h-5 w-5 text-muted-foreground hover:text-primary" />
              </motion.a>
            )}
          </div>

          {/* Description */}
          <p className="text-muted-foreground mb-6 leading-relaxed">
            {cert.description}
          </p>

          {/* Courses list (for multi-course certs) */}
          {cert.courses && (
            <div className="mb-4">
              <h4 className="text-sm font-semibold text-foreground mb-3 flex items-center gap-2">
                <Award className="h-4 w-4 text-primary" />
                Courses Completed
              </h4>
              <ul className="grid gap-2">
                {cert.courses.map((course, i) => (
                  <motion.li
                    key={i}
                    initial={{ opacity: 0, x: -10 }}
                    animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }}
                    transition={{ duration: 0.4, delay: 0.4 + i * 0.08 }}
                    className="flex items-center gap-2 text-sm text-muted-foreground"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                    {course}
                  </motion.li>
                ))}
              </ul>
            </div>
          )}

          {/* Verify link */}
          {cert.verifyUrl && (
            <motion.a
              href={cert.verifyUrl}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="inline-flex items-center gap-2 text-sm text-primary font-medium hover:underline"
            >
              Verify Certificate
              <ExternalLink className="h-3.5 w-3.5" />
            </motion.a>
          )}
        </div>

        {/* Bottom accent line */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: isHovered ? 1 : 0 }}
          transition={{ duration: 0.3 }}
          className="h-1 bg-gradient-to-r from-primary via-accent to-primary origin-left"
        />
      </div>
    </motion.div>
  )
}

export function CertificationsSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="certifications" className="py-32 relative">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/20 to-background" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-primary/5 rounded-full blur-3xl" />
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
            <span className="text-primary font-mono text-sm">05.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              Certifications & Awards
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          {/* Certifications grid */}
          <div className="max-w-4xl mx-auto grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {certifications.map((cert, index) => (
              <CertificationCard
                key={cert.title}
                cert={cert}
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
