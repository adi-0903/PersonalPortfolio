"use client"

import { motion, AnimatePresence } from "framer-motion"
import { Award, Briefcase, Trophy, ChevronRight, Binary, Cpu, Globe } from "lucide-react"
import { useRef, useState, useEffect } from "react"

const CATEGORIES = [
  {
    id: "pro",
    label: "Professional",
    icon: Briefcase,
    color: "from-blue-500 to-indigo-600",
    items: [
      {
        title: "AI+ Full Stack Developer",
        company: "Netpy Technologies",
        period: "Aug 2025 - Present",
        desc: "Engineering the next generation of AI-driven interfaces. Specializing in low-latency LLM stream processing and adaptive UI patterns.",
        tags: ["React/Next.js", "AI Integration", "MERN Stack"],
        icon: Globe
      },
      {
        title: "AI and ML Trainee",
        company: "Board Infinity",
        period: "May 2024 - Aug 2025",
        desc: "Deep-dive into industrial-grade ML pipelines. From architectural design of CNNs to transformer fine-tuning for specific domains.",
        tags: ["Python", "TensorFlow", "Scikit-Learn"],
        icon: Binary
      },
    ]
  },
  {
    id: "hack",
    label: "Hackathons",
    icon: Trophy,
    color: "from-purple-500 to-pink-600",
    items: [
      {
        title: "MS Student Ambassador",
        company: "Microsoft Hackathon",
        period: "2024",
        desc: "Unified cloud orchestration for sustainable city models. Leveraged Azure Logic Apps and Cognitive Services.",
        tags: ["Azure Cloud", "IoT Central", "Node.js"],
        icon: Cpu
      },
      {
        title: "Byte-Code Hackathon",
        company: "Algorithm Challenge",
        period: "2024",
        desc: "Solved complex data structure challenges with O(log n) efficiency. Ranked in the top 1% for logic and execution speed.",
        tags: ["C++", "Graphs", "Dynamic Programming"],
        icon: Binary
      },
    ]
  },
  {
    id: "cert",
    label: "Certifications",
    icon: Award,
    color: "from-cyan-500 to-emerald-600",
    items: [
      {
        title: "Principles of GenAI",
        company: "Infosys",
        period: "2024",
        desc: "Exploring Prompt Engineering, RAG architectures, and fine-tuning strategies for large language models.",
        tags: ["LLMs", "RAG", "Prompt Engineering"],
        icon: Cpu
      },
      {
        title: "Automation Developer",
        company: "ICT Academy",
        period: "2024",
        desc: "Certified in Robotic Process Automation (RPA) and intelligent workflow scaling.",
        tags: ["UiPath", "Workflows", "Automation"],
        icon: Binary
      },
      {
        title: "Introduction to IOT",
        company: "NPTEL",
        period: "2025",
        desc: "Sensor fusion and real-time data streaming architectures for industrial IoT environments.",
        tags: ["Arduino", "MQTT", "Embedded C"],
        icon: Globe
      },
    ]
  }
]

export default function ExperienceSection() {
  const [activeTab, setActiveTab] = useState(CATEGORIES[0].id)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTab((current) => {
        const currentIndex = CATEGORIES.findIndex(cat => cat.id === current)
        const nextIndex = (currentIndex + 1) % CATEGORIES.length
        return CATEGORIES[nextIndex].id
      })
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 sm:py-32 relative overflow-hidden bg-black" id="experience">
      {/* Cinematic Grid Background */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-blue-500/10 blur-[120px] rounded-full opacity-30" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Modern Tabbed Navigation */}
        <div className="flex flex-col lg:flex-row items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              className="text-cyan-500 font-mono text-xs tracking-tighter mb-4"
            >
              // LOGGING_MILESTONES_V3
            </motion.div>
            <h2 className="text-6xl sm:text-7xl font-black text-white tracking-tighter leading-none mb-6">
              Professional <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">
                Intelligence
              </span>
            </h2>
          </div>

          <div className="flex bg-white/5 p-1.5 rounded-2xl backdrop-blur-xl border border-white/10">
            {CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-bold transition-all duration-500 relative ${activeTab === cat.id ? "text-white" : "text-gray-500 hover:text-gray-300"
                  }`}
              >
                {activeTab === cat.id && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-white/10 rounded-xl"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <cat.icon className="w-4 h-4" />
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Dynamic Display Area */}
        <div className="min-h-[500px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8"
            >
              {/* Sidebar Info */}
              <div className="lg:col-span-4 space-y-8">
                <div className={`p-8 rounded-[2rem] bg-gradient-to-br ${CATEGORIES.find(c => c.id === activeTab)?.color} p-[1px]`}>
                  <div className="bg-black/90 p-8 rounded-[2rem] h-full">
                    <h3 className="text-3xl font-black text-white mb-4">
                      {CATEGORIES.find(c => c.id === activeTab)?.label}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed mb-8">
                      Detailed record of growth, core responsibilities, and key technological breakthroughs achieved during this phase.
                    </p>
                    <div className="space-y-4">
                      <div className="flex items-center gap-3 text-xs font-bold text-white/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                        ACTIVE_RECORDS: {CATEGORIES.find(c => c.id === activeTab)?.items.length}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Items Cards */}
              <div className="lg:col-span-8 flex flex-col gap-6">
                {CATEGORIES.find(c => c.id === activeTab)?.items.map((item, idx) => (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className="group relative"
                  >
                    <div className="p-8 rounded-[2rem] bg-white/[0.03] border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.05] flex flex-col md:flex-row gap-8 items-start md:items-center">
                      <div className={`p-5 rounded-2xl bg-white/5 text-white shadow-inner group-hover:scale-110 transition-transform duration-500`}>
                        <item.icon className="w-6 h-6" />
                      </div>

                      <div className="flex-1">
                        <div className="flex flex-wrap items-center gap-3 mb-2">
                          <h4 className="text-xl font-black text-white">{item.title}</h4>
                          <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-white/10 text-white/40">{item.period}</span>
                        </div>
                        <p className="text-gray-500 text-sm font-bold uppercase tracking-widest mb-4">@ {item.company}</p>
                        <p className="text-gray-400 leading-relaxed max-w-2xl mb-6">{item.desc}</p>

                        <div className="flex flex-wrap gap-2">
                          {item.tags.map(tag => (
                            <span key={tag} className="text-[10px] font-bold text-cyan-500/70 border border-cyan-500/10 px-3 py-1 rounded-full">{tag}</span>
                          ))}
                        </div>
                      </div>

                      <div className="md:opacity-0 group-hover:opacity-100 transition-opacity">
                        <ChevronRight className="w-6 h-6 text-white/20" />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
