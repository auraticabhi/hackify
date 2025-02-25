import clsx from 'clsx'
import React, { ReactNode } from 'react'

const AnimatedBtn = ({className,children}:{
  className?:string,
  children:ReactNode
}) => {
  return (
    <div className={clsx("flex flex-row items-center justify-center",className)}>
    <button className="animate-border w-full inline-block rounded-md bg-white bg-gradient-to-r from-red-500 via-purple-500 to-blue-500 bg-[length:400%_400%] p-[2px]">
      <span className="block rounded-md bg-zinc-900 w-full px-5 py-3 font-bold text-white">{children} </span>
    </button>
  </div>
  )
}

export default AnimatedBtn