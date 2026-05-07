"use client"

import { motion, useMotionValue, useSpring, useTransform, AnimatePresence } from "framer-motion"
import { ArrowDown, Linkedin, Mail, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useEffect, useState, useCallback, useRef } from "react"

const roles = [
  "Full-Stack Developer",
  "Senior Frontend Engineer",
  "React & Next.js Architect",
  "AI Platform Builder",
]

function TypewriterText() {
  const [currentRole, setCurrentRole] = useState(0)
  const [displayText, setDisplayText] = useState("")
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const role = roles[currentRole]
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayText.length < role.length) {
          setDisplayText(role.slice(0, displayText.length + 1))
        } else {
          setTimeout(() => setIsDeleting(true), 2000)
        }
      } else {
        if (displayText.length > 0) {
          setDisplayText(displayText.slice(0, -1))
        } else {
          setIsDeleting(false)
          setCurrentRole((prev) => (prev + 1) % roles.length)
        }
      }
    }, isDeleting ? 50 : 100)

    return () => clearTimeout(timeout)
  }, [displayText, isDeleting, currentRole])

  return (
    <span className="text-amber-400">
      {displayText}
      <span className="animate-pulse">|</span>
    </span>
  )
}

// Particle system inspired by effica.com.au golden dust effect
function ParticleField() {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext("2d")
    if (!ctx) return

    let animationId: number
    let particles: Array<{
      x: number
      y: number
      vx: number
      vy: number
      size: number
      opacity: number
      life: number
      maxLife: number
    }> = []

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener("resize", resize)

    const createParticle = () => ({
      x: Math.random() * canvas.width,
      y: Math.random() * canvas.height,
      vx: (Math.random() - 0.5) * 0.3,
      vy: -Math.random() * 0.5 - 0.1,
      size: Math.random() * 2 + 0.5,
      opacity: 0,
      life: 0,
      maxLife: Math.random() * 200 + 100,
    })

    // Initialize particles
    for (let i = 0; i < 80; i++) {
      const p = createParticle()
      p.life = Math.random() * p.maxLife
      particles.push(p)
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      particles.forEach((p, i) => {
        p.life++
        p.x += p.vx
        p.y += p.vy

        // Fade in and out
        const lifeRatio = p.life / p.maxLife
        if (lifeRatio < 0.1) {
          p.opacity = lifeRatio * 10
        } else if (lifeRatio > 0.8) {
          p.opacity = (1 - lifeRatio) * 5
        } else {
          p.opacity = 1
        }

        // Reset if dead
        if (p.life >= p.maxLife) {
          particles[i] = createParticle()
        }

        // Draw golden particle
        const gradient = ctx.createRadialGradient(p.x, p.y, 0, p.x, p.y, p.size)
        gradient.addColorStop(0, `rgba(251, 191, 36, ${p.opacity * 0.8})`)
        gradient.addColorStop(0.5, `rgba(245, 158, 11, ${p.opacity * 0.4})`)
        gradient.addColorStop(1, `rgba(217, 119, 6, 0)`)

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = gradient
        ctx.fill()
      })

      animationId = requestAnimationFrame(animate)
    }

    animate()

    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener("resize", resize)
    }
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 z-0 pointer-events-none"
    />
  )
}

// Glowing orb like the planet effect on effica.com.au
function CosmicOrb() {
  return (
    <div className="absolute right-[-10%] top-1/2 -translate-y-1/2 w-[600px] h-[600px] md:w-[800px] md:h-[800px] pointer-events-none">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 2, ease: "easeOut" }}
        className="relative w-full h-full"
      >
        {/* Outer glow */}
        <div className="absolute inset-0 rounded-full bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent blur-[100px] animate-pulse-slow" />
        
        {/* Main orb */}
        <div className="absolute inset-[15%] rounded-full bg-gradient-to-br from-amber-900/20 via-amber-800/10 to-transparent blur-[60px]" />
        
        {/* Inner light burst */}
        <motion.div
          animate={{ opacity: [0.3, 0.6, 0.3], scale: [1, 1.05, 1] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-[30%] rounded-full bg-gradient-to-t from-transparent via-amber-400/10 to-white/5 blur-[40px]"
        />
        
        {/* Light ray */}
        <motion.div
          animate={{ opacity: [0.1, 0.3, 0.1] }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[20%] right-[20%] w-[200px] h-[400px] bg-gradient-to-b from-white/10 to-transparent blur-[60px] rotate-[-30deg]"
        />
      </motion.div>
    </div>
  )
}

// Floating golden dust clusters
function DustCloud({ className, delay = 0 }: { className?: string; delay?: number }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 2, delay }}
      className={className}
    >
      <motion.div
        animate={{ 
          x: [0, 20, -10, 0],
          y: [0, -15, 5, 0],
          opacity: [0.3, 0.6, 0.4, 0.3]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        className="w-full h-full rounded-full bg-gradient-to-br from-amber-500/20 via-orange-500/10 to-transparent blur-[80px]"
      />
    </motion.div>
  )
}

