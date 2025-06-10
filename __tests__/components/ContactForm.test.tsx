import { render, screen, waitFor } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import ContactForm from "../../src/components/contact-form"

describe("ContactForm Component", () => {
  it("renders all form fields", () => {
    render(<ContactForm />)

    expect(screen.getByLabelText(/nome completo/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/email/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/telefone/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/serviço pretendido/i)).toBeInTheDocument()
    expect(screen.getByLabelText(/mensagem/i)).toBeInTheDocument()
  })

  it("shows validation for required fields", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const submitButton = screen.getByRole("button", { name: /enviar mensagem/i })
    await user.click(submitButton)

    // HTML5 validation should prevent submission
    const nameInput = screen.getByLabelText(/nome completo/i)
    expect(nameInput).toBeInvalid()
  })

  it("updates form fields when user types", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    const nameInput = screen.getByLabelText(/nome completo/i)
    await user.type(nameInput, "João Silva")

    expect(nameInput).toHaveValue("João Silva")
  })

  it("shows loading state when submitting", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Fill required fields
    await user.type(screen.getByLabelText(/nome completo/i), "João Silva")
    await user.type(screen.getByLabelText(/email/i), "joao@example.com")
    await user.selectOptions(screen.getByLabelText(/serviço pretendido/i), "corte")
    await user.type(screen.getByLabelText(/mensagem/i), "Test message")

    const submitButton = screen.getByRole("button", { name: /enviar mensagem/i })
    await user.click(submitButton)

    expect(screen.getByText(/a enviar/i)).toBeInTheDocument()
  })

  it("shows success message after submission", async () => {
    const user = userEvent.setup()
    render(<ContactForm />)

    // Fill required fields
    await user.type(screen.getByLabelText(/nome completo/i), "João Silva")
    await user.type(screen.getByLabelText(/email/i), "joao@example.com")
    await user.selectOptions(screen.getByLabelText(/serviço pretendido/i), "corte")
    await user.type(screen.getByLabelText(/mensagem/i), "Test message")

    const submitButton = screen.getByRole("button", { name: /enviar mensagem/i })
    await user.click(submitButton)

    await waitFor(
      () => {
        expect(screen.getByText(/mensagem enviada com sucesso/i)).toBeInTheDocument()
      },
      { timeout: 2000 },
    )
  })
})
