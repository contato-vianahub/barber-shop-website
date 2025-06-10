import Image from "next/image"
import { cn } from "../lib/utils"

interface ServiceCardProps {
  title: string
  description: string
  price: number
  imageSrc: string
  className?: string
}

const ServiceCard = ({ title, description, price, imageSrc, className }: ServiceCardProps) => {
  return (
    <div className={cn("card group cursor-pointer", className)}>
      <div className="relative h-64 w-full overflow-hidden">
        <Image
          src={imageSrc || "/placeholder.svg"}
          alt={title}
          fill
          className="object-cover transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#121212] to-transparent opacity-70"></div>
        <div className="absolute bottom-4 right-4 bg-[#CFAF5E] text-[#121212] font-bold py-1 px-3 rounded-md">
          {price.toFixed(2)}€
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2 text-[#CFAF5E]">{title}</h3>
        <p className="text-[#D1D1D1]">{description}</p>
      </div>
    </div>
  )
}

export default ServiceCard
