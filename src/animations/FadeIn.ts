export const fadeInCardAnimation = {
    initial: {      
      opacity:0,
      scale:0.8
    },
    animate: (index:number) => ({
      opacity:1,
      scale:1,
      transition: {
        type: 'spring',  
        delay: 0.08*index, 
      }
    })
  }