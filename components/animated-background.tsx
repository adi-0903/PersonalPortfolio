"use client"

import { motion } from "framer-motion"
import { useEffect, useState } from "react"

export function AnimatedBackground() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY })
    }

    window.addEventListener("mousemove", handleMouseMove)
    return () => window.removeEventListener("mousemove", handleMouseMove)
  }, [])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none">
      {/* Primary gradient orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-purple-600/30 via-transparent to-transparent blur-3xl"
        animate={{
          x: [0, 100, 0],
          y: [0, 50, 0],
        }}
        transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{
          left: "10%",
          top: "10%",
        }}
      />

      {/* Secondary gradient orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-cyan-600/20 via-transparent to-transparent blur-3xl"
        animate={{
          x: [0, -100, 0],
          y: [0, -50, 0],
        }}
        transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
        style={{
          right: "5%",
          bottom: "10%",
        }}
      />

      {/* Tertiary gradient orb */}
      <motion.div
        className="absolute w-96 h-96 rounded-full bg-gradient-to-br from-pink-600/20 via-transparent to-transparent blur-3xl"
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5],
        }}
        transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
        }}
      />

      {/* Interactive mouse-following glow */}
      <motion.div
        className="absolute w-80 h-80 rounded-full bg-gradient-to-br from-purple-500/10 via-cyan-500/5 to-transparent blur-2xl pointer-events-none"
        animate={{
          x: mousePosition.x - 160,
          y: mousePosition.y - 160,
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />
    </div>
  )
}
