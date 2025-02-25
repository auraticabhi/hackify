export const EditorAnimation = {
    initial: {      
      opacity:0,
      scale:0.8
    },
    animate: () => ({
      opacity:1,
      scale:1,
      transition: {
        type: 'spring',  
        delay: 0, 
      }
    })
  }