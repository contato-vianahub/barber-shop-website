"use client"

import { useState, useEffect } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X, ChevronUp, Scissors } from "lucide-react"
import { cn } from "../lib/utils"

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [showScrollTop, setShowScrollTop] = useState(false)
  const pathname = usePathname()

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen)
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }

      if (window.scrollY > 300) {
        setShowScrollTop(true)
      } else {
        setShowScrollTop(false)
      }
    }

    window.addEventListener("scroll", handleScroll)
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Quem Somos", href: "/quem-somos" },
    { name: "Galeria", href: "/galeria" },
    { name: "Clientes", href: "/clientes" },
    { name: "Preçário", href: "/precario" },
    { name: "Contacto", href: "/contacto" },
  ]

  const isActivePage = (href: string) => {
    if (href === "/" && pathname === "/") return true
    if (href !== "/" && pathname.startsWith(href)) return true
    return false
  }

  return (
    <>
      <header
        className={cn(
          "fixed w-full z-50 transition-all duration-300",
          scrolled
            ? "bg-[#0A0B0F]/98 backdrop-blur-sm shadow-[0_4px_20px_rgba(0,0,0,0.3)] py-2"
            : "bg-[#0A0B0F]/95 backdrop-blur-sm shadow-[0_2px_10px_rgba(0,0,0,0.2)] py-4",
        )}
      >
        <div className="container mx-auto px-4 flex justify-between items-center">
          <Link href="/" className="flex items-center">
            {/* Logo em texto estilizado */}
            <div className="bg-[#121212] border-2 border-[#CFAF5E] rounded-lg px-4 py-2 flex items-center gap-2">
              <Scissors size={20} className="text-[#CFAF5E]" />
              <div className="flex flex-col">
                <span className="text-[#CFAF5E] font-bold text-lg leading-none">BARBER</span>
                <span className="text-[#CFAF5E] font-medium text-sm leading-none">SHOP</span>
              </div>
              <div className="w-px h-8 bg-[#CFAF5E] mx-1"></div>
              <span className="text-[#CFAF5E] text-xs font-light">TORRES VEDRAS</span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-[#D1D1D1] transition-all duration-300 font-medium px-3 py-2 rounded-md overflow-hidden group",
                  isActivePage(link.href) && "text-[#CFAF5E] font-bold",
                )}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Flash effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CFAF5E]/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
                {/* Hover text color */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#CFAF5E] font-medium px-3 py-2 block">{link.name}</span>
                </div>
              </Link>
            ))}
            {/* Contacto como botão */}
            <Link href="/contacto" className="btn-primary">
              Contacto
            </Link>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#CFAF5E] hover:text-[#D1D1D1] transition-colors"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Fechar menu" : "Abrir menu"}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Navigation */}
        <div
          className={cn(
            "fixed inset-0 bg-[#0A0B0F]/98 z-40 flex flex-col justify-center items-center transition-all duration-300 md:hidden",
            isMenuOpen ? "opacity-100 pointer-events-auto top-0" : "opacity-0 pointer-events-none top-[-100%]",
          )}
        >
          <nav className="flex flex-col items-center space-y-6">
            {navLinks.slice(0, -1).map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={cn(
                  "relative text-[#D1D1D1] transition-all duration-300 text-xl font-medium px-4 py-2 rounded-md overflow-hidden group",
                  isActivePage(link.href) && "text-[#CFAF5E] font-bold",
                )}
                onClick={() => setIsMenuOpen(false)}
              >
                <span className="relative z-10">{link.name}</span>
                {/* Flash effect mobile */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#CFAF5E]/20 to-transparent transform -translate-x-full group-hover:translate-x-full transition-transform duration-500 ease-in-out"></div>
                {/* Hover text color mobile */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-[#CFAF5E] font-medium px-4 py-2 block text-xl">{link.name}</span>
                </div>
              </Link>
            ))}
            {/* Contacto como botão no mobile */}
            <Link href="/contacto" className="btn-primary mt-4" onClick={() => setIsMenuOpen(false)}>
              Contacto
            </Link>
          </nav>
        </div>
      </header>

      {/* Scroll to top button */}
      <button
        className={cn(
          "fixed bottom-6 right-6 bg-[#CFAF5E] text-[#121212] rounded-full p-3 shadow-lg transition-all duration-300 z-40",
          showScrollTop ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none",
        )}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        <ChevronUp size={24} />
      </button>
    </>
  )
}

export default Header
