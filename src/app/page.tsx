"use client"

import { useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Scissors, Award, Clock } from "lucide-react"
import HeroSection from "../components/hero-section"
import SectionTitle from "../components/section-title"
import ServiceCard from "../components/service-card"
import TestimonialCard from "../components/testimonial-card"
import { initScrollReveal } from "../lib/utils"

export default function Home() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  const services = [
    {
      title: "Corte de Cabelo",
      description: "Corte personalizado de acordo com o formato do rosto e preferências do cliente.",
      price: 15,
      imageSrc: "/images/foto2-horizontal-cabeleireiro-aparando-cabelo-cliente.jpg",
    },
    {
      title: "Barba",
      description: "Tratamento completo para barba incluindo toalha quente, óleo e finalização.",
      price: 12,
      imageSrc: "/images/foto4-horizontal-homem-bonito-na-barbearia-barbeando-barba.jpg",
    },
    {
      title: "Combo (Corte + Barba)",
      description: "Combinação de corte de cabelo e tratamento completo para barba.",
      price: 25,
      imageSrc: "/images/foto6-horizontal-homem-na-barbearia-barbeando-barba.jpg",
    },
    {
      title: "Tratamento Capilar",
      description: "Tratamentos especializados para diferentes tipos de cabelo e problemas capilares.",
      price: 20,
      imageSrc: "/images/foto1-horizontal-barbear-mulher-que-seca-o-cabelo-do-cliente.jpg",
    },
  ]

  const testimonials = [
    {
      name: "João Silva",
      testimonial: "Excelente atendimento e profissionalismo. O melhor corte de cabelo que já fiz!",
      rating: 5,
    },
    {
      name: "Miguel Costa",
      testimonial: "Ambiente acolhedor e serviço de primeira qualidade. Recomendo vivamente!",
      rating: 5,
    },
    {
      name: "António Ferreira",
      testimonial: "Profissionais muito competentes e atenciosos. Voltarei certamente!",
      rating: 4,
    },
  ]

  return (
    <>
      <HeroSection
        title="Barber Shop"
        subtitle="Experiência premium em barbearia em Torres Vedras"
        ctaText="Ver Serviços"
        ctaLink="#servicos"
        secondaryCtaText="Contactar"
        secondaryCtaLink="/contacto"
      />

      {/* Sobre Nós */}
      <section id="sobre" className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="reveal fade-right">
              <SectionTitle
                title="Tradição e Qualidade"
                subtitle="Na Barber Shop, combinamos técnicas tradicionais com tendências modernas para oferecer o melhor serviço de barbearia em Torres Vedras."
              />
              <p className="mb-6 text-[#D1D1D1]">
                Fundada com a paixão pela arte da barbearia, a nossa equipa de profissionais qualificados está
                comprometida em proporcionar uma experiência única e personalizada a cada cliente.
              </p>
              <p className="mb-8 text-[#D1D1D1]">
                Utilizamos produtos de alta qualidade e técnicas aprimoradas para garantir resultados excepcionais em
                cada visita.
              </p>
              <Link href="/quem-somos" className="btn-primary inline-flex items-center gap-2">
                Conheça-nos Melhor
                <ArrowRight size={16} />
              </Link>
            </div>
            <div className="relative h-[500px] reveal fade-left">
              <Image
                src="/images/foto5-horizontal-homem-estiloso-sentado-em-uma-barbearia.jpg"
                alt="Barber Shop Interior"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 border-2 border-[#CFAF5E] rounded-lg transform translate-x-4 translate-y-4 -z-10"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Serviços */}
      <section id="servicos" className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossos Serviços"
            subtitle="Oferecemos uma variedade de serviços de barbearia para atender às suas necessidades"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.map((service, index) => (
              <div key={index} className="reveal fade-bottom">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  price={service.price}
                  imageSrc={service.imageSrc}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal fade-bottom">
            <Link href="/precario" className="btn-primary inline-flex items-center gap-2">
              Ver Preçário Completo
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Por que nos escolher */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Por que Escolher-nos"
            subtitle="Descubra o que nos diferencia e faz da Barber Shop a escolha preferida em Torres Vedras"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#232323] p-8 rounded-lg text-center reveal fade-bottom">
              <div className="w-16 h-16 bg-[#CFAF5E] rounded-full flex items-center justify-center mx-auto mb-6">
                <Scissors size={32} className="text-[#121212]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Profissionais Experientes</h3>
              <p className="text-[#D1D1D1]">
                Nossa equipa é composta por barbeiros altamente qualificados e experientes, dedicados à excelência.
              </p>
            </div>

            <div className="bg-[#232323] p-8 rounded-lg text-center reveal fade-bottom">
              <div className="w-16 h-16 bg-[#CFAF5E] rounded-full flex items-center justify-center mx-auto mb-6">
                <Award size={32} className="text-[#121212]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Qualidade Premium</h3>
              <p className="text-[#D1D1D1]">
                Utilizamos apenas produtos e ferramentas de alta qualidade para garantir os melhores resultados.
              </p>
            </div>

            <div className="bg-[#232323] p-8 rounded-lg text-center reveal fade-bottom">
              <div className="w-16 h-16 bg-[#CFAF5E] rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock size={32} className="text-[#121212]" />
              </div>
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Ambiente Acolhedor</h3>
              <p className="text-[#D1D1D1]">
                Oferecemos um ambiente relaxante e confortável para que possa desfrutar da sua experiência connosco.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Seção Parallax */}
      <section className="relative h-96 overflow-hidden">
        <div
          className="absolute inset-0 parallax"
          style={{
            backgroundImage:
              "url('/images/foto8-horizontal-usando-a-toalha-na-barba-do-macho-envelhecido-na-barbearia.jpg')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
          }}
        ></div>
        <div className="absolute inset-0 bg-[#121212]/60"></div>
        <div className="relative z-10 h-full flex items-center justify-center">
          <div className="text-center max-w-3xl mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-[#CFAF5E] reveal fade-bottom">
              Tradição e Modernidade
            </h2>
            <p className="text-xl text-[#D1D1D1] reveal fade-bottom">
              Combinamos técnicas tradicionais com as mais modernas tendências para criar o look perfeito para si
            </p>
          </div>
        </div>
      </section>

      {/* Depoimentos */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="O que Dizem os Nossos Clientes"
            subtitle="Descubra o que os nossos clientes têm a dizer sobre a sua experiência na Barber Shop"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            {testimonials.map((testimonial, index) => (
              <div key={index} className="reveal fade-bottom">
                <TestimonialCard
                  name={testimonial.name}
                  testimonial={testimonial.testimonial}
                  rating={testimonial.rating}
                />
              </div>
            ))}
          </div>

          <div className="text-center mt-12 reveal fade-bottom">
            <Link href="/clientes" className="btn-secondary inline-flex items-center gap-2">
              Ver Mais Depoimentos
              <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 bg-[#121212] relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image
            src="/images/foto7-horizontal-lenhador-brutal-cortando-madeira-lamina-afiada-brutalidade-e-masculinidade-lenhador-barbudo-estilo-de-lenhador-homem-com-machado-homem-barbudo-segurar-machado.jpg"
            alt="Background"
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-[#CFAF5E] reveal fade-bottom">
              Pronto para uma Nova Experiência?
            </h2>
            <p className="text-xl mb-8 text-[#D1D1D1] reveal fade-bottom">
              Entre em contacto connosco e descubra por que somos a barbearia preferida em Torres Vedras.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 reveal fade-bottom">
              <Link href="/contacto" className="btn-primary flex items-center justify-center gap-2">
                Entrar em Contacto
                <ArrowRight size={16} />
              </Link>
              <Link href="/galeria" className="btn-secondary">
                Ver Galeria
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Estatísticas */}
      <section className="py-12 bg-[#232323]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center reveal fade-bottom">
              <div className="text-4xl font-bold text-[#CFAF5E] mb-2">5+</div>
              <p className="text-[#D1D1D1]">Anos de Experiência</p>
            </div>
            <div className="text-center reveal fade-bottom">
              <div className="text-4xl font-bold text-[#CFAF5E] mb-2">1000+</div>
              <p className="text-[#D1D1D1]">Clientes Satisfeitos</p>
            </div>
            <div className="text-center reveal fade-bottom">
              <div className="text-4xl font-bold text-[#CFAF5E] mb-2">4</div>
              <p className="text-[#D1D1D1]">Barbeiros Profissionais</p>
            </div>
            <div className="text-center reveal fade-bottom">
              <div className="text-4xl font-bold text-[#CFAF5E] mb-2">10+</div>
              <p className="text-[#D1D1D1]">Prémios Conquistados</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
