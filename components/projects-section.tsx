"use client"

import { motion, type Variants } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"

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
    image: "https://images.unsplash.com/photo-1544787210-2213d84ad960?auto=format&fit=crop&w=1400&q=80",
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
    title: "Wave Energy Converter",
    description: "Digital twin + control system optimizing oscillating water column harvesters with ML-generated predictions of ocean energy yield.",
    image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Python", "MATLAB", "TensorFlow", "Edge IoT", "AWS"],
    githubUrl: "https://github.com/adi-0903/Wave-Energy-Converter",
  },
  {
    title: "AI Document Analyzer",
    description: "LLM-assisted document intelligence pipeline that extracts, summarizes, and classifies contracts and research PDFs with explainable outputs.",
    image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Python", "LLM", "LangChain", "FastAPI", "PostgreSQL"],
    liveUrl: "https://example.com/doc-analyzer",
    githubUrl: "https://github.com/adi-0903/AI-Document-Analyzer",
  },
  {
    title: "Neuro Chat",
    description: "Conversational AI assistant embedded in marketing sites, blending Retrieval-Augmented Generation with custom fine-tuned models.",
    image: "https://images.unsplash.com/photo-1500534314209-a25ddb2bd429?auto=format&fit=crop&w=1400&q=80",
    technologies: ["React", "Node.js", "LLM", "LangChain"],
    githubUrl: "https://github.com/adi-0903/AI-ChatBot",
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
    title: "Live Puzzle Game",
    description: "Real-time sliding puzzle built from your live webcam feed — use hand gestures tracked by MediaPipe to drag and swap tiles, powered by OpenCV and YOLOv5.",
    image: "https://images.unsplash.com/photo-1606167668584-78701c57f13d?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Python", "OpenCV", "MediaPipe", "YOLOv5"],
    githubUrl: "https://github.com/adi-0903/Puzzle-Game",
  },
  {
    title: "FacePass",
    description: "Production-ready face authentication system for enterprise attendance tracking — sub-500ms recognition, multi-layer anti-spoofing (LBP + reflection + blur), and a glassmorphism web UI backed by a full FastAPI REST interface.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Python", "FastAPI", "OpenCV", "dlib", "SQLite"],
    githubUrl: "https://github.com/adi-0903/FacePass",
  },
  {
    title: "Commodities Management",
    description: "Role-based inventory platform for Managers & Store Keepers — features a statistics dashboard, full product CRUD, GraphQL API, and dynamic light/dark mode with router-guarded RBAC menus.",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=1400&q=80",
    technologies: ["Next.js", "TypeScript", "NestJS", "GraphQL", "Prisma", "Tailwind CSS"],
    githubUrl: "https://github.com/adi-0903/Store-management",
  },
]

