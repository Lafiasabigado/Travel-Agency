import React from 'react'

const Tour = () => {
    const places = [
        {label:"Special Deals"},
        {label:"Populer"},
        {label:"Recommendation"},
        {label:"Best Price"},
      ]
    
      return (
        <div className='mx-0 px-0'>
            <h2 className='font-bold text-2xl text-center'>The <span className='text-orange-400'>best place</span> for vacation</h2>
            <div className='flex flex-wrap justify-center items-center'>
                {places.map((place,index) => (
                   <div className='bg-white p-4 rounded-lg shadow-md text-center flex-1 min-w-[150px] max-w-[200px]' key={index}>{place.label}</div>
                ))}
            </div>
        </div>
      )
}

export default Tour