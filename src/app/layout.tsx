import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Jeane Beauty Clinic - Estética Premium em Ibirité',
  description: 'Harmonização Facial, Botox e Bioestimuladores com 15+ anos de experiência',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  )
}
