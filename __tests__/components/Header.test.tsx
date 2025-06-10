import { render, screen, fireEvent } from "@testing-library/react"
import Header from "../../src/components/header"
import jest from "jest"

// Mock next/navigation
jest.mock("next/navigation", () => ({
  usePathname: () => "/",
}))

describe("Header Component", () => {
  beforeEach(() => {
    // Reset scroll position
    Object.defineProperty(window, "scrollY", {
      value: 0,
      writable: true,
    })
  })

  it("renders logo and navigation links", () => {
    render(<Header />)

    // Check if logo is present
    expect(screen.getByText("BARBER")).toBeInTheDocument()
    expect(screen.getByText("SHOP")).toBeInTheDocument()

    // Check navigation links
    expect(screen.getByText("Home")).toBeInTheDocument()
    expect(screen.getByText("Quem Somos")).toBeInTheDocument()
    expect(screen.getByText("Galeria")).toBeInTheDocument()
    expect(screen.getByText("Clientes")).toBeInTheDocument()
    expect(screen.getByText("Preçário")).toBeInTheDocument()
    expect(screen.getByText("Contacto")).toBeInTheDocument()
  })

  it("toggles mobile menu when hamburger button is clicked", () => {
    render(<Header />)

    const menuButton = screen.getByLabelText("Abrir menu")
    fireEvent.click(menuButton)

    expect(screen.getByLabelText("Fechar menu")).toBeInTheDocument()
  })

  it("highlights active page", () => {
    render(<Header />)

    const homeLink = screen.getByText("Home")
    expect(homeLink).toHaveClass("text-[#CFAF5E]", "font-bold")
  })

  it("shows scroll to top button when scrolled", () => {
    render(<Header />)

    // Simulate scroll
    Object.defineProperty(window, "scrollY", {
      value: 400,
      writable: true,
    })

    fireEvent.scroll(window)

    const scrollButton = screen.getByLabelText("Voltar ao topo")
    expect(scrollButton).toBeInTheDocument()
  })

  it("applies scrolled styles when page is scrolled", () => {
    render(<Header />)

    // Simulate scroll
    Object.defineProperty(window, "scrollY", {
      value: 100,
      writable: true,
    })

    fireEvent.scroll(window)

    const header = screen.getByRole("banner")
    expect(header).toHaveClass("py-2")
  })
})
