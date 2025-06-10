"use client"

import { useState } from "react"
import Image from "next/image"
import { X } from "lucide-react"
import { cn } from "@/lib/utils"

interface GalleryImageProps {
  src: string
  alt: string
  className?: string
}

const GalleryImage = ({ src, alt, className }: GalleryImageProps) => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <>
      <div
        className={cn("relative overflow-hidden rounded-lg cursor-pointer group", className)}
        onClick={() => setIsOpen(true)}
      >
        <div className="relative h-64 w-full">
          <Image
            src={src || "/placeholder.svg"}
            alt={alt}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-[#121212] opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
      </div>

      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#121212]/90 p-4"
          onClick={() => setIsOpen(false)}
        >
          <button
            className="absolute top-4 right-4 text-white hover:text-[#CFAF5E] transition-colors"
            onClick={() => setIsOpen(false)}
          >
            <X size={24} />
            <span className="sr-only">Fechar</span>
          </button>
          <div className="relative max-w-4xl max-h-[80vh] w-full h-full" onClick={(e) => e.stopPropagation()}>
            <Image src={src || "/placeholder.svg"} alt={alt} fill className="object-contain" />
          </div>
        </div>
      )}
    </>
  )
}

export default GalleryImage
