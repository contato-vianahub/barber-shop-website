import { formatPrice, scrollToElement, cn } from "../../src/lib/utils"
import { jest } from "@jest/globals"

describe("Utils Functions", () => {
  describe("formatPrice", () => {
    it("formats price correctly in EUR", () => {
      expect(formatPrice(25.99)).toBe("25,99 €")
      expect(formatPrice(10)).toBe("10,00 €")
      expect(formatPrice(0)).toBe("0,00 €")
    })
  })

  describe("scrollToElement", () => {
    beforeEach(() => {
      // Mock scrollIntoView
      Element.prototype.scrollIntoView = jest.fn()
    })

    it("scrolls to element when it exists", () => {
      // Create a mock element
      const mockElement = document.createElement("div")
      mockElement.id = "test-element"
      document.body.appendChild(mockElement)

      scrollToElement("test-element")

      expect(mockElement.scrollIntoView).toHaveBeenCalledWith({ behavior: "smooth" })

      // Cleanup
      document.body.removeChild(mockElement)
    })

    it("does nothing when element does not exist", () => {
      // Should not throw error
      expect(() => scrollToElement("non-existent")).not.toThrow()
    })
  })

  describe("cn (className utility)", () => {
    it("merges class names correctly", () => {
      expect(cn("class1", "class2")).toBe("class1 class2")
    })

    it("handles conditional classes", () => {
      expect(cn("class1", false && "class2", "class3")).toBe("class1 class3")
    })

    it("handles Tailwind conflicts", () => {
      expect(cn("p-2", "p-4")).toBe("p-4") // Later class should win
    })
  })
})
