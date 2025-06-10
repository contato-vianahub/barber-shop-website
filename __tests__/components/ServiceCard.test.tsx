import { render, screen } from "@testing-library/react"
import ServiceCard from "../../src/components/service-card"

describe("ServiceCard Component", () => {
  const defaultProps = {
    title: "Test Service",
    description: "Test Description",
    price: 25.99,
    imageSrc: "/test-image.jpg",
  }

  it("renders service information", () => {
    render(<ServiceCard {...defaultProps} />)

    expect(screen.getByText("Test Service")).toBeInTheDocument()
    expect(screen.getByText("Test Description")).toBeInTheDocument()
    expect(screen.getByText("25.99€")).toBeInTheDocument()
  })

  it("renders image with correct alt text", () => {
    render(<ServiceCard {...defaultProps} />)

    const image = screen.getByAltText("Test Service")
    expect(image).toBeInTheDocument()
    expect(image).toHaveAttribute("src", "/test-image.jpg")
  })

  it("applies custom className when provided", () => {
    render(<ServiceCard {...defaultProps} className="custom-class" />)

    const card = screen.getByText("Test Service").closest(".card")
    expect(card).toHaveClass("custom-class")
  })

  it("formats price correctly", () => {
    render(<ServiceCard {...defaultProps} price={10} />)

    expect(screen.getByText("10.00€")).toBeInTheDocument()
  })
})
