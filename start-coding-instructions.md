# 🚀 START CODING - JEANE BEAUTY CLINIC

## COMANDOS PARA COMEÇAR AGORA

```bash
# 1. Criar projeto Next.js com todas configurações
npx create-next-app@latest jeane-beauty-clinic \
  --typescript \
  --tailwind \
  --app \
  --src-dir \
  --import-alias "@/*" \
  --no-git

# 2. Entrar na pasta
cd jeane-beauty-clinic

# 3. Instalar todas dependências necessárias
npm install \
  framer-motion \
  lucide-react \
  clsx \
  tailwind-merge \
  @radix-ui/react-slot \
  class-variance-authority \
  embla-carousel-react \
  react-intersection-observer

# 4. Instalar dependências de desenvolvimento
npm install -D \
  @types/node \
  eslint-config-prettier \
  prettier \
  prettier-plugin-tailwindcss

# 5. Abrir VS Code
code .

# 6. Iniciar servidor de desenvolvimento
npm run dev
```

## ESTRUTURA INICIAL DE ARQUIVOS

### 1. Criar estrutura de pastas:
```bash
mkdir -p src/components/{sections,ui,common}
mkdir -p src/lib
mkdir -p src/hooks
mkdir -p src/styles
mkdir -p public/images
```

### 2. Arquivo: src/styles/globals.css
```css
@import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=Playfair+Display:wght@400;600;700;900&display=swap');
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --nude-light: 248 232 224;
    --nude-medium: 232 213 208;
    --rose-soft: 212 165 160;
    --text-primary: 26 26 26;
    --text-secondary: 107 107 107;
    --text-light: 155 155 155;
    --bg-cream: 253 251 249;
  }

  * {
    @apply border-border;
  }

  body {
    @apply bg-bg-cream text-text-primary antialiased;
  }

  h1, h2, h3, h4, h5, h6 {
    @apply font-playfair;
  }
}

@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
  
  .animate-in {
    animation: fadeIn 0.5s ease-out;
  }
  
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
}
```

### 3. Arquivo: src/lib/utils.ts
```typescript
import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
}

export const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2
    }
  }
}
```

### 4. Arquivo: src/components/ui/Button.tsx
```typescript
'use client'

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  "inline-flex items-center justify-center rounded-full font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default: "bg-rose-soft text-white hover:bg-rose-soft/90 hover:scale-105 hover:shadow-lg",
        secondary: "border-2 border-text-primary/20 hover:bg-white hover:border-rose-soft",
        ghost: "hover:bg-nude-light hover:text-rose-soft",
      },
      size: {
        default: "px-8 py-4 text-base",
        sm: "px-6 py-3 text-sm",
        lg: "px-10 py-5 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
```

### 5. Arquivo: package.json (atualizar scripts)
```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "next lint",
    "format": "prettier --write \"**/*.{ts,tsx,md,css}\"",
    "type-check": "tsc --noEmit"
  }
}
```

### 6. Arquivo: .prettierrc
```json
{
  "semi": false,
  "trailingComma": "es5",
  "singleQuote": false,
  "tabWidth": 2,
  "plugins": ["prettier-plugin-tailwindcss"]
}
```

## PRÓXIMO PASSO COM VIBE CODING

### Prompt para Claude no Terminal:

```
Olá! Vamos desenvolver juntos a landing page da Jeane Beauty Clinic usando Next.js 14, TypeScript e Tailwind CSS.

Já tenho o projeto base criado com:
- Next.js 14 com App Router
- TypeScript configurado
- Tailwind CSS instalado
- Framer Motion para animações
- Estrutura de pastas organizada

Vamos começar criando o Header e Hero Section com:

1. Header sticky com blur effect
2. Hero com layout split-screen
3. Carrossel automático de imagens (4s interval)
4. Animações suaves com Framer Motion
5. Design minimalista estilo Apple

Os arquivos de texto com informações da equipe estão em:
- /mnt/user-data/uploads/Flavia.txt
- /mnt/user-data/uploads/Vanessa.txt

Paleta de cores:
- Nude light: #F8E8E0
- Rose soft: #D4A5A0
- Text primary: #1A1A1A

Vamos começar pelo Header.tsx e Hero.tsx?
```

## CHECKLIST DE DESENVOLVIMENTO

### Fase 1: Base ✅
- [x] Criar projeto Next.js
- [x] Instalar dependências
- [x] Configurar Tailwind
- [x] Setup de fontes
- [x] Estrutura de pastas

### Fase 2: Componentes Core
- [ ] Header com navegação
- [ ] Hero Section
- [ ] Carrossel de imagens
- [ ] Botões com variantes
- [ ] Cards de equipe

### Fase 3: Seções
- [ ] Seção Fundadora (Joyce)
- [ ] Seção Dra. Flávia
- [ ] Seção Vanessa
- [ ] Transições entre seções

### Fase 4: Interatividade
- [ ] Animações Framer Motion
- [ ] Scroll animations
- [ ] Hover states
- [ ] Mobile menu

### Fase 5: Otimização
- [ ] Lazy loading
- [ ] Image optimization
- [ ] SEO meta tags
- [ ] Performance audit

### Fase 6: Finalização
- [ ] WhatsApp button
- [ ] Google Analytics
- [ ] Forms de contato
- [ ] Deploy Vercel

## ASSETS NECESSÁRIOS

Criar pasta `public/images/` com:
- logo.svg (logo da clínica)
- clinic-1.jpg até clinic-5.jpg (fotos da clínica)
- joyce.jpg (foto fundadora)
- flavia.jpg (foto Dra. Flávia)
- vanessa.jpg (foto Vanessa)
- gradient-bg.jpg (background abstrato)

## DICAS IMPORTANTES

1. **Mobile First**: Sempre desenvolver pensando primeiro em mobile
2. **Performance**: Usar next/image para todas imagens
3. **Acessibilidade**: Adicionar aria-labels e semantic HTML
4. **SEO**: Meta tags completas e Schema.org
5. **Conversão**: CTAs visíveis e tracking configurado

## INICIAR AGORA!

1. Abra o terminal
2. Execute os comandos acima
3. Abra o VS Code
4. Comece pelo Header.tsx
5. Use o prompt do vibe coding

**Lembre-se:** Estamos criando uma experiência premium que converte. Cada detalhe importa!

---

**Pronto para começar? Let's code! 🚀**
