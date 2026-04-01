import { Code2, Menu, X } from 'lucide-react'
import { useState } from 'react'
import { motion } from 'motion/react';
import { NavLink } from 'react-router-dom';
export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    return (
        <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-950/80 backdrop-blur-lg border-b border-blue-500/20">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-16">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        className="flex items-center gap-2"
                    >
                        <Code2 className="text-cyan-400" size={32} />
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                            Algoritmus
                        </span>
                    </motion.div>

                    <div className="hidden md:flex items-center gap-8">
                        <a href="/#about" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Biz haqimizda
                        </a>

                        <a href="/#services" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Xizmatlar
                        </a>

                        <a href="/#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Portfolio
                        </a>

                        <a href="/#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Tariflar
                        </a>

                        <a href="/#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
                            Aloqa
                        </a>

                        <NavLink
                            to="/course"
                            className="text-slate-300 hover:text-cyan-400 transition-colors"
                        >
                            Darsliklar
                        </NavLink>
                    </div>

                    <button
                        className="md:hidden text-white"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden py-4 space-y-4"
                    >
                        <a
                            href="#about"
                            className="block text-slate-300 hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Biz haqimizda
                        </a>
                        <a
                            href="#services"
                            className="block text-slate-300 hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Xizmatlar
                        </a>
                        <a
                            href="#portfolio"
                            className="block text-slate-300 hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Portfolio
                        </a>
                        <a
                            href="#pricing"
                            className="block text-slate-300 hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Tariflar
                        </a>
                        <a
                            href="#contact"
                            className="block text-slate-300 hover:text-cyan-400 transition-colors"
                            onClick={() => setMobileMenuOpen(false)}
                        >
                            Aloqa
                        </a>
                    </motion.div>
                )}
            </div>
        </nav>
    )
}
