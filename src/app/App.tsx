import { useState } from 'react';
import { motion } from 'motion/react';
import {
  Code2,
  Sparkles,
  Rocket,
  ShoppingCart,
  Layout,
  FileCode,
  Settings,
  Zap,
  Shield,
  Palette,
  Search,
  Headphones,
  Check,
  Star,
  Mail,
  Phone,
  Send,
  Facebook,
  Instagram,
  Linkedin,
  Github,
  Menu,
  X,
} from 'lucide-react';
import { ImageWithFallback } from './components/figma/ImageWithFallback';

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

export default function App() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
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
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-blue-950 to-slate-900">
      {/* Navigation */}
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

            {/* Desktop Menu */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Biz haqimizda
              </a>
              <a href="#services" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Xizmatlar
              </a>
              <a href="#portfolio" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Portfolio
              </a>
              <a href="#pricing" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Tariflar
              </a>
              <a href="#contact" className="text-slate-300 hover:text-cyan-400 transition-colors">
                Aloqa
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden text-white"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Menu */}
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

      {/* Hero Section */}
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

      {/* About Section */}
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

      {/* Services Section */}
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

      {/* Why Choose Us Section */}
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

      {/* Portfolio Section */}
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

      {/* Pricing Section */}
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

      {/* Testimonials Section */}
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

      {/* Contact Form Section */}
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

      {/* Footer */}
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
    </div>
  );
}