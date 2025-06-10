import Link from "next/link"
import { Facebook, Instagram, Twitter, Mail, Phone, MapPin, Clock } from "lucide-react"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0A0A0A] text-[#D1D1D1] pt-12 pb-6 border-t border-[#333]">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Sobre */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Barber Shop</h3>
            <p className="mb-4">
              Oferecemos serviços de barbearia de excelência em Torres Vedras, com profissionais experientes e um
              ambiente acolhedor.
            </p>
            <div className="flex space-x-4">
              <Link href="https://facebook.com" className="text-[#D1D1D1] hover:text-[#CFAF5E] transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </Link>
              <Link href="https://instagram.com" className="text-[#D1D1D1] hover:text-[#CFAF5E] transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </Link>
              <Link href="https://twitter.com" className="text-[#D1D1D1] hover:text-[#CFAF5E] transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </Link>
            </div>
          </div>

          {/* Links Rápidos */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Links Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="hover:text-[#CFAF5E] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/quem-somos" className="hover:text-[#CFAF5E] transition-colors">
                  Quem Somos
                </Link>
              </li>
              <li>
                <Link href="/galeria" className="hover:text-[#CFAF5E] transition-colors">
                  Galeria
                </Link>
              </li>
              <li>
                <Link href="/clientes" className="hover:text-[#CFAF5E] transition-colors">
                  Clientes
                </Link>
              </li>
              <li>
                <Link href="/precario" className="hover:text-[#CFAF5E] transition-colors">
                  Preçário
                </Link>
              </li>
              <li>
                <Link href="/contacto" className="hover:text-[#CFAF5E] transition-colors">
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Horário */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Horário</h3>
            <ul className="space-y-2">
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-[#CFAF5E]" />
                <span>Segunda a Sexta: 9h - 19h</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-[#CFAF5E]" />
                <span>Sábado: 9h - 17h</span>
              </li>
              <li className="flex items-center">
                <Clock size={16} className="mr-2 text-[#CFAF5E]" />
                <span>Domingo: Fechado</span>
              </li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-[#CFAF5E]">Contacto</h3>
            <ul className="space-y-2">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-1 text-[#CFAF5E]" />
                <span>Rua Dr. José de Bastos, 2, Torres Vedras</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-[#CFAF5E]" />
                <span>+351 912 345 678</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-[#CFAF5E]" />
                <Link href="mailto:contato@vianahub.pt" className="hover:text-[#CFAF5E] transition-colors">
                  contato@vianahub.pt
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-[#444] mt-8 pt-6 text-center text-sm">
          <p>&copy; {currentYear} Barber Shop. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
