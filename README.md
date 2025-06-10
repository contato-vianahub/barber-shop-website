# Barber Shop - Website Institucional

Um website institucional moderno e elegante para uma barbearia em Torres Vedras, Portugal. Desenvolvido com Next.js 15, React 18 e Tailwind CSS, oferecendo uma experiência premium e responsiva.

## 🎨 Design e Identidade Visual

### Paleta de Cores
- **Preto Principal**: `#121212` - Cor de fundo principal
- **Preto Azulado**: `#0A0B0F` - Navbar com toque azulado sutil
- **Cinza Escuro**: `#232323` - Seções alternadas e cards
- **Dourado**: `#CFAF5E` - Cor de destaque e elementos interativos
- **Vermelho Escuro**: `#8A2C2C` - Hover states e elementos secundários
- **Cinza Claro**: `#D1D1D1` - Texto principal
- **Cinza Médio**: `#333` - Bordas e elementos sutis

### Tipografia
- **Fonte Principal**: Poppins (Google Fonts)
- **Pesos**: 300, 400, 500, 600, 700
- **Hierarquia**: Títulos em dourado, texto em cinza claro

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 15** - Framework React com App Router
- **React 18** - Biblioteca JavaScript para interfaces
- **TypeScript** - Tipagem estática
- **Tailwind CSS** - Framework CSS utilitário
- **Lucide React** - Biblioteca de ícones

### Ferramentas de Desenvolvimento
- **ESLint** - Linting de código
- **Prettier** - Formatação de código
- **PostCSS** - Processamento CSS

### Testes
- **Jest** - Framework de testes unitários
- **React Testing Library** - Testes de componentes React
- **Selenium WebDriver** - Testes de interface automatizados

## 📁 Estrutura do Projeto

