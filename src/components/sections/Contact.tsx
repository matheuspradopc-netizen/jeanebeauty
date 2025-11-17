'use client'
import { motion } from 'framer-motion'
import { MapPin, Phone, Clock } from 'lucide-react'

export default function Contact() {
  return (
    <section id="contato" className="py-24 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-text-primary mb-4">
            Visite Nossa Clínica
          </h2>
          <p className="text-xl text-text-secondary">
            Estamos prontos para receber você com todo conforto e cuidado
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <div className="flex gap-4 items-start">
              <div className="p-3 bg-nude-light rounded-lg">
                <MapPin className="w-6 h-6 text-rose-soft" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">Endereço</h3>
                <p className="text-text-secondary leading-relaxed">
                  R. Geni Negrão de Lima, 163<br />
                  Aluoto, Ibirité - MG<br />
                  CEP: 32400-000
                </p>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-nude-light rounded-lg">
                <Phone className="w-6 h-6 text-rose-soft" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-text-primary mb-2">Telefone</h3>
                <a
                  href="tel:+5531987668903"
                  className="text-text-secondary hover:text-rose-soft transition text-lg"
                >
                  (31) 98766-8903
                </a>
              </div>
            </div>

            <div className="flex gap-4 items-start">
              <div className="p-3 bg-nude-light rounded-lg">
                <Clock className="w-6 h-6 text-rose-soft" />
              </div>
              <div>
                <h3 className="font-semibold text-xl text-text-primary mb-3">Horário de Funcionamento</h3>
                <div className="space-y-2 text-text-secondary">
                  <div className="flex justify-between">
                    <span>Segunda-feira:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Terça a Sexta:</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Sábado:</span>
                    <span className="font-medium">9h às 18h</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Domingo:</span>
                    <span className="font-medium">Fechado</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="pt-6">
              <a
                href="https://wa.me/5531987668903?text=Olá! Gostaria de agendar uma consulta na Jeane Beauty Clinic."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block px-8 py-4 bg-rose-soft text-white rounded-full text-lg font-medium hover:bg-rose-soft/90 transition-all hover:scale-105 w-full md:w-auto text-center"
              >
                Agendar pelo WhatsApp
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3753.5823926948755!2d-44.06096!3d-20.03086!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xa699c0b0eb5b33%3A0x7c8e8f0e0e0e0e0e!2sR.%20Geni%20Negr%C3%A3o%20de%20Lima%2C%20163%20-%20Aluoto%2C%20Ibirit%C3%A9%20-%20MG%2C%2032400-000!5e0!3m2!1spt-BR!2sbr!4v1234567890!5m2!1spt-BR!2sbr"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização da Jeane Beauty Clinic"
                className="absolute inset-0"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
