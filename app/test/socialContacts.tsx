'use client'

import { useState, useEffect } from 'react'
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription } from "@/components/ui/dialog"
import { MessageCircle, Facebook } from 'lucide-react'

export default function SocialLinks() {
  const [isMobile, setIsMobile] = useState(false)
  const [isDialogOpen, setIsDialogOpen] = useState(false)
  const phoneNumber = '26777810825' // Replace with your actual WhatsApp number
  const whatsappUrl = `https://wa.me/${phoneNumber}`
  const facebookUrl = 'https://www.facebook.com/yourpage' // Replace with your actual Facebook page URL

  useEffect(() => {
    const checkMobile = () => {
      const ua = navigator.userAgent
      setIsMobile(/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(ua))
    }

    checkMobile()
    window.addEventListener('resize', checkMobile)

    return () => {
      window.removeEventListener('resize', checkMobile)
    }
  }, [])

  const handleWhatsAppClick = () => {
    if (isMobile) {
      window.open(whatsappUrl, '_blank')
    } else {
      setIsDialogOpen(true)
    }
  }

  const handleFacebookClick = () => {
    window.open(facebookUrl, '_blank')
  }

  return (
    <div className="flex flex-col items-start justify-center space-y-4">
      <div className="flex flex-col md:flex-row items-center space-y-4">
        <Button 
          onClick={handleWhatsAppClick}
          className=" text-white font-bold py-2 px-5 bg-gray-900 bg-opacity-70 rounded-xl inline-flex items-center border border-neutral-500"
        >
          <MessageCircle className="bg-green-500 hover:bg-green-600 mr-2" />
          Contact us on WhatsApp
        </Button>

        <Button 
          onClick={handleFacebookClick}
          className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded inline-flex items-center"
        >
          <Facebook className="mr-2" />
          Visit our Facebook Page
        </Button>
      </div>

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Contact us on WhatsApp</DialogTitle>
            <DialogDescription>
              Our WhatsApp number is: {phoneNumber}
              <br />
              Please use your mobile device to get in touch with us on WhatsApp.
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  )
}