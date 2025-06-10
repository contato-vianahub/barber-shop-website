"use client"

import { useEffect } from "react"
import { MapPin, Phone, Mail, Clock, Facebook, Instagram, Twitter } from "lucide-react"
import SectionTitle from "../../components/section-title"
import ContactForm from "../../components/contact-form"
import { initScrollReveal } from "../../lib/utils"

export default function Contacto() {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#CFAF5E] reveal fade-bottom">Contacto</h1>
            <p className="text-xl mb-8 text-[#D1D1D1] reveal fade-bottom">
              Entre em contacto connosco para marcar a sua consulta ou esclarecer dúvidas
            </p>
          </div>
        </div>
      </section>

      {/* Informações de Contacto */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Informações */}
            <div className="reveal fade-right">
              <SectionTitle title="Informações de Contacto" />

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin size={24} className="text-[#CFAF5E] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#CFAF5E] mb-1">Morada</h3>
                    <p className="text-[#D1D1D1]">Rua Dr. José de Bastos, 2</p>
                    <p className="text-[#D1D1D1]">Torres Vedras, Portugal</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Phone size={24} className="text-[#CFAF5E] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#CFAF5E] mb-1">Telefone</h3>
                    <p className="text-[#D1D1D1]">+351 912 345 678</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail size={24} className="text-[#CFAF5E] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#CFAF5E] mb-1">Email</h3>
                    <p className="text-[#D1D1D1]">contato@vianahub.pt</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock size={24} className="text-[#CFAF5E] mr-4 mt-1" />
                  <div>
                    <h3 className="font-bold text-[#CFAF5E] mb-1">Horário</h3>
                    <div className="text-[#D1D1D1] space-y-1">
                      <p>Segunda a Sexta: 9h - 19h</p>
                      <p>Sábado: 9h - 17h</p>
                      <p>Domingo: Fechado</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Redes Sociais */}
              <div className="mt-8">
                <h3 className="font-bold text-[#CFAF5E] mb-4">Siga-nos nas Redes Sociais</h3>
                <div className="flex space-x-4">
                  <a
                    href="https://facebook.com"
                    className="bg-[#121212] p-3 rounded-full text-[#CFAF5E] hover:bg-[#CFAF5E] hover:text-[#121212] transition-colors"
                  >
                    <Facebook size={20} />
                    <span className="sr-only">Facebook</span>
                  </a>
                  <a
                    href="https://instagram.com"
                    className="bg-[#121212] p-3 rounded-full text-[#CFAF5E] hover:bg-[#CFAF5E] hover:text-[#121212] transition-colors"
                  >
                    <Instagram size={20} />
                    <span className="sr-only">Instagram</span>
                  </a>
                  <a
                    href="https://twitter.com"
                    className="bg-[#121212] p-3 rounded-full text-[#CFAF5E] hover:bg-[#CFAF5E] hover:text-[#121212] transition-colors"
                  >
                    <Twitter size={20} />
                    <span className="sr-only">Twitter</span>
                  </a>
                </div>
              </div>
            </div>

            {/* Formulário */}
            <div className="reveal fade-left">
              <SectionTitle title="Envie-nos uma Mensagem" />
              <div className="bg-[#121212] p-8 rounded-lg">
                <ContactForm />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mapa */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <SectionTitle title="Como Chegar" subtitle="Encontre-nos facilmente em Torres Vedras" center />

          <div className="mt-12 reveal fade-bottom">
            <div className="bg-[#232323] p-4 rounded-lg">
              <div className="aspect-video w-full bg-[#333] rounded-lg flex items-center justify-center">
                <div className="text-center">
                  <MapPin size={48} className="text-[#CFAF5E] mx-auto mb-4" />
                  <p className="text-[#D1D1D1] text-lg">Mapa Interativo</p>
                  <p className="text-[#D1D1D1]">Rua Dr. José de Bastos, 2, Torres Vedras</p>
                </div>
              </div>
            </div>
          </div>

          {/* Instruções de Chegada */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="reveal fade-right">
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">De Carro</h3>
              <p className="text-[#D1D1D1] mb-4">
                Estacionamento gratuito disponível na rua. A barbearia fica no centro de Torres Vedras, facilmente
                acessível pelas principais vias da cidade.
              </p>
              <p className="text-[#D1D1D1]">Coordenadas GPS: 39.0908° N, 9.2581° W</p>
            </div>

            <div className="reveal fade-left">
              <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Transportes Públicos</h3>
              <p className="text-[#D1D1D1] mb-4">
                Várias linhas de autocarro param próximo à nossa localização. A paragem mais próxima fica a apenas 2
                minutos a pé.
              </p>
              <p className="text-[#D1D1D1]">Estação de comboios de Torres Vedras a 10 minutos a pé.</p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
