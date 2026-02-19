"use client"

import { motion, useScroll, useTransform } from "framer-motion"
import { Github, Linkedin, Twitter, Mail, ArrowUpRight, Cpu, Globe, Zap, Shield, Sparkles } from "lucide-react"
import { useRef } from "react"

export default function Footer() {
    const currentYear = new Date().getFullYear()
    const footerRef = useRef<HTMLElement>(null)

    const { scrollYProgress } = useScroll({
        target: footerRef,
        offset: ["start end", "end end"]
    })

    const opacity = useTransform(scrollYProgress, [0, 1], [0.6, 1])
    const scale = useTransform(scrollYProgress, [0, 1], [0.95, 1])
    const watermarkOpacity = useTransform(scrollYProgress, [0, 1], [0, 0.03])

    const socialLinks = [
        { icon: Github, label: "GitHub", href: "https://github.com/adi-0903", color: "text-white" },
        { icon: Linkedin, label: "LinkedIn", href: "https://linkedin.com/in/aditya1803", color: "text-blue-400" },
        { icon: Mail, label: "Email", href: "mailto:singhaladitya617@gmail.com", color: "text-purple-400" },
    ]

    const navLinks = [
        { label: "Genesis", href: "#home" },
        { label: "Experience", href: "#experience" },
        { label: "Intelligence", href: "#skills" },
        { label: "Archive", href: "#projects" },
        { label: "Link", href: "#contact" },
    ]

    return (
        <footer ref={footerRef} className="relative bg-[#020202] pt-24 pb-12 overflow-hidden">
            {/* Cinematic Perspective Grid */}
            <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
                <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:50px_50px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_100%,#000_30%,transparent_100%)]" />
            </div>

            {/* Massive Holographic Watermark */}
            <motion.div
                style={{ opacity: watermarkOpacity }}
                className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10vw] font-black text-white italic select-none pointer-events-none whitespace-nowrap"
            >
                VISIONARY
            </motion.div>

            <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
                <motion.div
                    style={{ opacity, scale }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16"
                >

                    {/* Brand Core - Kinetic Card */}
                    <div className="lg:col-span-12 xl:col-span-5 space-y-8">
                        <div className="space-y-4">
                            <motion.div
                                whileHover={{ scale: 1.05 }}
                                className="flex items-center gap-4 group cursor-default"
                            >
                                <div className="p-2.5 rounded-xl bg-white/5 border border-white/10 group-hover:border-cyan-500/30 transition-all duration-500 relative overflow-hidden shadow-2xl">
                                    <Cpu className="w-6 h-6 text-cyan-500 relative z-10" />
                                    <div className="absolute inset-0 bg-cyan-500/10 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <div>
                                    <h3 className="text-2xl font-black text-white tracking-widest leading-none">
                                        ADITYA <br />
                                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-200 to-gray-600">SINGHAL</span>
                                    </h3>
                                </div>
                            </motion.div>
                            <p className="text-white/40 text-base max-w-sm leading-relaxed font-medium">
                                Pioneering high-fidelity digital intelligence and architecting immersive full-stack ecosystems.
                            </p>
                        </div>

                        {/* Premium Social Indices moved to Uplink Section */}
                    </div>

                    {/* Navigation Matrix */}
                    <div className="lg:col-span-6 xl:col-span-3 space-y-6">
                        <div className="flex items-center gap-3">
                            <Shield className="w-4 h-4 text-cyan-500/40" />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 underline decoration-cyan-500/30 underline-offset-8 decoration-2">Registry</h4>
                        </div>
                        <nav className="flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.label}
                                    href={link.href}
                                    className="group flex items-center justify-between text-white/40 hover:text-white transition-all text-base font-bold tracking-tight"
                                >
                                    <span className="relative">
                                        {link.label}
                                        <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 group-hover:w-full transition-all duration-500" />
                                    </span>
                                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1 transition-all text-cyan-500" />
                                </a>
                            ))}
                        </nav>
                    </div>

                    {/* Neural Contact Node */}
                    <div className="lg:col-span-6 xl:col-span-4 space-y-6">
                        <div className="flex items-center gap-3">
                            <Globe className="w-4 h-4 text-purple-500/40" />
                            <h4 className="text-[10px] font-black uppercase tracking-[0.5em] text-white/20 underline decoration-purple-500/30 underline-offset-8 decoration-2">Uplink</h4>
                        </div>
                        <div className="space-y-6">
                            {/* High-Visibility Social Matrix */}
                            <div className="flex gap-3">
                                {socialLinks.map((social) => (
                                    <motion.a
                                        key={social.label}
                                        href={social.href}
                                        whileHover={{ y: -3, scale: 1.1, backgroundColor: "rgba(255,255,255,0.1)" }}
                                        className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center transition-all group relative overflow-hidden"
                                        aria-label={social.label}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/0 to-purple-500/0 group-hover:from-cyan-500/5 group-hover:to-purple-500/5 transition-all" />
                                        <social.icon className={`w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity ${social.color}`} />
                                    </motion.a>
                                ))}
                            </div>

                            <div className="flex flex-col gap-3">
                                <div className="flex items-center gap-3">
                                    <div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981]" />
                                    <span className="text-[10px] font-mono text-emerald-500/60 font-black tracking-widest">ENCRYPTED_LINE_ACTIVE</span>
                                </div>
                                <div className="flex items-center gap-3">
                                    <Zap className="w-3 h-3 text-white/20" />
                                    <span className="text-[10px] font-mono text-white/20 font-black tracking-widest uppercase">Response_Time: &lt; 24h</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>

                {/* The "Architecture" Bar */}
                <div className="pt-10 mt-10 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-8 text-[10px] font-mono font-black tracking-[0.3em] uppercase">
                    <div className="flex items-center gap-12 text-white/20">
                        <div className="hidden sm:flex items-center gap-3">
                            <Activity className="w-3 h-3 text-purple-500" />
                            <span>Location: Punjab, India</span>
                        </div>
                    </div>

                    <div className="text-white/20 flex items-center gap-2">
                        &copy; {currentYear}
                        <span className="text-white/60">ADITYA_SINGHAL</span>
                        <div className="w-1 h-1 rounded-full bg-white/20 mx-2" />
                        ALL_SYSTEMS_OPERATIONAL
                    </div>
                </div>
            </div>

            {/* Global Flare - Bottom Accent */}
            <div className="absolute bottom-0 left-0 w-full h-[300px] bg-gradient-to-t from-cyan-500/5 to-transparent pointer-events-none" />
        </footer>
    )
}

function Activity({ className }: { className?: string }) {
    return (
        <svg
            className={className}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
        >
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
        </svg>
    )
}
