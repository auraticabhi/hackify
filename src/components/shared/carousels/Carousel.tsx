import * as React from "react"
import Autoplay from "embla-carousel-autoplay"

import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "@/components/ui/carousel"
import { BookHeadphones, NotepadText, Zap } from "lucide-react"
import clsx from "clsx"

export function CarouselOrientation({isSecondCard}:{
  isSecondCard:boolean
}) {
  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )
  const data = [
    {
      icon:<NotepadText/>,
      title:"Comprehensive Resources",
      discription:"Access a vast library of coding problems, guides, and presentations to support your learning and coding preparation."
    },
    {
      icon:<Zap/>,
      title:"Free Coding Problems",
      discription:"Get coding materials instantly with one click. No sign-ups, no delays—just fast and free!"
    },
    {
      icon:<BookHeadphones />,
      title:"Student-Friendly & Community-Driven",
      discription:"Built by students, for students. High-quality, curated resources to help you study smarter and succeed."
    },
    {
      icon:<NotepadText/>,
      title:"Comprehensive Resources",
      discription:"Access a vast library of notes, guides, and presentations to support your learning and oa preparation."
    },
    {
      icon:<Zap/>,
      title:"Free Coding Problems",
      discription:"Get coding materials instantly with one click. No sign-ups, no delays—just fast and free!"
    },
    {
      icon:<BookHeadphones />,
      title:"Student-Friendly & Community-Driven",
      discription:"Built by students, for students. High-quality, curated resources to help you study smarter and succeed."
    },
  ]
  return (
    <Carousel
    plugins={[plugin.current]}
      opts={{
        align: "start",
      }}
      orientation="vertical"
      className="w-full px-0 sm:px-10 h-full"
    >
      <CarouselContent className="-mt-1 h-[33rem] lg:h-[25rem] sm:h-[25rem] xs:h-[30rem] md:h-[30rem]">
        {data.map((obj, index) => (
          <CarouselItem key={index} className="pt-1 basis-1 md:basis-1/2">
            <div className="p-1">
               <div className={clsx("h-16 w-16  border-zinc-500 rounded-full border-2 flex justify-center items-center",{
                "text-red-500":isSecondCard,
                "text-green-500":!isSecondCard,
               })}>
                  {obj.icon}
               </div>
               <div className="text-xl font-semibold my-2">{obj.title}</div>
                <p className="text-slate-400 xs:my-5 sm:my-1 my-8 border-b pb-6 border-zinc-500/25 text-md">{obj.discription}</p>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  )
}
