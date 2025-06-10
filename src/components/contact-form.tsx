"use client"

import type React from "react"

import { useState } from "react"
import { Send } from "lucide-react"

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  })

  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState("")

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError("")

    try {
      // Simulação de envio de formulário
      await new Promise((resolve) => setTimeout(resolve, 1500))

      console.log("Formulário enviado:", formData)
      setSubmitSuccess(true)
      setFormData({
        name: "",
        email: "",
        phone: "",
        service: "",
        message: "",
      })

      // Reset success message after 5 seconds
      setTimeout(() => {
        setSubmitSuccess(false)
      }, 5000)
    } catch (error) {
      console.error("Erro ao enviar formulário:", error)
      setSubmitError("Ocorreu um erro ao enviar o formulário. Por favor, tente novamente.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="name" className="block mb-2 text-[#D1D1D1]">
            Nome Completo <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#232323] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFAF5E] text-[#D1D1D1]"
          />
        </div>
        <div>
          <label htmlFor="email" className="block mb-2 text-[#D1D1D1]">
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#232323] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFAF5E] text-[#D1D1D1]"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label htmlFor="phone" className="block mb-2 text-[#D1D1D1]">
            Telefone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-4 py-2 bg-[#232323] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFAF5E] text-[#D1D1D1]"
          />
        </div>
        <div>
          <label htmlFor="service" className="block mb-2 text-[#D1D1D1]">
            Serviço Pretendido <span className="text-red-500">*</span>
          </label>
          <select
            id="service"
            name="service"
            value={formData.service}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 bg-[#232323] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFAF5E] text-[#D1D1D1]"
          >
            <option value="">Selecione um serviço</option>
            <option value="corte">Corte de Cabelo</option>
            <option value="barba">Barba</option>
            <option value="combo">Combo (Corte + Barba)</option>
            <option value="tratamento">Tratamento Capilar</option>
            <option value="outro">Outro</option>
          </select>
        </div>
      </div>

      <div>
        <label htmlFor="message" className="block mb-2 text-[#D1D1D1]">
          Mensagem <span className="text-red-500">*</span>
        </label>
        <textarea
          id="message"
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="w-full px-4 py-2 bg-[#232323] border border-[#333] rounded-md focus:outline-none focus:ring-2 focus:ring-[#CFAF5E] text-[#D1D1D1] resize-none"
        ></textarea>
      </div>

      {submitError && (
        <div className="p-4 bg-red-900/50 border border-red-500 rounded-md text-white">{submitError}</div>
      )}

      {submitSuccess && (
        <div className="p-4 bg-green-900/50 border border-green-500 rounded-md text-white">
          Mensagem enviada com sucesso! Entraremos em contacto brevemente.
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting}
        className="btn-primary flex items-center justify-center gap-2 w-full md:w-auto"
      >
        {isSubmitting ? (
          <>
            <span className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-[#121212]"></span>A
            enviar...
          </>
        ) : (
          <>
            Enviar Mensagem
            <Send size={16} />
          </>
        )}
      </button>
    </form>
  )
}

export default ContactForm
