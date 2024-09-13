import React from 'react'
import Navbar from '../componenets/Navbar'
import About from '../componenets/About'
import Footer from '../componenets/Footer'

const Aboutt = () => {
  return (
    <div>
      <Navbar/>
      <div className='min-h-screen'>
        <About/>
      </div>
      <Footer/>
    </div>
  )
}

export default Aboutt
