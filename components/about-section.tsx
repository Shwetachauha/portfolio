"use client"

import { motion, useInView } from "framer-motion"
import { useRef } from "react"
import { Code2, Briefcase, Award } from "lucide-react"

const stats = [
  { label: "Years Experience", value: "3", icon: Briefcase },
  { label: "Projects Shipped", value: "6+", icon: Code2 },
  { label: "Certifications", value: "5", icon: Award },
]

const highlights = [
  "React.js & Next.js Architecture",
  "TypeScript & JavaScript",
  ".NET API Integration",
  "AI Chatbot Systems",
  "Real-time Apps (SignalR)",
  "Performance Optimization",
]

export function AboutSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section id="about" className="py-32 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-b from-background via-secondary/30 to-background" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="max-w-6xl mx-auto"
        >
          {/* Section header */}
          <div className="flex items-center gap-4 mb-16">
            <span className="text-primary font-mono text-sm">01.</span>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground">
              About Me
            </h2>
            <div className="flex-1 h-px bg-border" />
          </div>

          <div className="space-y-12">
            {/* Content */}
            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="space-y-4 max-w-3xl"
              >
                <p className="text-lg text-muted-foreground leading-relaxed">
                  I&apos;m a <span className="text-foreground font-medium">full stack engineer</span> with 
                 3 years of experience specializing in <span className="text-primary font-medium">React.js</span>, 
                  <span className="text-primary font-medium"> Next.js</span>, 
                  <span className="text-primary font-medium"> TypeScript</span>, and enterprise-grade 
                  <span className="text-primary font-medium"> Node.js-backed platforms</span>. I architect scalable, 
                  high-performance web applications with a focus on clean code, optimal UX, and real-time capabilities.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  Currently at <span className="text-foreground font-medium">Dotsquares</span>, 
                  I lead the frontend development of <span className="text-foreground font-medium">Effica</span> — an 
                  AI-powered CRM platform — integrating AI chatbots, real-time chat systems with SignalR, 
                  and complex multi-tenant dashboards. Recognized as <span className="text-primary font-medium">Employee of the Month</span> for 
                  exceptional contributions to the Effica project.
                </p>

                <p className="text-lg text-muted-foreground leading-relaxed">
                  I hold a <span className="text-foreground font-medium">Master of Technology</span> degree 
                  from Singhania University and a <span className="text-foreground font-medium">Bachelor of Technology</span> from 
                  Abdul Kalam Technical University. I&apos;m also a Google Cloud certified <span className="text-primary font-medium">Generative AI Leader</span>, 
                  passionate about leveraging AI to build smarter, more intuitive applications.
                </p>
              </motion.div>

              {/* Skills highlight */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="pt-6"
              >
                <h3 className="text-sm font-mono text-primary mb-4">Core Expertise</h3>
                <div className="flex flex-wrap gap-2">
                  {highlights.map((skill, index) => (
                    <motion.span
                      key={skill}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3, delay: 0.5 + index * 0.05 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      className="px-4 py-2 rounded-lg bg-secondary/80 text-secondary-foreground text-sm border border-border/50 hover:border-primary/30 hover:bg-primary/10 transition-all cursor-default"
                    >
                      {skill}
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-6 max-w-md">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                  transition={{ duration: 0.5, delay: 0.6 + index * 0.1 }}
                  className="text-center p-5 rounded-xl glass border border-border/50 hover:border-primary/30 transition-colors"
                >
                  <stat.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                  <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                  <div className="text-xs text-muted-foreground">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
