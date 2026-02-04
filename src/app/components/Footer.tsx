import { Link } from 'react-router-dom';
import { Mail, Phone, MapPin, Facebook, Instagram, Linkedin, Twitter } from 'lucide-react';
import { translations } from '../translations';

interface FooterProps {
  language: 'en' | 'ja';
}

export function Footer({ language }: FooterProps) {
  const t = translations[language];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-blue-900 to-slate-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
                <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="currentColor">
                  <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z" />
                </svg>
              </div>
              <span className="text-2xl tracking-wider">HANAMICHI</span>
            </Link>
            <p className="text-gray-300 mb-6">
              {language === 'en'
                ? 'Your path to success and happiness since 2019'
                : '2019年から成功と幸せへの道'}
            </p>
            <div className="flex gap-4">
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <Facebook className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <Instagram className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-all">
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg mb-6">{language === 'en' ? 'Quick Links' : 'クイックリンク'}</h3>
            <ul className="space-y-3">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.home}
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.services}
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.about}
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-gray-300 hover:text-white transition-colors">
                  {t.nav.contact}
                </Link>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-lg mb-6">{language === 'en' ? 'Our Services' : 'サービス'}</h3>
            <ul className="space-y-3">
              <li className="text-gray-300">{t.services.career.title}</li>
              <li className="text-gray-300">{t.services.ib.title}</li>
              <li className="text-gray-300">{t.services.university.title}</li>
              <li className="text-gray-300">{t.services.abroad.title}</li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg mb-6">{language === 'en' ? 'Contact Us' : 'お問い合わせ'}</h3>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <span className="text-gray-300">{t.contact.locationValue}</span>
              </li>
              <li className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href={`tel:${t.contact.phoneValue}`} className="text-gray-300 hover:text-white transition-colors">
                  {t.contact.phoneValue}
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-cyan-400 flex-shrink-0 mt-0.5" />
                <a href={`mailto:${t.contact.emailValue}`} className="text-gray-300 hover:text-white transition-colors">
                  {t.contact.emailValue}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/10 text-center text-gray-400">
          <p>© 2026 Hanamichi. {language === 'en' ? 'All rights reserved.' : 'すべての権利予約済み。'}</p>
        </div>
      </div>
    </footer>
  );
}
