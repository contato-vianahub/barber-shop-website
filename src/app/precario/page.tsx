"use client"

import { useEffect } from "react"
import Image from "next/image"
import { Check, Star, Scissors } from "lucide-react"
import SectionTitle from "../../components/section-title"
import { initScrollReveal } from "../../lib/utils"

export default function Precario() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  const cabeloServices = [
    {
      service: "Corte Clássico",
      description: "Corte tradicional com tesoura e máquina",
      price: 12,
    },
    {
      service: "Corte Moderno",
      description: "Cortes atuais e estilizados",
      price: 15,
    },
    {
      service: "Corte + Lavagem",
      description: "Corte completo com lavagem e finalização",
      price: 18,
    },
    {
      service: "Corte Infantil",
      description: "Corte especial para crianças até 12 anos",
      price: 10,
    },
  ]

  const barbaServices = [
    {
      service: "Barba Clássica",
      description: "Aparar e modelar a barba",
      price: 8,
    },
    {
      service: "Barba Completa",
      description: "Tratamento completo com toalha quente e óleos",
      price: 12,
    },
    {
      service: "Bigode",
      description: "Aparar e modelar o bigode",
      price: 5,
    },
    {
      service: "Barba + Bigode",
      description: "Tratamento completo de barba e bigode",
      price: 15,
    },
  ]

  const comboServices = [
    {
      service: "Combo Clássico",
      description: "Corte + Barba básica",
      price: 20,
    },
    {
      service: "Combo Premium",
      description: "Corte moderno + Barba completa",
      price: 25,
    },
    {
      service: "Combo Deluxe",
      description: "Corte + Barba + Tratamento capilar",
      price: 35,
    },
    {
      service: "Combo VIP",
      description: "Serviço completo com massagem e tratamentos especiais",
      price: 45,
    },
  ]

  const tratamentosServices = [
    {
      service: "Lavagem Simples",
      description: "Lavagem com shampoo profissional",
      price: 5,
    },
    {
      service: "Tratamento Anticaspa",
      description: "Tratamento especializado contra caspa",
      price: 15,
    },
    {
      service: "Hidratação Capilar",
      description: "Tratamento hidratante para cabelos secos",
      price: 20,
    },
    {
      service: "Massagem no Couro Cabeludo",
      description: "Massagem relaxante de 15 minutos",
      price: 10,
    },
  ]

  // Função para formatar preço
  const formatPrice = (price: number) => {
    return new Intl.NumberFormat("pt-PT", {
      style: "currency",
      currency: "EUR",
    }).format(price)
  }

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 opacity-30">
          <Image
            src="/images/homem-barbudo-retrato-masculino-barbudo-de-homem-elegante-com-barba-longa-classica-barbeiro-tesoura-barbearia.jpg"
            alt="Barbeiro profissional elegante"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#121212] via-[#121212]/90 to-[#121212]"></div>
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#CFAF5E] reveal fade-bottom">Preçário</h1>
            <p className="text-xl mb-8 text-[#D1D1D1] reveal fade-bottom">
              Conheça os nossos serviços e preços transparentes
            </p>
          </div>
        </div>
      </section>

      {/* Layout Intercalado - Serviços e Imagens */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          {/* Primeira linha - Imagem à esquerda + Cards Cortes */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center reveal fade-bottom">
            <div className="lg:col-span-4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/quadro-parede1-foto-horizontal.jpg"
                  alt="Arte de barbearia vintage"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#121212]/40"></div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#CFAF5E] rounded-full flex items-center justify-center mr-4">
                  <Scissors size={24} className="text-[#121212]" />
                </div>
                <h2 className="text-3xl font-bold text-[#CFAF5E]">Cortes de Cabelo</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {cabeloServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#121212] rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(207,175,94,0.3)]"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#CFAF5E]">{service.service}</h3>
                    <p className="text-[#D1D1D1] mb-4 text-sm">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#CFAF5E]">{formatPrice(service.price)}</span>
                      <button className="bg-[#232323] hover:bg-[#CFAF5E] text-[#CFAF5E] hover:text-[#121212] px-3 py-1 rounded-full text-sm transition-colors duration-300">
                        Reservar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Segunda linha - Cards Barba + Imagem à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center reveal fade-bottom">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#CFAF5E] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#121212]"
                  >
                    <path d="M8 2c3 0 5 2 8 2s4-1 4-1v11c-1 1-2 2-4 2s-5-2-8-2-4 1-4 1V3c0 0 1-1 4-1Z" />
                    <path d="M12 22a8 8 0 0 0 8-8V7" />
                    <path d="M4 15V7" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#CFAF5E]">Serviços de Barba</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {barbaServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#121212] rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(207,175,94,0.3)]"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#CFAF5E]">{service.service}</h3>
                    <p className="text-[#D1D1D1] mb-4 text-sm">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#CFAF5E]">{formatPrice(service.price)}</span>
                      <button className="bg-[#232323] hover:bg-[#CFAF5E] text-[#CFAF5E] hover:text-[#121212] px-3 py-1 rounded-full text-sm transition-colors duration-300">
                        Reservar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/quadro-parede2-foto-horizontal.jpg"
                  alt="Arte de barbearia clássica"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#121212]/40"></div>
              </div>
            </div>
          </div>

          {/* Terceira linha - Imagem à esquerda + Cards Combos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center reveal fade-bottom">
            <div className="lg:col-span-4">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/quadro-parede3-foto-horizontal.jpg"
                  alt="Arte de barbearia moderna"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-br from-transparent to-[#121212]/40"></div>
              </div>
            </div>
            <div className="lg:col-span-8">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#CFAF5E] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#121212]"
                  >
                    <path d="M16.5 9.4 7.55 4.24" />
                    <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z" />
                    <path d="M3.29 7 12 12l8.71-5" />
                    <path d="M12 22V12" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#CFAF5E]">Combos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {comboServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#121212] rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(207,175,94,0.3)]"
                  >
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="text-lg font-bold text-[#CFAF5E]">{service.service}</h3>
                      <span className="bg-[#8A2C2C] text-[#D1D1D1] text-xs px-2 py-1 rounded-full">Economize</span>
                    </div>
                    <p className="text-[#D1D1D1] mb-4 text-sm">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#CFAF5E]">{formatPrice(service.price)}</span>
                      <button className="bg-[#232323] hover:bg-[#CFAF5E] text-[#CFAF5E] hover:text-[#121212] px-3 py-1 rounded-full text-sm transition-colors duration-300">
                        Reservar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Quarta linha - Cards Tratamentos + Imagem à direita */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-20 items-center reveal fade-bottom">
            <div className="lg:col-span-8 order-2 lg:order-1">
              <div className="flex items-center mb-8">
                <div className="w-12 h-12 bg-[#CFAF5E] rounded-full flex items-center justify-center mr-4">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-[#121212]"
                  >
                    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z" />
                    <path d="M5 3v4" />
                    <path d="M19 17v4" />
                    <path d="M3 5h4" />
                    <path d="M17 19h4" />
                  </svg>
                </div>
                <h2 className="text-3xl font-bold text-[#CFAF5E]">Tratamentos</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {tratamentosServices.map((service, index) => (
                  <div
                    key={index}
                    className="bg-[#121212] rounded-lg p-6 transition-all duration-300 hover:transform hover:scale-105 hover:shadow-[0_0_15px_rgba(207,175,94,0.3)]"
                  >
                    <h3 className="text-lg font-bold mb-2 text-[#CFAF5E]">{service.service}</h3>
                    <p className="text-[#D1D1D1] mb-4 text-sm">{service.description}</p>
                    <div className="flex justify-between items-center">
                      <span className="text-xl font-bold text-[#CFAF5E]">{formatPrice(service.price)}</span>
                      <button className="bg-[#232323] hover:bg-[#CFAF5E] text-[#CFAF5E] hover:text-[#121212] px-3 py-1 rounded-full text-sm transition-colors duration-300">
                        Reservar
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="lg:col-span-4 order-1 lg:order-2">
              <div className="aspect-square relative rounded-lg overflow-hidden">
                <Image
                  src="/images/quadro-parede4-foto-horizontal.jpg"
                  alt="Arte de barbearia premium"
                  fill
                  className="object-cover hover:scale-110 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-bl from-transparent to-[#121212]/40"></div>
              </div>
            </div>
          </div>

          {/* Quinta linha - Duas imagens lado a lado */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20 reveal fade-bottom">
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/quadro-parede5-foto-horizontal.jpg"
                alt="Arte de barbearia tradicional"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-[#CFAF5E] mb-2">Tradição</h3>
                <p className="text-white text-sm">Técnicas clássicas de barbearia</p>
              </div>
            </div>
            <div className="aspect-square relative rounded-lg overflow-hidden">
              <Image
                src="/images/quadro-parede6-foto-horizontal.jpg"
                alt="Arte de barbearia contemporânea"
                fill
                className="object-cover hover:scale-110 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/60 to-transparent"></div>
              <div className="absolute bottom-6 left-6 right-6">
                <h3 className="text-xl font-bold text-[#CFAF5E] mb-2">Modernidade</h3>
                <p className="text-white text-sm">Estilos contemporâneos e inovadores</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Pacotes Especiais - Mantido como estava */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Pacotes Especiais" subtitle="Ofertas exclusivas para os nossos clientes" center />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {/* Pacote Mensal */}
            <div className="bg-[#232323] rounded-lg p-8 text-center reveal fade-bottom">
              <h3 className="text-2xl font-bold mb-4 text-[#CFAF5E]">Pacote Mensal</h3>
              <div className="text-4xl font-bold text-[#CFAF5E] mb-2">€35</div>
              <p className="text-[#D1D1D1] mb-6">2 Cortes + 1 Barba</p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">2 Cortes de cabelo</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">1 Serviço de barba</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">Válido por 30 dias</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Escolher Pacote</button>
            </div>

            {/* Pacote Trimestral */}
            <div className="bg-[#232323] rounded-lg p-8 text-center reveal fade-bottom border-2 border-[#CFAF5E] relative">
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-[#CFAF5E] text-[#121212] px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
              <h3 className="text-2xl font-bold mb-4 text-[#CFAF5E]">Pacote Trimestral</h3>
              <div className="text-4xl font-bold text-[#CFAF5E] mb-2">€90</div>
              <p className="text-[#D1D1D1] mb-6">6 Cortes + 3 Barbas</p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">6 Cortes de cabelo</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">3 Serviços de barba</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">1 Tratamento capilar grátis</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">Válido por 90 dias</span>
                </li>
              </ul>
              <button className="btn-primary w-full">Escolher Pacote</button>
            </div>

            {/* Pacote Anual */}
            <div className="bg-[#232323] rounded-lg p-8 text-center reveal fade-bottom">
              <h3 className="text-2xl font-bold mb-4 text-[#CFAF5E]">Pacote Anual</h3>
              <div className="text-4xl font-bold text-[#CFAF5E] mb-2">€300</div>
              <p className="text-[#D1D1D1] mb-6">24 Cortes + 12 Barbas</p>
              <ul className="text-left space-y-2 mb-8">
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">24 Cortes de cabelo</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">12 Serviços de barba</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">4 Tratamentos capilares grátis</span>
                </li>
                <li className="flex items-center">
                  <Check size={16} className="text-[#CFAF5E] mr-2" />
                  <span className="text-[#D1D1D1]">Prioridade no agendamento</span>
                </li>
              </ul>
              <button className="btn-secondary w-full">Escolher Pacote</button>
            </div>
          </div>
        </div>
      </section>

      {/* Informações Adicionais */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="reveal fade-right">
              <h3 className="text-2xl font-bold mb-6 text-[#CFAF5E]">Informações Importantes</h3>
              <ul className="space-y-4 text-[#D1D1D1]">
                <li className="flex items-start">
                  <Star size={16} className="text-[#CFAF5E] mr-2 mt-1" />
                  <span>Todos os preços incluem IVA à taxa legal em vigor</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-[#CFAF5E] mr-2 mt-1" />
                  <span>Aceitamos pagamento em dinheiro e cartão</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-[#CFAF5E] mr-2 mt-1" />
                  <span>Marcações podem ser canceladas até 2 horas antes</span>
                </li>
                <li className="flex items-start">
                  <Star size={16} className="text-[#CFAF5E] mr-2 mt-1" />
                  <span>Pacotes têm validade específica e não são reembolsáveis</span>
                </li>
              </ul>
            </div>

            <div className="reveal fade-left">
              <h3 className="text-2xl font-bold mb-6 text-[#CFAF5E]">Horário de Funcionamento</h3>
              <div className="space-y-3 text-[#D1D1D1]">
                <div className="flex justify-between">
                  <span>Segunda a Sexta:</span>
                  <span className="text-[#CFAF5E]">9h - 19h</span>
                </div>
                <div className="flex justify-between">
                  <span>Sábado:</span>
                  <span className="text-[#CFAF5E]">9h - 17h</span>
                </div>
                <div className="flex justify-between">
                  <span>Domingo:</span>
                  <span className="text-[#8A2C2C]">Fechado</span>
                </div>
              </div>
              <div className="mt-8">
                <a href="/contacto" className="btn-primary">
                  Marcar Consulta
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
