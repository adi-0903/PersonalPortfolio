"use client"

import { motion, type Variants } from "framer-motion"
import { Code2, Cpu, Rocket, Sparkles, User2 } from "lucide-react"

export default function AboutSection() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  }

  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95, y: 20 },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  }

  const aboutCards = [
    {
      icon: Code2,
      title: "Full-Stack Excellence",
      content: "My journey spans both frontend finesse and backend architecture, combined with expertise in machine learning and AI. I believe in writing clean, maintainable code and creating intuitive user experiences that delight.",
      color: "from-blue-500 to-indigo-600",
    },
    {
      icon: Cpu,
      title: "AI-First Vision",
      content: "Currently leveraging AI to build transformative products. I'm always exploring new technologies, collaborating with brilliant minds, and pushing the boundaries of what's possible in software engineering.",
      color: "from-purple-500 to-pink-600",
    },
    {
      icon: Rocket,
      title: "Impact-Driven Growth",
      content: "Specializing in end-to-end solutions that solve real-world problems. Every line of code I write is guided by a commitment to technical excellence and user-centric design principles.",
      color: "from-cyan-500 to-teal-500",
    },
  ]

  return (
    <section id="about" className="py-24 sm:py-40 relative overflow-hidden bg-background">
      {/* Background Elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          className="absolute top-1/4 -right-20 w-[500px] h-[500px] rounded-full bg-purple-600/5 blur-[120px]"
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 30, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
        />
        <motion.div
          className="absolute -bottom-20 -left-20 w-[600px] h-[600px] rounded-full bg-cyan-600/5 blur-[140px]"
          animate={{
            scale: [1.2, 1, 1.2],
            y: [0, -40, 0],
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          {/* Visual Side */}
          <motion.div
            className="lg:col-span-12 xl:col-span-5 order-2 xl:order-1"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="relative group">
              {/* Decorative Frame */}
              <div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/10 to-transparent rounded-[3rem] blur-2xl group-hover:from-purple-500/20 transition-all duration-700" />

              <div className="relative aspect-square sm:aspect-[4/5] overflow-hidden rounded-[3rem] border border-white/5 bg-white/5 backdrop-blur-3xl p-2">
                <img
                  src="https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&q=80&w=1000"
                  alt="Tech Abstract"
                  className="w-full h-full object-cover rounded-[2.5rem] opacity-80 group-hover:scale-105 transition-transform duration-1000"
                />

                {/* Floating Badge */}
                <motion.div
                  className="absolute -bottom-8 -right-8 p-6 rounded-3xl bg-black/40 backdrop-blur-2xl border border-white/10 shadow-2xl hidden sm:block"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-purple-500 to-cyan-500 flex items-center justify-center">
                      <Sparkles className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <div className="text-xl font-black text-white">Innovation</div>
                      <div className="text-xs text-muted-foreground uppercase tracking-widest font-bold">Driven Mindset</div>
                    </div>
                  </div>
                </motion.div>

                {/* Glass Overlay Text */}
                <div className="absolute inset-x-0 bottom-0 p-10 bg-gradient-to-t from-black via-black/40 to-transparent">
                  <h3 className="text-3xl font-black text-white leading-tight">
                    Architect of <br />
                    <span className="bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                      Modern Systems
                    </span>
                  </h3>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Side */}
          <div className="lg:col-span-12 xl:col-span-7 order-1 xl:order-2">
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-12"
            >
              <div className="space-y-6">
                <motion.div
                  className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-purple-500/5 border border-purple-500/20 text-purple-400 text-xs font-bold uppercase tracking-widest"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                >
                  <User2 className="w-3.5 h-3.5" />
                  Ego Sum (I am)
                </motion.div>

                <motion.h2 className="text-6xl sm:text-7xl font-black text-foreground tracking-tighter leading-none">
                  Building the <br />
                  <span className="italic text-transparent bg-clip-text bg-gradient-to-r from-gray-200 via-gray-400 to-gray-700">Next Evolution</span>
                </motion.h2>

                <motion.p className="text-xl text-muted-foreground leading-relaxed max-w-2xl">
                  I&apos;m a passionate developer who lives at the intersection of elegant code and intelligent systems. With a deep commitment to building scalable, high-performance applications, I specialize in crafting end-to-end solutions that solve real-world problems.
                </motion.p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {aboutCards.map((card, idx) => (
                  <motion.div
                    key={card.title}
                    variants={cardVariants}
                    className="group relative h-full"
                  >
                    <div className="h-full p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-500 hover:bg-white/[0.04]">
                      <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center shadow-lg shadow-black/20 mb-6 group-hover:scale-110 transition-transform duration-500`}>
                        <card.icon className="w-6 h-6 text-white" />
                      </div>
                      <h4 className="text-xl font-bold text-foreground mb-3">{card.title}</h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        {card.content}
                      </p>
                    </div>
                  </motion.div>
                ))}

                {/* Stats Card */}
                <motion.div variants={cardVariants} className="md:col-span-1 h-full">
                  <div className="h-full p-8 rounded-[2rem] bg-gradient-to-br from-purple-500 to-cyan-500 flex flex-col justify-center items-center text-center group transition-transform duration-500 hover:scale-[1.02]">
                    <div className="text-5xl font-black text-white mb-2">20+</div>
                    <div className="text-xs font-black uppercase tracking-[0.2em] text-white/80">Projects Completed</div>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom Horizontal Stats */}
        <motion.div
          className="mt-32 pt-20 border-t border-white/5 grid grid-cols-2 lg:grid-cols-4 gap-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          {[
            { label: "Engineering Experience", value: "2", suffix: " Years" },
            { label: "Elite Technologies", value: "25", suffix: "+" },
            { label: "Global Deployments", value: "10", suffix: "+" },
            { label: "Client Satisfaction", value: "100", suffix: "%" },
          ].map((stat) => (
            <div key={stat.label} className="space-y-2">
              <div className="text-4xl font-black text-foreground flex items-baseline gap-1">
                {stat.value}
                <span className="text-lg font-bold text-cyan-500">{stat.suffix}</span>
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-muted-foreground/60">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
