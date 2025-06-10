const {
  Builder,
  By,
  until,
  Key,
  describe,
  beforeAll,
  afterAll,
  beforeEach,
  test,
  expect,
} = require("selenium-webdriver")
const chrome = require("selenium-webdriver/chrome")

// Test configuration
const BASE_URL = process.env.TEST_URL || "http://localhost:3000"
const TIMEOUT = 10000

describe("Barber Shop E2E Tests", () => {
  let driver

  beforeAll(async () => {
    // Setup Chrome options
    const options = new chrome.Options()
    options.addArguments("--headless") // Run in headless mode for CI
    options.addArguments("--no-sandbox")
    options.addArguments("--disable-dev-shm-usage")
    options.addArguments("--window-size=1920,1080")

    driver = await new Builder().forBrowser("chrome").setChromeOptions(options).build()

    await driver.manage().setTimeouts({ implicit: TIMEOUT })
  })

  afterAll(async () => {
    if (driver) {
      await driver.quit()
    }
  })

  describe("Homepage Tests", () => {
    beforeEach(async () => {
      await driver.get(BASE_URL)
    })

    test("should load homepage successfully", async () => {
      const title = await driver.getTitle()
      expect(title).toContain("Barber Shop")

      const heroTitle = await driver.findElement(By.css("h1"))
      const heroText = await heroTitle.getText()
      expect(heroText).toContain("Barber Shop")
    })

    test("should navigate through menu items", async () => {
      // Test navigation to Quem Somos
      const quemSomosLink = await driver.findElement(By.linkText("Quem Somos"))
      await quemSomosLink.click()

      await driver.wait(until.urlContains("/quem-somos"), TIMEOUT)
      const currentUrl = await driver.getCurrentUrl()
      expect(currentUrl).toContain("/quem-somos")

      // Check if page content loaded
      const pageTitle = await driver.findElement(By.css("h1"))
      const titleText = await pageTitle.getText()
      expect(titleText).toContain("Quem Somos")
    })

    test("should open mobile menu", async () => {
      // Resize to mobile viewport
      await driver.manage().window().setRect({ width: 375, height: 667 })

      // Click mobile menu button
      const menuButton = await driver.findElement(By.css('[aria-label="Abrir menu"]'))
      await menuButton.click()

      // Check if mobile menu is visible
      const mobileMenu = await driver.findElement(By.css("nav"))
      const isDisplayed = await mobileMenu.isDisplayed()
      expect(isDisplayed).toBe(true)
    })

    test("should scroll to services section", async () => {
      const servicesLink = await driver.findElement(By.linkText("Ver Serviços"))
      await servicesLink.click()

      // Wait for scroll animation
      await driver.sleep(1000)

      // Check if services section is in view
      const servicesSection = await driver.findElement(By.id("servicos"))
      const location = await servicesSection.getLocation()
      expect(location.y).toBeLessThan(1000) // Should be near top of viewport
    })
  })

  describe("Gallery Tests", () => {
    beforeEach(async () => {
      await driver.get(`${BASE_URL}/galeria`)
    })

    test("should load gallery page", async () => {
      const pageTitle = await driver.findElement(By.css("h1"))
      const titleText = await pageTitle.getText()
      expect(titleText).toContain("Galeria")
    })

    test("should display carousel images", async () => {
      const images = await driver.findElements(By.css("img"))
      expect(images.length).toBeGreaterThan(0)

      // Check if first image is loaded
      const firstImage = images[0]
      const src = await firstImage.getAttribute("src")
      expect(src).toBeTruthy()
    })

    test("should open image modal on click", async () => {
      // Find a gallery image and click it
      const galleryImages = await driver.findElements(By.css('[data-testid="gallery-image"]'))
      if (galleryImages.length > 0) {
        await galleryImages[0].click()

        // Check if modal opened
        const modal = await driver.findElement(By.css('[data-testid="image-modal"]'))
        const isDisplayed = await modal.isDisplayed()
        expect(isDisplayed).toBe(true)

        // Close modal
        const closeButton = await driver.findElement(By.css('[data-testid="close-modal"]'))
        await closeButton.click()
      }
    })
  })

  describe("Contact Form Tests", () => {
    beforeEach(async () => {
      await driver.get(`${BASE_URL}/contacto`)
    })

    test("should load contact page", async () => {
      const pageTitle = await driver.findElement(By.css("h1"))
      const titleText = await pageTitle.getText()
      expect(titleText).toContain("Contacto")
    })

    test("should fill and submit contact form", async () => {
      // Fill form fields
      const nameInput = await driver.findElement(By.name("name"))
      await nameInput.sendKeys("João Silva")

      const emailInput = await driver.findElement(By.name("email"))
      await emailInput.sendKeys("joao@example.com")

      const serviceSelect = await driver.findElement(By.name("service"))
      await serviceSelect.sendKeys("corte")

      const messageTextarea = await driver.findElement(By.name("message"))
      await messageTextarea.sendKeys("Gostaria de marcar um horário para corte de cabelo.")

      // Submit form
      const submitButton = await driver.findElement(By.css('button[type="submit"]'))
      await submitButton.click()

      // Wait for success message
      await driver.wait(until.elementLocated(By.css(".text-green-600")), TIMEOUT)
      const successMessage = await driver.findElement(By.css(".text-green-600"))
      const messageText = await successMessage.getText()
      expect(messageText).toContain("sucesso")
    })

    test("should validate required fields", async () => {
      // Try to submit empty form
      const submitButton = await driver.findElement(By.css('button[type="submit"]'))
      await submitButton.click()

      // Check if validation prevents submission
      const nameInput = await driver.findElement(By.name("name"))
      const validationMessage = await nameInput.getAttribute("validationMessage")
      expect(validationMessage).toBeTruthy()
    })
  })

  describe("Pricing Page Tests", () => {
    beforeEach(async () => {
      await driver.get(`${BASE_URL}/precario`)
    })

    test("should load pricing page", async () => {
      const pageTitle = await driver.findElement(By.css("h1"))
      const titleText = await pageTitle.getText()
      expect(titleText).toContain("Preçário")
    })

    test("should display service cards with prices", async () => {
      const serviceCards = await driver.findElements(By.css(".bg-\\[\\#121212\\]"))
      expect(serviceCards.length).toBeGreaterThan(0)

      // Check if prices are displayed
      const prices = await driver.findElements(By.css(".text-\\[\\#CFAF5E\\]"))
      expect(prices.length).toBeGreaterThan(0)
    })

    test("should display package deals", async () => {
      const packagesSection = await driver.findElement(By.xpath("//h2[contains(text(), 'Pacotes Especiais')]"))
      expect(packagesSection).toBeTruthy()

      const packageCards = await driver.findElements(By.css(".bg-\\[\\#232323\\]"))
      expect(packageCards.length).toBeGreaterThanOrEqual(3)
    })
  })

  describe("Responsive Design Tests", () => {
    const viewports = [
      { width: 375, height: 667, name: "Mobile" },
      { width: 768, height: 1024, name: "Tablet" },
      { width: 1920, height: 1080, name: "Desktop" },
    ]

    viewports.forEach((viewport) => {
      test(`should be responsive on ${viewport.name}`, async () => {
        await driver.manage().window().setRect(viewport)
        await driver.get(BASE_URL)

        // Check if page loads without horizontal scroll
        const bodyWidth = await driver.executeScript("return document.body.scrollWidth")
        const windowWidth = await driver.executeScript("return window.innerWidth")
        expect(bodyWidth).toBeLessThanOrEqual(windowWidth + 1) // Allow 1px tolerance

        // Check if navigation is accessible
        if (viewport.width < 768) {
          // Mobile: check if hamburger menu exists
          const menuButton = await driver.findElement(By.css('[aria-label="Abrir menu"]'))
          expect(menuButton).toBeTruthy()
        } else {
          // Desktop/Tablet: check if navigation links are visible
          const navLinks = await driver.findElements(By.css("nav a"))
          expect(navLinks.length).toBeGreaterThan(0)
        }
      })
    })
  })

  describe("Performance Tests", () => {
    test("should load page within acceptable time", async () => {
      const startTime = Date.now()
      await driver.get(BASE_URL)

      // Wait for main content to load
      await driver.wait(until.elementLocated(By.css("h1")), TIMEOUT)
      const loadTime = Date.now() - startTime

      // Page should load within 5 seconds
      expect(loadTime).toBeLessThan(5000)
    })

    test("should have optimized images", async () => {
      await driver.get(BASE_URL)

      const images = await driver.findElements(By.css("img"))

      for (const image of images.slice(0, 5)) {
        // Test first 5 images
        const src = await image.getAttribute("src")
        const naturalWidth = await driver.executeScript("return arguments[0].naturalWidth", image)
        const naturalHeight = await driver.executeScript("return arguments[0].naturalHeight", image)

        // Images should be loaded (have dimensions)
        expect(naturalWidth).toBeGreaterThan(0)
        expect(naturalHeight).toBeGreaterThan(0)
      }
    })
  })

  describe("Accessibility Tests", () => {
    test("should have proper heading hierarchy", async () => {
      await driver.get(BASE_URL)

      const h1Elements = await driver.findElements(By.css("h1"))
      expect(h1Elements.length).toBe(1) // Should have exactly one h1

      const headings = await driver.findElements(By.css("h1, h2, h3, h4, h5, h6"))
      expect(headings.length).toBeGreaterThan(1) // Should have multiple headings
    })

    test("should have alt text for images", async () => {
      await driver.get(BASE_URL)

      const images = await driver.findElements(By.css("img"))

      for (const image of images) {
        const alt = await image.getAttribute("alt")
        expect(alt).toBeTruthy() // All images should have alt text
      }
    })

    test("should be keyboard navigable", async () => {
      await driver.get(BASE_URL)

      // Tab through focusable elements
      const body = await driver.findElement(By.css("body"))
      await body.sendKeys(Key.TAB)

      const activeElement = await driver.switchTo().activeElement()
      const tagName = await activeElement.getTagName()

      // Should focus on a focusable element
      expect(["a", "button", "input", "select", "textarea"]).toContain(tagName.toLowerCase())
    })
  })
})

// Helper function to run tests
async function runTests() {
  console.log("Starting Selenium E2E Tests...")

  try {
    // This is a simplified test runner
    // In a real scenario, you'd use a proper test framework like Jest
    console.log("✅ All E2E tests would run here")
    console.log("Note: This is a template. Integrate with your preferred test runner.")
  } catch (error) {
    console.error("❌ E2E Tests failed:", error)
    process.exit(1)
  }
}

// Export for use with test runners
module.exports = { runTests }

// Run tests if called directly
if (require.main === module) {
  runTests()
}
