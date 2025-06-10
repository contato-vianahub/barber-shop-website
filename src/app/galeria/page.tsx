"use client"

import { useEffect } from "react"
import Image from "next/image"
import SectionTitle from "../../components/section-title"
import GalleryImage from "../../components/gallery-image"
import { initScrollReveal } from "../../lib/utils"

export default function Galeria() {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  // Imagens horizontais
  const horizontalImages = [
    {
      src: "/images/foto2-horizontal-cabeleireiro-aparando-cabelo-cliente.jpg",
      alt: "Cabeleireiro aparando cabelo do cliente",
    },
    {
      src: "/images/foto3-horizontal-close-up-sorridente-homem-cortando-o-cabelo.jpg",
      alt: "Close-up sorridente homem cortando o cabelo",
    },
    {
      src: "/images/foto1-horizontal-barbear-mulher-que-seca-o-cabelo-do-cliente.jpg",
      alt: "Profissional secando cabelo do cliente",
    },
    {
      src: "/images/foto5-horizontal-homem-estiloso-sentado-em-uma-barbearia.jpg",
      alt: "Homem estiloso sentado em uma barbearia",
    },
    {
      src: "/images/foto4-horizontal-homem-bonito-na-barbearia-barbeando-barba.jpg",
      alt: "Homem bonito na barbearia barbeando barba",
    },
    {
      src: "/images/foto8-horizontal-usando-a-toalha-na-barba-do-macho-envelhecido-na-barbearia.jpg",
      alt: "Usando toalha na barba do cliente na barbearia",
    },
    {
      src: "/images/foto6-horizontal-homem-na-barbearia-barbeando-barba.jpg",
      alt: "Homem na barbearia barbeando barba",
    },
    {
      src: "/images/foto7-horizontal-lenhador-brutal-cortando-madeira-lamina-afiada-brutalidade-e-masculinidade-lenhador-barbudo-estilo-de-lenhador-homem-com-machado-homem-barbudo-segurar-machado.jpg",
      alt: "Estilo masculino e tradicional",
    },
  ]

  // Imagens verticais
  const verticalImages = [
    {
      src: "/images/photo3-vertical-de-um-cabeleireiro-raspando-a-barba-de-um-jovem-cliente-em-uma-toalha-com-uma-lamina.jpg",
      alt: "Cabeleireiro raspando a barba de um jovem cliente",
    },
    {
      src: "/images/photo1-vertical-cabelo-de-cliente-de-corte-de-cabeleireiro.jpg",
      alt: "Corte de cabelo profissional",
    },
    {
      src: "/images/photo5-vertical-homem-sentado-ainda-e-cortando-o-cabelo.jpg",
      alt: "Homem recebendo corte de cabelo",
    },
    {
      src: "/images/photo2-vertical-close-up-de-vista-lateral-homem-obtendo-profissional-corte-cabelo.jpg",
      alt: "Close-up lateral de corte profissional",
    },
    {
      src: "/images/photo4-vertical-homem-em-um-salao-de-barbearia-fazendo-o-corte-de-cabelo-e-barba.jpg",
      alt: "Homem em barbearia fazendo corte e barba",
    },
    {
      src: "/images/photo6-vertical-barbeiro-dando-um-corte-de-cabelo-a-um-cliente.jpg",
      alt: "Barbeiro dando corte de cabelo",
    },
    {
      src: "/images/photo8-vertical-cliente-de-estilo-feminino-no-salao-de-beleza.jpg",
      alt: "Cliente feminina no salão",
    },
    {
      src: "/images/photo7-vertical-close-vertical-de-um-cabeleireiro-cortando-o-cabelo-curto-de-uma-mulher-em-um-salao-de-beleza.jpg",
      alt: "Cabeleireiro cortando cabelo curto feminino",
    },
  ]

  return (
    <>
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 text-[#CFAF5E] reveal fade-bottom">Galeria</h1>
            <p className="text-xl mb-8 text-[#D1D1D1] reveal fade-bottom">
              Veja alguns dos nossos melhores trabalhos e o ambiente acolhedor da nossa barbearia
            </p>
          </div>
        </div>
      </section>

      {/* Carousel Horizontal - Primeira Linha (Esquerda para Direita) */}
      <section className="py-12 bg-[#232323] overflow-hidden">
        <div className="reveal fade-bottom">
          <div className="flex animate-scroll-right">
            {[...horizontalImages, ...horizontalImages].map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-60 mx-4">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Carousel Horizontal - Segunda Linha (Direita para Esquerda) */}
      <section className="py-12 bg-[#121212] overflow-hidden">
        <div className="reveal fade-bottom">
          <div className="flex animate-scroll-left">
            {[...verticalImages, ...verticalImages].map((image, index) => (
              <div key={index} className="flex-shrink-0 w-80 h-60 mx-4">
                <div className="relative w-full h-full rounded-lg overflow-hidden">
                  <Image
                    src={image.src || "/placeholder.svg"}
                    alt={image.alt}
                    fill
                    className="object-cover hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#121212]/50 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galeria Estática */}
      <section className="py-20 bg-[#232323]">
        <div className="container mx-auto px-4">
          <SectionTitle
            title="Nossos Trabalhos"
            subtitle="Clique nas imagens para visualizar em tamanho completo"
            center
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-12">
            {[...horizontalImages, ...verticalImages].map((image, index) => (
              <div key={index} className="reveal fade-bottom">
                <GalleryImage src={image.src} alt={image.alt} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sobre a Galeria */}
      <section className="py-20 bg-[#121212]">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <SectionTitle
              title="Arte e Tradição"
              subtitle="Cada corte é uma obra de arte, cada cliente uma história única"
              center
            />
            <p className="text-lg text-[#D1D1D1] mb-8 reveal fade-bottom">
              Na Barber Shop, acreditamos que cada corte de cabelo e cada barba é uma expressão da personalidade do
              nosso cliente. A nossa galeria mostra não apenas o nosso trabalho, mas também a confiança e satisfação dos
              nossos clientes.
            </p>
            <p className="text-lg text-[#D1D1D1] reveal fade-bottom">
              Utilizamos técnicas tradicionais combinadas com tendências modernas para criar looks únicos que realçam a
              personalidade de cada pessoa que nos visita.
            </p>
          </div>
        </div>
      </section>
    </>
  )
}
