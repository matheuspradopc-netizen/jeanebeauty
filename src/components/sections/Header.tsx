'use client'
import { useState, useEffect } from 'react'
import { Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'
import Image from 'next/image'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <header className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isScrolled ? "bg-white/95 backdrop-blur-md shadow-lg py-3" : "bg-transparent py-6"
    )}>
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between">
          <a href="#home" className="relative h-24 w-80 md:h-32 md:w-96 overflow-hidden">
            <Image
              src="/images/logotipos/logo.png"
              alt="Jeane Beauty Clinic"
              fill
              className="object-contain scale-150"
              priority
            />
          </a>
          <nav className="hidden md:flex gap-8">
            <a href="#home" className="hover:text-rose-soft transition">Início</a>
            <a href="#sobre" className="hover:text-rose-soft transition">Sobre</a>
            <a href="#equipe" className="hover:text-rose-soft transition">Equipe</a>
            <a href="#contato" className="hover:text-rose-soft transition">Contato</a>
          </nav>
          <a href="https://wa.me/5531987668903?text=Olá! Gostaria de agendar uma consulta na Jeane Beauty Clinic." target="_blank" rel="noopener noreferrer" className="hidden md:block px-6 py-2 bg-rose-soft text-white rounded-full">
            Agendar Consulta
          </a>
          <button onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} className="md:hidden">
            {isMobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
      </div>
    </header>
  )
}
