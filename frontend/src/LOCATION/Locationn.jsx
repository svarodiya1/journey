import React from 'react'
import Navbar from '../componenets/Navbar'
import ALLlocation from '../componenets/ALLlocation'
import Footer from '../componenets/Footer'


function location() {
  return (
   <>
   <div>
    <Navbar/>
    <div className='min-h-screen'>
    <ALLlocation/>
    </div>
    <Footer/>
   </div>
   </>
  )
}

export default location
