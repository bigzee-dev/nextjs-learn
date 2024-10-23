"use client"

import Image from 'next/image'
import { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {

  const [api, setApi] = useState<any>()
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!api) {
      return
    }

    setCurrent(api.selectedScrollSnap())

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  return (
    <div className="w-full mt-5">
      <Carousel
        setApi={setApi}
        opts={{
          align: "start",
        }}
        className="w-full lg:max-w-[60rem] md:max-w-[40rem] mx-auto "
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="flex items-center justify-center md:basis-1/2 lg:basis-1/3">
              <div className="">
                <Card className=" h-[460px] max-w-[304px]">
                  <CardContent className="relative flex items-center justify-center w-full h-full">
                    <Image
                      src="/butcher-lady.jpg"
                      alt="image"
                      width={684}
                      height={1000}
                      className="w-full h-full object-cover rounded-xl"
                    />
                    <div className="absolute flex flex-col top-0 right-0 w-full h-full rounded-xl bg-gradient-to-b from-transparent via-transparent to-gray-800 bg-[length:100%_100%] bg-[color-stop(75%)]">
                      <div className="w-full h-36 mt-auto px-2">
                        <h1 className="text-4xl font-bold bg-gradient-to-r from-yellow-500 via-red-500 to-pink-500 bg-clip-text text-transparent">Butchers</h1>
                      </div>
                    </div>

                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
      <div className="flex justify-center gap-2 mt-5">
        {Array.from({ length: 5 - 2 }).map((_, index) => (
          <button
            key={index}
            className={cn(
              "w-2 h-2 rounded-full transition-colors duration-500",
              current === index ? "bg-gray-600" : "bg-gray-300"
            )}
            onClick={() => api?.scrollTo(index)}
          />
        ))}
      </div>
    </div>  
  )
}
