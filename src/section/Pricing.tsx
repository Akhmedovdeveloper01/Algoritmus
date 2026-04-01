import { motion } from 'motion/react';
import { Check } from 'lucide-react';

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

export default function Pricing() {
    return (
        <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Tariflar</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Har bir biznes uchun mos keluvchi paket tanlang
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-3 gap-8"
                >
                    {[
                        {
                            name: 'Basic',
                            price: 'Kelishuv asosida',
                            description: 'Kichik biznes va startuplar uchun',
                            features: [
                                'Landing Page',
                                'Responsive Dizayn',
                                '1 dan 3  gacha Sahifa',
                                'Asosiy SEO',
                                '1 oy qo\'llab-quvvatlash',
                                'SSL sertifikat',
                            ],
                            color: 'from-cyan-500 to-blue-500',
                            popular: false,
                        },
                        {
                            name: 'Standard',
                            price: 'Kelishuv asosida',
                            description: 'O\'rta biznes uchun eng yaxshi tanlov',
                            features: [
                                'Corporate Website',
                                'Admin Panel',
                                '5+ Sahifa',
                                'To\'liq SEO',
                                '3 oy qo\'llab-quvvatlash',
                                'SSL & Hosting',
                                'Google Analytics',
                                'Contact Form',
                            ],
                            color: 'from-purple-500 to-pink-500',
                            popular: true,
                        },
                        {
                            name: 'Premium',
                            price: 'Kelishuv asosida',
                            description: 'Yuqori talablar uchun premium yechim',
                            features: [
                                'Custom Web Application',
                                'CRM/E-commerce',
                                'Cheksiz sahifa',
                                'Premium SEO',
                                '6 oy qo\'llab-quvvatlash',
                                'Premium Hosting',
                                'Advanced Analytics',
                                'API Integration',
                                'Priority Support',
                            ],
                            color: 'from-orange-500 to-red-500',
                            popular: false,
                        },
                    ].map((plan, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className={`relative bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border ${plan.popular
                                ? 'border-purple-500/50 shadow-2xl shadow-purple-500/20 scale-105'
                                : 'border-slate-700/50'
                                } transition-all hover:shadow-xl hover:-translate-y-1`}
                        >
                            {plan.popular && (
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white rounded-full text-sm font-semibold">
                                    Eng mashur
                                </div>
                            )}
                            <h3 className="text-2xl font-bold text-white mb-2">{plan.name}</h3>
                            <p className="text-slate-400 text-sm mb-6">{plan.description}</p>
                            <div className="mb-6">
                                {/* <span className="text-3xl font-bold text-white">{plan.price}</span> */}
                                {/* <span className="text-slate-400 ml-2">so'm</span> */}
                            </div>
                            <ul className="space-y-3 mb-8">
                                {plan.features.map((feature, featureIndex) => (
                                    <li key={featureIndex} className="flex items-center gap-3 text-slate-300">
                                        <div
                                            className={`w-5 h-5 bg-gradient-to-br ${plan.color} rounded-full flex items-center justify-center flex-shrink-0`}
                                        >
                                            <Check size={14} className="text-white" />
                                        </div>
                                        {feature}
                                    </li>
                                ))}
                            </ul>
                            <a
                                href="#contact"
                                className={`block text-center py-3 px-6 rounded-xl font-semibold transition-all ${plan.popular
                                    ? 'bg-gradient-to-r from-purple-500 to-pink-500 text-white hover:shadow-lg hover:shadow-purple-500/50'
                                    : 'bg-slate-700/50 text-white hover:bg-slate-700'
                                    }`}
                            >
                                Tanlash
                            </a>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