export default function ProjectsSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.7, ease: [0.23, 1, 0.82, 1] },
    },
  }

  return (
    <section id="projects" className="py-24 sm:py-32 relative overflow-hidden bg-background">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute -top-[10%] -right-[10%] w-[50%] h-[50%] rounded-full bg-gradient-to-br from-pink-600/10 to-purple-600/5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute top-[20%] -left-[10%] w-[40%] h-[40%] rounded-full bg-gradient-to-br from-cyan-600/10 to-blue-600/5 blur-[100px]"
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -40, 0],
            y: [0, 40, 0],
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center lg:text-left"
        >
          <div className="flex items-center justify-center lg:justify-start gap-4 mb-6">
            <motion.div
              className="h-[2px] bg-gradient-to-r from-pink-500 to-transparent"
              initial={{ width: 0 }}
              whileInView={{ width: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2 }}
            />
            <span className="text-sm uppercase tracking-[0.3em] text-pink-500 font-black">Selected Works</span>
          </div>
          <h2 className="text-6xl sm:text-7xl font-black tracking-tight mb-6">
            <span className="text-foreground">Featured</span>{" "}
            <span className="bg-gradient-to-r from-pink-400 via-purple-400 to-cyan-400 bg-clip-text text-transparent">
              Projects
            </span>
          </h2>
          <p className="text-xl text-muted-foreground/80 max-w-2xl leading-relaxed">
            A fusion of sophisticated design and advanced engineering. Explore our most impactful AI and Full-Stack solutions.
          </p>
        </motion.div>

        {/* Big Featured Projects */}
        <div className="space-y-32 mb-32">
          {PROJECTS.filter((p) => p.featured).map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              className="group relative"
            >
              <div className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-center ${index % 2 === 1 ? "lg:flex-row-reverse" : ""}`}>
                {/* Visual Side */}
                <div className={`lg:col-span-7 relative ${index % 2 === 1 ? "lg:order-2" : ""}`}>
                  <motion.div
                    className="relative rounded-3xl overflow-hidden aspect-[16/10] shadow-2xl"
                    whileHover={{ y: -10 }}
                    transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/20 to-cyan-500/20 z-10 mix-blend-overlay group-hover:opacity-0 transition-opacity duration-500" />
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    {/* Hover Glow */}
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none z-20" />
                  </motion.div>

                  {/* Decorative element behind image */}
                  <div className={`absolute -inset-4 bg-gradient-to-br from-pink-500/10 to-cyan-500/10 blur-2xl rounded-[40px] -z-10 transition-opacity duration-500 group-hover:opacity-100 opacity-50`} />
                </div>

                {/* Content Side */}
                <div className={`lg:col-span-5 flex flex-col justify-center ${index % 2 === 1 ? "lg:order-1 lg:text-right lg:items-end" : "lg:items-start"}`}>
                  <motion.div
                    initial={{ opacity: 0, x: index % 2 === 1 ? 20 : -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.3 }}
                  >
                    <span className="inline-block px-4 py-1.5 rounded-full bg-pink-500/10 text-pink-400 text-xs font-bold uppercase tracking-widest mb-6 border border-pink-500/20">
                      Featured Project
                    </span>
                    <h3 className="text-4xl sm:text-5xl font-black text-foreground mb-6 leading-tight">
                      {project.title}
                    </h3>
                    <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
                      {project.description}
                    </p>

                    {/* Tech Stack */}
                    <div className={`flex flex-wrap gap-3 mb-10 ${index % 2 === 1 ? "justify-end" : "justify-start"}`}>
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-4 py-2 rounded-xl bg-secondary/50 border border-border/50 text-sm font-medium text-foreground/80 backdrop-blur-md"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                    {/* Actions */}
                    <div className="flex flex-wrap gap-4">
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 bg-foreground text-background rounded-2xl font-bold transition-all duration-300 hover:shadow-[0_20px_40px_rgba(255,255,255,0.1)]"
                      >
                        <ExternalLink className="w-5 h-5" />
                        Live Experience
                      </motion.a>
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.05, y: -2 }}
                        whileTap={{ scale: 0.95 }}
                        className="inline-flex items-center gap-2 px-8 py-4 border-2 border-border hover:border-foreground rounded-2xl font-bold transition-all duration-300"
                      >
                        <Github className="w-5 h-5" />
                        Source Code
                      </motion.a>
                    </div>
                  </motion.div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Small Additional Projects */}
        <div className="relative">
          <div className="flex items-center gap-4 mb-12">
            <h4 className="text-2xl font-bold text-foreground">Archive Room</h4>
            <div className="h-[1px] flex-1 bg-gradient-to-r from-border to-transparent" />
          </div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {PROJECTS.filter((p) => !p.featured).map((project) => (
              <motion.div
                key={project.title}
                variants={cardVariants}
                whileHover={{ y: -12 }}
                className="group h-full"
              >
                <div className="relative h-full flex flex-col bg-card/30 backdrop-blur-xl rounded-[2rem] border border-border/50 overflow-hidden hover:border-primary/50 transition-all duration-500 shadow-xl hover:shadow-primary/5">
                  {/* Image container with mask */}
                  <div className="relative h-56 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-card/90 to-transparent" />

                    {/* Floating Links Overlay */}
                    <div className="absolute top-4 right-4 flex gap-2">
                      <motion.a
                        href={project.githubUrl}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                        className="p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10"
                      >
                        <Github className="w-4 h-4" />
                      </motion.a>
                      <motion.a
                        href={project.liveUrl}
                        whileHover={{ scale: 1.1, backgroundColor: "rgba(0,0,0,0.8)" }}
                        className="p-2.5 rounded-full bg-black/40 backdrop-blur-md text-white border border-white/10"
                      >
                        <ExternalLink className="w-4 h-4" />
                      </motion.a>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-8 flex flex-col flex-1">
                    <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-muted-foreground text-sm leading-relaxed mb-6 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="mt-auto pt-6 flex flex-wrap gap-2">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 text-[10px] font-bold uppercase tracking-wider bg-primary/10 text-primary rounded-lg"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
