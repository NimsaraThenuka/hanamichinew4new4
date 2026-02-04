import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    image: "https://images.unsplash.com/photo-1759850395414-a051e3601115?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxqYXBhbmVzZSUyMHN0dWRlbnRzJTIwc3R1ZHlpbmclMjB1bml2ZXJzaXR5fGVufDF8fHx8MTc3MDE3NTUyOXww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Empowering Dreams",
    subtitle: "Guide students to become who they aspire to be",
    titleJa: "夢を叶える",
    subtitleJa: "学生が目指す自分になるためのサポート"
  },
  {
    image: "https://images.unsplash.com/photo-1708773651811-14e0b08c3b29?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBlZHVjYXRpb24lMjBjbGFzc3Jvb20lMjBqYXBhbnxlbnwxfHx8fDE3NzAxNzU1MzB8MA&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Global Opportunities",
    subtitle: "Opening doors to universities worldwide",
    titleJa: "グローバルな機会",
    subtitleJa: "世界中の大学への扉を開く"
  },
  {
    image: "https://images.unsplash.com/photo-1747836131340-1eb52477cf45?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxnbG9iYWwlMjBpbnRlcm5hdGlvbmFsJTIwc3R1ZGVudHMlMjBncmFkdWF0aW9ufGVufDF8fHx8MTc3MDE3NTUzMHww&ixlib=rb-4.1.0&q=80&w=1080",
    title: "Success Stories",
    subtitle: "Celebrating achievements across the globe",
    titleJa: "成功の物語",
    subtitleJa: "世界中での成果を祝う"
  }
];

interface HeroSliderProps {
  language: 'en' | 'ja';
}

export function HeroSlider({ language }: HeroSliderProps) {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => clearInterval(timer);
  }, []);

  const goToSlide = (index: number) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    setDirection(1);
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setDirection(-1);
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 1000 : -1000,
      opacity: 0,
      scale: 0.8
    }),
    center: {
      x: 0,
      opacity: 1,
      scale: 1
    },
    exit: (direction: number) => ({
      x: direction > 0 ? -1000 : 1000,
      opacity: 0,
      scale: 0.8
    })
  };

  return (
    <div className="relative h-screen overflow-hidden bg-black">
      <AnimatePresence initial={false} custom={direction} mode="wait">
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={slideVariants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 30 },
            opacity: { duration: 0.5 },
            scale: { duration: 0.5 }
          }}
          className="absolute inset-0"
        >
          <div className="relative h-full w-full">
            <motion.img
              src={slides[currentSlide].image}
              alt={slides[currentSlide].title}
              className="absolute inset-0 w-full h-full object-cover"
              initial={{ scale: 1 }}
              animate={{ scale: 1.1 }}
              transition={{ duration: 5, ease: "linear" }}
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
            
            <div className="absolute inset-0 flex items-center">
              <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
                <motion.div
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3, duration: 0.8 }}
                  className="max-w-2xl"
                >
                  <motion.h1
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                    className="text-5xl md:text-7xl mb-6 text-white"
                  >
                    {language === 'en' ? slides[currentSlide].title : slides[currentSlide].titleJa}
                  </motion.h1>
                  <motion.p
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                    className="text-xl md:text-2xl text-gray-200"
                  >
                    {language === 'en' ? slides[currentSlide].subtitle : slides[currentSlide].subtitleJa}
                  </motion.p>
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                    className="mt-8"
                  >
                    <a
                      href="#vision"
                      className="inline-block px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-black rounded-full hover:shadow-2xl hover:scale-105 transition-all duration-300"
                    >
                      {language === 'en' ? 'Discover More' : 'もっと見る'}
                    </a>
                  </motion.div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/30 transition-all z-10"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Dots */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-3 z-10">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => goToSlide(index)}
            className={`transition-all duration-300 ${
              currentSlide === index
                ? 'w-12 h-3 bg-yellow-400 rounded-full'
                : 'w-3 h-3 bg-white/50 rounded-full hover:bg-white/80'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
