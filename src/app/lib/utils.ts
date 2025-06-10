import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export function formatPrice(price: number): string {
  return new Intl.NumberFormat("pt-PT", {
    style: "currency",
    currency: "EUR",
  }).format(price)
}

export function scrollToElement(elementId: string) {
  const element = document.getElementById(elementId)
  if (element) {
    element.scrollIntoView({ behavior: "smooth" })
  }
}

export function initScrollReveal() {
  if (typeof window === "undefined") return

  const reveals = document.querySelectorAll(".reveal")

  const revealElements = () => {
    reveals.forEach((element) => {
      const windowHeight = window.innerHeight
      const elementTop = element.getBoundingClientRect().top
      const elementVisible = 150

      if (elementTop < windowHeight - elementVisible) {
        element.classList.add("active")
      }
    })
  }

  // Execute immediately
  revealElements()

  // Add scroll listener
  window.addEventListener("scroll", revealElements)

  // Return cleanup function
  return () => {
    window.removeEventListener("scroll", revealElements)
  }
}
