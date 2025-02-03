import React from 'react'

const Partner = () => {
  const partners = [
    {id:1, image:"/Airbnb Logo.png"},
    {id:2, image:"/Amazon Logo.png"},
    {id:3, image:"/g15.png"},
    {id:4, image:"/Google Logo.png"},
    {id:5, image:"/Microsoft Logo.png"},
    {id:6, image:"/OLA logo.png"},
    {id:7, image:"/Walmart Logo.png"},
    {id:8, image:"/OYO Logo.png"},
  ]
  return (
    <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 pt-20'>
      {
        partners.map((partner) => (
            <div key={partner.id} className='m-4 flex justify-center'>
             <img src={partner.image} alt="" className='object-cover'/>
            </div>
        ))
      }
    </div>
  )
}

export default Partner