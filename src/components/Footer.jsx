import React from 'react'
import { FaTwitter, FaFacebook, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa'

const Footer = () => {
  const elements = [
    {id:1,
     title:"About us",
     label1:"Features",
     label2:"FAQs",
     label3:"News",
     label4:"Blog"
    },
    {id:2,
     title:"Company",
     label1:"Features",
     label2:"FAQs",
     label3:"News",
     label4:"Blog"
    },
    {id:3,
     title:"Support",
     label1:"Features",
     label2:"FAQs",
     label3:"News",
     label4:"Blog"
    }
  ]
  return (
    <>
    <div className='pt-10 bg-orange-100 w-full px-4 sm:px-6'>
    <div className='grid grid-cols-1 md:grid-cols-4 lg:grid-cols-5'>
      <div className='flex-col mx-2'>
        <div className='my-2 '>
          <img src="/Logo.png" alt="" />
        </div>
        <p className='text-gray-400 my-2'>We believe brand interaction is 
            key in communication. Real 
            innovations and a positive.
        </p>
        <div className='flex text-orange-400'>
           <FaTwitter className='mx-2'/>
           <FaInstagram className='mx-2'/>
           <FaYoutube className='mx-2'/>
        </div>
      </div>
      {elements.map((element) => (
        <div key={element.id} className='flex-col mx-2'>
          <h2 className='mx-1 font-semibold'>{element.title}</h2>
          <p className='text-gray-400 my-1 mx-1'>{element.label1}</p>
          <p className='text-gray-400 my-1 mx-1'>{element.label2}</p> 
          <p className='text-gray-400 my-1 mx-1'>{element.label3}</p>
          <p className='text-gray-400 my-1 mx-1'>{element.label4}</p> 
        </div>
      ))}
      <div className='flex-col mx-2'>
        <h2 className='mx-1 font-semibold'>Get in touch</h2>
        <input type="text" className='rounded-md px-2 py-2 my-2' placeholder='Your email here...' />
        <button className='bg-orange-400 text-white px-4 py-2 my-2 rounded-md'>Get Access</button>
      </div>
    </div>
    <div className='pt-5'>
      <hr className='bg-gray-400 flex justify-center'/>
    </div>
    <div className='grid-cols-2 grid lg:grid-cols-2 md:grid-cols-2 pt-5'>
       <div>
         <p className='text-gray-400 my-2'>TravelAgent © 2022 All Right Reserved</p>
       </div>
       <div className='flex justify-center'>
        <p className='text-gray-400 my-2 mx-1'>Terms of Service</p>
        <p className='text-gray-400 my-2 mx-1'>Privacy Policy</p>
       </div>
    </div>
    </div>
    </>
  )
}

export default Footer