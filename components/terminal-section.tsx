"use client"

import { motion, useInView } from "framer-motion"
import { useState, useEffect, useRef } from "react"
import { Terminal as TerminalIcon, Cpu, Layers, Shield, Zap } from "lucide-react"

const LOG_ENTRIES = [
  "INITIALIZING_NEURAL_CORE...",
  "STATUS: OPTIMAL",
  "UPLINK_ESTABLISHED: ADITYA_SINGHAL(0.99A)",
  "BOOTING: FULL_STACK_ENGINE_REV_4.0",
  "FETCHING_SKILL_MATRIX...",
  "PYTHON [####################] 100%",
  "REACT [####################] 100%",
  "DJANGO [###################-] 95%",
  "ML_VISION [################--] 90%",
  "OSINT_PROTOCOL: ENABLED",
  "SCANNING_PROJECT_NODES...",
  "NODE_01: NEURAL_INTELLIGENCE_FUSION [SYNCED]",
  "NODE_02: HERITAGE_BREWS [SECURED]",
  "NODE_03: MENTIQ [VALIDATED]",
  "ENCRYPTION_LAYER: ACTIVE",
  "LATENCY: 5ms",
  "SYSTEM_CHECK: ALL_SYSTEMS_OPERATIONAL",
  "LOG_ID: " + Math.random().toString(16).slice(2, 10).toUpperCase(),
]

export default function TerminalSection() {
  const [logs, setLogs] = useState<string[]>([])
  const [currentLine, setCurrentLine] = useState(0)
  const containerRef = useRef(null)
  const isInView = useInView(containerRef, { once: true, margin: "-100px" })

  useEffect(() => {
    if (isInView && currentLine < LOG_ENTRIES.length) {
      const timeout = setTimeout(() => {
        setLogs(prev => [...prev, LOG_ENTRIES[currentLine]])
        setCurrentLine(curr => curr + 1)
      }, 150)
      return () => clearTimeout(timeout)
    }
  }, [isInView, currentLine])

  return (
    <section ref={containerRef} className="py-24 bg-black relative overflow-hidden">
      {/* Visual background noise */}
      <div className="absolute inset-0 opacity-[0.03] neural-grid pointer-events-none" />
      
      <div className="max-w-5xl mx-auto px-4 relative z-10">
        <div className="relative rounded-3xl bg-[#0a0a0a] border border-white/10 overflow-hidden shadow-[0_0_50px_rgba(0,0,0,0.5)]">
          {/* Terminal Header */}
          <div className="flex items-center justify-between px-6 py-4 bg-white/5 border-bottom border-white/10">
            <div className="flex items-center gap-4">
              <div className="flex gap-1.5">
                <div className="w-2 h-2 rounded-full bg-red-500/50" />
                <div className="w-2 h-2 rounded-full bg-amber-500/50" />
                <div className="w-2 h-2 rounded-full bg-emerald-500/50" />
              </div>
              <div className="flex items-center gap-2 text-[10px] font-mono font-black text-white/30 uppercase tracking-widest">
                <TerminalIcon size={12} className="text-cyan-500" />
                Root@Aditya-OS:~
              </div>
            </div>
            <div className="text-[10px] font-mono text-cyan-500/50 font-bold">
              SYS::SESSION_0x4F
            </div>
          </div>

          <div className="p-8 font-mono text-sm sm:text-base leading-relaxed h-[400px] overflow-y-auto custom-scrollbar bg-gradient-to-b from-transparent to-black/20">
            {logs.map((log, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                className="flex gap-4 mb-2 group"
              >
                <span className="text-white/20 select-none">{i.toString().padStart(2, '0')}</span>
                <span className={`
                  ${log.includes("INITIALIZING") ? "text-cyan-400 font-bold" : ""}
                  ${log.includes("100%") ? "text-emerald-400" : ""}
                  ${log.includes("SECURED") || log.includes("SYNCED") ? "text-purple-400" : ""}
                  ${log.includes("ERROR") ? "text-red-400" : "text-white/70"}
                  group-hover:text-white transition-colors
                `}>
                  <span className="text-cyan-500/50 mr-2">$</span> {log}
                </span>
                {i === currentLine - 1 && (
                  <motion.div
                    animate={{ opacity: [0, 1] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    className="w-2 h-5 bg-cyan-500/50 inline-block self-center"
                  />
                )}
              </motion.div>
            ))}
          </div>

          {/* Terminal HUD Overlay */}
          <div className="absolute bottom-6 right-8 flex items-center gap-8 pointer-events-none">
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-white/10 uppercase mb-1">Cpu_Load</span>
              <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["10%", "85%", "45%"] }} 
                  transition={{ duration: 5, repeat: Infinity }}
                  className="h-full bg-cyan-500/30" 
                />
              </div>
            </div>
            <div className="flex flex-col items-end">
              <span className="text-[8px] font-mono text-white/10 uppercase mb-1">Neural_Flow</span>
              <div className="w-24 h-1 bg-white/5 rounded-full overflow-hidden">
                <motion.div 
                  animate={{ width: ["30%", "10%", "95%"] }} 
                  transition={{ duration: 3, repeat: Infinity }}
                  className="h-full bg-purple-500/30" 
                />
              </div>
            </div>
          </div>
        </div>

        {/* Floating Icons */}
        {isInView && (
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 flex flex-col gap-8 opacity-20">
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1 }}><Cpu size={32} className="text-white" /></motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.2 }}><Layers size={32} className="text-white" /></motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.4 }}><Shield size={32} className="text-white" /></motion.div>
            <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} transition={{ delay: 1.6 }}><Zap size={32} className="text-white" /></motion.div>
          </div>
        )}
      </div>
    </section>
  )
}
