import { render, screen } from "@testing-library/react"
import Home from "../../src/app/page"
import jest from "jest" // Declare the jest variable

// Mock the scroll reveal utility
jest.mock("../../src/lib/utils", () => ({
  ...jest.requireActual("../../src/lib/utils"),
  initScrollReveal: jest.fn(() => jest.fn()),
}))

describe("Home Page", () => {
  it("renders hero section with correct content", () => {
    render(<Home />)

    expect(screen.getByText("Barber Shop")).toBeInTheDocument()
    expect(screen.getByText("Experiência premium em barbearia em Torres Vedras")).toBeInTheDocument()
  })

  it("renders services section", () => {
    render(<Home />)

    expect(screen.getByText("Nossos Serviços")).toBeInTheDocument()
    expect(screen.getByText("Corte de Cabelo")).toBeInTheDocument()
    expect(screen.getByText("Barba")).toBeInTheDocument()
    expect(screen.getByText("Combo (Corte + Barba)")).toBeInTheDocument()
    expect(screen.getByText("Tratamento Capilar")).toBeInTheDocument()
  })

  it("renders testimonials section", () => {
    render(<Home />)

    expect(screen.getByText("O que Dizem os Nossos Clientes")).toBeInTheDocument()
    expect(screen.getByText("João Silva")).toBeInTheDocument()
    expect(screen.getByText("Miguel Costa")).toBeInTheDocument()
    expect(screen.getByText("António Ferreira")).toBeInTheDocument()
  })

  it("renders statistics section", () => {
    render(<Home />)

    expect(screen.getByText("5+")).toBeInTheDocument()
    expect(screen.getByText("Anos de Experiência")).toBeInTheDocument()
    expect(screen.getByText("1000+")).toBeInTheDocument()
    expect(screen.getByText("Clientes Satisfeitos")).toBeInTheDocument()
  })

  it("renders CTA section", () => {
    render(<Home />)

    expect(screen.getByText("Pronto para uma Nova Experiência?")).toBeInTheDocument()
    expect(screen.getByRole("link", { name: /entrar em contacto/i })).toBeInTheDocument()
  })
})
