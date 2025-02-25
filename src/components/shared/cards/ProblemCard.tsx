import AButton from '@/components/ui/animated-b'
import { motion, Variants } from 'framer-motion'
import React from 'react'

const ProblemCard = ({topic,difficulty,animation,index}:{
    topic:string,
    difficulty:string,
    animation:Variants,
    index:number
}) => {
  return (
    <motion.div 
    id='shadow_for_card' 
    className='bg-zinc-900 hover:bg-zinc-800 rounded-lg py-5 px-8 border border-slate-800 text-lg cursor-pointer relative'
    variants={animation}
    initial="initial"
    whileInView="animate"
    viewport={{once:true}}
    custom={index}
    >
      <div className='absolute top-0 left-0 px-2 bg-gradient-to-r text-xs rounded-b-lg rounded-tl-lg  from-indigo-500 to-purple-500'>{difficulty}</div>
      <div className='flex justify-between items-center'>
        {topic}
        <AButton className=''>Solve</AButton>
      </div>
    </motion.div>
  )
}

export default ProblemCard