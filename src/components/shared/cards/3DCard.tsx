"use client";

import React from "react";
import { CardBody, CardContainer, CardItem } from "../../ui/3d-card";
import { Button } from "@/components/ui/button";
import { ChartNoAxesCombined } from "lucide-react";
import { CarouselOrientation } from "../carousels/Carousel";

export function ThreeDCardDemo({
  title,
  isSecondCard,
  discription,
}: {
  title: string;
  isSecondCard: boolean;
  discription: string;
}) {
  if (isSecondCard) {
    return <SecondCard title={title} discription={discription} />;
  }
  return <FirstCard title={title} discription={discription} />;
}

function FirstCard({ title, discription }: { title: string; discription: string }) {
  return (
    <CardContainer className="inter-var relative rounded-2xl w-full transition-all md:h-screen h-auto hover:bg-green-600/10 hover:shadow-[0_0_20px_10px_rgba(34,197,94,0.5)]">
      <div className="h-20 z-10 font-semibold text-xl w-20 absolute -top-10 -right-1 md:-left-10 flex justify-center items-center rounded-full border text-green-500 border-green-400 bg-green-500/25">
        <ChartNoAxesCombined size={28} />
      </div>
      <CardBody className="bg-transparent w-full relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border-2">
        <CardItem className="w-full">
          <div className="flex justify-center items-center md:flex-row flex-col-reverse h-auto w-full">
            <div className="md:w-1/2 w-full md:mt-0 mt-8">
              <CarouselOrientation isSecondCard={false} />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="font-normal text-lg mb-4 text-green-400">Find. Compete. Learn</p>
              <p className="font-semibold text-[2.2rem] leading-[2.2rem] sm:text-[3rem] sm:leading-[3rem] mb-3">
                {title}
              </p>
              <p className="text-slate-300">{discription}</p>
              <Button className="mt-8 sm:mt-14 rounded-3xl py-6 text-md px-6 bg-gradient-to-r from-green-400 to-green-600">
                Let's Code
              </Button>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}

function SecondCard({ title, discription }: { title: string; discription: string }) {
  return (
    <CardContainer className="inter-var relative rounded-2xl w-full transition-all md:h-screen h-auto hover:bg-red-600/10 hover:shadow-[0_0_20px_10px_rgba(239,68,68,0.5)]">
      <div className="h-20 z-10 font-semibold text-xl w-20 absolute -top-10 -right-1 md:-left-10 flex justify-center items-center rounded-full border text-red-500 border-red-400 bg-red-500/25">
        <ChartNoAxesCombined size={28} />
      </div>
      <CardBody className="bg-transparent w-full relative group/card dark:hover:shadow-2xl dark:hover:shadow-emerald-500/[0.1] dark:bg-black dark:border-white/[0.2] border-black/[0.1] h-auto rounded-xl p-6 border-2">
        <CardItem className="w-full">
          <div className="flex justify-center items-center md:flex-row-reverse sm:px-10   flex-col-reverse h-auto w-full">
            <div className="md:w-1/2 w-full md:mt-0 mt-8">
              <CarouselOrientation isSecondCard={true} />
            </div>
            <div className="md:w-1/2 w-full">
              <p className="font-normal text-lg mb-4 text-red-400">Find. Compete. Learn</p>
              <p className="font-semibold text-[2.2rem] leading-[2.2rem] sm:text-[3rem] sm:leading-[3rem] mb-3">
                {title}
              </p>
              <p className="text-slate-300">{discription}</p>
              <Button className="mt-8 sm:mt-14 rounded-3xl py-6 text-md px-6 bg-gradient-to-r from-red-400 to-red-600">
                Let's Code
              </Button>
            </div>
          </div>
        </CardItem>
      </CardBody>
    </CardContainer>
  );
}
