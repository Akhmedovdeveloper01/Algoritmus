import { motion } from 'motion/react';
import { ImageWithFallback } from '../app/components/figma/ImageWithFallback';
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

export default function Portfolio() {
    return (
        <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8 relative">
            <div className="max-w-7xl mx-auto">
                <motion.div {...fadeInUp} className="text-center mb-16">
                    <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">Portfolio</h2>
                    <p className="text-xl text-slate-400 max-w-3xl mx-auto">
                        Bizning eng so\'nggi loyihalarimiz bilan tanishing
                    </p>
                </motion.div>

                <motion.div
                    variants={staggerContainer}
                    initial="initial"
                    whileInView="whileInView"
                    viewport={{ once: true }}
                    className="grid md:grid-cols-2 lg:grid-cols-2 gap-8"
                >
                    {[
                        {
                            title: 'Premium Corporate Website',
                            description: 'Zamonaviy korporativ sayt, to\'liq responsive va SEO optimizatsiya',
                            image:
                                'https://images.unsplash.com/photo-1730993872148-83acdfb597e8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWJzaXRlJTIwbW9ja3VwJTIwbGFwdG9wfGVufDF8fHx8MTc3MTMwMjQxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                            tags: ['React', 'Tailwind CSS', 'TypeScript'],
                        },
                        {
                            title: 'E-commerce Platform',
                            description:
                                'To\'liq funksional onlayn do\'kon, mahsulot katalogi va to\'lov tizimi',
                            image:
                                'https://images.unsplash.com/photo-1658297063569-162817482fb6?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlY29tbWVyY2UlMjBzaG9wcGluZyUyMHdlYnNpdGV8ZW58MXx8fHwxNzcxMjUzMjExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                            tags: ['Next.js', 'PostgreSQL', 'Stripe'],
                        },
                        {
                            title: 'Business Dashboard',
                            description: 'Biznes statistikasini kuzatish uchun zamonaviy admin panel',
                            image:
                                'https://images.unsplash.com/photo-1763038311036-6d18805537e5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBidXNpbmVzcyUyMGRhc2hib2FyZHxlbnwxfHx8fDE3NzEzNTA1NzZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                            tags: ['React', 'Node.js', 'MongoDB'],
                        },
                        {
                            title: 'Admin Control Panel',
                            description: 'Murakkab ma\'lumotlar bilan ishlash uchun CRM tizimi',
                            image:
                                'https://images.unsplash.com/photo-1692133211836-52846376d66f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBhZG1pbiUyMHBhbmVsfGVufDF8fHx8MTc3MTM1MDU3Nnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
                            tags: ['Vue.js', 'Laravel', 'MySQL'],
                        },
                    ].map((project, index) => (
                        <motion.div
                            key={index}
                            variants={fadeInUp}
                            className="group bg-gradient-to-br from-slate-800/50 to-slate-900/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all hover:shadow-2xl hover:shadow-cyan-500/20 hover:-translate-y-2"
                        >
                            <div className="relative overflow-hidden aspect-video">
                                <ImageWithFallback
                                    src={project.image}
                                    alt={project.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/50 to-transparent opacity-60" />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-white mb-2">{project.title}</h3>
                                <p className="text-slate-400 mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag, tagIndex) => (
                                        <span
                                            key={tagIndex}
                                            className="px-3 py-1 bg-cyan-500/10 border border-cyan-500/20 text-cyan-400 rounded-lg text-sm"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    )
}
