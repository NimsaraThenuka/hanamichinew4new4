import { motion } from 'motion/react';
import { translations } from '../translations';
import { Briefcase, GraduationCap, Lightbulb, FileText, Plane, Award, TrendingUp, Languages, ArrowRight, Sparkles } from 'lucide-react';
import { useState } from 'react';

interface ServicesPageProps {
  language: 'en' | 'ja';
}

export function ServicesPage({ language }: ServicesPageProps) {
  const t = translations[language];
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const services = [
    {
      icon: Briefcase,
      ...t.services.career,
      image: "https://images.unsplash.com/photo-1653669486393-caa6a09ff771?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjYXJlZXIlMjBjb3Vuc2VsaW5nJTIwbWVudG9yJTIwc3R1ZGVudHxlbnwxfHx8fDE3NzAxNzU1MzF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-blue-500 via-blue-600 to-cyan-500',
      badge: language === 'en' ? 'CAREER' : 'キャリア',
      details: language === 'en'
        ? 'Our experienced counselors provide personalized guidance to help you explore career paths, understand industry requirements, and prepare for your future profession.'
        : '経験豊富なカウンセラーが、キャリアパスの探索、業界要件の理解、将来の職業への準備をお手伝いします。'
    },
    {
      icon: GraduationCap,
      ...t.services.ib,
      image: "https://images.unsplash.com/photo-1567923227475-692076a6e26e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb2xsZWdlJTIwY2FtcHVzJTIwbGlicmFyeSUyMGJvb2tzfGVufDF8fHx8MTc3MDE3NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-purple-500 via-purple-600 to-pink-500',
      badge: 'IB',
      details: language === 'en'
        ? 'Specialized support for IB students including subject selection, CAS activities, Extended Essay guidance, and university application strategies.'
        : 'IB学生向けの専門サポート：科目選択、CAS活動、課題論文のガイダンス、大学出願戦略など。'
    },
    {
      icon: Lightbulb,
      ...t.services.learning,
      image: "https://images.unsplash.com/photo-1614492898637-435e0f87cef8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx1bml2ZXJzaXR5JTIwYXBwbGljYXRpb24lMjB3cml0aW5nfGVufDF8fHx8MTc3MDE3NTUzMnww&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-yellow-400 via-yellow-500 to-orange-500',
      badge: language === 'en' ? 'DESIGN' : 'デザイン',
      details: language === 'en'
        ? 'Create a personalized learning roadmap aligned with your aspirations, strengths, and future goals for academic and personal success.'
        : 'あなたの志望、強み、将来の目標に合わせた個別の学習ロードマップを作成します。'
    },
    {
      icon: FileText,
      ...t.services.university,
      image: "https://images.unsplash.com/photo-1759850395414-a051e3601115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MDE3NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-green-400 via-green-500 to-emerald-500',
      badge: language === 'en' ? 'UNIVERSITY' : '大学',
      details: language === 'en'
        ? 'From essay writing to interview preparation, we provide comprehensive support throughout the entire university application process.'
        : 'エッセイの執筆から面接の準備まで、大学出願プロセス全体を包括的にサポートします。'
    },
    {
      icon: Plane,
      ...t.services.abroad,
      image: "https://images.unsplash.com/photo-1619467416348-6a782839e95f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzdHVkeSUyMGFicm9hZCUyMHRyYXZlbCUyMHdvcmxkfGVufDF8fHx8MTc3MDE3NTUzMXww&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-cyan-400 via-cyan-500 to-blue-500',
      badge: language === 'en' ? 'ABROAD' : '留学',
      details: language === 'en'
        ? 'Explore study abroad opportunities across Europe, America, Asia, and Oceania with our expert guidance on program selection and application.'
        : 'ヨーロッパ、アメリカ、アジア、オセアニアの留学機会を、プログラム選択と出願に関する専門的なガイダンスで探索します。'
    },
    {
      icon: Award,
      ...t.services.scholarship,
      image: "https://images.unsplash.com/photo-1769107259180-6ab7c60ac0a5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzY2hvbGFyc2hpcCUyMHN1Y2Nlc3MlMjBjZWxlYnJhdGlvbnxlbnwxfHx8fDE3NzAxNzU1MzJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-pink-400 via-pink-500 to-rose-500',
      badge: language === 'en' ? 'SCHOLARSHIP' : '奨学金',
      details: language === 'en'
        ? 'Navigate the complex world of scholarships and financial aid with our assistance in identifying and applying for funding opportunities.'
        : '奨学金と財政援助の複雑な世界を、資金調達の機会の特定と申請のサポートでナビゲートします。'
    },
    {
      icon: TrendingUp,
      ...t.services.pathway,
      image: "https://images.unsplash.com/photo-1747836131340-1eb52477cf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc3MDE3NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-indigo-400 via-indigo-500 to-purple-500',
      badge: language === 'en' ? 'PATHWAY' : '進路',
      details: language === 'en'
        ? 'Discover academic and athletic pathways to international universities through our specialized partnership programs.'
        : '専門的なパートナーシッププログラムを通じて、国際大学への学術・スポーツパスウェイを発見します。'
    },
    {
      icon: Languages,
      ...t.services.mandarin,
      image: "https://images.unsplash.com/photo-1708773651811-14e0b08c3b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBqYXBhbnxlbnwxfHx8fDE3NzAxNzU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
      color: 'from-red-400 via-red-500 to-orange-500',
      badge: language === 'en' ? 'LANGUAGE' : '言語',
      details: language === 'en'
        ? 'Learn Mandarin Chinese with our experienced instructors to unlock opportunities in one of the world\'s most important languages.'
        : '経験豊富な講師と共に中国語を学び、世界で最も重要な言語の一つでの機会を開きます。'
    }
  ];

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[70vh] bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          <div className="absolute top-1/2 left-1/2 w-[400px] h-[400px] bg-cyan-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.3, type: "spring", stiffness: 200 }}
                className="inline-flex items-center gap-3 px-6 py-3 bg-white/20 backdrop-blur-md rounded-full mb-8 border border-white/30"
              >
                <Sparkles className="w-6 h-6 text-yellow-300" />
                <span className="text-lg">{language === 'en' ? 'Premium Educational Services' : 'プレミアム教育サービス'}</span>
              </motion.div>
              
              <h1 className="text-6xl md:text-7xl lg:text-8xl mb-8 tracking-tight">
                {t.services.title}
              </h1>
              <p className="text-2xl md:text-3xl text-white/95 max-w-3xl mx-auto leading-relaxed">
                {t.services.subtitle}
              </p>
            </motion.div>
          </div>
        </div>

        {/* Floating Elements */}
        <motion.div
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          className="absolute bottom-10 left-10 w-20 h-20 bg-yellow-400/30 rounded-2xl backdrop-blur-sm"
        />
        <motion.div
          animate={{ y: [0, 20, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-20 right-20 w-16 h-16 bg-white/20 rounded-full backdrop-blur-sm"
        />
      </section>

      {/* Services Grid */}
      <section className="py-32 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50/50 via-transparent to-yellow-50/30 pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.7, type: "spring", stiffness: 100 }}
                onHoverStart={() => setHoveredIndex(index)}
                onHoverEnd={() => setHoveredIndex(null)}
                onClick={() => setSelectedService(selectedService === index ? null : index)}
                className="group relative cursor-pointer"
              >
                <div className="relative h-[500px] rounded-3xl overflow-hidden shadow-2xl">
                  {/* Image with Overlay */}
                  <div className="absolute inset-0">
                    <motion.img
                      src={service.image}
                      alt={service.title}
                      className="w-full h-full object-cover"
                      animate={{
                        scale: hoveredIndex === index ? 1.15 : 1.05
                      }}
                      transition={{ duration: 0.6 }}
                    />
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${service.color}`}
                      animate={{
                        opacity: hoveredIndex === index ? 0.85 : 0.7
                      }}
                      transition={{ duration: 0.4 }}
                    />
                  </div>

                  {/* Content */}
                  <div className="relative h-full flex flex-col justify-between p-8">
                    {/* Top Badge */}
                    <motion.div
                      initial={{ x: -50, opacity: 0 }}
                      whileInView={{ x: 0, opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.15 + 0.3 }}
                      className="flex items-center gap-3"
                    >
                      <span className="px-4 py-2 bg-white/30 backdrop-blur-md rounded-full text-sm tracking-widest border border-white/40">
                        {service.badge}
                      </span>
                      <motion.div
                        animate={{
                          rotate: hoveredIndex === index ? 360 : 0
                        }}
                        transition={{ duration: 0.6 }}
                      >
                        <service.icon className="w-8 h-8 text-white drop-shadow-lg" />
                      </motion.div>
                    </motion.div>

                    {/* Main Content */}
                    <div>
                      <motion.h3
                        className="text-4xl md:text-5xl mb-4 text-white drop-shadow-2xl leading-tight"
                        animate={{
                          y: hoveredIndex === index ? -10 : 0
                        }}
                        transition={{ duration: 0.3 }}
                      >
                        {service.title}
                      </motion.h3>
                      
                      <motion.p
                        className="text-xl text-white/95 mb-6 leading-relaxed drop-shadow-lg"
                        animate={{
                          y: hoveredIndex === index ? -10 : 0
                        }}
                        transition={{ duration: 0.3, delay: 0.05 }}
                      >
                        {service.desc}
                      </motion.p>

                      {/* Expandable Details */}
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{
                          height: selectedService === index ? 'auto' : 0,
                          opacity: selectedService === index ? 1 : 0
                        }}
                        transition={{ duration: 0.4 }}
                        className="overflow-hidden"
                      >
                        <div className="p-6 bg-white/20 backdrop-blur-md rounded-2xl border border-white/30 mb-6">
                          <p className="text-white leading-relaxed text-lg">
                            {service.details}
                          </p>
                        </div>
                      </motion.div>

                      {/* CTA Button */}
                      <motion.button
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="group/btn relative px-8 py-4 bg-white text-black rounded-full overflow-hidden shadow-xl"
                      >
                        <span className="relative z-10 flex items-center gap-3 text-lg">
                          {selectedService === index
                            ? (language === 'en' ? 'Show Less' : '閉じる')
                            : (language === 'en' ? 'Learn More' : '詳細を見る')}
                          <motion.div
                            animate={{
                              x: hoveredIndex === index ? 5 : 0
                            }}
                            transition={{ duration: 0.3 }}
                          >
                            <ArrowRight className="w-5 h-5" />
                          </motion.div>
                        </span>
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-r ${service.color}`}
                          initial={{ x: '-100%' }}
                          whileHover={{ x: 0 }}
                          transition={{ duration: 0.3 }}
                        />
                      </motion.button>
                    </div>
                  </div>

                  {/* Decorative Corner */}
                  <motion.div
                    className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-[100px]"
                    animate={{
                      scale: hoveredIndex === index ? 1.2 : 1,
                      opacity: hoveredIndex === index ? 1 : 0.5
                    }}
                    transition={{ duration: 0.4 }}
                  />
                </div>

                {/* Glow Effect */}
                <motion.div
                  className={`absolute -inset-1 bg-gradient-to-r ${service.color} rounded-3xl -z-10 blur-2xl`}
                  animate={{
                    opacity: hoveredIndex === index ? 0.6 : 0
                  }}
                  transition={{ duration: 0.4 }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 bg-gradient-to-r from-yellow-400 via-yellow-500 to-orange-400 text-black relative overflow-hidden">
        <div className="absolute inset-0">
          <motion.div
            animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute top-0 left-0 w-96 h-96 bg-white/20 rounded-full blur-3xl"
          />
          <motion.div
            animate={{ scale: [1, 1.3, 1], rotate: [0, -90, 0] }}
            transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
            className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-black/10 rounded-full blur-3xl"
          />
        </div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="inline-block mb-8"
            >
              <Sparkles className="w-16 h-16 text-black" />
            </motion.div>
            
            <h2 className="text-5xl md:text-6xl lg:text-7xl mb-8 tracking-tight">
              {language === 'en' ? 'Ready to Get Started?' : 'お問い合わせはこちら'}
            </h2>
            <p className="text-2xl md:text-3xl mb-12 text-black/80 max-w-3xl mx-auto leading-relaxed">
              {language === 'en'
                ? 'Contact us today to learn more about our services and start your journey to success'
                : 'サービスの詳細については、今すぐお問い合わせください。成功への旅を始めましょう'}
            </p>
            
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.1, rotate: 2 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-4 px-12 py-6 bg-black text-white rounded-full text-xl shadow-2xl hover:shadow-3xl transition-all duration-300"
            >
              {language === 'en' ? 'Contact Us Now' : 'お問い合わせ'}
              <ArrowRight className="w-6 h-6" />
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
