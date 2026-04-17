"use client"

import { motion, type Variants, useMotionValue, useSpring, useTransform } from "framer-motion"
import { useRef, useState, useEffect } from "react"
import { Code2, Brain, Database, Globe, Layers, Sparkles, Cpu, Terminal } from "lucide-react"

const SKILL_CATEGORIES = [
  {
    category: "Languages",
    description: "Polyglot foundations powering every industrial-grade build.",
    level: "Elite Protocol",
    skills: ["Python", "C++", "SQL", "TypeScript", "JavaScript"],
    color: "from-blue-600 to-indigo-700",
    icon: Code2,
    stats: "Lvl 99 Syntax"
  },
  {
    category: "Intelligence Domains",
    description: "Research-backed expertise deployed to production environments.",
    level: "Neural Lead",
    skills: ["NLP", "Computer Vision", "FAISS", "RL", "Time Series", "LLMs", "Deep Learning", "NLTK", "YOLO", "Selenium", "Scrapy"],
    color: "from-purple-500 to-fuchsia-600",
    icon: Brain,
    stats: "98% Efficiency"
  },
  {
    category: "Frameworks & Libs",
    description: "Battle-tested ML toolchain for rapid experimentation and scaling.",
    level: "Architect",
    skills: ["TensorFlow", "Keras", "Scikit", "OpenCV", "Matplotlib", "Seaborn", "Hugging Face", "RNN/CNN", "Django", "FastAPI", "LangChain"],
    color: "from-emerald-500 to-green-600",
    icon: Database,
    stats: "Enterprise Ready"
  },
  {
    category: "Web & App Development",
    description: "Shipping immersive, high-performance products across devices.",
    level: "System Core",
    skills: ["MERN Stack", "Next.Js", "React Native", "Flutter", "Laravel", "REST APIs", "JWT Auth"],
    color: "from-blue-500 to-cyan-600",
    icon: Layers,
    stats: "Sub-100ms LCP"
  },
  {
    category: "Tools & Platforms",
    description: "Operational excellence from repository to global deployment.",
    level: "Ops Master",
    skills: ["Git / GitHub", "Deployment", "Power BI", "Streamlit", "Docker"],
    color: "from-cyan-500 to-teal-600",
    icon: Globe,
    stats: "99.9% Uptime"
  }
]

export default function SkillsSection() {
  const [isLoaded, setIsLoaded] = useState(false)

  useEffect(() => {
    setIsLoaded(true)
  }, [])

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.3,
      },
    },
  }

  return (
    <section className="py-32 sm:py-48 relative overflow-hidden bg-background" id="skills">
      {/* Advanced Ambient Background */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_20%_20%,#3b076415,transparent_50%)]" />
        <div className="absolute bottom-0 right-0 w-full h-full bg-[radial-gradient(circle_at_80%_80%,#0ea5e910,transparent_50%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(white,transparent_85%)]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-cyan-500 text-[10px] font-black uppercase tracking-[0.4em] mb-8"
          >
            <Terminal className="w-3 h-3" />
            Skill Registry v4.2
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-7xl sm:text-8xl font-black text-white tracking-tighter leading-none mb-8"
          >
            Technical <br />
            <span className="bg-gradient-to-r from-gray-100 via-gray-400 to-gray-800 bg-clip-text text-transparent italic">
              Super-Position
            </span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-muted-foreground text-lg max-w-2xl mx-auto font-medium"
          >
            A multi-dimensional tech stack engineered for high-frequency iteration and enterprise-grade intelligence.
          </motion.p>
        </div>

        {/* Intelligence Grid */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12"
        >
          {SKILL_CATEGORIES.map((category, idx) => (
            <SkillCard key={category.category} category={category} idx={idx} />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

function SkillCard({ category, idx }: { category: any; idx: number }) {
  const cardRef = useRef<HTMLDivElement>(null)
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const mouseXSpring = useSpring(x)
  const mouseYSpring = useSpring(y)

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["10deg", "-10deg"])
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-10deg", "10deg"])

  const handleMouseMove = (e: React.MouseEvent) => {
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

  const itemVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, y: 40 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      variants={itemVariants}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className="group relative"
    >
      {/* 3D Content Container */}
      <div
        style={{ transform: "translateZ(80px)" }}
        className="relative h-full p-10 rounded-[3rem] bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/5 backdrop-blur-3xl overflow-hidden group-hover:border-white/20 transition-all duration-500 shadow-2xl"
      >
        {/* Animated Background Aura */}
        <div className={`absolute -top-24 -right-24 w-64 h-64 rounded-full bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 blur-[80px] transition-opacity duration-1000`} />

        <div className="relative z-10 flex flex-col h-full">
          {/* Card Header */}
          <div className="flex items-start justify-between mb-10">
            <div className={`p-5 rounded-2xl bg-gradient-to-br ${category.color} shadow-lg shadow-black/40 group-hover:scale-110 transition-transform duration-700`}>
              <category.icon className="w-8 h-8 text-white" />
            </div>
            <div className="text-right">
              <div className="text-[10px] font-black text-white/40 uppercase tracking-[0.3em] mb-1">Status</div>
              <div className="text-sm font-bold text-cyan-400 font-mono">{category.stats}</div>
            </div>
          </div>

          <div className="mb-8">
            <div className="inline-block px-3 py-1 rounded-full bg-white/5 border border-white/5 text-[9px] font-black uppercase tracking-widest text-white/60 mb-4">
              {category.level}
            </div>
            <h3 className="text-4xl font-black text-white tracking-tighter mb-4">{category.category}</h3>
            <p className="text-gray-400 text-sm leading-relaxed max-w-sm">
              {category.description}
            </p>
          </div>

          {/* Skill Tag System */}
          <div className="mt-auto flex flex-wrap gap-2">
            {category.skills.map((skill: string, sIdx: number) => (
              <motion.div
                key={skill}
                whileHover={{ scale: 1.05, y: -2 }}
                className="px-4 py-2 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/5 transition-all text-[11px] font-bold text-white/70 group-hover:text-white cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>

        {/* Decorative Corner Element */}
        <div className="absolute bottom-6 right-8 text-[120px] font-[1000] text-white/[0.02] leading-none pointer-events-none select-none group-hover:text-white/[0.04] transition-colors">
          {idx + 1}
        </div>
      </div>
    </motion.div>
  )
}
