import React from 'react'

const Tour = () => {
    const places = [
        {label:"Special Deals"},
        {label:"Populer"},
        {label:"Recommendation"},
        {label:"Best Price"},
      ]
    
      return (
        <>
        <div className='mx-0 px-0 pt-4'>
            <h2 className='font-bold text-2xl text-center'>The <span className='text-orange-400'>best place</span> for vacation</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
                {places.map((place,index) => (
                   <div className='py-2 px-1 bg-white hover:bg-orange-300 shadow-md border-zinc-400 rounded-md text-center' key={index}>{place.label}</div>
                ))}
            </div>
        </div>
        <div className=''>

        </div>
        </>
        
      )
}

export default Tour