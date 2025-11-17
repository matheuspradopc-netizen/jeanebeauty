'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { GraduationCap, Award, Sparkles } from 'lucide-react'

export default function TeamVanessa() {
  return (
    <section className="py-24 bg-white">
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
                src="/images/equipe/vanessa.jpg"
                alt="Vanessa Luiza - Biomédica Esteta"
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
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4 text-text-primary">
              Vanessa Luiza
            </h2>
            <p className="text-rose-soft text-xl mb-2 font-medium">
              Biomédica Esteta
            </p>
            <p className="text-text-secondary mb-8">
              Especialista em Estética Corporal e Laser
            </p>

            <div className="space-y-4 mb-8 text-text-secondary leading-relaxed">
              <p>
                Com mais de 10 anos de experiência na área da estética, Vanessa alia técnica,
                empatia e excelência científica em cada atendimento. Graduada em Biomedicina com
                especialização em Estética e Patologia Clínica, desenvolveu um olhar clínico
                preciso e acolhedor, oferecendo tratamentos personalizados que unem tecnologia,
                segurança e resultados naturais.
              </p>
            </div>

            <div className="space-y-6 mb-8">
              <div className="flex gap-4 items-start">
                <div className="p-3 bg-nude-light rounded-lg">
                  <GraduationCap className="w-6 h-6 text-rose-soft" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Formação Acadêmica</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Biomédica – Centro Universitário UNA (2020)</li>
                    <li>• Especialização em Estética e Patologia Clínica</li>
                    <li>• Técnica em Estética – Newton Paiva (2012)</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-nude-light rounded-lg">
                  <Award className="w-6 h-6 text-rose-soft" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Especializações</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Capacitação em Estética Corporal Avançada</li>
                    <li>• Expertise em Depilação a Laser (5+ anos de atuação)</li>
                    <li>• Desenvolvimento de protocolos personalizados</li>
                    <li>• Atualização constante em tecnologias estéticas</li>
                  </ul>
                </div>
              </div>

              <div className="flex gap-4 items-start">
                <div className="p-3 bg-nude-light rounded-lg">
                  <Sparkles className="w-6 h-6 text-rose-soft" />
                </div>
                <div>
                  <h3 className="font-semibold text-text-primary mb-2">Diferenciais</h3>
                  <ul className="text-sm text-text-secondary space-y-1">
                    <li>• Mais de 10 anos de vivência prática em estética e saúde integrativa</li>
                    <li>• Atuação especializada em procedimentos corporais e depilação a laser</li>
                    <li>• Abordagem acolhedora e precisa, com foco em resultados reais</li>
                  </ul>
                </div>
              </div>
            </div>

            <a
              href="https://wa.me/5531987668903?text=Olá! Gostaria de agendar uma consulta com Vanessa Luiza."
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-8 py-4 bg-rose-soft text-white rounded-full text-lg font-medium hover:bg-rose-soft/90 transition-all hover:scale-105"
            >
              Agendar com Vanessa
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
