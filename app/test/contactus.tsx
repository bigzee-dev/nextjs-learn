"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import Form from "./form"

const labelStyles = "block text-sm leading-6 text-gray-600"
const inputStyles = "mt-1.5 text-gray-900"

export default function ContactUsForm({ 
  backgroundImage = "/laptop.jpg?height=3500&width=7538",
  overlayOpacity = 0.7
}: {
  backgroundImage?: string
  overlayOpacity?: number
}) {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prevState => ({ ...prevState, [name]: value }))
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // Handle form submission logic here
    console.log('Form submitted:', formData)
  }

  return (
    <div className="relative w-full max-w-[1800px] mx-auto">
      <style jsx global>{`
        input:-webkit-autofill,
        input:-webkit-autofill:hover,
        input:-webkit-autofill:focus,
        input:-webkit-autofill:active {
          -webkit-background-clip: text;
          -webkit-text-fill-color: #000;
          transition: background-color 5000s ease-in-out 0s;
          box-shadow: inset 0 0 20px 20px rgba(229, 229, 229, 0.5);
        }
      `}</style>
      <div className="grid grid-cols-1">
        {/* Background Image */}
        <div 
          className="col-start-1 row-start-1 bg-cover bg-center w-full h-full"
          style={{ backgroundImage: `url(${backgroundImage})` }}
        />
        {/* Overlay */}
        <div 
          className="col-start-1 row-start-1 w-full h-full bg-gray-900 bg-opacity-70"
          // style={{ opacity: overlayOpacity }}
        >
          {/* Content */}
          <div className="w-full h-full flex items-center justify-center py-4 md:py-8 min-h-[300px]">
            <div className=" w-full max-w-xl">
              <h2 className="text-blue-600 text-3xl text-center font-bold mb-6">Contact Us</h2>
              <form onSubmit={handleSubmit} className="grid grid-cols-1 gap-x-8 gap-y-4 md:grid-cols-2 bg-neutral-100 rounded-lg shadow-xl p-6">
                <div>
                  <Label htmlFor="name" className={labelStyles}>Name</Label>
                  <Input
                    id="name"
                    name="name"
                    type="text"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="last-name" className={labelStyles}>
                    Last Name
                  </label>
                  <Input
                      id="last-name"
                      name="last-name"
                      type="text"
                      required
                      autoComplete="family-name"
                      className={inputStyles}
                  />
                </div>
                <div>
                  <Label htmlFor="email" className={labelStyles}>
                    Email
                  </Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className={inputStyles}
                  />
                </div>
                <div>
                  <label htmlFor="company" className={labelStyles}>
                    Company
                  </label>                  
                    <Input
                      id="company"
                      name="company"
                      type="text"
                      autoComplete="organization"
                      className={inputStyles}
                    />
              </div>
                <div className="md:col-span-2">
                  <Label htmlFor="message" className={labelStyles}>Message</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    className="min-h-[100px] mt-2 border border-neutral-400 text-gray-900"
                  />
                </div>
                <div className="md:col-span-2 mt-2">
                  <Button type="submit" className="w-full text-neutral-100 bg-indigo-600">Send Message</Button>
                </div>  
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}