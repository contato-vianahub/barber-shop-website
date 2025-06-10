import Image from "next/image"
import { Star } from "lucide-react"
import { cn } from "../lib/utils"

interface TestimonialCardProps {
  name: string
  testimonial: string
  rating: number
  imageSrc?: string
  className?: string
}

const TestimonialCard = ({ name, testimonial, rating, imageSrc, className }: TestimonialCardProps) => {
  return (
    <div className={cn("bg-[#232323] p-6 rounded-lg shadow-lg", className)}>
      <div className="flex items-center mb-4">
        <div className="relative h-12 w-12 rounded-full overflow-hidden mr-4">
          {imageSrc ? (
            <Image src={imageSrc || "/placeholder.svg"} alt={name} fill className="object-cover" />
          ) : (
            <div className="bg-[#CFAF5E] h-full w-full flex items-center justify-center text-[#121212] font-bold text-xl">
              {name.charAt(0)}
            </div>
          )}
        </div>
        <div>
          <h4 className="font-bold text-[#CFAF5E]">{name}</h4>
          <div className="flex">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} className={i < rating ? "text-[#CFAF5E] fill-[#CFAF5E]" : "text-gray-400"} />
            ))}
          </div>
        </div>
      </div>
      <p className="text-[#D1D1D1] italic">&ldquo;{testimonial}&rdquo;</p>
    </div>
  )
}

export default TestimonialCard
