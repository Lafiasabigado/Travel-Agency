import React from 'react'

const About = () => {
  return (
    <div className='bg-zinc-50 items-center grid lg:grid-cols-2 md:grid-cols-2 pt-10'>
        <div className='flex-col pt-10 mx-4 my-4 px-4 py-4'>
          <img src="./assets/images/aboutImage.png" alt="" />
        </div>
        <div className='flex-col justify-center mx-4'>
          <h4 className='text-orange-400 uppercase text-xl font-bold my-3 mx-3'>About Us</h4>
          <p className='text-4xl font-semibold my-3 mx-3'>The Best And Most trusted <span className='text-orange-400'>service</span></p>
          <p className='mx-3 my-3'>We are the largest holiday service provider in the world with partners and places spread all over the world by prioriti-zing service and customer satisfaction.</p>
          <button className="mx-3 my-3 rounded-md border bg-orange-500 px-3 py-2 font-blod text-white">Learn More</button>
          <div className='grid lg:grid-cols-4 md:grid-cols-2 mx-3 my-4 py-4 '>
            <div className='flex-col my-2'>
              <p className='text-xl uppercase font-bold' style={{color:"#FA7436"}}>200+</p>
              <p className='text-gray-400'>Customer & partners</p>
            </div>
            <div className='flex-col my-2'>
              <p className='text-xl uppercase font-bold' style={{color:"#FA7436"}}>500+</p>
              <p className='text-gray-400'>Place in The world</p>
            </div>
            <div className='flex-col my-2'>
              <p className='text-xl uppercase font-bold' style={{color:"#FA7436"}}>1k+</p>
              <p className='text-gray-400'>Success Journey</p>
            </div>
          </div>
        </div>
    </div>
  )
}

export default About
