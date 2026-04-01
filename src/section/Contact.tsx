import { Send } from 'lucide-react';
import { motion } from 'motion/react';
import { useState } from 'react';

const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true, margin: '-50px' },
    transition: { duration: 0.6 },
};

export default function Contact() {
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        telegram: '',
        description: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        alert('Buyurtmangiz qabul qilindi! Tez orada siz bilan bog\'lanamiz.');
        setFormData({ name: '', phone: '', telegram: '', description: '' });
    };
    return (
        <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-4xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Buyurtma berish
                    </h2>
                    <p className="text-xl text-slate-400">
                        Loyihangizni muhokama qilish uchun biz bilan bog\'laning
                    </p>
                </motion.div>

                <motion.div
                    {...fadeInUp}
                    className="bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm p-8 md:p-12 rounded-2xl border border-slate-700/50"
                >
                    <form onSubmit={handleSubmit} className="space-y-6">
                        <div>
                            <label htmlFor="name" className="block text-white mb-2">
                                Ismingiz *
                            </label>
                            <input
                                type="text"
                                id="name"
                                required
                                value={formData.name}
                                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="Ismingizni kiriting"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-white mb-2">
                                Telefon raqam *
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="+998 90 123 45 67"
                            />
                        </div>

                        <div>
                            <label htmlFor="telegram" className="block text-white mb-2">
                                Telegram username
                            </label>
                            <input
                                type="text"
                                id="telegram"
                                value={formData.telegram}
                                onChange={(e) => setFormData({ ...formData, telegram: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors"
                                placeholder="@username"
                            />
                        </div>

                        <div>
                            <label htmlFor="description" className="block text-white mb-2">
                                Loyiha tavsifi *
                            </label>
                            <textarea
                                id="description"
                                required
                                rows={5}
                                value={formData.description}
                                onChange={(e) => setFormData({ ...formData, description: e.target.value })}
                                className="w-full px-4 py-3 bg-slate-900/50 border border-slate-700 rounded-xl text-white placeholder-slate-500 focus:outline-none focus:border-cyan-500 transition-colors resize-none"
                                placeholder="Loyihangiz haqida qisqacha ma\'lumot bering..."
                            />
                        </div>

                        <button
                            type="submit"
                            className="w-full flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-cyan-500/50 transition-all hover:scale-105"
                        >
                            <Send size={20} />
                            Yuborish
                        </button>
                    </form>
                </motion.div>
            </div>
        </section>
    )
}
