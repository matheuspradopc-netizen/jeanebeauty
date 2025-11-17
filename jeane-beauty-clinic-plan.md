# 🎯 PLANO DE DESENVOLVIMENTO - JEANE BEAUTY CLINIC

## 📊 VISÃO GERAL DO PROJETO
Landing page premium para Jeane Beauty Clinic focada em conversão de Google Ads, com design minimalista inspirado em Apple/premium aesthetics, mobile-first e alta performance.

## 🛠 STACK TECNOLÓGICA

### Core
- **Framework:** Next.js 14 (App Router)
- **UI Library:** React 18
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion
- **Icons:** Lucide React / Heroicons

### Otimização
- **Imagens:** Next/Image com lazy loading
- **Fonts:** Next/Font (Inter + Playfair Display)
- **SEO:** Next SEO + Schema.org
- **Analytics:** Google Analytics 4 + GTM

### Desenvolvimento
- **TypeScript:** Para type safety
- **ESLint + Prettier:** Code quality
- **Vercel:** Deploy e hosting

## 🎨 DESIGN SYSTEM

### Paleta de Cores
```css
--primary: #F8E8E0 (nude rosé claro)
--secondary: #E8D5D0 (nude médio)
--accent: #D4A5A0 (rosé suave)
--text-primary: #1A1A1A (preto suave)
--text-secondary: #6B6B6B (cinza médio)
--text-light: #9B9B9B (cinza claro)
--background: #FDFBF9 (off-white)
--white: #FFFFFF
```

### Tipografia
```css
--font-heading: 'Playfair Display', serif; /* Elegância */
--font-body: 'Inter', sans-serif; /* Legibilidade */
--font-size-hero: clamp(2.5rem, 5vw, 4rem);
--font-size-h1: clamp(2rem, 4vw, 3rem);
--font-size-h2: clamp(1.5rem, 3vw, 2.25rem);
--font-size-body: clamp(1rem, 2vw, 1.125rem);
--line-height: 1.6;
```

### Espaçamento (8pt Grid)
```css
--space-xs: 0.5rem;   /* 8px */
--space-sm: 1rem;     /* 16px */
--space-md: 1.5rem;   /* 24px */
--space-lg: 2rem;     /* 32px */
--space-xl: 3rem;     /* 48px */
--space-2xl: 4rem;    /* 64px */
--space-3xl: 6rem;    /* 96px */
```

## 📱 ESTRUTURA DAS SEÇÕES

### 1. HEADER NAVIGATION
- Logo elegante à esquerda
- Menu minimalista (desktop: horizontal, mobile: hamburger)
- CTA button "Agendar Consulta" destacado
- Sticky on scroll com backdrop blur
- Height: 80px desktop, 64px mobile

### 2. HERO SECTION
**Layout:** Split screen (50/50 desktop, stack mobile)

**Esquerda - Conteúdo:**
- Headline principal com animação typewriter
- Subheadline com fade-in
- Lista de especialidades com ícones sutis
- Social proof (15+ anos, equipe certificada)
- CTA duplo: "Agendar Avaliação" + "Conhecer Tratamentos"

**Direita - Visual:**
- Carrossel automático (4s interval)
- Imagens da clínica com overlay suave
- Indicadores minimalistas
- Transição smooth com fade

### 3. FUNDADORA SECTION
**Layout:** Alternado com imagem

**Componentes:**
- Foto profissional com shape orgânico
- Bio resumida com destaque para credenciais
- Timeline de formação
- Quote inspiracional
- Transition para equipe com scroll trigger

### 4. EQUIPE - DRA. FLÁVIA
**Layout:** Card expandido lateral

**Estrutura:**
- Foto profissional à esquerda (40%)
- Informações à direita (60%)
- Especialidades em badges
- Mini bio com read more
- Ícones de formação acadêmica

### 5. EQUIPE - VANESSA
**Layout:** Espelhado da seção anterior

**Estrutura:**
- Informações à esquerda (60%)
- Foto profissional à direita (40%)
- Experiência destacada em anos
- Certificações em grid

### 6. FOOTER (Futura implementação)
- Informações de contato
- Links rápidos
- Compliance médico
- Social media

