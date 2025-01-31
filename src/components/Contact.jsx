import React from 'react'
import { FaStar } from 'react-icons/fa'

const Contact = () => {
  const clients = [
    {
      id:1,
      name:"John Doe",
      image:"/client1.png",
      feedback:"Wow, what a fun vacation with Oelinken, guided by professional people"
    },
    {
      id:2,
      name:"John Doe",
      image:"/client2.png",
      feedback:"Wow, what a fun vacation with Oelinken, guided by professional people"
    },
    {
      id:3,
      name:"John Doe",
      image:"/client3.png",
      feedback:"Wow, what a fun vacation with Oelinken, guided by professional people"
    },
    {
      id:4,
      name:"John Doe",
      image:"/client4.png",
      feedback:"Wow, what a fun vacation with Oelinken, guided by professional people"
    }
  ]
  return (
    <div className='m-2 pt-10'>
        <div className='m-4'>
            <h2 className='text-center font-semibold text-2xl mx-2 my-2'>
              Contact us to review <span className='text-orange-400'>your experience </span> with us
            </h2>
            <p className='text-center text-gray-400 mx-2 my-2'>
              Give us feedback and let us know what experiences you
              had while on vacation with us
            </p>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 gap-4'>
            {
              clients.map((client) => (
              <div key={client.id} className='shadow-md px-4 py-4'>
                <p className='text-gray-400 '>{client.feedback}</p>
                <div className='flex items-center my-2 mx-7 md:mx-auto gap-4'>
                  <div className=''>
                    <img src={client.image} alt="" />
                  </div>
                  <div className='gap-4 my-4'>
                    <p className='text-zinc-800'>{client.name}</p>
                    <div className='flex'>
                      <FaStar className='text-yellow-400'/>
                      <FaStar className='text-gray-300'/>
                      <FaStar className='text-yellow-400'/>
                      <FaStar className='text-gray-300'/>
                      <FaStar className='text-yellow-400'/>
                    </div>
                  </div>
                </div>
              </div>
              ))
            }
        </div>
    </div>
  )
}

export default Contact