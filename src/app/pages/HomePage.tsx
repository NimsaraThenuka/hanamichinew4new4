import { motion } from 'motion/react';
import { HeroSlider } from '../components/HeroSlider';
import { translations } from '../translations';
import { Sparkles, Users, Lightbulb, TrendingUp, Globe, Target, BookOpen, Award } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomePageProps {
  language: 'en' | 'ja';
}

export function HomePage({ language }: HomePageProps) {
  const t = translations[language];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6 }
    }
  };

  return (
    <div>
      <HeroSlider language={language} />

      {/* Vision Section */}
      <section id="vision" className="py-24 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Sparkles className="w-8 h-8 text-cyan-500" />
              <h2 className="text-4xl md:text-5xl">{t.vision.title}</h2>
            </div>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {[
              { icon: Target, ...t.vision.card1, color: 'from-blue-500 to-cyan-400' },
              { icon: Users, ...t.vision.card2, color: 'from-purple-500 to-pink-400' },
              { icon: Lightbulb, ...t.vision.card3, color: 'from-yellow-500 to-orange-400' }
            ].map((card, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05, y: -10 }}
                className="relative bg-white rounded-3xl p-8 shadow-xl overflow-hidden group"
              >
                <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500" style={{ backgroundImage: `linear-gradient(to bottom right, var(--tw-gradient-stops))` }} />
                
                <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${card.color} flex items-center justify-center mb-6 group-hover:rotate-12 transition-transform duration-300`}>
                  <card.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-2xl mb-4">{card.title}</h3>
                <p className="text-gray-600 leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Mission Strategy Section */}
      <section className="py-24 bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-96 h-96 bg-blue-500 rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-cyan-500 rounded-full blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">{t.mission.title}</h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">{t.mission.subtitle}</p>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { num: '01', icon: TrendingUp, ...t.mission.item1, color: 'yellow' },
              { num: '02', icon: Globe, ...t.mission.item2, color: 'blue' },
              { num: '03', icon: Target, ...t.mission.item3, color: 'cyan' },
              { num: '04', icon: BookOpen, ...t.mission.item4, color: 'purple' },
              { num: '05', icon: Award, ...t.mission.item5, color: 'pink' }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.05 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <span className={`text-${item.color}-400 text-3xl`}>{item.num}</span>
                  <item.icon className={`w-8 h-8 text-${item.color}-400 mt-1`} />
                </div>
                <h3 className="text-xl mb-3">{item.title}</h3>
                <p className="text-gray-300 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">{t.services.title}</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">{t.services.subtitle}</p>
            <Link
              to="/services"
              className="inline-block px-8 py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {language === 'en' ? 'View All Services' : 'すべてのサービスを見る'}
            </Link>
          </motion.div>

          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {[
              { ...t.services.career, image: "https://images.unsplash.com/photo-1653669486393-caa6a09ff771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwbWVudG9yJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzAxNzU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080" },
              { ...t.services.ib, image: "https://images.unsplash.com/photo-1567923227475-692076a6e26e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc3MDE3NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080" },
              { ...t.services.abroad, image: "https://images.unsplash.com/photo-1619467416348-6a782839e95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZCUyMHRyYXZlbCUyMHdvcmxkfGVufDF8fHx8MTc3MDE3NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080" },
              { ...t.services.scholarship, image: "https://images.unsplash.com/photo-1769107259180-6ab7c60ac0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvbGFyc2hpcCUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzAxNzU1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080" }
            ].map((service, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -10 }}
                className="relative bg-white rounded-2xl overflow-hidden shadow-lg group cursor-pointer"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl mb-2">{service.title}</h3>
                  <p className="text-gray-600 text-sm">{service.desc}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 via-cyan-500 to-blue-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-10 left-10 w-64 h-64 bg-white rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-64 h-64 bg-yellow-300 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-5xl mb-6">
              {language === 'en' ? 'Ready to Start Your Journey?' : '旅を始める準備はできていますか？'}
            </h2>
            <p className="text-xl mb-8 text-white/90">
              {language === 'en'
                ? 'Let us guide you to achieve your educational dreams'
                : '私たちがあなたの教育の夢を実現するお手伝いをします'}
            </p>
            <Link
              to="/contact"
              className="inline-block px-10 py-5 bg-white text-blue-600 rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
            >
              {language === 'en' ? 'Contact Us Today' : 'お問い合わせ'}
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
