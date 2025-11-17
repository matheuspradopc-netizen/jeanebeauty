'use client'
import { motion } from 'framer-motion'
import Image from 'next/image'
import { Instagram, Facebook, Phone, MapPin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-nude-medium py-12">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Logo e Descrição */}
          <div className="md:col-span-1">
            <div className="relative h-16 w-40 mb-4">
              <Image
                src="/images/logotipos/logo.png"
                alt="Jeane Beauty Clinic"
                fill
                className="object-contain scale-150"
              />
            </div>
            <p className="text-sm text-text-secondary">
              Beleza que transforma com naturalidade e expertise
            </p>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Navegação</h3>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li><a href="#home" className="hover:text-rose-soft transition">Início</a></li>
              <li><a href="#sobre" className="hover:text-rose-soft transition">Sobre</a></li>
              <li><a href="#equipe" className="hover:text-rose-soft transition">Equipe</a></li>
              <li><a href="#contato" className="hover:text-rose-soft transition">Contato</a></li>
            </ul>
          </div>

          {/* Contato */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Contato</h3>
            <ul className="space-y-3 text-sm text-text-secondary">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-rose-soft" />
                <a href="tel:+5531987668903" className="hover:text-rose-soft transition">
                  (31) 98766-8903
                </a>
              </li>
              <li className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-rose-soft mt-1 flex-shrink-0" />
                <span>R. Geni Negrão de Lima, 163<br />Ibirité - MG</span>
              </li>
            </ul>
          </div>

          {/* Redes Sociais */}
          <div>
            <h3 className="font-semibold text-text-primary mb-4">Redes Sociais</h3>
            <div className="flex gap-4">
              <a
                href="https://instagram.com/joycejeanefeal"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-rose-soft hover:text-white transition-all"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://facebook.com/jeanebeautyclinic"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white rounded-full hover:bg-rose-soft hover:text-white transition-all"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        {/* Linha Divisória */}
        <div className="border-t border-text-light/20 pt-6">
          <div className="text-center text-sm text-text-secondary">
            <p>© 2025 Jeane Beauty Clinic. Todos os direitos reservados.</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
