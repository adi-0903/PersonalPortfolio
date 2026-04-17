"use client"

import { motion, useMotionValue, useSpring, useTransform, type Variants, AnimatePresence } from "framer-motion"
import { ExternalLink, Github, Terminal, Cpu, Globe, Zap, Shield, ChevronRight } from "lucide-react"
import { useState, useRef, useEffect } from "react"

const PROJECTS = [
  {
    title: "Neural Intelligence Fusion",
    description: "A high-fidelity OSINT command center for real-time aggregation, geocoding, and visualization of global intelligence. Built with a 'Neural Architecture' aesthetic, it transforms raw signal data into actionable tactical insights.",
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=1400&q=80",
    technologies: ["React", "Node.js", "MongoDB", "Leaflet", "Real-time AI"],
    liveUrl: "https://intel-dashboard-client.vercel.app",
    githubUrl: "https://github.com/adi-0903/intel-dashboard-client",
    featured: true,
  },
  {
    title: "Heritage Brews",
    description: "A museum-grade e-commerce sanctuary celebrating the 130-year legacy of Indian Tea & Coffee. Blends cinematic storytelling with a robust Django backend and high-fidelity visual sovereignty.",
    image: "/images/heritage-brews.png",
    technologies: ["React 19", "Vite", "Django", "PostgreSQL", "WhatsApp Integration"],
    githubUrl: "https://github.com/adi-0903/Heritage-Brews",
    featured: true,
  },
  {
    title: "ChatHive",
    description: "Secure, low-latency messaging platform with presence indicators, media sharing, and AI-powered smart replies for high-volume teams.",
    image: "https://images.unsplash.com/photo-1525182008055-f88b95ff7980?auto=format&fit=crop&w=1400&q=80",
    technologies: ["React Native", "Express.js", "PostgreSQL", "WebSockets"],
    liveUrl: "https://example.com/chathive",
    githubUrl: "https://github.com/aditya-singhal/chathive",
    featured: true,
  },
  {
    title: "MentIQ",
    description: "Immersive e-learning app with offline-first modules, adaptive quizzes, and progress analytics designed for emerging market bandwidth.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    technologies: ["React Native", "SQLite", "Expo"],
    githubUrl: "https://github.com/adi-0903/E-learningApp-MentIQ",
    featured: true,
  },
  {
    title: "Mind Matrix",
    description: "Story-driven blogging platform with editorial workflows, AI drafting assistance, and a hardened Django API for publishing at scale.",
    image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1400&q=80",
    technologies: ["React", "Django", "PostgreSQL", "Tailwind"],
    liveUrl: "https://blogginwebsite-frontend.vercel.app",
    githubUrl: "https://github.com/adi-0903/blogginwebsite-Frontend",
  },
  {
    title: "AI Resume Analyzer",
    description: "LLM-assisted talent intelligence engine parsing résumés, benchmarking candidates, and surfacing actionable hiring insights.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    technologies: ["LLM", "Machine Learning", "Python", "FastAPI"],
    githubUrl: "https://github.com/adi-0903/AI-RESUME-ANALYZER",
  },
  {
    title: "VisionEdge",
    description: "Computer-vision microservice detecting age and gender in real time using optimized OpenCV pipelines for retail analytics.",
    image: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1400&q=80",
    technologies: ["OpenCV", "Python", "Flask", "Docker"],
    githubUrl: "https://github.com/adi-0903/VisionEdge",
  },
  {
    title: "StockPulse ML",
    description: "Signal-driven stock price prediction engine blending feature engineering, ensemble models, and real-time dashboards for actionable insights.",
    image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Python", "Scikit-learn", "XGBoost", "FastAPI", "Power BI"],
    githubUrl: "https://github.com/adi-0903/Stock-Prediction",
  },
  {
    title: "FacePass",
    description: "Production-ready face authentication system for enterprise attendance tracking — sub-500ms recognition, multi-layer anti-spoofing (LBP + reflection + blur).",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Python", "FastAPI", "OpenCV", "dlib", "SQLite"],
    githubUrl: "https://github.com/adi-0903/FacePass",
  },
  {
    title: "Store Management",
    description: "Role-based inventory platform for Managers & Store Keepers — features a statistics dashboard, full product CRUD, GraphQL API, and RBAC menus.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Next.js", "TypeScript", "NestJS", "GraphQL", "Prisma"],
    githubUrl: "https://github.com/adi-0903/Store-management",
  },
]