\`\`\`
src/
├── app/                    # App Router (Next.js 15)
│   ├── layout.tsx         # Layout principal
│   ├── page.tsx           # Página inicial
│   ├── globals.css        # Estilos globais
│   ├── galeria/           # Página da galeria
│   ├── clientes/          # Página de clientes
│   ├── contacto/          # Página de contacto
│   ├── precario/          # Página de preçário
│   └── quem-somos/        # Página sobre nós
├── components/            # Componentes reutilizáveis
│   ├── header.tsx         # Cabeçalho com navegação
│   ├── footer.tsx         # Rodapé
│   ├── hero-section.tsx   # Seção hero
│   ├── service-card.tsx   # Card de serviços
│   ├── testimonial-card.tsx # Card de depoimentos
│   ├── gallery-image.tsx  # Componente de galeria
│   ├── contact-form.tsx   # Formulário de contacto
│   ├── section-title.tsx  # Títulos de seção
│   ├── price-table.tsx    # Tabela de preços
│   └── scroll-to-top.tsx  # Botão voltar ao topo
├── lib/
│   └── utils.ts           # Utilitários e helpers
└── __tests__/             # Testes unitários e E2E
\`\`\`

## 🎯 Principais Componentes

### Header
- **Navegação responsiva** com menu mobile
- **Logo personalizada** em texto estilizado
- **Efeitos de hover** com flash dourado
- **Destaque da página ativa**
- **Fundo preto azulado** com sombra sutil
- **Scroll to top** button

### Hero Section
- **Imagem de fundo** com overlay gradiente
- **Texto responsivo** com animações
- **CTAs** com efeitos hover
- **Parallax effect** sutil

### Service Cards
- **Design moderno** com hover effects
- **Imagens otimizadas** com Next.js Image
- **Preços formatados** em euros
- **Animações de escala** no hover

### Gallery
- **Carousel horizontal** bidirecional
- **Modal de visualização** em tela cheia
- **Grid responsivo** para galeria estática
- **Lazy loading** de imagens

### Contact Form
- **Validação de formulário** em tempo real
- **Estados de loading** e sucesso
- **Design acessível** com labels
- **Integração com Server Actions**

## ✨ Efeitos e Animações

### Scroll Reveal
- **Animações de entrada** baseadas no scroll
- **Fade in** com direções (bottom, left, right)
- **Threshold personalizado** para ativação
- **Performance otimizada** com cleanup

### Hover Effects
- **Flash effect** no menu com gradiente
- **Scale transforms** em cards
- **Color transitions** suaves
- **Shadow elevations** em elementos interativos

### Carousel Animations
- **Scroll infinito** com CSS animations
- **Direções opostas** para variedade visual
- **Smooth transitions** entre slides
- **Pause on hover** para melhor UX

### Parallax Effects
- **Background attachment fixed** em seções específicas
- **Overlay gradients** para legibilidade
- **Responsive behavior** em dispositivos móveis

## 📱 Responsividade

### Breakpoints
- **Mobile**: < 768px
- **Tablet**: 768px - 1024px
- **Desktop**: > 1024px

### Adaptações Mobile
- **Menu hamburger** com overlay fullscreen
- **Grid layouts** adaptáveis
- **Tipografia escalável** com clamp()
- **Touch-friendly** buttons e links
- **Optimized images** para diferentes densidades

## 🔧 Funcionalidades

### Navegação
- **Single Page Application** com roteamento Next.js
- **Menu ativo** com destaque visual
- **Smooth scrolling** entre seções
- **Breadcrumb navigation** implícito

### Galeria
- **Visualização modal** de imagens
- **Carousel automático** com controles
- **Lazy loading** para performance
- **Zoom functionality** em modais

### Formulários
- **Validação client-side** com feedback
- **Server Actions** para processamento
- **Estados de UI** (loading, success, error)
- **Sanitização de dados** de entrada

### Performance
- **Image optimization** com Next.js
- **Code splitting** automático
- **Lazy loading** de componentes
- **Caching strategies** para assets

## 🧪 Testes

### Testes Unitários
- **Componentes React** com Testing Library
- **Funções utilitárias** com Jest
- **Hooks customizados** com renderHook
- **Cobertura de código** > 80%

### Testes de Interface
- **Selenium WebDriver** para E2E
- **Cross-browser testing** (Chrome, Firefox, Safari)
- **Mobile testing** com device emulation
- **Performance testing** com Lighthouse

### Comandos de Teste
\`\`\`bash
# Testes unitários
npm run test

# Testes com coverage
npm run test:coverage

# Testes E2E
npm run test:e2e

# Todos os testes
npm run test:all
\`\`\`

## 🚀 Como Executar

### Pré-requisitos
- Node.js 18+
- npm ou yarn

### Instalação
\`\`\`bash
# Clone o repositório
git clone [repository-url]

# Instale as dependências
npm install

# Execute em desenvolvimento
npm run dev

# Build para produção
npm run build

# Execute em produção
npm start
\`\`\`

### Variáveis de Ambiente
\`\`\`env
# .env.local
NEXT_PUBLIC_SITE_URL=http://localhost:3000
\`\`\`

## 📊 Performance

### Lighthouse Scores
- **Performance**: 95+
- **Accessibility**: 100
- **Best Practices**: 100
- **SEO**: 100

### Otimizações
- **Image optimization** com Next.js Image
- **Font optimization** com next/font
- **Bundle splitting** automático
- **Lazy loading** de componentes não críticos

## 🔒 Acessibilidade

### Conformidade WCAG 2.1
- **Contraste de cores** AA compliant
- **Navegação por teclado** completa
- **Screen reader** compatibility
- **Focus management** adequado
- **Semantic HTML** estruturado
- **Alt texts** para todas as imagens

## 📈 SEO

### Otimizações
- **Meta tags** dinâmicas por página
- **Open Graph** tags para redes sociais
- **Structured data** para rich snippets
- **Sitemap.xml** automático
- **Robots.txt** configurado

## 🤝 Contribuição

1. Fork o projeto
2. Crie uma branch para sua feature (\`git checkout -b feature/AmazingFeature\`)
3. Commit suas mudanças (\`git commit -m 'Add some AmazingFeature'\`)
4. Push para a branch (\`git push origin feature/AmazingFeature\`)
5. Abra um Pull Request

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo \`LICENSE\` para mais detalhes.

## 📞 Contacto

**Barber Shop Torres Vedras**
- **Endereço**: Rua Dr. José de Bastos, 2, Torres Vedras
- **Telefone**: +351 912 345 678
- **Email**: contato@vianahub.pt

---

Desenvolvido com ❤️ para a melhor experiência de barbearia em Torres Vedras.
