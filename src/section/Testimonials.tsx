import { motion } from 'motion/react';
import { Star } from 'lucide-react';

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

export default function Testimonials() {
    return (
        <section className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Mijozlar fikri
                    </h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Bizning ishimizdan mamnun mijozlar
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
                            name: 'Abdulloh Karimov',
                            company: 'TechStart LLC',
                            text: 'Algoritmus jamoasi bizning korporativ saytimizni juda professional darajada tayyorladi. Tez, sifatli va mijozga yo\'naltirilgan yondashuv!',
                            rating: 5,
                        },
                        {
                            name: 'Dilshod Nematov',
                            company: 'ShopUz E-commerce',
                            text: 'E-commerce platformamiz uchun ajoyib yechim taklif qilishdi. Sayt tez ishlaydi va mijozlar juda mamnun. Tavsiya qilaman!',
                            rating: 5,
                        },
                        {
                            name: 'Malika Azimova',
                            company: 'BeautyPro Salon',
                            text: 'Landing page va bron qilish tizimi uchun rahmat! Mijozlar soni 3 baravarga oshdi. Professional jamoa!',
                            rating: 5,
                        },
                    ].map((testimonial, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50 hover:border-cyan-500/50 transition-all"
                        >
                            <div className="flex gap-1 mb-4">
                                {[...Array(testimonial.rating)].map((_, i) => (
                                    <Star key={i} className="text-yellow-400 fill-yellow-400" size={20} />
                                ))}
                            </div>
                            <p className="text-slate-300 mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                            <div>
                                <div className="font-semibold text-white">{testimonial.name}</div>
                                <div className="text-cyan-400 text-sm">{testimonial.company}</div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
