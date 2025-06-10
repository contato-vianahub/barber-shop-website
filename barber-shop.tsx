"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { Clock, MapPin, Phone, Mail, Star, Scissors, Users, Award, Calendar, Menu, X } from "lucide-react"

export default function BarberShop() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [bookingForm, setBookingForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  })

  const services = [
    {
      name: "Classic Cut",
      description: "Traditional scissor cut with styling",
      price: "$35",
      duration: "45 min",
    },
    {
      name: "Fade Cut",
      description: "Modern fade with precision detailing",
      price: "$40",
      duration: "50 min",
    },
    {
      name: "Beard Trim",
      description: "Professional beard shaping and styling",
      price: "$25",
      duration: "30 min",
    },
    {
      name: "Hot Towel Shave",
      description: "Traditional straight razor shave experience",
      price: "$45",
      duration: "60 min",
    },
    {
      name: "Hair Wash & Style",
      description: "Complete wash, condition, and styling",
      price: "$30",
      duration: "40 min",
    },
    {
      name: "Full Service",
      description: "Cut, wash, beard trim, and hot towel",
      price: "$75",
      duration: "90 min",
    },
  ]

  const testimonials = [
    {
      name: "Mike Johnson",
      rating: 5,
      comment: "Best barber shop in town! Always leave looking sharp and feeling confident.",
    },
    {
      name: "David Smith",
      rating: 5,
      comment: "Professional service, great atmosphere, and attention to detail is unmatched.",
    },
    {
      name: "Alex Rodriguez",
      rating: 5,
      comment: "Been coming here for 3 years. Consistent quality and friendly staff every time.",
    },
  ]

  const handleBookingSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle booking submission
    console.log("Booking submitted:", bookingForm)
    alert("Booking request submitted! We'll contact you to confirm your appointment.")
    setBookingForm({
      name: "",
      email: "",
      phone: "",
      service: "",
      date: "",
      time: "",
      message: "",
    })
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setBookingForm({
      ...bookingForm,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Navigation */}
      <nav className="bg-black/50 backdrop-blur-sm fixed w-full z-50 border-b border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold">Elite Cuts</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="hover:text-amber-500 transition-colors">
                Home
              </a>
              <a href="#services" className="hover:text-amber-500 transition-colors">
                Services
              </a>
              <a href="#about" className="hover:text-amber-500 transition-colors">
                About
              </a>
              <a href="#gallery" className="hover:text-amber-500 transition-colors">
                Gallery
              </a>
              <a href="#booking" className="hover:text-amber-500 transition-colors">
                Book Now
              </a>
              <a href="#contact" className="hover:text-amber-500 transition-colors">
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <Button variant="ghost" size="icon" onClick={() => setIsMenuOpen(!isMenuOpen)}>
                {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
              </Button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden bg-black/90 backdrop-blur-sm">
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="#home" className="block px-3 py-2 hover:text-amber-500 transition-colors">
                  Home
                </a>
                <a href="#services" className="block px-3 py-2 hover:text-amber-500 transition-colors">
                  Services
                </a>
                <a href="#about" className="block px-3 py-2 hover:text-amber-500 transition-colors">
                  About
                </a>
                <a href="#gallery" className="block px-3 py-2 hover:text-amber-500 transition-colors">
                  Gallery
                </a>
                <a href="#booking" className="block px-3 py-2 hover:text-amber-500 transition-colors">
                  Book Now
                </a>
                <a href="#contact" className="block px-3 py-2 hover:text-amber-500 transition-colors">
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="relative h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 via-slate-800 to-black"
      >
        <div className="absolute inset-0 bg-black/40"></div>
        <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
          <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-amber-500 to-orange-500 bg-clip-text text-transparent">
            Elite Cuts Barber Shop
          </h1>
          <p className="text-xl md:text-2xl mb-8 text-slate-300">
            Where tradition meets modern style. Experience the art of grooming.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-amber-600 hover:bg-amber-700 text-black font-semibold">
              <Calendar className="mr-2 h-5 w-5" />
              Book Appointment
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-amber-500 text-amber-500 hover:bg-amber-500 hover:text-black"
            >
              View Services
            </Button>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Services</h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto">
              Professional grooming services tailored to your style and preferences
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600 hover:border-amber-500 transition-colors">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <CardTitle className="text-white">{service.name}</CardTitle>
                    <Badge variant="secondary" className="bg-amber-600 text-black">
                      {service.price}
                    </Badge>
                  </div>
                  <CardDescription className="text-slate-300">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="flex items-center text-slate-400">
                    <Clock className="h-4 w-4 mr-2" />
                    <span>{service.duration}</span>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">About Elite Cuts</h2>
              <p className="text-lg text-slate-300 mb-6">
                With over 15 years of experience in the grooming industry, Elite Cuts has been the premier destination
                for discerning gentlemen who appreciate quality craftsmanship and attention to detail.
              </p>
              <p className="text-lg text-slate-300 mb-8">
                Our master barbers combine traditional techniques with modern styling to deliver exceptional results
                that exceed expectations. We pride ourselves on creating a welcoming atmosphere where every client feels
                valued and leaves looking their absolute best.
              </p>

              <div className="grid grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Users className="h-8 w-8 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-amber-500">5000+</div>
                  <div className="text-slate-400">Happy Clients</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Award className="h-8 w-8 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-amber-500">15+</div>
                  <div className="text-slate-400">Years Experience</div>
                </div>
                <div className="text-center">
                  <div className="bg-amber-600 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                    <Star className="h-8 w-8 text-black" />
                  </div>
                  <div className="text-2xl font-bold text-amber-500">4.9</div>
                  <div className="text-slate-400">Rating</div>
                </div>
              </div>
            </div>

            <div className="relative">
              <div className="bg-slate-700 rounded-lg p-8 h-96 flex items-center justify-center">
                <img
                  src="/placeholder.svg?height=400&width=500"
                  alt="Barber shop interior"
                  className="rounded-lg object-cover w-full h-full"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section id="gallery" className="py-20 bg-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Our Work</h2>
            <p className="text-xl text-slate-400">See the quality and precision of our craftsmanship</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {Array.from({ length: 8 }).map((_, index) => (
              <div key={index} className="relative group overflow-hidden rounded-lg">
                <img
                  src={`/placeholder.svg?height=300&width=300`}
                  alt={`Haircut example ${index + 1}`}
                  className="w-full h-64 object-cover transition-transform group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <Button
                    variant="outline"
                    size="sm"
                    className="border-white text-white hover:bg-white hover:text-black"
                  >
                    View Details
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">What Our Clients Say</h2>
            <p className="text-xl text-slate-400">Don't just take our word for it</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="bg-slate-700 border-slate-600">
                <CardContent className="p-6">
                  <div className="flex mb-4">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="h-5 w-5 text-amber-500 fill-current" />
                    ))}
                  </div>
                  <p className="text-slate-300 mb-4">"{testimonial.comment}"</p>
                  <p className="font-semibold text-amber-500">- {testimonial.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section id="booking" className="py-20 bg-slate-800">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Book Your Appointment</h2>
            <p className="text-xl text-slate-400">Schedule your visit and experience the Elite Cuts difference</p>
          </div>

          <Card className="bg-slate-700 border-slate-600">
            <CardContent className="p-8">
              <form onSubmit={handleBookingSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="name" className="text-white">
                      Full Name
                    </Label>
                    <Input
                      id="name"
                      name="name"
                      value={bookingForm.name}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-white">
                      Email
                    </Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={bookingForm.email}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="phone" className="text-white">
                      Phone Number
                    </Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={bookingForm.phone}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="service" className="text-white">
                      Service
                    </Label>
                    <select
                      id="service"
                      name="service"
                      value={bookingForm.service}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white"
                    >
                      <option value="">Select a service</option>
                      {services.map((service, index) => (
                        <option key={index} value={service.name}>
                          {service.name} - {service.price}
                        </option>
                      ))}
                    </select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <Label htmlFor="date" className="text-white">
                      Preferred Date
                    </Label>
                    <Input
                      id="date"
                      name="date"
                      type="date"
                      value={bookingForm.date}
                      onChange={handleInputChange}
                      required
                      className="bg-slate-600 border-slate-500 text-white"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time" className="text-white">
                      Preferred Time
                    </Label>
                    <select
                      id="time"
                      name="time"
                      value={bookingForm.time}
                      onChange={handleInputChange}
                      required
                      className="w-full px-3 py-2 bg-slate-600 border border-slate-500 rounded-md text-white"
                    >
                      <option value="">Select a time</option>
                      <option value="9:00 AM">9:00 AM</option>
                      <option value="10:00 AM">10:00 AM</option>
                      <option value="11:00 AM">11:00 AM</option>
                      <option value="12:00 PM">12:00 PM</option>
                      <option value="1:00 PM">1:00 PM</option>
                      <option value="2:00 PM">2:00 PM</option>
                      <option value="3:00 PM">3:00 PM</option>
                      <option value="4:00 PM">4:00 PM</option>
                      <option value="5:00 PM">5:00 PM</option>
                    </select>
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-white">
                    Additional Notes (Optional)
                  </Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={bookingForm.message}
                    onChange={handleInputChange}
                    rows={4}
                    className="bg-slate-600 border-slate-500 text-white"
                    placeholder="Any special requests or notes..."
                  />
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-amber-600 hover:bg-amber-700 text-black font-semibold"
                >
                  <Calendar className="mr-2 h-5 w-5" />
                  Book Appointment
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Visit Us Today</h2>
            <p className="text-xl text-slate-400">Find us in the heart of downtown</p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get In Touch</h3>
              <div className="space-y-6">
                <div className="flex items-center">
                  <MapPin className="h-6 w-6 text-amber-500 mr-4" />
                  <div>
                    <p className="font-semibold">Address</p>
                    <p className="text-slate-400">123 Main Street, Downtown, City 12345</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Phone className="h-6 w-6 text-amber-500 mr-4" />
                  <div>
                    <p className="font-semibold">Phone</p>
                    <p className="text-slate-400">(555) 123-4567</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Mail className="h-6 w-6 text-amber-500 mr-4" />
                  <div>
                    <p className="font-semibold">Email</p>
                    <p className="text-slate-400">info@elitecuts.com</p>
                  </div>
                </div>
                <div className="flex items-center">
                  <Clock className="h-6 w-6 text-amber-500 mr-4" />
                  <div>
                    <p className="font-semibold">Hours</p>
                    <div className="text-slate-400">
                      <p>Mon-Fri: 9:00 AM - 7:00 PM</p>
                      <p>Saturday: 8:00 AM - 6:00 PM</p>
                      <p>Sunday: 10:00 AM - 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-slate-700 rounded-lg p-8 h-96 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="h-16 w-16 text-amber-500 mx-auto mb-4" />
                <p className="text-slate-300">Interactive Map Coming Soon</p>
                <p className="text-slate-400 text-sm mt-2">Located in the heart of downtown with easy parking access</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center space-x-2 mb-4 md:mb-0">
              <Scissors className="h-8 w-8 text-amber-500" />
              <span className="text-xl font-bold">Elite Cuts</span>
            </div>
            <div className="text-slate-400 text-center md:text-right">
              <p>&copy; 2024 Elite Cuts Barber Shop. All rights reserved.</p>
              <p className="text-sm mt-1">Crafted with precision and passion</p>
            </div>
          </div>
          <Separator className="my-8 bg-slate-800" />
          <div className="text-center text-slate-500 text-sm">
            <p>Follow us on social media for the latest styles and updates</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
