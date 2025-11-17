'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Award, Sparkles } from 'lucide-react'

export default function TeamFlavia() {
  return (
    <section id="equipe" className="py-24 bg-nude-light">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="order-2 md:order-1"
          >
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-text-primary">
              Dra. Flávia Sena
            </h2>
            <p className="text-rose-soft text-xl mb-2 font-medium">
              Médica Endocrinologista
            </p>
            <p className="text-text-secondary mb-6">
              Especialista em Ginecologia, Estética e Cuidados Integrativos
            </p>
            <p className="text-sm text-text-light mb-8">CRM-GO 36774</p>

            <div className="space-y-4 mb-8 text-text-secondary leading-relaxed">
              <p>
                Médica dedicada à saúde integrativa da mulher, a Dra. Flávia Sena atua com
                excelência clínica e sensibilidade, aliando conhecimentos em endocrinologia,
                ginecologia e estética. Seu foco é oferecer tratamentos completos que respeitam
                a individualidade e promovem equilíbrio metabólico, saúde hormonal e bem-estar estético.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-lg">
                  <GraduationCap className="w-6 h-6 text-rose-soft" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Formação Acadêmica</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Endocrinologia e Metabologia – Instituto Cetrus / Sanar</li>
                    <li>• Pós-graduada em Ginecologia e Obstetrícia – IBCMED</li>
                    <li>• Pós-graduação em Estética e Cosmetologia</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-lg">
                  <Award className="w-6 h-6 text-rose-soft" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Especializações</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Curso de Especialização em Lipedema</li>
                    <li>• Curso de Manejo da Obesidade e Emagrecimento</li>
                    <li>• Cuidados Integrativos para Pacientes Pós-Bariátricos</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-white rounded-lg">
                  <Sparkles className="w-6 h-6 text-rose-soft" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Diferenciais</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Abordagem completa que une saúde hormonal, emagrecimento e estética</li>
                    <li>• Atuação com foco em resultados reais, duradouros e personalizados</li>
                    <li>• Olhar humanizado, especialmente voltado para as necessidades femininas</li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5531987668903?text=Olá! Gostaria de agendar uma consulta com Dra. Flávia Sena."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-rose-soft text-white rounded-full text-lg font-medium hover:bg-rose-soft/90 transition-all hover:scale-105"
            >
              Agendar com Dra. Flávia
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="order-1 md:order-2"
          >
            <div className="relative aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="/images/equipe/flavia.jpg"
                alt="Dra. Flávia Sena - Médica Endocrinologista"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
