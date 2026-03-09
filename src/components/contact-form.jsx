'use client'

import { useState } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Card } from '@/components/ui/card'

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    company: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    if (formData.name && formData.email && formData.subject && formData.message) {
      setIsSubmitted(true)
      setFormData({ name: '', company: '', email: '', phone: '', subject: '', message: '' })
      setTimeout(() => setIsSubmitted(false), 3000)
    }
  }

  return (
    <Card className="bg-white rounded-3xl p-8 md:p-10 shadow-md border border-gray-100 max-w-xl">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-1">Send us a message</h2>
      <p className="text-gray-600 text-sm mb-8">We would love to hear from you. Please feel free to get in touch.</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            value={formData.name}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            required
          />
          <Input
            type="text"
            name="company"
            placeholder="Company"
            value={formData.company}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
        </div>

        {/* Phone and Email Row */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            type="tel"
            name="phone"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
          />
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100"
            required
          />
        </div>

        <Input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 w-full"
          required
        />

        {/* Message */}
        <Textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          className="border border-gray-200 rounded-lg px-4 py-3 text-sm placeholder:text-gray-400 focus:border-purple-400 focus:ring-2 focus:ring-purple-100 min-h-32 resize-none w-full"
          required
        />

        {/* Submit Button */}
        <Button
          type="submit"
          className="w-full bg-linear-to-r from-purple-600 to-purple-700 hover:from-purple-700 hover:to-purple-800 text-white font-semibold py-3 rounded-lg capitalize tracking-wide text-sm"
        >
          Submit
        </Button>

        {isSubmitted && (
          <div className="bg-green-50 border border-green-200 text-green-800 text-sm py-3 px-4 rounded-lg text-center">
            Thank you! We will get back to you soon.
          </div>
        )}
      </form>
    </Card>
  )
}
