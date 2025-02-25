import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'
import { ColourfulText } from '../ui/colorfulText'

const HappyStudent = () => {
  return (
    <div className='hidden lg:flex w-full my-8 px-24 justify-center items-start gap-5'>
        <div className=''>
            <Image src={"https://img.freepik.com/premium-photo/group-students-with-books-isolated-background_488220-7421.jpg?w=740"} width={800} height={800} alt='happy student' className='rounded-lg shadow-[0_0_20px_10px_rgba(56,187,92,0.5)]'/>
        </div>
        <div className='w-1/2 px-5 py-10'>
            <h1 className='text-[3.5rem] leading-[3.6rem] font-semibold'>
            The 90% of our students <ColourfulText text='improve'/> their coding results.
            
            </h1>
            <Button
                className= "mt-10 rounded-3xl py-6 text-md px-6 bg-gradient-to-r from-purple-400 to-purple-600"
              >
                Let&apos;s Code
              </Button>
        </div>
    </div>
  )
}

export default HappyStudent