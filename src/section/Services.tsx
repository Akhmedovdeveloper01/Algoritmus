import { motion } from 'motion/react';
import { Code2, FileCode, Layout, Settings, ShoppingCart, Sparkles } from 'lucide-react';

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

export default function Services() {
    return (
        <section id="services" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Bizning Xizmatlarimiz
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Har qanday murakkablikdagi web loyihalarni hayotga oshiramiz
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {[
                        {
                            icon: Layout,
                            title: 'Landing Page',
                            description:
                                'Yuqori konversiyali, zamonaviy va responsive landing page-lar yaratamiz',
                            color: 'from-cyan-500 to-blue-500',
                        },
                        {
                            icon: FileCode,
                            title: 'Korporativ Saytlar',
                            description: 'Kompaniyangiz uchun professional va ishonchli web saytlar',
                            color: 'from-blue-500 to-purple-500',
                        },
                        {
                            icon: ShoppingCart,
                            title: 'E-commerce',
                            description: 'Onlayn savdo platformalari va mahsulot kataloglari',
                            color: 'from-purple-500 to-pink-500',
                        },
                        {
                            icon: Settings,
                            title: 'CRM / Admin Panel',
                            description: 'Biznesingizni boshqarish uchun maxsus tizimlar',
                            color: 'from-pink-500 to-red-500',
                        },
                        {
                            icon: Code2,
                            title: 'Web Ilovalar',
                            description: 'Murakkab funksionallikka ega zamonaviy web applicationlar',
                            color: 'from-red-500 to-orange-500',
                        },
                        {
                            icon: Sparkles,
                            title: 'Dizayn & UX/UI',
                            description: 'Foydalanuvchilarga qulay va chiroyli interfeys dizayni',
                            color: 'from-orange-500 to-yellow-500',
                        },
                    ].map((service, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-xl hover:shadow-cyan-500/10 hover:-translate-y-1"
                        >
                            <div
                                className={`w-16 h-16 bg-gradient-to-br ${service.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}
                            >
                                <service.icon className="text-white" size={32} />
                            </div>
                            <h3 className="text-2xl font-semibold text-white mb-3">{service.title}</h3>
                            <p className="text-slate-400 leading-relaxed">{service.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