## 🚀 OTIMIZAÇÕES GOOGLE ADS

### Landing Page Requirements
- **Page Speed:** Target >90 mobile, >95 desktop
- **FCP:** <1.8s
- **LCP:** <2.5s
- **CLS:** <0.1

### Conversão
- WhatsApp float button
- Form captures estratégicos
- Exit intent popup (futuro)
- Thank you page tracking

### Tracking
```javascript
// GTM Events
- page_view
- scroll_depth
- cta_click
- form_submit
- whatsapp_click
```

## 📂 ESTRUTURA DE PASTAS
```
jeane-beauty-clinic/
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   ├── page.tsx
│   │   └── globals.css
│   ├── components/
│   │   ├── sections/
│   │   │   ├── Header.tsx
│   │   │   ├── Hero.tsx
│   │   │   ├── Founder.tsx
│   │   │   ├── TeamFlavia.tsx
│   │   │   └── TeamVanessa.tsx
│   │   ├── ui/
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Carousel.tsx
│   │   └── common/
│   │       └── SEO.tsx
│   ├── lib/
│   │   └── utils.ts
│   ├── hooks/
│   │   └── useScrollAnimation.ts
│   └── assets/
│       └── images/
├── public/
│   └── images/
└── package.json
```

## 💻 PROMPT PARA VIBE CODING COM CLAUDE

```markdown
# 🚀 DESENVOLVIMENTO LANDING PAGE - JEANE BEAUTY CLINIC

Você é um expert developer full-stack especializado em criar landing pages de alta conversão para clínicas de estética premium. Vamos desenvolver uma página utilizando Next.js 14, TypeScript, Tailwind CSS e Framer Motion.

## CONTEXTO DO PROJETO
Criar uma landing page para Jeane Beauty Clinic - clínica de estética em Ibirité/MG, focada em harmonização facial, botox e emagrecimento. A página será destino de campanhas Google Ads e deve ter conversão máxima.

## REQUISITOS TÉCNICOS

### Stack Obrigatória:
- Next.js 14 (App Router)
- TypeScript
- Tailwind CSS
- Framer Motion para animações
- Lucide React para ícones

### Performance:
- Lighthouse Score >90 mobile
- Lazy loading em todas imagens
- Font optimization com next/font
- Image optimization com next/image

### Design:
- Inspiração: Apple.com minimalismo
- Mobile-first responsive
- Smooth scrolling animations
- Micro-interactions sutis

## IMPLEMENTAÇÃO ESTRUTURADA

### FASE 1: Setup Inicial
```bash
npx create-next-app@latest jeane-beauty-clinic --typescript --tailwind --app
cd jeane-beauty-clinic
npm install framer-motion lucide-react
```

### FASE 2: Design System
Criar `/src/styles/design-tokens.css` com:
- Paleta nude/rosé: #F8E8E0, #E8D5D0, #D4A5A0
- Tipografia: Inter (body) + Playfair Display (headings)
- Espaçamento: 8pt grid system
- Shadows: Sutis com blur alto

### FASE 3: Componentes Base
1. **Header Sticky** com blur backdrop e logo minimalista
2. **Hero Split** com carrossel automático e CTAs prominentes
3. **Section Wrapper** reutilizável com padding consistente
4. **Team Card** com layout alternado e animações

### FASE 4: Seções Principais

#### Hero Section:
- Headline: "Realce sua beleza natural com expertise e tecnologia"
- Subheadline focada em confiança e resultados
- Carrossel com 5 imagens da clínica (trocar a cada 4s)
- Botões: "Agendar Avaliação Gratuita" e "Ver Tratamentos"

#### Fundadora Section:
- Título: "Conheça Joyce Jeane"
- Bio profissional destacando 15+ anos experiência
- Formação e especializações
- Frase inspiracional sobre beleza natural

#### Team Sections:
- Cards expandidos com foto + bio
- Badges para especialidades
- Anos de experiência em destaque
- Certificações em grid organizado

### FASE 5: Otimizações
- Implementar Schema.org para SEO local
- Google Analytics 4 com eventos customizados
- WhatsApp floating button
- Loading states com skeleton screens

## CONTEÚDO TEXTUAL

### Hero:
```
Headline: "Realce sua Beleza Natural com Expertise de 15+ Anos"
Subheadline: "Harmonização Facial | Bioestimuladores | Protocolos Exclusivos"
CTA1: "Agendar Avaliação Gratuita"
CTA2: "Conhecer Tratamentos"
```

### Fundadora:
```
"Joyce Jeane - Fundadora e Especialista em Estética Avançada"
"Com mais de 15 anos dedicados à arte de realçar a beleza natural, 
Joyce lidera a Jeane Beauty Clinic com paixão por resultados que 
respeitam a individualidade de cada paciente."
```

### Call-to-Action:
"Conheça nossa equipe multidisciplinar e descubra como podemos 
realçar sua beleza natural com segurança e tecnologia."

## ANIMAÇÕES E INTERAÇÕES

### Scroll Animations:
- Fade up em todos elementos (stagger 0.1s)
- Parallax suave nas imagens
- Progress bar no topo
- Reveal animations em cards

### Hover States:
- Botões: scale(1.05) com shadow
- Cards: translateY(-5px) com shadow
- Links: underline animation

### Mobile Gestures:
- Swipe no carrossel
- Tap to expand em cards
- Smooth scroll entre seções

## ESTRUTURA DE COMPONENTES

```tsx
// src/app/page.tsx
import Header from '@/components/sections/Header'
import Hero from '@/components/sections/Hero'
import Founder from '@/components/sections/Founder'
import TeamFlavia from '@/components/sections/TeamFlavia'
import TeamVanessa from '@/components/sections/TeamVanessa'

