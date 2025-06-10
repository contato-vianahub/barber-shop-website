import { render, screen } from "@testing-library/react"
import Galeria from "../../src/app/galeria/page"
import jest from "jest" // Import jest to declare the variable

// Mock the scroll reveal utility
jest.mock("../../src/lib/utils", () => ({
  ...jest.requireActual("../../src/lib/utils"),
  initScrollReveal: jest.fn(() => jest.fn()),
}))

describe("Galeria Page", () => {
  it("renders page title and description", () => {
    render(<Galeria />)

    expect(screen.getByText("Galeria")).toBeInTheDocument()
    expect(screen.getByText(/veja alguns dos nossos melhores trabalhos/i)).toBeInTheDocument()
  })

  it("renders carousel sections", () => {
    render(<Galeria />)

    // Check if images are rendered (at least some of them)
    const images = screen.getAllByRole("img")
    expect(images.length).toBeGreaterThan(0)
  })

  it("renders static gallery section", () => {
    render(<Galeria />)

    expect(screen.getByText("Nossos Trabalhos")).toBeInTheDocument()
    expect(screen.getByText(/clique nas imagens para visualizar/i)).toBeInTheDocument()
  })

  it("renders about gallery section", () => {
    render(<Galeria />)

    expect(screen.getByText("Arte e Tradição")).toBeInTheDocument()
    expect(screen.getByText(/cada corte é uma obra de arte/i)).toBeInTheDocument()
  })
})
