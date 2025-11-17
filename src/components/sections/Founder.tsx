'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Award, Users, Heart } from 'lucide-react'

export default function Founder() {
  return (
    <section id="sobre" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/equipe/joyce.jpg"
                alt="Joyce Jeane - Fundadora"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-6 text-text-primary">
              Joyce Jeane
            </h2>
            <p className="text-rose-soft text-xl mb-6 font-medium">
              Fundadora & Especialista em Harmonização Facial
            </p>

            <div className="space-y-4 mb-8 text-text-secondary leading-relaxed">
              <p>
                Com mais de 15 anos de experiência em estética avançada, Joyce Jeane é referência
                em harmonização facial e procedimentos minimamente invasivos em Ibirité e região.
              </p>
              <p>
                Formada em Biomedicina Estética e com especializações nas melhores instituições
                do país, Joyce une técnica, arte e cuidado personalizado para realçar a beleza
                natural de cada cliente.
              </p>
              <p>
                Sua filosofia é simples: resultados naturais que respeitam a individualidade
                e promovem bem-estar e autoestima.
              </p>
            </div>

            <div className="grid grid-cols-3 gap-4 mb-8">
              <div className="text-center p-4 bg-nude-light rounded-xl">
                <Award className="w-8 h-8 mx-auto mb-2 text-rose-soft" />
                <p className="font-bold text-2xl text-text-primary">15+</p>
                <p className="text-sm text-text-secondary">Anos</p>
              </div>
              <div className="text-center p-4 bg-nude-light rounded-xl">
                <Users className="w-8 h-8 mx-auto mb-2 text-rose-soft" />
                <p className="font-bold text-2xl text-text-primary">5000+</p>
                <p className="text-sm text-text-secondary">Clientes</p>
              </div>
              <div className="text-center p-4 bg-nude-light rounded-xl">
                <Heart className="w-8 h-8 mx-auto mb-2 text-rose-soft" />
                <p className="font-bold text-2xl text-text-primary">100%</p>
                <p className="text-sm text-text-secondary">Satisfação</p>
              </div>
            </div>

            <a
              href="https://wa.me/5531987668903?text=Olá! Gostaria de agendar uma consulta com Joyce Jeane."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-rose-soft text-white rounded-full text-lg font-medium hover:bg-rose-soft/90 transition-all hover:scale-105"
            >
              Agendar Consulta com Joyce
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
