import { motion } from 'motion/react';
import { Headphones, Palette, Rocket, Search, Shield, Zap } from 'lucide-react';

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

export default function WhyChoose() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Nima uchun aynan biz?
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Bizni tanlaganingizda yuqori sifat va professional yondashuvga ishonch hosil qilasiz
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {[
                        {
                            icon: Rocket,
                            title: 'Tez yetkazib berish',
                            description: 'Loyihalarni o\'z vaqtida va sifatli taqdim etamiz',
                        },
                        {
                            icon: Shield,
                            title: 'Toza va moslashuvchan kod',
                            description: 'Kelajakda oson rivojlantirilishi mumkin bo\'lgan kod',
                        },
                        {
                            icon: Palette,
                            title: 'Zamonaviy UI/UX',
                            description: 'Foydalanuvchilar uchun qulay va chiroyli dizayn',
                        },
                        {
                            icon: Search,
                            title: 'SEO optimizatsiya',
                            description: 'Google qidiruvida yuqori o\'rinlarda ko\'rish',
                        },
                        {
                            icon: Headphones,
                            title: 'Doimiy qo\'llab-quvvatlash',
                            description: 'Loyihadan keyin ham yordam va yangilanishlar',
                        },
                        {
                            icon: Zap,
                            title: 'Yuqori tezlik',
                            description: 'Tez yuklanuvchi va samarali ishlaydigan saytlar',
                        },
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="flex items-start gap-4 bg-gradient-to-br from-slate-800/30 to-slate-900/30 backdrop-blur-sm p-6 rounded-xl border border-slate-700/30 hover:border-cyan-500/30 transition-all"
                        >
                            <div className="w-12 h-12 bg-gradient-to-br from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center flex-shrink-0">
                                <item.icon className="text-white" size={24} />
                            </div>
                            <div>
                                <h3 className="text-lg font-semibold text-white mb-1">{item.title}</h3>
                                <p className="text-slate-400 text-sm">{item.description}</p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
