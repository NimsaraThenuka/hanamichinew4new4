import { motion } from 'motion/react';
import { translations } from '../translations';
import { CheckCircle, Globe } from 'lucide-react';

interface AboutPageProps {
  language: 'en' | 'ja';
}

export function AboutPage({ language }: AboutPageProps) {
  const t = translations[language];

  const countries = [
    { name: 'USA', flag: '🇺🇸' },
    { name: 'Canada', flag: '🇨🇦' },
    { name: 'Finland', flag: '🇫🇮' },
    { name: 'The Netherlands', flag: '🇳🇱' },
    { name: 'France', flag: '🇫🇷' },
    { name: 'Italy', flag: '🇮🇹' },
    { name: 'Czech Republic', flag: '🇨🇿' },
    { name: 'Australia', flag: '🇦🇺' },
    { name: 'New Zealand', flag: '🇳🇿' },
    { name: 'Hungary', flag: '🇭🇺' },
    { name: 'Korea', flag: '🇰🇷' },
    { name: 'China', flag: '🇨🇳' },
    { name: 'Spain', flag: '🇪🇸' },
    { name: 'Taiwan', flag: '🇹🇼' },
    { name: 'Malaysia', flag: '🇲🇾' },
    { name: 'Japan', flag: '🇯🇵' }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[60vh] bg-gradient-to-br from-cyan-500 via-blue-500 to-purple-600 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-20 left-20 w-64 h-64 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl mb-6">{t.about.title}</h1>
              <p className="text-xl md:text-2xl text-white/90 max-w-3xl mx-auto">{t.about.intro}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-24 bg-gradient-to-b from-white to-yellow-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1758369636875-60b3dcb76366?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHByb2Zlc3Npb25hbCUyMHdvbWFuJTIwb2ZmaWNlfGVufDF8fHx8MTc3MDE3NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="CEO"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-3xl -z-10" />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <p className="text-xl text-gray-700 mb-6 leading-relaxed">{t.about.mission}</p>
              <div className="mt-8 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-blue-500">
                <p className="text-sm text-gray-600 mb-2">{t.about.ceo}</p>
                <p className="text-2xl">{t.about.ceoName}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Our Record Section */}
      <section className="py-24 bg-gradient-to-br from-blue-900 via-purple-900 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl mb-6">{t.about.record.title}</h2>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              { title: t.about.record.partnerships, desc: t.about.record.partnershipsDesc },
              { title: t.about.record.collaborations, desc: t.about.record.collaborationsDesc },
              { title: t.about.record.guidance, desc: t.about.record.guidanceDesc },
              { title: t.about.record.specialized, desc: t.about.record.specializedDesc },
              { title: t.about.record.tours, desc: t.about.record.toursDesc }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <CheckCircle className="w-6 h-6 text-yellow-400 flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="text-xl mb-3">{item.title}</h3>
                    <p className="text-gray-300 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Matriculation Section */}
      <section className="py-24 bg-gradient-to-b from-yellow-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <div className="flex items-center justify-center gap-3 mb-4">
              <Globe className="w-8 h-8 text-blue-600" />
              <h2 className="text-4xl md:text-5xl">{t.about.matriculation.title}</h2>
            </div>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">{t.about.matriculation.subtitle}</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-8 gap-6"
          >
            {countries.map((country, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.5 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.5 }}
                whileHover={{ scale: 1.1, rotate: 5 }}
                className="flex flex-col items-center gap-3 p-4 bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <div className="text-5xl">{country.flag}</div>
                <p className="text-sm text-center">{country.name}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-cyan-500 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="text-6xl mb-6">"</div>
            <p className="text-2xl md:text-3xl mb-8 italic">
              {language === 'en'
                ? 'Hanamichi has been instrumental in helping countless students achieve their dreams of studying abroad and building successful futures.'
                : '花道は、数多くの学生が留学の夢を実現し、成功した未来を築くのを支援してきました。'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
