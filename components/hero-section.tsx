"use client"

import { motion, AnimatePresence, useScroll, useTransform, useSpring, useMotionValue, type Variants } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Sparkles, Zap, ArrowRight, Github, Linkedin, Cpu, Globe, Terminal, FileText } from "lucide-react"
import { AnimatedBackground } from "./animated-background"

const TITLES = [
  "Architecting Autonomous Intelligence",
  "Engineering Neural Full-Stack Systems",
  "Developing Kinetic User Interfaces",
  "Optimizing Large-Scale AI Pipelines"
]

export default function HeroSection() {
  const [currentTitle, setCurrentTitle] = useState(0)
  const x = useMotionValue(0)
  const y = useMotionValue(0)
  const [isLoaded, setIsLoaded] = useState(false)
  const heroRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    setIsLoaded(true)
    const interval = setInterval(() => {
      setCurrentTitle((prev) => (prev + 1) % TITLES.length)
    }, 4500)

    const handleMouseMove = (e: MouseEvent) => {
      const { clientX, clientY } = e
      const { innerWidth, innerHeight } = window
      x.set((clientX / innerWidth - 0.5) * 20)
      y.set((clientY / innerHeight - 0.5) * 20)
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => {
      clearInterval(interval)
      window.removeEventListener("mousemove", handleMouseMove)
    }
  }, [])

  // Spring-smoothed parallax
  const springConfig = { damping: 25, stiffness: 150 }
  const mouseX = useSpring(x, springConfig)
  const mouseY = useSpring(y, springConfig)

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.5 },
    },
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 60, filter: "blur(10px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <section
      ref={heroRef}
      className="min-h-screen flex items-center justify-center relative overflow-hidden bg-[#020202] py-20"
    >
      <AnimatedBackground />

      {/* Advanced HUD Layer */}
      <div className="absolute inset-0 z-0 pointer-events-none select-none overflow-hidden">
        {/* Cinematic Grid with Perspective */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_30%,transparent_100%)]" />

        {/* Peripheral Data Nodes */}
        <div className="absolute top-20 left-20 hidden xl:block">
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity }}
            className="flex flex-col gap-4"
          >
            <div className="flex items-center gap-3 text-[10px] font-mono text-cyan-500/40">
              <Terminal className="w-3 h-3" />
              SYSTEM_LINK_ESTABLISHED
            </div>
            <div className="w-48 h-[1px] bg-gradient-to-r from-cyan-500/20 to-transparent" />
          </motion.div>
        </div>

        <div className="absolute bottom-20 right-20 hidden xl:block text-right">
          <motion.div
            animate={{ opacity: [0.2, 0.5, 0.2] }}
            transition={{ duration: 4, repeat: Infinity, delay: 2 }}
            className="flex flex-col items-end gap-4"
          >
            <div className="flex items-center gap-3 text-[10px] font-mono text-purple-500/40">
              NEURAL_NODE_SYNC_COMPLETE
              <Cpu className="w-3 h-3" />
            </div>
            <div className="w-48 h-[1px] bg-gradient-to-l from-purple-500/20 to-transparent" />
          </motion.div>
        </div>

        {/* Global Scanning Line */}
        <motion.div
          className="absolute left-0 w-full h-[2px] bg-gradient-to-r from-transparent via-cyan-500/10 to-transparent"
          animate={{
            top: ["-5%", "105%"]
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <motion.div
        className="relative z-10 w-full max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col items-center"
        variants={containerVariants}
        initial="hidden"
        animate={isLoaded ? "visible" : "hidden"}
      >
        {/* Core Intelligence Badge */}
        <motion.div variants={fadeInUp} className="mb-14">
          <div className="group relative">
            <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 rounded-full blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            <div className="relative px-8 py-3 rounded-full bg-black/60 backdrop-blur-3xl border border-white/5 flex items-center gap-4 group-hover:border-cyan-500/30 transition-all duration-300">
              <div className="flex gap-1">
                {[1, 2, 3].map(i => (
                  <motion.div
                    key={i}
                    animate={{ height: [4, 12, 4] }}
                    transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
                    className="w-1 bg-cyan-500/80 rounded-full"
                  />
                ))}
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.5em] text-foreground/50">
                Cognitive Architecture <span className="text-cyan-500">v0.9.3</span>
              </span>
            </div>
          </div>
        </motion.div>

        {/* Spatial Typography */}
        <div className="relative mb-12 text-center [perspective:1000px]">
          <motion.div
            style={{ x: mouseX, y: mouseY }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.05 }}
            className="absolute -top-1/2 left-1/2 -translate-x-1/2 text-[15vw] font-[1000] text-white opacity-5 pointer-events-none select-none italic"
          >
            INNOVATOR
          </motion.div>

          <motion.h1
            style={{ rotateX: mouseY, rotateY: mouseX }}
            className="text-[clamp(3.5rem,12vw,10rem)] font-black tracking-tighter leading-[0.8] text-white flex flex-col"
          >
            <motion.span variants={fadeInUp} className="relative inline-block">
              ADITYA
              <motion.span
                className="absolute -top-4 -right-8 text-xs font-mono text-cyan-500/40 opacity-0 group-hover:opacity-100"
                animate={{ opacity: [0, 1, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                [00]
              </motion.span>
            </motion.span>
            <motion.span
              variants={fadeInUp}
              className="relative text-transparent bg-clip-text bg-gradient-to-b from-white via-white/80 to-white/20 italic"
            >
              SINGHAL
            </motion.span>
          </motion.h1>
        </div>

        {/* Dynamic Mission Selector */}
        <motion.div variants={fadeInUp} className="h-20 mb-16 flex items-center justify-center relative w-full overflow-hidden">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentTitle}
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 1.05, y: -20 }}
              transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="flex items-center gap-6"
            >
              <div className="h-[1px] w-12 bg-gradient-to-r from-transparent to-white/20" />
              <span className="text-xl sm:text-3xl font-light text-foreground/80 tracking-[0.2em] uppercase text-center max-w-xl">
                {TITLES[currentTitle]}
              </span>
              <div className="h-[1px] w-12 bg-gradient-to-l from-transparent to-white/20" />
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* High-Fidelity Action Core */}
        <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row items-center justify-center gap-8 mb-24">
          <motion.a
            href="#projects"
            whileHover={{ scale: 1.05, boxShadow: "0 0 50px rgba(255,255,255,0.1)" }}
            whileTap={{ scale: 0.95 }}
            className="group relative px-12 py-6 rounded-[2rem] bg-white text-black font-[900] overflow-hidden transition-all"
          >
            <span className="relative z-10 flex items-center gap-3 text-lg">
              Launch Interface
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </span>
            {/* Liquid Fill Hover Effect */}
            <motion.div
              className="absolute inset-0 bg-gradient-to-tr from-cyan-400 to-purple-400 opacity-0 group-hover:opacity-10 transition-opacity"
            />
          </motion.a>

          <motion.a
            href="https://drive.google.com/file/d/1ghcnuD6LCzm3uiTH98Ecblh751Ah8X0k/view?usp=drive_link"
            target="_blank"
            whileHover={{ scale: 1.05, backgroundColor: "rgba(255,255,255,0.05)" }}
            whileTap={{ scale: 0.95 }}
            className="group px-12 py-6 rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-3xl text-white font-black flex items-center gap-3 transition-all hover:border-cyan-500/30 shadow-2xl"
          >
            <FileText className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            <span>Download Resume</span>
          </motion.a>
        </motion.div>

        {/* Global Distribution Stats (Holographic) */}
        <motion.div
          variants={fadeInUp}
          className="grid grid-cols-2 md:grid-cols-4 gap-x-14 md:gap-x-24 gap-y-10 w-full max-w-4xl border-t border-white/5 pt-16"
        >
          {[
            { label: "Core_Framework", val: "MERN Stack+" },
            { label: "Neural_Engine", val: "TensorFlow" },
            { label: "Logic_Architecture", val: "Autonomous" },
            { label: "Uptime_Status", val: "Active_01" },
          ].map((stat) => (
            <div key={stat.label} className="group cursor-default">
              <div className="text-[9px] font-mono text-cyan-500/30 group-hover:text-cyan-500 transition-colors uppercase mb-2 tracking-widest">
                {stat.label}
              </div>
              <div className="text-xl font-black text-white/60 group-hover:text-white transition-colors tracking-tighter">
                {stat.val}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Cinematic Scroll Navigation */}
        <motion.div
          animate={{ opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 4, repeat: Infinity }}
          className="absolute bottom-10 flex flex-col items-center gap-2 group pointer-events-none"
        >
          <div className="w-px h-16 bg-gradient-to-b from-white/20 via-white/10 to-transparent" />
          <span className="text-[8px] font-black uppercase tracking-[0.8em] text-white/20">
            Navigation_Protocol
          </span>
        </motion.div>
      </motion.div>

      {/* Extreme Visual Flare Elements */}
      <div className="absolute top-1/4 -right-1/4 w-[800px] h-[800px] bg-purple-600/5 blur-[160px] rounded-full pointer-events-none" />
      <div className="absolute top-3/4 -left-1/4 w-[800px] h-[800px] bg-cyan-600/5 blur-[160px] rounded-full pointer-events-none" />
    </section>
  )
}
