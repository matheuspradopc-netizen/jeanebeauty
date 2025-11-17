'use client'
import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import Image from 'next/image'
import { Sparkles } from 'lucide-react'

const procedureImages = [
  '/images/procedimentos/1.jpg',
  '/images/procedimentos/PHOTO-2025-06-01-16-52-03 2.jpg',
  '/images/procedimentos/PHOTO-2025-06-01-17-51-44.jpg',
  '/images/procedimentos/PHOTO-2025-06-01-18-29-42.jpg',
  '/images/procedimentos/PHOTO-2025-06-01-18-29-43 2.jpg',
  '/images/procedimentos/PHOTO-2025-06-01-18-29-43.jpg',
  '/images/procedimentos/PHOTO-2025-06-06-22-03-03 2.jpg',
  '/images/procedimentos/PHOTO-2025-08-23-19-14-58.jpg',
]

export default function Procedures() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % procedureImages.length)
    }, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-24 bg-nude-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Sparkles className="w-8 h-8 text-rose-soft" />
              <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-primary">
                Nossos Protocolos com Resultados Reais
              </h2>
            </div>

            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                Na Jeane Beauty Clinic, cada procedimento é personalizado através de uma avaliação
                detalhada que considera sua anatomia única, histórico de saúde e objetivos estéticos.
                Nossa abordagem combina protocolos exclusivos desenvolvidos pela equipe técnica com
                as mais avançadas tecnologias em estética facial e corporal.
              </p>
              <p>
                Trabalhamos com transparência absoluta - desde a primeira consulta até o
                acompanhamento pós-procedimento. Nossa responsável técnica registrada no CRO-MG
                e equipe biomédica especializada garantem que você receba não apenas resultados
                naturais e harmoniosos, mas também a segurança que só uma clínica com supervisão
                médica pode oferecer.
              </p>
              <p>
                Cada transformação que realizamos é documentada com o consentimento das nossas
                pacientes, respeitando sempre a individualidade e realçando a beleza natural de
                cada pessoa. Utilizamos bioestimuladores de última geração, neuromoduladores
                aprovados pela ANVISA e ácido hialurônico de alta densidade molecular, sempre
                com técnicas minimamente invasivas que preservam suas expressões e características
                únicas.
              </p>
              <p>
                O que nos diferencia é o cuidado integral - você não é apenas mais um procedimento
                na agenda. Acompanhamos sua evolução, ajustamos protocolos quando necessário e
                celebramos cada conquista da sua autoestima junto com você.
              </p>
              <p className="font-medium text-text-primary">
                Confira ao lado alguns dos resultados reais que transformaram a vida das nossas
                pacientes:
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
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
                    src={procedureImages[currentIndex]}
                    alt={`Resultado de procedimento ${currentIndex + 1}`}
                    fill
                    className="object-contain"
                  />
                </motion.div>
              </AnimatePresence>

              <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex gap-2">
                {procedureImages.map((_, index) => (
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
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
