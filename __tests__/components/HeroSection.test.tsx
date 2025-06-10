import { render, screen } from "@testing-library/react"
import HeroSection from "../../src/components/hero-section"

describe("HeroSection Component", () => {
  const defaultProps = {
    title: "Test Title",
    subtitle: "Test Subtitle",
    ctaText: "Test CTA",
    ctaLink: "/test",
  }

  it("renders title and subtitle", () => {
    render(<HeroSection {...defaultProps} />)

    expect(screen.getByText("Test Title")).toBeInTheDocument()
    expect(screen.getByText("Test Subtitle")).toBeInTheDocument()
  })

  it("renders primary CTA button", () => {
    render(<HeroSection {...defaultProps} />)

    const ctaButton = screen.getByRole("link", { name: /test cta/i })
    expect(ctaButton).toBeInTheDocument()
    expect(ctaButton).toHaveAttribute("href", "/test")
  })

  it("renders secondary CTA when provided", () => {
    const propsWithSecondary = {
      ...defaultProps,
      secondaryCtaText: "Secondary CTA",
      secondaryCtaLink: "/secondary",
    }

    render(<HeroSection {...propsWithSecondary} />)

    const secondaryButton = screen.getByRole("link", { name: /secondary cta/i })
    expect(secondaryButton).toBeInTheDocument()
    expect(secondaryButton).toHaveAttribute("href", "/secondary")
  })

  it("does not render secondary CTA when not provided", () => {
    render(<HeroSection {...defaultProps} />)

    const links = screen.getAllByRole("link")
    expect(links).toHaveLength(1)
  })
})
