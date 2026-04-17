"use client"

import { useEffect, useState } from "react"
import { motion, useSpring, useMotionValue } from "framer-motion"

export default function CustomCursor() {
  const [isHovered, setIsHovered] = useState(false)
  const [isClicked, setIsClicked] = useState(false)

  const cursorX = useMotionValue(-100)
  const cursorY = useMotionValue(-100)

  const springConfig = { damping: 25, stiffness: 200 }
  const x = useSpring(cursorX, springConfig)
  const y = useSpring(cursorY, springConfig)

  useEffect(() => {
    const moveCursor = (e: MouseEvent) => {
      cursorX.set(e.clientX)
      cursorY.set(e.clientY)
    }

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement
      const isSelectable = window.getComputedStyle(target).cursor === "pointer" || 
                          target.tagName === "A" || 
                          target.tagName === "BUTTON"
      setIsHovered(isSelectable)
    }

    const handleMouseDown = () => setIsClicked(true)
    const handleMouseUp = () => setIsClicked(false)

    window.addEventListener("mousemove", moveCursor)
    window.addEventListener("mouseover", handleHover)
    window.addEventListener("mousedown", handleMouseDown)
    window.addEventListener("mouseup", handleMouseUp)

    return () => {
      window.removeEventListener("mousemove", moveCursor)
      window.removeEventListener("mouseover", handleHover)
      window.removeEventListener("mousedown", handleMouseDown)
      window.removeEventListener("mouseup", handleMouseUp)
    }
  }, [cursorX, cursorY])

  return (
    <>
      {/* Outer Ring */}
      <motion.div
        className="fixed top-0 left-0 w-8 h-8 rounded-full border border-cyan-500/50 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          scale: isClicked ? 0.8 : isHovered ? 2.5 : 1,
          backgroundColor: isHovered ? "rgba(6, 182, 212, 0.1)" : "transparent",
        }}
        transition={{ type: "spring", damping: 30, stiffness: 200 }}
      />

      {/* Center Dot */}
      <motion.div
        className="fixed top-0 left-0 w-1 h-1 rounded-full bg-cyan-400 pointer-events-none z-[9999] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
        }}
      />
      
      {/* Interaction Ripple */}
      <motion.div
        className="fixed top-0 left-0 w-12 h-12 rounded-full border-[0.5px] border-white/20 pointer-events-none z-[9998] mix-blend-difference"
        style={{
          x,
          y,
          translateX: "-50%",
          translateY: "-50%",
          scale: isHovered ? 1.5 : 0.8,
          opacity: isHovered ? 1 : 0,
        }}
      />
    </>
  )
}
