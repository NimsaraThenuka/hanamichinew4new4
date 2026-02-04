import { Link, useLocation } from 'react-router-dom';
import { Languages } from 'lucide-react';
import { motion } from 'motion/react';
import { translations } from '../translations';

interface NavigationProps {
  language: 'en' | 'ja';
  onLanguageToggle: () => void;
}

export function Navigation({ language, onLanguageToggle }: NavigationProps) {
  const location = useLocation();
  const t = translations[language];

  const isActive = (path: string) => location.pathname === path;

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-sm shadow-md"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-500 to-cyan-400 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 100 100" fill="currentColor">
                <path d="M50 10 L60 30 L80 30 L65 45 L70 65 L50 50 L30 65 L35 45 L20 30 L40 30 Z" />
              </svg>
            </div>
            <span className="text-2xl tracking-wider">HANAMICHI</span>
          </Link>

          <div className="flex items-center gap-8">
            <div className="hidden md:flex items-center gap-6">
              {[
                { path: '/', label: t.nav.home },
                { path: '/services', label: t.nav.services },
                { path: '/about', label: t.nav.about },
                { path: '/contact', label: t.nav.contact }
              ].map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  className={`relative py-2 transition-colors ${
                    isActive(item.path) ? 'text-blue-600' : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                  {isActive(item.path) && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-600"
                    />
                  )}
                </Link>
              ))}
            </div>

            <button
              onClick={onLanguageToggle}
              className="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-blue-500 to-cyan-400 text-white hover:shadow-lg transition-all"
            >
              <Languages className="w-4 h-4" />
              <span className="text-sm font-medium">{language === 'en' ? '日本語' : 'English'}</span>
            </button>
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
