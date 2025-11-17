'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import Image from 'next/image'

const images = [
  '/images/clinica/interior1.jpg',
  '/images/clinica/interior01.jpg',
  '/images/clinica/interior2.jpg',
  '/images/clinica/interior 3.jpg',
]

export default function Hero() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length)
    }, 5000)
    return () => clearInterval(interval)
  }, [])

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length)
  }

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length)
  }

  return (
    <section id="home" className="relative h-screen w-full overflow-hidden">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.7 }}
          className="absolute inset-0"
        >
          <Image
            src={images[currentIndex]}
            alt={`Jeane Beauty Clinic - Interior ${currentIndex + 1}`}
            fill
            className="object-cover"
            priority={currentIndex === 0}
          />
          <div className="absolute inset-0 bg-black/40" />
        </motion.div>
      </AnimatePresence>

      <div className="relative h-full flex items-center justify-center text-center px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="max-w-4xl"
        >
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-white mb-6">
            Beleza que Transforma
          </h1>
          <div className="text-xl md:text-2xl text-white/90 mb-8 font-light space-y-2">
            <p>Harmonização Facial e Corporal</p>
            <p>Referência em Naturalidade + 15 anos</p>
            <p>Resultados por equipe multidisciplinar habilitada</p>
          </div>
          <div className="flex gap-4 justify-center flex-wrap">
            <a
              href="https://wa.me/5531987668903?text=Olá! Gostaria de agendar uma consulta na Jeane Beauty Clinic."
              target="_blank"
              rel="noopener noreferrer"
              className="px-8 py-4 bg-rose-soft text-white rounded-full text-lg font-medium hover:bg-rose-soft/90 transition-colors"
            >
              Agendar Consulta
            </a>
            <a
              href="#sobre"
              className="px-8 py-4 bg-white/10 backdrop-blur-md text-white rounded-full text-lg font-medium hover:bg-white/20 transition-colors border border-white/30"
            >
              Conheça Nossa Equipe
            </a>
          </div>
        </motion.div>
      </div>

      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`w-2 h-2 rounded-full transition-all ${
              index === currentIndex ? 'bg-white w-8' : 'bg-white/50'
            }`}
            aria-label={`Ir para imagem ${index + 1}`}
          />
        ))}
      </div>
    </section>
  )
}
