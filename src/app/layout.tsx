import type React from "react"
import type { Metadata } from "next"
import { Poppins } from "next/font/google"
import "./globals.css"
import Header from "../components/header"
import Footer from "../components/footer"
import ScrollToTop from "../components/scroll-to-top"
import { ThemeProvider } from "@/components/theme-provider"

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
})

export const metadata: Metadata = {
  title: "Barber Shop - Barbearia de Excelência em Torres Vedras",
  description:
    "Serviços de barbearia profissional em Torres Vedras. Cortes de cabelo, barba e tratamentos personalizados para homens.",
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="pt-PT" suppressHydrationWarning>
      <body className={`${poppins.variable} font-sans bg-[#121212] text-[#D1D1D1] min-h-screen flex flex-col`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <ScrollToTop />
          <Header />
          <main className="flex-grow">{children}</main>
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
