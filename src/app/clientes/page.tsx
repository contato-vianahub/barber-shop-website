"use client"

import { useEffect } from "react"
import { Star, Quote } from "lucide-react"
import SectionTitle from "../../components/section-title"
import { initScrollReveal } from "../../lib/utils"

export default function Clientes() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  const testimonials = [
    {
      name: "João Silva",
      testimonial:
        "Excelente atendimento e profissionalismo. O melhor corte de cabelo que já fiz! A equipa é muito atenciosa e o ambiente é fantástico.",
      rating: 5,
      service: "Corte + Barba",
    },
    {
      name: "Miguel Costa",
      testimonial:
        "Ambiente acolhedor e serviço de primeira qualidade. Recomendo vivamente! Já sou cliente há mais de 2 anos.",
      rating: 5,
      service: "Corte de Cabelo",
    },
    {
      name: "António Ferreira",
      testimonial:
        "Profissionais muito competentes e atenciosos. Voltarei certamente! O tratamento de barba é excepcional.",
      rating: 4,
      service: "Tratamento de Barba",
    },
    {
      name: "Carlos Mendes",
      testimonial:
        "A Barber Shop superou todas as minhas expectativas. Serviço impecável e preços justos. Recomendo a todos!",
      rating: 5,
      service: "Combo Completo",
    },
    {
      name: "Pedro Santos",
      testimonial:
        "Desde que descobri a Barber Shop, não vou a mais nenhum lugar. A qualidade é consistente e o atendimento é sempre excelente.",
      rating: 5,
      service: "Corte + Barba",
    },
    {
      name: "Rui Oliveira",
      testimonial:
        "Profissionais experientes que sabem exatamente o que fazem. O resultado sempre supera as expectativas.",
      rating: 4,
      service: "Corte de Cabelo",
    },
    {
      name: "Nuno Rodrigues",
      testimonial: "Ambiente relaxante e serviço de qualidade superior. A atenção aos detalhes é impressionante.",
      rating: 5,
      service: "Tratamento Capilar",
    },
    {
      name: "Tiago Almeida",
      testimonial:
        "Equipa fantástica e muito profissional. Sempre saio satisfeito com o resultado. Cinco estrelas merecidas!",
      rating: 5,
      service: "Corte + Barba",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#CFAF5E] reveal fade-bottom">Nossos Clientes</h1>
            <p className="text-xl mb-8 text-[#D1D1D1] reveal fade-bottom">
              Descubra o que os nossos clientes têm a dizer sobre a experiência na Barber Shop
            </p>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-16 bg-[#232323]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal fade-bottom">
              <div className="text-5xl font-bold text-[#CFAF5E] mb-2">1000+</div>
              <p className="text-[#D1D1D1] text-lg">Clientes Satisfeitos</p>
            </div>
            <div className="text-center reveal fade-bottom">
              <div className="text-5xl font-bold text-[#CFAF5E] mb-2">4.8</div>
              <p className="text-[#D1D1D1] text-lg">Avaliação Média</p>
            </div>
            <div className="text-center reveal fade-bottom">
              <div className="text-5xl font-bold text-[#CFAF5E] mb-2">95%</div>
              <p className="text-[#D1D1D1] text-lg">Taxa de Retorno</p>
            </div>
            <div className="text-center reveal fade-bottom">
              <div className="text-5xl font-bold text-[#CFAF5E] mb-2">5+</div>
              <p className="text-[#D1D1D1] text-lg">Anos de Experiência</p>
            </div>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Depoimentos"
            subtitle="A satisfação dos nossos clientes é a nossa maior recompensa"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="reveal fade-bottom">
                <div className="bg-[#232323] p-6 rounded-lg shadow-lg h-full flex flex-col">
                  <div className="flex items-center mb-4">
                    <div className="bg-[#CFAF5E] h-12 w-12 rounded-full flex items-center justify-center text-[#121212] font-bold text-xl mr-4">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div>
                      <h4 className="font-bold text-[#CFAF5E]">{testimonial.name}</h4>
                      <p className="text-sm text-[#D1D1D1]">{testimonial.service}</p>
                      <div className="flex">
                        {Array.from({ length: 5 }).map((_, i) => (
                          <Star
                            key={i}
                            size={16}
                            className={i < testimonial.rating ? "text-[#CFAF5E] fill-[#CFAF5E]" : "text-gray-400"}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                  <div className="flex-grow">
                    <Quote size={24} className="text-[#CFAF5E] mb-2" />
                    <p className="text-[#D1D1D1] italic">{testimonial.testimonial}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#CFAF5E] reveal fade-bottom">
              Junte-se aos Nossos Clientes Satisfeitos
            </h2>
            <p className="text-xl mb-8 text-[#D1D1D1] reveal fade-bottom">
              Marque já a sua consulta e descubra por que somos a escolha preferida em Torres Vedras
            </p>
            <div className="reveal fade-bottom">
              <a href="/contacto" className="btn-primary inline-flex items-center gap-2">
                Marcar Consulta
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
