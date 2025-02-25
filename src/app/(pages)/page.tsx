"use client"
import { motion } from "framer-motion";
import { WavyBackground } from "@/components/ui/wavy-background";
import AnimatedBtn from "@/components/ui/animatedBtn";
import { ThreeDCardDemo } from "@/components/shared/cards/3DCard";
import HappyStudent from "@/components/shared/HappyStudent";
import { HeroHighlight, Highlight } from "@/components/ui/Hero";


export default function Home() {
  const hackathonResources = [
    "Time Management",
    "Workshops",
    "Mentorships",
    "Networking",
    "Prizes & Rewards",
    "24/7 Innovation",
    "Problem Solving",
    "Tech Challenges",
  ];

  const profiles=[{
    name: "Telegram",
    img: "https://i.ibb.co/cShJ0X7v/image-3.webp", 
    link: "",
  }, {
    name: "LinkedIn",
    img: "https://i.ibb.co/bj9HCdB4/image-1.webp", 
    link: "",
  },
  {
    name: "Discord",
    img: "https://i.ibb.co/cShJ0X7v/image-3.webp",
    link: "",
  },{
    name: "Instagram",
    img: "https://i.ibb.co/XrvfFxx1/pngwing-com-2.png", 
    link: "",
  },{
    name: "Youtube",
    img: "https://i.ibb.co/wZR3Z418/image.webp",
    link: ""
  }]

  return (
    <>
      <HeroHighlight className="">
        <motion.h1
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={{
            opacity: 1,
            y: [20, -5, 0],
          }}
          transition={{
            duration: 0.5,
            ease: [0.4, 0.0, 0.2, 1],
          }}
          className="text-2xl px-4 md:text-4xl lg:text-5xl font-bold text-neutral-200 dark:text-white max-w-4xl leading-relaxed lg:leading-snug text-center mx-auto "
        >
          <div className="flex flex-col items-center justify-center text-center">
            <div className="mx-auto mb-1 xs:mb-2 sm:mb-6 mt-16 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border px-4 py-2 xs:px-7 xs:py-2 shadow-md backdrop-blur transition-all">
              <p className="text-xs xs:text-sm font-semibold text-white">
                Unleash the Ultimate Hackathon Experience! 🚀
              </p>
            </div>
            <h1 className="text-4xl xs:text-5xl sm:text-6xl md:text-6xl lg:text-7xl max-w-4xl font-bold mt-4 leading-[3rem] xs:leading-[3.5rem] sm:leading-[3.8rem]">
              <span>
              Code. Innovate.
              </span>
              <Highlight className="">Win.</Highlight>
              <span> Repeat. </span>
            </h1>

            <p className="xs:mt-5 max-w-prose text-zinc-400 text-[18px] px-3 sm:text-lg leading-[21px]">
              Unleash your creativity, compete with the best minds, and show
              your coding skills in an electrifying 24-hour coding marathon.
              Are you ready to take on the challenge? 🏆🔥
            </p>
          </div>
         
        </motion.h1>
        <div className="px-5 xs:px-10 sm:px-20 md:px-40 py-16">
          <div className="flex text-center items-center justify-center text-3xl font-bold mb-8">
            Why Join Our Hackathon?
          </div>
          <div className="items-center justify-center gap-5 flex flex-wrap">
            {hackathonResources.map((resource, index) => {
              return (
             
                  <AnimatedBtn className="w-full sm:w-48" key={index}>
                  {resource}
                </AnimatedBtn>
  
              );
            })}
          </div>
        </div>
      </HeroHighlight>

      {/* body */}
      <div className="px-0 xs:px-5 sm:px-10 md:px-16 lg:px-28 py-10 sm:py-20">
      <ThreeDCardDemo isSecondCard={false} title="Your Ultimate Learning Companion!" discription="Whether you're a beginner or an expert, Hackify provides the best experience to help you:"/>
      <ThreeDCardDemo isSecondCard={true} title="Win Big & Network!" discription="Compete for amazing prizes, connect with industry leaders, and gain real-world experience!"/>
      </div>
      <HappyStudent/>
      <div className="px-5 md:px-10 lg:px-20 relative overflow-hidden">
        <WavyBackground className="mx-auto">
          <p className="text-[2rem] leading-[2.2rem] xs:text-[2.3rem] xs:leading-[2.5rem] md:text-5xl lg:text-7xl text-white font-bold inter-var text-center">
          Welcome to the Community!
          </p>
          <p className="text-base leading-[1.2rem] md:text-lg md:leading-normal mt-4 text-white font-normal inter-var text-center">
          Be part of an amazing developer community. Connect, collaborate, and
            create the next big thing!
          </p>
          <div className="flex items-center justify-center gap-5 xs:gap-10  md:gap-16 lg:gap-24 flex-wrap mt-8">
            {
              profiles.map((profile, index)=>{
                return <div key={index} className="flex flex-col items-center justify-center">
                  <img src={profile.img} alt="img" className="w-14 sm:w-20" ></img>
                  <p>{profile.name}</p>
                </div>
              })
            }
          </div>
        </WavyBackground>
      </div>
    </>
  );
}
