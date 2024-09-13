import React from 'react'
import banner from '../../public/Banner.jpg'
import bannerr from '../../public/Phone-banner.jpg'
import { Link } from 'react-router-dom'

const About = () => {
  return (
    <div>
       <div className='max-w-screen-2xl container mx-auto md:px-20 mt-10 px-4 flex flex-col md:flex-row'>
    
    <div className='w-full order-2 md:order-1 md:w-1/2 mt-12 md:mt-32'>
    <div className='space-y-12'>
    
     <p className='text-xl'>
    
Welcome to our tourism website, where the world awaits your discovery! We’re more than just a travel resource – we’re a community of explorers, dreamers, and adventurers passionate about sharing the beauty and diversity of global destinations. Our mission is to inspire and empower travelers like you to embark on unforgettable journeys, whether you're seeking serene escapes, adrenaline-filled adventures, or cultural enrichment. With expertly crafted guides, insider tips, and personalized travel itineraries, we provide everything you need to plan your perfect trip. From iconic cities to hidden gems, we bring you closer to the heart of every destination, helping you create lasting memories and experiences that transcend the ordinary. Join us as we explore the wonders of the world, one adventure at a time, and let your journey begin with us!
     </p>
     <Link
to={"/contact"}
 className="btn btn-primary text-white mt-6">Know more</Link>

</div>
  </div>
  <div className='order-1 w-full md:w-1/2 py-4 px-4'>
  <img className='hidden md:block' src={banner} alt="" />
  <img className='md:hidden' src={bannerr} alt="" />
  </div> 
  </div>
    </div>
  )
}

export default About
