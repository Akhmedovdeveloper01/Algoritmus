import { Code2, Facebook, Github, Instagram, Linkedin, Mail, Phone, Send } from 'lucide-react'

export default function Footer() {
    return (
        <footer className="bg-slate-950/50 border-t border-slate-800 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-4 gap-8 mb-8">
                    <div className="md:col-span-2">
                        <div className="flex items-center gap-2 mb-4">
                            <Code2 className="text-cyan-400" size={32} />
                            <span className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent">
                                Algoritmus
                            </span>
                        </div>
                        <p className="text-slate-400 mb-4">
                            Professional web development xizmatlari. Biznesingizni raqamli olamda muvaffaqiyatli
                            qilamiz.
                        </p>
                        <div className="flex gap-3">
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Facebook size={20} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Instagram size={20} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Linkedin size={20} className="text-white" />
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 bg-slate-800 hover:bg-cyan-500 rounded-lg flex items-center justify-center transition-colors"
                            >
                                <Github size={20} className="text-white" />
                            </a>
                        </div>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Tezkor Linklar</h3>
                        <ul className="space-y-2">
                            <li>
                                <a href="#about" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    Biz haqimizda
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#services"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                                >
                                    Xizmatlar
                                </a>
                            </li>
                            <li>
                                <a
                                    href="#portfolio"
                                    className="text-slate-400 hover:text-cyan-400 transition-colors"
                                >
                                    Portfolio
                                </a>
                            </li>
                            <li>
                                <a href="#pricing" className="text-slate-400 hover:text-cyan-400 transition-colors">
                                    Tariflar
                                </a>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="text-white font-semibold mb-4">Aloqa</h3>
                        <ul className="space-y-3">
                            <li className="flex items-center gap-2 text-slate-400">
                                <Phone size={18} className="text-cyan-400" />
                                <a href="tel:+998913315598">+998 91 331 55 98</a>
                            </li>
                            <li className="flex items-center gap-2 text-slate-400">
                                <Mail size={18} className="text-cyan-400" />
                                developerakhmedov@gmail.com
                            </li>
                            <li className="flex items-center gap-2 text-slate-400">
                                <Send size={18} className="text-cyan-400" />
                                @Ahmedov_Mahmud
                            </li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-slate-800 pt-8 text-center text-slate-400">
                    <p>© 2026 Algoritmus. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    )
}
