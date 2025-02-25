export const NavLink = {
    initial: {      
      opacity:0,
      x:-10
    },
    animate: (index:number) => ({
      opacity:1,
      x:0,
      transition: {
        type: 'spring',  
        delay: 0.08*index, 
      }
    })
  }