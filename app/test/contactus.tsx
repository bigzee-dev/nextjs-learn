"use client"

import { useState } from 'react'
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import AltForm from "./altForm"
import SocialContacts from './socialContacts'

const labelStyles = "block text-sm leading-6 text-gray-700 font-medium"
const inputStyles = "mt-1 text-gray-900"

export default function ContactUsForm({ 
  backgroundImage = "/purple.jpg?height=7500&width=2500",
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
      
      
      <div className="flex flex-col items-center w-full py-10">
        <h2 className="text-neutral-100 text-4xl font-bold mb-6 bg-blue-600 max-w-fit transform -rotate-2">Contact Us
        </h2>
        <h2 className="text-base font-semibold leading-7 text-gray-900">Personal Information</h2>
          
          <p className="mt-1 text-sm leading-6 text-gray-600">Get in touch with our team and find out what solution best fits for you.</p>
      </div>
      
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
          <div className="w-full h-full flex items-center justify-center py-10 min-h-[300px]">
            <div className="grid grid-cols-1 justify-items-center w-full max-w-4xl mx-auto">
              
              
              {/*<form onSubmit={handleSubmit} className="flex-2 grid grid-cols-1 gap-x-4 gap-y-4 md:grid-cols-2 bg-neutral-50 rounded-lg shadow-xl p-6">
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
                    className="min-h-[100px] mt-1 border border-neutral-400 text-gray-900"
                  />
                </div>
                <div className="md:col-span-2 mt-2">
                  <Button type="submit" className="w-full text-neutral-100 bg-indigo-600">Send Message</Button>
                </div>  
              </form>*/}
              <AltForm className="col-span-4" />
              <SocialContacts />
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}