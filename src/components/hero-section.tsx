"use client"

import { useEffect } from "react"
import Link from "next/link"
import Image from "next/image"
import { ArrowRight } from "lucide-react"
import { initScrollReveal } from "../lib/utils"

interface HeroSectionProps {
  title: string
  subtitle: string
  ctaText: string
  ctaLink: string
  secondaryCtaText?: string
  secondaryCtaLink?: string
}

const HeroSection = ({ title, subtitle, ctaText, ctaLink, secondaryCtaText, secondaryCtaLink }: HeroSectionProps) => {
  useEffect(() => {
    const cleanup = initScrollReveal()
    return cleanup
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-[#121212] overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src="/images/hero-barbeiro-elegante.jpg"
          alt="Barbeiro profissional elegante"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#121212]/70 via-[#121212]/80 to-[#121212]"></div>
      </div>

      <div className="container mx-auto px-4 pt-24 pb-12 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 reveal fade-bottom text-[#CFAF5E]">{title}</h1>
          <p className="text-xl md:text-2xl mb-8 reveal fade-bottom text-[#D1D1D1]">{subtitle}</p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 reveal fade-bottom">
            <Link href={ctaLink} className="btn-primary flex items-center justify-center gap-2">
              {ctaText}
              <ArrowRight size={16} />
            </Link>
            {secondaryCtaText && secondaryCtaLink && (
              <Link href={secondaryCtaLink} className="btn-secondary">
                {secondaryCtaText}
              </Link>
            )}
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-[#121212] to-transparent"></div>
    </section>
  )
}

export default HeroSection
