import { useAnimation ,motion} from 'framer-motion'
import React, { useEffect } from 'react'
interface NavarToggleBtnProps{
    menuOpen:boolean,
    setMenuOpen:(_:boolean)=>void
}
const NavarToggleBtn:React.FC<NavarToggleBtnProps> = ({menuOpen,setMenuOpen}) => {
    const path1Controls = useAnimation()
    const path2Controls = useAnimation()

    useEffect(()=>{
        if(menuOpen){
            path1Controls.start(pathVariants.open)
            path2Controls.start(path2Variants.open)
        }else{
            path1Controls.start(pathVariants.closed)
            path2Controls.start(path2Variants.closed)
        }
    },[menuOpen])
    const pathVariants={
        open:{d:"M3.06061 2.99999L21.0606 21"},
        closed:{d:"M0 8.5L24 8.5"}
    }
    const path2Variants={
        open:{d:"M3.00006 21.0607L21 3.06064"},
        closed:{d:"M0 15.5L24 15.5"}
    }

  return (
    <div onClick={()=>setMenuOpen(!menuOpen)}
    className='relative lg:hidden justify-self-center flex flex-col gap-2 cursor-pointer stroke-white stroke-2 z-50'
    >
        <svg width="24" height="24" viewBox='0 0 24 24'>
            <motion.path {...pathVariants.closed} animate={path1Controls} transition={{duration:0.2}}/>
            <motion.path {...path2Variants.closed} animate={path2Controls} transition={{duration:0.2}}/>
        </svg>
        
    </div>
  )
}

export default NavarToggleBtn