import React from 'react'
import { FaDollarSign, FaGlobe, FaSquare } from 'react-icons/fa'
import { FaSquareTumblr } from 'react-icons/fa6'

const Services = () => {
  const services = [
    {
      id:1, icon: <FaSquareTumblr />,title:"Best Travel Agency", description:"Travel agencies that provide round trip, one way, and multi trip services."
    },
    {
      id:2, icon: <FaDollarSign/>,title:"Best Travel Agency", description:"Travel agencies that provide round trip, one way, and multi trip services."
    },
    {
      id:3, icon: <FaGlobe />,title:"Best Travel Agency", description:"Travel agencies that provide round trip, one way, and multi trip services."
    },
  ]
  const icons = [2,3]
  return (
    <>
    <div className='pt-10 m-4 grid md:grid-cols-2 lg:grid-cols-4'>
        <div className='flex-col pt-2'>
        <h1 className='m-1 pt-2 text-3xl font-bold pt-2'>Why <span className='text-orange-400'>Choose</span> Us</h1>
        <p className='text-gray-400 m-1 pt-5'>We ensure that you’ll embark on a perfectly planned, safe vacation at a price you can afford.</p>
        <div className='pt-5'>
          <button className='mx-auto rounded-md border py-3 px-6 bg-white text-orange-400 hover:bg-orange-400 hover:text-white'>Learn More</button>
        </div>
        </div>
        {
          services.map((service) => (
          <div key={service.id} className='border border-zinc-100 rounded-md m-1 lg:gap-0'>
          <div  className='flex-col flex m-2 items-start justify-center'>
            <div className={`px-4 py-4 rounded-md text-white ${icons.includes(service.id) ? 'bg-blue-400' : 'bg-red-400'}`}>
              {service.icon}
            </div>
            <h1 className='pt-4'>{service.title}</h1>
            <p className='text-gray-400 pt-4'>{service.description}</p>
          </div>
        </div>      
        ))
        }
    </div>
    </>
  )
}

export default Services