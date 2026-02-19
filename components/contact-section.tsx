"use client"

import type React from "react"
import { motion, type Variants, AnimatePresence } from "framer-motion"
import { Mail, Linkedin, Github, Send, CheckCircle, ArrowRight } from "lucide-react"
import { useState } from "react"

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [submitted, setSubmitted] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [error, setError] = useState<string | null>(null)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setError(null)

    try {
      const response = await fetch("https://formspree.io/f/xrealwqe", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: "", email: "", message: "" })
      } else {
        const data = await response.json()
        setError(data?.errors?.[0]?.message ?? "Something went wrong. Please try again.")
      }
    } catch {
      setError("Network error. Please check your connection and try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } },
  }

  const fadeInUp: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } },
  }

  return (
    <section id="contact" className="py-32 sm:py-48 relative overflow-hidden bg-black">
      {/* Refined Ambiance */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-purple-500/5 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start"
        >
          {/* Column 1: Minimalist Header */}
          <div className="space-y-12">
            <motion.div variants={fadeInUp} className="space-y-6">
              <h2 className="text-7xl sm:text-8xl font-black text-white tracking-tighter leading-[0.9]">
                Let&apos;s build <br />
                <span className="italic bg-gradient-to-r from-white via-white/60 to-white/20 bg-clip-text text-transparent">
                  Exceptional
                </span>
              </h2>
              <p className="text-white/40 text-xl font-medium max-w-md leading-relaxed">
                Whether you have a specific project in mind or just want to explore possibilities, I&apos;m always open to new connections.
              </p>
            </motion.div>

            {/* Clean Social Access */}
            <motion.div variants={fadeInUp} className="flex flex-col gap-6 pt-8">
              {[
                { label: "Email", val: "singhaladitya617@gmail.com", href: "mailto:singhaladitya617@gmail.com", icon: Mail },
                { label: "LinkedIn", val: "aditya-singhal", href: "https://linkedin.com/in/aditya1803", icon: Linkedin },
                { label: "GitHub", val: "adi-0903", href: "https://github.com/adi-0903", icon: Github },
              ].map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="group flex flex-col gap-1 w-fit"
                >
                  <span className="text-[10px] font-black uppercase tracking-[0.3em] text-white/20 group-hover:text-cyan-500 transition-colors">
                    {link.label}
                  </span>
                  <span className="text-white/60 group-hover:text-white transition-colors text-lg font-medium">
                    {link.val}
                  </span>
                </a>
              ))}
            </motion.div>
          </div>

          {/* Column 2: Elegant Form */}
          <motion.div variants={fadeInUp} className="relative w-full">
            <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="bg-white/5 border border-white/10 rounded-[2.5rem] p-12 sm:p-20 text-center"
                >
                  <div className="w-20 h-20 bg-white text-black rounded-full flex items-center justify-center mx-auto mb-8">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  <h3 className="text-3xl font-black text-white mb-4">Message Sent</h3>
                  <p className="text-white/40">I&apos;ll get back to you as soon as possible.</p>
                  <button
                    onClick={() => setSubmitted(false)}
                    className="mt-12 text-xs font-black uppercase tracking-widest text-white/20 hover:text-white transition-colors"
                  >
                    Send another
                  </button>
                </motion.div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-12">
                  <div className="space-y-10">
                    <div className="group relative border-b border-white/20 focus-within:border-white transition-all duration-500 py-6 px-2">
                      {/* Subtle focus glow */}
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <label className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-white transition-colors">Name</label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="relative z-10 w-full bg-transparent text-white text-3xl font-bold pt-3 focus:outline-none placeholder:text-white/20"
                        placeholder="Aditya Singhal"
                      />
                    </div>

                    <div className="group relative border-b border-white/20 focus-within:border-white transition-all duration-500 py-6 px-2">
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <label className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-white transition-colors">Email</label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="relative z-10 w-full bg-transparent text-white text-3xl font-bold pt-3 focus:outline-none placeholder:text-white/20"
                        placeholder="aditya@example.com"
                      />
                    </div>

                    <div className="group relative border-b border-white/20 focus-within:border-white transition-all duration-500 py-6 px-2">
                      <div className="absolute inset-x-0 bottom-0 h-full bg-gradient-to-t from-white/[0.03] to-transparent opacity-0 group-focus-within:opacity-100 transition-opacity duration-500 pointer-events-none" />

                      <label className="relative z-10 text-[10px] font-black uppercase tracking-[0.3em] text-white/50 group-focus-within:text-white transition-colors">Message</label>
                      <textarea
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={1}
                        className="relative z-10 w-full bg-transparent text-white text-3xl font-bold pt-3 focus:outline-none placeholder:text-white/20 resize-none overflow-hidden"
                        placeholder="Hello, I&apos;d like to talk about..."
                        onInput={(e) => {
                          const target = e.target as HTMLTextAreaElement;
                          target.style.height = "auto";
                          target.style.height = `${target.scrollHeight}px`;
                        }}
                      />
                    </div>
                  </div>

                  {/* Error message */}
                  {error && (
                    <p className="text-red-400 text-sm font-medium px-2">
                      ⚠ {error}
                    </p>
                  )}

                  <motion.button
                    type="submit"
                    disabled={isSubmitting}
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="group relative flex items-center justify-between w-full bg-white text-black rounded-3xl px-10 py-8 font-black uppercase tracking-[0.2em] text-sm overflow-hidden"
                  >
                    <div className="relative z-10 flex items-center gap-4">
                      {isSubmitting ? "Sending..." : "Send Message"}
                    </div>
                    <ArrowRight className="w-6 h-6 group-hover:translate-x-2 transition-transform duration-500" />

                    <motion.div
                      className="absolute inset-x-0 bottom-0 h-1 bg-cyan-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"
                    />
                  </motion.button>
                </form>
              )}
            </AnimatePresence>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}
