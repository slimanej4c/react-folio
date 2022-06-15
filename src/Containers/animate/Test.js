import React , {useState,useEffect} from 'react'
import { motion , AnimatePresence  } from 'framer-motion';



const  Test=({children,x}) =>{
    const styles = {
        display:'flex',
        background: "blue",
        borderRadius: 30,
        width: 150,
        height: 150,
        margin: "auto",
        alignItem:'center',
      };
   
  
  return (
 


  
 

    <motion.div
      style={styles}
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    >
 
       
            {children}
    </motion.div>
 
  )
}

export default Test