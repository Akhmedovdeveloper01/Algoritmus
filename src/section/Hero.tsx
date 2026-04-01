import { motion } from 'motion/react';
import { Rocket, Sparkles } from 'lucide-react';
import { ImageWithFallback } from '../app/components/figma/ImageWithFallback';

export default function Hero() {
    return (
        <section className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-b from-blue-500/10 to-transparent pointer-events-none" />
            <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-10 w-96 h-96 bg-purple-500/20 rounded-full blur-3xl" />

            <div className="max-w-7xl mx-auto relative z-10">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="inline-flex items-center gap-2 px-4 py-2 bg-cyan-500/10 border border-cyan-500/20 rounded-full mb-6">
                            <Sparkles className="text-cyan-400" size={16} />
                            <span className="text-cyan-300 text-sm">Professional Web Development</span>
                        </div>

                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                            Zamonaviy{' '}
                            <span className="bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-500 bg-clip-text text-transparent">
                                Web Saytlar
                            </span>{' '}
                            Yaratamiz
                        </h1>

                        <p className="text-xl text-slate-300 mb-8 leading-relaxed">
                            Biznesingizni raqamli olamda rivojlantirish uchun yuqori sifatli, zamonaviy va tez
                            ishlaydigan web saytlar va ilovalar yaratamiz.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <a
                                href="#contact"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                            >
                                <Rocket size={20} />
                                Buyurtma berish
                            </a>
                            <a
                                href="#portfolio"
                                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-800/50 text-white rounded-xl font-semibold border border-slate-700 hover:border-cyan-500/50 transition-all hover:scale-105"
                            >
                                Portfolio ko'rish
                            </a>
                        </div>

                        <div className="mt-12 flex items-center gap-8">
                            <div>
                                <div className="text-3xl font-bold text-white">50+</div>
                                <div className="text-slate-400 text-sm">Muvaffaqiyatli loyihalar</div>
                            </div>
                            <div>
                                <div className="text-3xl font-bold text-white">100%</div>
                                <div className="text-slate-400 text-sm">Mijozlar qoniqish darajasi</div>
                            </div>
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden border border-cyan-500/20 shadow-2xl shadow-cyan-500/20">
                            <ImageWithFallback
                                src="https://images.unsplash.com/photo-1759884247173-3db27f7fafef?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjB3ZWIlMjBkZXZlbG9wbWVudCUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NzEzNDc2MzB8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                                alt="Web Development"
                                className="w-full h-auto"
                            />
                            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    )
}
