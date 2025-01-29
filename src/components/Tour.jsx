import React, { useState } from 'react'
import { FaArrowRight, FaMapMarkerAlt, FaStar } from 'react-icons/fa'; // Import des icônes


const Tour = () => {
    
    const [selectedPlace,setSelectedPlace] = useState("Special Deals") 

    const places = [
        {label:"Special Deals"},
        {label:"Populer"},
        {label:"Recommendation"},
        {label:"Best Price"},
    ]
    
    const location = [4, 5, 7]
    const tours = [
      {
        id: 1,
        imageUrl: "/packimg1.png",
        location: "Maldives",
        rating: 4.7,
        title: "Hurawalhi Island",
        duration: "7 Days",
        people: 2,
        price: 620,
      },
      {
        id: 2,
        imageUrl: "/packimg2.png",
        location: "Indonesia",
        rating: 4.5,
        title: "Bali Province",
        duration: "4 Days",
        people: 2,
        price: 780,
      },
      {
        id: 3,
        imageUrl: "/packimg3.png",
        location: "Spain",
        rating: 4.7,
        title: "Barcelona city beach",
        duration: "4 Days",
        people: 4,
        price: 850,
      },
      {
        id: 4,
        imageUrl: "/packimg4.png",
        location: "Maldives",
        rating: 4.7,
        title: "Hurawalhi Island",
        duration: "7 Days",
        people: 2,
        price: 620,
      },
      {
        id: 5,
        imageUrl: "/packimg5.png",
        location: "Canadana",
        rating: 4.7,
        title: "St. John's",
        duration: "7 Days",
        people: 2,
        price: 620,
      },
      {
        id: 6,
        imageUrl: "/packimg6.png",
        location: "Maldives",
        rating: 4.7,
        title: "Machu Picchu",
        duration: "5 Days",
        people: 4,
        price: 820,
      },
      {
        id: 7,
        imageUrl: "/packimg7.png",
        location: "French",
        rating: 4.7,
        title: "Bora Bora Island",
        duration: "7 Days",
        people: 2,
        price: 550,
      },
      {
        id: 8,
        imageUrl: "/packimg8.png",
        location: "Australia",
        rating: 4.5,
        title: "Sydney Opera House",
        duration: "7 Days",
        people: 2,
        price: 310,
      },
    ] 
    const filteredTours = tours.filter((tour) => tour.location === selectedPlace)
    
      return (
        <>
        <div className='mx-0 px-0 pt-8'>
            <h2 className='font-bold text-2xl pt-8 text-center'>The <span className='text-orange-400'>best place</span> for vacation</h2>
            <div className='grid md:grid-cols-2 lg:grid-cols-4 p-4 gap-12'>
                {places.map((place,index) => (
                   <div className={`py-2 px-1 bg-white rounded-full ${selectedPlace === place.label ? 'bg-orange-100': '' } border border-zinc-100 text-center cursor-poiinter `} 
                   onClick={() => setSelectedPlace(place.label)} 
                   key={index}>
                    {place.label}
                   </div>
                ))}
            </div>
        </div>
        <div className='grid lg:grid-cols-4 md:grid-cols-2 m-2 py-2 px-2 gap-4'>
           {filteredTours.map((tour) => (
          <div key={tour.id} className='flex-col rounded-md shadow-md transition-transform duration-50 hover:scale-90'>
            <img src={tour.imageUrl} alt="" className='object-cover w-full' />
            <div className='flex py-2 m-1'>
              <div className={`flex-1 ${location.includes(tour.id) ? 'text-blue-400':'text-orange-400'}`}>
                <div className='flex justify-start items-center'>
                  <FaMapMarkerAlt className=''/>
                  <span className='px-2'>{tour.location}</span>
                </div>
              </div>
              <div className='flex-2 text-orange-400'>
                <div className='flex justify-end items-center'>
                  <FaStar className='text-yellow-400'/>
                  <span className='px-2'>{tour.rating}</span>
                </div>
              </div>
            </div>
            <p className='font-semibold text-xl m-1'>{tour.title}</p>
            <p className='text-gray-400 m-1'>{tour.duration} Tour on {tour.people} person</p>
            <div className='flex py-2 m-1'>
              <div className='flex-1 text-orange-400'>
                <div className='flex justify-start'>
                  <span className='px-2  font-bold text-xl'>{tour.price} $</span>
                </div>
              </div>
              <div className='flex-2 text-gray-400 py-2'>
                <div className='flex justify-end items-center'>
                  <span className='px-2'>View more</span>
                  <FaArrowRight />
                </div>
              </div>
            </div>
          </div>
          ))}
        </div>
        <div className='flex justify-center items-center p-4'>
          <button className='mx-auto rounded-md border py-3 px-6 bg-white text-orange-400 hover:bg-orange-400 hover:text-white'>View All</button>
        </div>
        </>
      )
}

export default Tour