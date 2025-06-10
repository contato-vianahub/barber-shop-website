import { render, screen } from "@testing-library/react"
import Contacto from "../../src/app/contacto/page"
import jest from "jest" // Declare the jest variable

// Mock the scroll reveal utility
jest.mock("../../src/lib/utils", () => ({
  ...jest.requireActual("../../src/lib/utils"),
  initScrollReveal: jest.fn(() => jest.fn()),
}))

describe("Contacto Page", () => {
  it("renders page title and description", () => {
    render(<Contacto />)

    expect(screen.getByText("Contacto")).toBeInTheDocument()
    expect(screen.getByText(/entre em contacto connosco/i)).toBeInTheDocument()
  })

  it("renders contact information", () => {
    render(<Contacto />)

    expect(screen.getByText("Informações de Contacto")).toBeInTheDocument()
    expect(screen.getByText("Rua Dr. José de Bastos, 2")).toBeInTheDocument()
    expect(screen.getByText("+351 912 345 678")).toBeInTheDocument()
    expect(screen.getByText("contato@vianahub.pt")).toBeInTheDocument()
  })

  it("renders business hours", () => {
    render(<Contacto />)

    expect(screen.getByText("Horário")).toBeInTheDocument()
    expect(screen.getByText("Segunda a Sexta: 9h - 19h")).toBeInTheDocument()
    expect(screen.getByText("Sábado: 9h - 17h")).toBeInTheDocument()
    expect(screen.getByText("Domingo: Fechado")).toBeInTheDocument()
  })

  it("renders contact form", () => {
    render(<Contacto />)

    expect(screen.getByText("Envie-nos uma Mensagem")).toBeInTheDocument()
    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
  })

  it("renders social media links", () => {
    render(<Contacto />)

    expect(screen.getByText("Siga-nos nas Redes Sociais")).toBeInTheDocument()
    expect(screen.getByLabelText("Facebook")).toBeInTheDocument()
    expect(screen.getByLabelText("Instagram")).toBeInTheDocument()
    expect(screen.getByLabelText("Twitter")).toBeInTheDocument()
  })

  it("renders map section", () => {
    render(<Contacto />)

    expect(screen.getByText("Como Chegar")).toBeInTheDocument()
    expect(screen.getByText("Mapa Interativo")).toBeInTheDocument()
  })
})
