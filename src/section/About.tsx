import { motion } from 'motion/react';
import { Code2, Rocket, Sparkles, Zap } from 'lucide-react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 },
};

const staggerContainer = {
    initial: {},
    whileInView: { transition: { staggerChildren: 0.1 } },
    viewport: { once: true },
};

export default function About() {
    return (
        <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Algoritmus haqida
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Zamonaviy texnologiyalar va professional yondashuvlar bilan biznesingizni yangi
                        bosqichga olib chiqamiz
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
                >
                    {[
                        {
                            icon: Zap,
                            title: 'Tezkor Ishlash',
                            description: 'Eng yuqori tezlikda ishlaydigan optimallashtirilgan yechimlar',
                        },
                        {
                            icon: Code2,
                            title: 'Tozalik & Skalabillik',
                            description: 'Oson tushuniladigan va kengaytiriladigan kod yozamiz',
                        },
                        {
                            icon: Sparkles,
                            title: 'Zamonaviy Dizayn',
                            description: 'Eng so\'nggi dizayn tendensiyalariga mos interfeys',
                        },
                        {
                            icon: Rocket,
                            title: 'To\'liq Texnologiyalar',
                            description: 'Frontend, Backend va Full-stack development',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-6 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-lg hover:shadow-cyan-500/10"
                        >
                            <div className="w-14 h-14 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-4">
                                <item.icon className="text-white" size={28} />
                            </div>
                            <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
                            <p className="text-slate-400">{item.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
