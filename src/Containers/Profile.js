import React , {useState} from 'react'
import { motion , AnimatePresence  } from 'framer-motion';
import { Fragment } from 'react'
import { NavLink } from 'react-router-dom'
import'./css/Profile.css'
import AnimatePage from './AnimatePage';


const  Profile=() =>{
  const[chose ,setchose]=useState('fr')
  const[langue,setlangue]=useState({
    'fr':{'lnamet':'Nom','lname':'Ben mayouf','fnamet':'Prenom','fname':'Slimane',
    'adresset':'Adresse','adresse':'Mansourah Bordj Bou Arreridj','countryt':'Pay','country':'Algerie'},
    
    
    'en':{'lnamet':'Last Name','lname':'Benmayouf','fnamet':'First name','fname':'Slimane' ,
    'adresset':'Adress','adresse':'Mansourah Bordj Bou Arreridj','countryt':'Country','country':'Algeria'
  }
  })
  return (
 <AnimatePage>
    <div className='container'  >
        <div className='container-right'>
           <h1>right</h1>
          
              <div>
                  <div>
                    <h2>{langue[chose]['lnamet']} :  {langue[chose]['lname']}</h2> 
                    <h2>{langue[chose]['fnamet']} :  {langue[chose]['fname']}</h2> 
                    <h2>{langue[chose]['countryt']} :  {langue[chose]['country']}</h2> 
                    <h2>{langue[chose]['adresset']} :  {langue[chose]['adresse']}</h2> 
                   
                  </div>
              
                
              </div>
   

        </div>
        <div className='container-left'>

        
        <h1>left</h1>
      
        </div>


    </div>
    </AnimatePage>

  )
}

export default Profile