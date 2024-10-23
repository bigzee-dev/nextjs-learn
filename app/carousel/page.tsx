import Image from 'next/image'

import { Card, CardContent } from "@/components/ui/card"
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel"

export default function Page() {
  return (
    <div className="w-full mt-5">
      <Carousel
        opts={{
          align: "start",
        }}
        className="w-full max-w-5xl mx-auto "
      >
        <CarouselContent className="">
          {Array.from({ length: 5 }).map((_, index) => (
            <CarouselItem key={index} className="flex items-center justify-center md:basis-1/2 lg:basis-1/3 border border-green-600">
              <div className="">
                <Card className=" h-[450px] max-w-[304px]">
                  <CardContent className="flex items-center justify-center w-full h-full">
                    <Image
                      src="/butcher-lady.jpg"
                      alt="image"
                      width={684}
                      height={1000}
                      className="w-full h-full object-cover rounded-xl"
                    />
                  </CardContent>
                </Card>
              </div>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious />
        <CarouselNext />
      </Carousel>
    </div>  
  )
}
