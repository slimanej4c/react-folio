
import React, { Component , Fragment } from 'react'
import Navbar from '../Components/Navbar'
import './Layout.css'
const Layout =({children}) =>{

    return (
  
  <Fragment>
   <div className='container'>
   
     <Navbar/>

   <div className='move-part'>
   {children}

   </div>
 
     </div>
      </Fragment>
     

   
    )
  
}

export default Layout