export function HeroSection() {
  const mouseX = useMotionValue(0)
  const mouseY = useMotionValue(0)

  const springConfig = { damping: 25, stiffness: 150 }
  const x = useSpring(mouseX, springConfig)
  const y = useSpring(mouseY, springConfig)

  const rotateX = useTransform(y, [-300, 300], [2, -2])
  const rotateY = useTransform(x, [-300, 300], [-2, 2])

  const handleMouseMove = (e: React.MouseEvent) => {
    const rect = e.currentTarget.getBoundingClientRect()
    const centerX = rect.left + rect.width / 2
    const centerY = rect.top + rect.height / 2
    mouseX.set(e.clientX - centerX)
    mouseY.set(e.clientY - centerY)
  }

  return (
    <section 
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#0a0a0a]"
      onMouseMove={handleMouseMove}
    >
      {/* Dark cosmic background */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0a0a0a] via-[#0d0d0d] to-[#0a0a0a]" />
      
      {/* Subtle radial gradient */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(251,191,36,0.03)_0%,transparent_70%)]" />
      
      {/* Particle canvas */}
      <ParticleField />
      
      {/* Golden dust clouds */}
      <DustCloud className="absolute top-[10%] left-[5%] w-[400px] h-[400px]" delay={0} />
      <DustCloud className="absolute bottom-[20%] left-[15%] w-[300px] h-[300px]" delay={1} />
      <DustCloud className="absolute top-[30%] right-[30%] w-[250px] h-[250px]" delay={0.5} />
      
      {/* Cosmic orb (planet-like glow on the right) */}  
      <CosmicOrb />

      {/* Noise texture */}
      <div className="absolute inset-0 opacity-[0.015] pointer-events-none z-[1]" style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 400 400' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")" }} />

      <div className="container mx-auto px-6 pt-20 relative z-10">
        <motion.div
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
          className="max-w-5xl mx-auto text-center"
        >
          {/* Status badge - effica style pill */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-10"
          >
            <span className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500/10 border border-amber-500/20 text-sm font-medium text-amber-300/90 backdrop-blur-sm">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-400"></span>
              </span>
              Available for new opportunities
            </span>
          </motion.div>

          {/* "Hi, I'm" intro */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="mb-4"
          >
            <span className="text-neutral-400 text-lg md:text-xl font-mono tracking-wide">Hi, I&apos;m</span>
          </motion.div>

          {/* Name - large golden gradient like Effica's hero */}
          <motion.h1
            initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 1, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-5xl md:text-7xl lg:text-[6.5rem] font-bold mb-6 tracking-tight leading-[1.1]"
          >
            <span className="bg-gradient-to-b from-amber-200 via-amber-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(251,191,36,0.15)]">
              Shweta Chauhan
            </span>
          </motion.h1>

          {/* Typewriter role */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-2xl md:text-4xl font-light text-neutral-300/80 mb-10 h-12"
          >
            <TypewriterText />
          </motion.div>

          {/* Description */}
          <motion.p
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.65, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="text-lg md:text-xl text-neutral-400 mb-14 max-w-2xl mx-auto leading-relaxed"
          >
            I craft <span className="text-neutral-200 font-medium">scalable, enterprise-grade web applications</span> with 
            React & Next.js. 3 years architecting 
            <span className="text-neutral-200 font-medium"> AI-powered CRM platforms</span>, 
            <span className="text-neutral-200 font-medium"> real-time systems</span>, and 
            <span className="text-neutral-200 font-medium"> high-performance UIs</span> backed by .NET.
          </motion.p>

          {/* CTA Buttons - Effica style */}
          <motion.div
            initial={{ opacity: 0, y: 30, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            transition={{ duration: 0.8, delay: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16"
          >
            <Button 
              size="lg" 
              className="group relative overflow-hidden bg-amber-500 hover:bg-amber-400 text-black font-semibold px-8 h-14 text-base rounded-xl shadow-[0_0_30px_rgba(251,191,36,0.3)] hover:shadow-[0_0_40px_rgba(251,191,36,0.5)] transition-all duration-300"
              asChild
            >
              <a href="#contact">
                <span className="relative z-10 flex items-center gap-2">
                  <Sparkles className="h-4 w-4" />
                  Let&apos;s Work Together
                </span>
              </a>
            </Button>
            <Button 
              variant="outline" 
              size="lg" 
              className="group border-neutral-700 hover:border-amber-500/50 bg-white/5 backdrop-blur-sm text-neutral-200 hover:text-amber-300 px-8 h-14 text-base rounded-xl transition-all duration-300"
              asChild
            >
              <a href="#projects" className="flex items-center gap-2">
                View My Work
                <motion.span
                  initial={{ x: 0 }}
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  →
                </motion.span>
              </a>
            </Button>
          </motion.div>

          {/* Social links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="flex items-center justify-center gap-4"
          >
            {[
              { href: "https://www.linkedin.com/in/shweta-chauhan-90a034239", icon: Linkedin, label: "LinkedIn" },
              { href: "mailto:cshweta963@gmail.com", icon: Mail, label: "Email" },
            ].map((social) => (
              <motion.a
                key={social.label}
                href={social.href}
                target={social.href.startsWith("mailto") ? undefined : "_blank"}
                rel={social.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                whileHover={{ scale: 1.1, y: -3 }}
                whileTap={{ scale: 0.95 }}
                className="group relative p-4 rounded-2xl bg-white/5 border border-neutral-800 hover:border-amber-500/40 backdrop-blur-sm transition-all duration-300"
              >
                <social.icon className="h-5 w-5 text-neutral-500 group-hover:text-amber-400 transition-colors duration-300" />
                <span className="sr-only">{social.label}</span>
                
                {/* Hover tooltip */}
                <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 text-xs text-neutral-500 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                  {social.label}
                </span>
              </motion.a>
            ))}
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.a
            href="#about"
            animate={{ y: [0, 8, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-neutral-600 hover:text-amber-400 transition-colors group"
          >
            <span className="text-xs font-mono tracking-wider uppercase">Scroll</span>
            <div className="w-6 h-10 rounded-full border-2 border-current flex items-start justify-center p-2">
              <motion.div
                animate={{ y: [0, 12, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
                className="w-1 h-1 rounded-full bg-current"
              />
            </div>
          </motion.a>
        </motion.div>
      </div>
    </section>
  )
}
