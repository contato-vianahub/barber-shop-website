"use client"

import { useEffect } from "react"
import Image from "next/image"
import { CheckCircle } from "lucide-react"
import SectionTitle from "../../components/section-title"
import { initScrollReveal } from "../../lib/utils"

export default function QuemSomos() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#CFAF5E] reveal fade-bottom">Quem Somos</h1>
            <p className="text-xl mb-8 text-[#D1D1D1] reveal fade-bottom">
              Conheça a história e a equipa por trás da Barber Shop
            </p>
          </div>
        </div>
      </section>

      {/* Nossa História */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="relative h-[500px] reveal fade-right">
              <Image
                src="/images/foto8-horizontal-usando-a-toalha-na-barba-do-macho-envelhecido-na-barbearia.jpg"
                alt="Nossa História"
                fill
                className="object-cover rounded-lg"
              />
              <div className="absolute inset-0 border-2 border-[#CFAF5E] rounded-lg transform -translate-x-4 -translate-y-4 -z-10"></div>
            </div>
            <div className="reveal fade-left">
              <SectionTitle title="Nossa História" subtitle="Uma tradição de excelência em barbearia desde 2018" />
              <p className="mb-6 text-[#D1D1D1]">
                A Barber Shop nasceu da paixão pela arte da barbearia e do desejo de oferecer serviços de alta qualidade
                em Torres Vedras. Fundada em 2018, a nossa barbearia rapidamente se tornou uma referência na região.
              </p>
              <p className="mb-6 text-[#D1D1D1]">
                Começámos com apenas um barbeiro e uma cadeira, mas com uma visão clara: proporcionar uma experiência
                única que combina técnicas tradicionais com tendências modernas. Hoje, contamos com uma equipa de
                profissionais qualificados e um espaço acolhedor para receber os nossos clientes.
              </p>
              <p className="mb-8 text-[#D1D1D1]">
                Ao longo dos anos, temos aprimorado as nossas técnicas e expandido os nossos serviços, sempre com o
                compromisso de oferecer o melhor para os nossos clientes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Missão e Valores */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Missão e Valores" subtitle="O que nos guia e nos diferencia no mercado" center />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            <div className="bg-[#232323] p-8 rounded-lg reveal fade-bottom">
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Missão</h3>
              <p className="text-[#D1D1D1]">
                Proporcionar uma experiência de barbearia excepcional, combinando técnicas tradicionais com tendências
                modernas, em um ambiente acolhedor e profissional.
              </p>
            </div>

            <div className="bg-[#232323] p-8 rounded-lg reveal fade-bottom">
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Visão</h3>
              <p className="text-[#D1D1D1]">
                Ser reconhecida como a melhor barbearia de Torres Vedras, referência em qualidade, inovação e
                atendimento personalizado.
              </p>
            </div>

            <div className="bg-[#232323] p-8 rounded-lg reveal fade-bottom">
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Valores</h3>
              <ul className="space-y-2 text-[#D1D1D1]">
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-[#CFAF5E] mr-2 mt-1 flex-shrink-0" />
                  <span>Excelência em cada serviço prestado</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-[#CFAF5E] mr-2 mt-1 flex-shrink-0" />
                  <span>Respeito e atenção personalizada a cada cliente</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-[#CFAF5E] mr-2 mt-1 flex-shrink-0" />
                  <span>Compromisso com a qualidade e inovação</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={18} className="text-[#CFAF5E] mr-2 mt-1 flex-shrink-0" />
                  <span>Ambiente acolhedor e profissional</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Nossa Equipa */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossa Equipa"
            subtitle="Conheça os profissionais que fazem da Barber Shop uma referência em Torres Vedras"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
            {/* Membro 1 */}
            <div className="bg-[#121212] rounded-lg overflow-hidden reveal fade-bottom">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=240" alt="António Silva" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#CFAF5E]">António Silva</h3>
                <p className="text-sm text-[#CFAF5E] mb-4">Fundador & Master Barber</p>
                <p className="text-[#D1D1D1]">
                  Com mais de 15 anos de experiência, António é especialista em cortes clássicos e modernos.
                </p>
              </div>
            </div>

            {/* Membro 2 */}
            <div className="bg-[#121212] rounded-lg overflow-hidden reveal fade-bottom">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=240" alt="Miguel Costa" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#CFAF5E]">Miguel Costa</h3>
                <p className="text-sm text-[#CFAF5E] mb-4">Senior Barber</p>
                <p className="text-[#D1D1D1]">
                  Especialista em barbas e tratamentos faciais, Miguel traz 10 anos de experiência para a equipa.
                </p>
              </div>
            </div>

            {/* Membro 3 */}
            <div className="bg-[#121212] rounded-lg overflow-hidden reveal fade-bottom">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=240" alt="João Ferreira" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#CFAF5E]">João Ferreira</h3>
                <p className="text-sm text-[#CFAF5E] mb-4">Barber</p>
                <p className="text-[#D1D1D1]">
                  Especializado em cortes modernos e desenhos, João traz criatividade e precisão aos seus trabalhos.
                </p>
              </div>
            </div>

            {/* Membro 4 */}
            <div className="bg-[#121212] rounded-lg overflow-hidden reveal fade-bottom">
              <div className="relative h-80">
                <Image src="/placeholder.svg?height=320&width=240" alt="Pedro Santos" fill className="object-cover" />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold mb-1 text-[#CFAF5E]">Pedro Santos</h3>
                <p className="text-sm text-[#CFAF5E] mb-4">Junior Barber</p>
                <p className="text-[#D1D1D1]">
                  O mais novo membro da equipa, Pedro traz energia e novas técnicas para a Barber Shop.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
