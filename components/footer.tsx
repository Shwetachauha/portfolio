"use client"

import { motion } from "framer-motion"
import { Linkedin, Mail, Heart, ArrowUp } from "lucide-react"
import { Button } from "@/components/ui/button"

const socialLinks = [
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/shweta-chauhan-90a034239",
    icon: Linkedin,
  },
  {
    name: "Email",
    href: "mailto:cshweta963@gmail.com",
    icon: Mail,
  },
]

const quickLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Experience", href: "#experience" },
  { name: "Contact", href: "#contact" },
]

export function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer className="relative pt-20 pb-8 border-t border-border/50">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-t from-secondary/30 to-transparent" />

      <div className="container mx-auto px-6">
        {/* Main footer content */}
        <div className="grid md:grid-cols-3 gap-12 mb-16">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <a href="#" className="inline-block mb-4">
              <span className="text-3xl font-bold gradient-text">SC</span>
            </a>
            <p className="text-muted-foreground mb-4 max-w-xs">
              Frontend Developer passionate about creating beautiful, performant web applications.
            </p>
            <div className="flex gap-3">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target={link.href.startsWith("mailto") ? undefined : "_blank"}
                  rel={link.href.startsWith("mailto") ? undefined : "noopener noreferrer"}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="p-2.5 rounded-xl bg-secondary/80 border border-border/50 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all"
                >
                  <link.icon className="h-5 w-5" />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Get in touch */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-sm font-semibold text-foreground mb-4">Get in Touch</h3>
            <p className="text-muted-foreground text-sm mb-4">
              Have a project in mind? Let&apos;s create something amazing together.
            </p>
            <Button asChild className="rounded-xl">
              <a href="#contact">Start a Conversation</a>
            </Button>
          </motion.div>
        </div>

        {/* Bottom bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
          className="pt-8 border-t border-border/50 flex flex-col sm:flex-row items-center justify-between gap-4"
        >
          <p className="text-sm text-muted-foreground flex items-center gap-1.5">
            Crafted with <Heart className="h-4 w-4 text-red-500 fill-red-500" /> by Shweta Chauhan
          </p>
          
          <p className="text-xs text-muted-foreground">
            &copy; {new Date().getFullYear()} All rights reserved.
          </p>

          {/* Back to top button */}
          <motion.button
            onClick={scrollToTop}
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="p-2.5 rounded-xl bg-secondary/80 border border-border/50 hover:border-primary/30 hover:bg-primary/10 hover:text-primary transition-all"
          >
            <ArrowUp className="h-5 w-5" />
            <span className="sr-only">Back to top</span>
          </motion.button>
        </motion.div>
      </div>
    </footer>
  )
}
