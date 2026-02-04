import { motion } from 'motion/react';
import { translations } from '../translations';
import { MapPin, Phone, Mail, Send } from 'lucide-react';
import { useState } from 'react';

interface ContactPageProps {
  language: 'en' | 'ja';
}

export function ContactPage({ language }: ContactPageProps) {
  const t = translations[language];
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setFormData({ name: '', email: '', phone: '', message: '' });
    }, 3000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative h-[50vh] bg-gradient-to-br from-purple-600 via-blue-600 to-cyan-500 text-white overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-10 left-10 w-64 h-64 bg-yellow-400/30 rounded-full blur-3xl animate-pulse" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-white/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        </div>

        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-5xl md:text-6xl mb-6">{t.contact.title}</h1>
              <p className="text-xl md:text-2xl text-white/90">{t.contact.message}</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-24 bg-gradient-to-b from-white via-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl mb-8">
                {language === 'en' ? 'Get in Touch' : 'お問い合わせ'}
              </h2>

              <div className="space-y-6">
                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-blue-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{t.contact.location}</h3>
                    <p className="text-gray-600">{t.contact.locationValue}</p>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-yellow-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-400 flex items-center justify-center flex-shrink-0">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{t.contact.phone}</h3>
                    <a href={`tel:${t.contact.phoneValue}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {t.contact.phoneValue}
                    </a>
                  </div>
                </motion.div>

                <motion.div
                  whileHover={{ x: 10 }}
                  className="flex items-start gap-4 p-6 bg-white rounded-2xl shadow-lg border-l-4 border-cyan-500"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-blue-400 flex items-center justify-center flex-shrink-0">
                    <Mail className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl mb-2">{t.contact.email}</h3>
                    <a href={`mailto:${t.contact.emailValue}`} className="text-gray-600 hover:text-blue-600 transition-colors">
                      {t.contact.emailValue}
                    </a>
                  </div>
                </motion.div>
              </div>

              {/* Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="mt-8 relative"
              >
                <img
                  src="https://images.unsplash.com/photo-1649210920652-859c57b8b731?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoeW9nbyUyMGphcGFuJTIwY2l0eSUyMHN0cmVldHxlbnwxfHx8fDE3NzAxNzU1MzN8MA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Hyogo, Japan"
                  className="rounded-3xl shadow-2xl"
                />
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-3xl -z-10" />
              </motion.div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <div className="bg-white rounded-3xl shadow-2xl p-8">
                <h2 className="text-3xl mb-8">
                  {language === 'en' ? 'Send us a Message' : 'メッセージを送る'}
                </h2>

                {submitted ? (
                  <motion.div
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="text-center py-12"
                  >
                    <div className="w-20 h-20 bg-gradient-to-br from-green-500 to-emerald-400 rounded-full flex items-center justify-center mx-auto mb-6">
                      <Send className="w-10 h-10 text-white" />
                    </div>
                    <h3 className="text-2xl mb-4">
                      {language === 'en' ? 'Message Sent!' : '送信完了！'}
                    </h3>
                    <p className="text-gray-600">
                      {language === 'en'
                        ? 'Thank you for contacting us. We will get back to you soon!'
                        : 'お問い合わせありがとうございます。すぐにご連絡いたします！'}
                    </p>
                  </motion.div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div>
                      <label htmlFor="name" className="block text-sm mb-2 text-gray-700">
                        {language === 'en' ? 'Your Name' : 'お名前'}
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm mb-2 text-gray-700">
                        {language === 'en' ? 'Email Address' : 'メールアドレス'}
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm mb-2 text-gray-700">
                        {language === 'en' ? 'Phone Number' : '電話番号'}
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm mb-2 text-gray-700">
                        {language === 'en' ? 'Your Message' : 'メッセージ'}
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        required
                        rows={6}
                        className="w-full px-4 py-3 rounded-xl border-2 border-gray-200 focus:border-blue-500 focus:outline-none transition-colors resize-none"
                      />
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      type="submit"
                      className="w-full py-4 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-xl hover:shadow-2xl transition-all duration-300 flex items-center justify-center gap-2"
                    >
                      <Send className="w-5 h-5" />
                      {language === 'en' ? 'Send Message' : '送信する'}
                    </motion.button>
                  </form>
                )}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-24 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-br from-blue-100 to-cyan-100 rounded-3xl p-12 text-center"
          >
            <MapPin className="w-16 h-16 text-blue-600 mx-auto mb-6" />
            <h3 className="text-3xl mb-4">{language === 'en' ? 'Visit Us' : '訪問'}</h3>
            <p className="text-xl text-gray-700 mb-2">{t.contact.locationValue}</p>
            <p className="text-gray-600">
              {language === 'en'
                ? 'We look forward to meeting you in person!'
                : '直接お会いできることを楽しみにしています！'}
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
