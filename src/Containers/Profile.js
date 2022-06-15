import React , {useState} from 'react'
import { motion   } from 'framer-motion';
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import'./css/Profile.css'
import AnimatePage from './AnimatePage';
import Retate from './animate/Retate';


const  Profile=() =>{
  const[chose ,setchose]=useState('fr')
  const title1='BENMAYOUF SLIMANE'
  const[langue,setlangue]=useState({
    'fr':{'lnamet':'Nom','lname':'Ben mayouf','fnamet':'Prenom','fname':'Slimane',
    'adresset':'Adresse','adresse':'Mansourah Bordj Bou Arreridj','countryt':'Pay','country':'Algerie'},
    
    
    'en':{'lnamet':'Last Name','lname':'Benmayouf','fnamet':'First name','fname':'Slimane' ,
    'adresset':'Adress','adresse':'Mansourah Bordj Bou Arreridj','countryt':'Country','country':'Algeria'
  }
  })

  const styles = {
    background: "blue",
    borderRadius: 30,
    width: 150,
    height: 150,
    margin: "auto"
  };
  
   const Rota = () => (

    <motion.div
      style={styles}
      animate={{ rotate: 360 }}
      transition={{ duration: 2 }}
    />
  );
  return (
   
 <AnimatePage>
    <div className='container'  >


        <div className='container-right'>
        
        
          <motion.div className='line1'  animate={{height: 1000 }}
      transition={{ duration: 2 }}> </motion.div>
              <div className='right-div'>

              <div className='lines'>
                
                  <div className="line">
              
                  </div>
                  <h2>BENMAYOUF SLIMANE</h2> 
              </div>
              <div className='lines'>
                
                  <div className="line">
              
                  </div>
                  <h2>KENZZZZOOO</h2> 
              </div>
              
              <div className='lines'>
                  <div className="line"></div>
                  <h2>Full Stack Déveloper</h2> 
              </div>

              <div className='lines'>
                  <div className="line"></div>
                  <h2>Python React/ReactNative</h2> 
              </div>
                    
                 
                
              </div>
              <motion.div className='line2'  animate={{height: 1000 }} transition={{ duration: 2 }}> </motion.div>
   

        </div>
        <div className='container-left-big'>
           
            <Retate className='retate-left' >
       
       <div className='container-left'>
      
     
         <div className='left-div'>
        

         </div>
      
        
       </div>
       </Retate>
   
      
        </div >
       
       
     

    </div>
    </AnimatePage>

  )
}

export default Profile