export default function Home() {
  return (
    <>
      <Header />
      <Hero />
      <Founder />
      <TeamFlavia />
      <TeamVanessa />
    </>
  )
}
```

## INSTRUÇÕES ESPECÍFICAS

1. **Começar pelo mobile:** Desenvolver mobile-first
2. **Animações sutis:** Usar Framer Motion com restraint
3. **Tipografia hierárquica:** Clamp() para responsividade
4. **Imagens otimizadas:** WebP com fallback, lazy loading
5. **Acessibilidade:** ARIA labels, semantic HTML, contrast ratio AA

## ASSETS NECESSÁRIOS
- Logo Jeane Beauty Clinic (será fornecido)
- 5 fotos da clínica para carrossel
- Fotos profissionais: Joyce, Flávia, Vanessa
- Background gradient abstrato para hero

## DEPLOYMENT
Deploy na Vercel com:
- Custom domain
- SSL certificate
- Edge functions para performance
- Analytics integrado

## MÉTRICAS DE SUCESSO
- Page Speed Score: >90
- Bounce Rate: <40%
- Time on Page: >2min
- CTA Click Rate: >5%
- Mobile Traffic: >70%

## COMEÇAR DESENVOLVIMENTO

Iniciar criando a estrutura base com Next.js e configurar o design system. 
Focar primeiro no Hero Section com máxima atenção aos detalhes de spacing, 
tipografia e animações sutis. Cada seção deve respirar e guiar o olhar 
naturalmente para os CTAs.

Lembre-se: Minimalismo premium, como Apple. Menos é mais, mas cada detalhe 
deve ser perfeito. Use muito espaço em branco, tipografia grande e legível, 
e interações que deliciam sem distrair.
```

## 🎯 PRÓXIMOS PASSOS

1. **Fase 1:** Setup inicial + Design System
2. **Fase 2:** Componentes base (Header, Hero)
3. **Fase 3:** Seções de conteúdo (Team cards)
4. **Fase 4:** Animações e micro-interações
5. **Fase 5:** Otimizações e testes
6. **Fase 6:** Deploy e monitoring

## 📈 KPIs DE ACOMPANHAMENTO

- **Performance:** Core Web Vitals
- **Conversão:** Form submissions, WhatsApp clicks
- **Engajamento:** Scroll depth, time on page
- **Tráfego:** Organic vs Paid, Mobile vs Desktop
- **Quality Score:** Google Ads metrics

---

**Preparado para começar o desenvolvimento com máxima qualidade e foco em resultados!**
