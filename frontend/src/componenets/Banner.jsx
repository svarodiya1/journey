import React from 'react'
import banner from '../../public/Banner.jpg'
import bannerr from '../../public/Phone-banner.jpg'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
   <>
   <div className='max-w-screen-2xl container mx-auto md:px-20 mt-10 px-4 flex flex-col md:flex-row'>
    
      <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
      <div className='space-y-12'>
       <h1 className='font-bold text-4xl'>
        Hello , welcome to the door of your <span className='text-blue-800'>Journey!!!</span>
        </h1>
       <p className='text-xl'>
       "Explore the world's hidden gems with our expert travel guides. Discover stunning destinations, cultural wonders, and unforgettable experiences that will inspire your next adventure. Your journey begins here!"
       </p>
      
      <label className="input input-bordered flex items-center gap-2">

  <input type="text" className="grow" placeholder="Email" />
</label>
<Link
to={"/location"}
 className="btn btn-primary text-white mt-6">Get Started </Link>
</div>
    </div>
    <div className='order-1 w-full md:w-1/2 py-4 px-4'>
    <img className='hidden md:block' src={banner} alt="" />
    <img className='md:hidden' src={bannerr} alt="" />
    </div> 
    </div>
   </>
  )
}

export default Banner