function ProjectCard({ project, index, isFeatured = false }: { project: any, index: number, isFeatured?: boolean }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return
    const rect = cardRef.current.getBoundingClientRect()
    const width = rect.width
    const height = rect.height
    const mouseX = e.clientX - rect.left
    const mouseY = e.clientY - rect.top
    const xPct = mouseX / width - 0.5
    const yPct = mouseY / height - 0.5
    x.set(xPct)
    y.set(yPct)
  }

  const handleMouseLeave = () => {
    x.set(0)
    y.set(0)
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      style={{
        rotateX: isFeatured ? 0 : rotateX,
        rotateY: isFeatured ? 0 : rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`group relative ${isFeatured ? "md:col-span-1" : "col-span-1"}`}
    >
      <div className={`relative overflow-hidden rounded-[2rem] bg-card/10 backdrop-blur-2xl border border-white/5 hover:border-white/20 transition-all duration-500 shadow-2xl ${isFeatured ? "p-3 sm:p-5" : "h-full flex flex-col"}`}>
        {/* Visual Background Elements */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent pointer-events-none" />
        <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/5 blur-[60px] -z-10 group-hover:bg-cyan-500/10 transition-all" />
        
        <div className="flex flex-col h-full">
          {/* Image Block */}
          <div className={`relative rounded-[1.5rem] overflow-hidden aspect-video shadow-inner`}>
            <motion.img
              src={project.image}
              alt={project.title}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              whileHover={{ scale: 1.05 }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
            
            {/* Status Indicators */}
            <div className="absolute top-4 left-4 flex gap-2">
              <div className="px-2 py-0.5 rounded-full bg-black/60 backdrop-blur-md border border-white/10 flex items-center gap-1.5">
                <div className="w-1 h-1 rounded-full bg-cyan-500 animate-pulse" />
                <span className="text-[8px] font-mono font-bold tracking-[0.2em] text-cyan-400">ACTIVE</span>
              </div>
            </div>

            {/* Float Links always visible partly or on hover */}
            <div className="absolute bottom-4 right-4 flex gap-2">
              <motion.a
                href={project.githubUrl}
                whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                className="p-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-white"
              >
                <Github size={16} />
              </motion.a>
              {project.liveUrl && (
                <motion.a
                  href={project.liveUrl}
                  whileHover={{ scale: 1.1, backgroundColor: "rgba(255,255,255,0.15)" }}
                  className="p-2 rounded-xl bg-white/10 backdrop-blur-xl border border-white/10 text-white"
                >
                  <ExternalLink size={16} />
                </motion.a>
              )}
            </div>
          </div>

          {/* Content Block */}
          <div className="p-5 flex flex-col flex-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="h-[1px] w-6 bg-cyan-500/30" />
              <span className="text-[8px] font-mono font-black uppercase tracking-[0.3em] text-cyan-500/40">
                NODE::{index.toString().padStart(2, '0')}
              </span>
            </div>
            
            <h3 className={`font-black tracking-tight text-white group-hover:text-cyan-400 transition-colors ${isFeatured ? "text-2xl mb-3" : "text-xl mb-3"}`}>
              {project.title}
            </h3>
            
            <p className={`text-white/40 leading-relaxed font-medium text-xs mb-6 ${isFeatured ? "line-clamp-2" : "line-clamp-3"}`}>
              {project.description}
            </p>

            {/* Tech Matrix */}
            <div className="flex flex-wrap gap-1.5 mt-auto">
              {project.technologies.slice(0, 3).map((tech: string) => (
                <span
                  key={tech}
                  className="px-2 py-1 rounded-md bg-white/5 border border-white/5 text-[9px] font-mono font-bold tracking-wider text-white/30 group-hover:border-white/10 group-hover:text-white/60 transition-all uppercase"
                >
                  {tech}
                </span>
              ))}
              {project.technologies.length > 3 && (
                <span className="px-1.5 py-1 text-[8px] font-mono text-white/10">+{project.technologies.length - 3}</span>
              )}
            </div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default function ProjectsSection() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }
    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <section id="projects" className="py-32 sm:py-48 relative overflow-hidden bg-[#050505]">
      {/* Demon Mode Background Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        {/* Architectural Background Text */}
        <div className="absolute top-20 left-1/2 -translate-x-1/2 text-[25vw] font-black text-white/[0.02] italic select-none pointer-events-none whitespace-nowrap">
          SYSTEMS_CORE
        </div>

        {/* Dynamic Neural Grid */}
        <div className="absolute inset-0 neural-grid opacity-30" />
        
        {/* Kinetic Particles */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-cyan-500/20 rounded-full"
            animate={{
              x: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              y: [Math.random() * 100 + "%", Math.random() * 100 + "%"],
              opacity: [0.1, 0.4, 0.1],
              scale: [1, 2, 1],
            }}
            transition={{
              duration: Math.random() * 10 + 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        ))}

        {/* Aggressive Glows */}
        <motion.div
          animate={{
            x: mousePosition.x - 400,
            y: mousePosition.y - 400,
          }}
          transition={{ type: "spring", damping: 50, stiffness: 200 }}
          className="absolute w-[800px] h-[800px] bg-cyan-600/5 blur-[160px] rounded-full opacity-60"
        />
        <div className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] bg-purple-600/10 blur-[180px] rounded-full" />
        <div className="absolute -bottom-[10%] -left-[10%] w-[50%] h-[50%] bg-pink-600/5 blur-[180px] rounded-full" />

        {/* Scanning Lines */}
        <div className="scanline" />
        <div className="scanline" style={{ animationDelay: "5s", opacity: 0.05 }} />
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="mb-32">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 mb-8"
          >
            <div className="h-[2px] w-24 bg-gradient-to-r from-cyan-500 to-transparent" />
            <span className="text-[10px] font-mono font-black uppercase tracking-[0.6em] text-cyan-500">
              Intelligence_Repository
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="text-6xl sm:text-8xl font-black tracking-tighter text-white mb-8"
          >
            THE<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/10 italic">ARCHIVE</span>
          </motion.h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
            <p className="text-lg text-white/40 leading-relaxed max-w-xl font-medium">
              A curated collection of autonomous systems and neural architectures. Each node represents a paradigm shift in engineering.
            </p>
            <div className="flex justify-end gap-12 text-right">
              <div>
                <div className="text-[8px] font-mono text-white/20 uppercase mb-2">Systems</div>
                <div className="text-3xl font-black text-white/60">12</div>
              </div>
              <div>
                <div className="text-[8px] font-mono text-white/20 uppercase mb-2">Uptime</div>
                <div className="text-3xl font-black text-cyan-500">99.9%</div>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {/* Featured Sections First */}
          {PROJECTS.filter(p => p.featured).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index} isFeatured={true} />
          ))}

          {/* Standard Archive Section */}
          <div className="col-span-full pt-16 flex items-center gap-4 mb-4">
            <h4 className="text-[10px] font-mono font-black uppercase tracking-[0.5em] text-white/10 whitespace-nowrap">Archives_Deep_Storage</h4>
            <div className="h-[1px] w-full bg-gradient-to-r from-white/5 via-white/5 to-transparent" />
          </div>

          {PROJECTS.filter(p => !p.featured).map((project, index) => (
            <ProjectCard key={project.title} project={project} index={index + 4} />
          ))}
        </div>

        {/* Global HUD Ornament */}
        <div className="mt-40 border-t border-white/5 pt-12 flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[8px] font-mono text-white/10 uppercase tracking-[0.5em] flex items-center gap-8">
            <div className="flex items-center gap-2">
              <Zap size={10} className="text-cyan-500/40" />
              SYSTEMS_ENCRYPTED
            </div>
            <div className="flex items-center gap-2">
              <Shield size={10} className="text-purple-500/40" />
              SECURE_VOLT_ACTIVE
            </div>
          </div>
          <div className="h-12 w-[1px] bg-white/5 hidden md:block" />
          <div className="flex items-center gap-4">
             <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_15px_#10b981]" />
             <span className="text-[10px] font-mono text-emerald-500/40 font-black tracking-widest">GLOBAL_SYNC_COMPLETE</span>
          </div>
        </div>
      </div>
    </section>
  )
}
