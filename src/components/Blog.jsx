import React from 'react'
import PhotoService from './PhotoService';
import { useEffect, useState } from 'react';
import { div } from 'motion/react-client';
import { motion } from "motion/react"

const Blog = () => {

    const [blogs, setBlogs] = useState([]);

    const desc = [
        {id:1,
        date:"May 12, 2024",
        title:"The Amazing Difference a Year of Travelling .",
        description:"There isn’t a relationship around that can survive without trust. My relationship with my dog Peyton is deep..."
        },
        {id:2,
        date:"May 12, 2024",
        title:"Reflections on 5 Months of Travel: Time to Hang",
        description:"Doting pet parents have a relentless need to constantly photograph every adorable pet moment..."
        },
        {id:3,
        date:"May 12, 2024",
        title:"How to Save Money While Visiting Africa .",
        description:"It is easy to forget that animals are living creatures with a beating heart."
        }
    ]

   useEffect(() => {
     PhotoService.getImages().then((data) => setBlogs(data));
   }, []);
  return (
    <>
    <div className='m-2 pt-10'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2'>
          <div className='flex-1 m-2'>
            <h1 className='text-3xl font-semibold'>Our <span className='text-orange-400'>Blog</span></h1>
          </div>
          <div className='flex-2 m-2'>
            <p className='text-gray-400'>Stay up to date with the latest tech trands and news in the pets.</p>
            <button className="my-4 border-orange-400 rounded-md border hover:bg-orange-400 hover:text-white px-3 py-2 font-blod text-orange-400">View All</button>
          </div>
        </div>
    </div>
    <div className='gap-4 grid lg:grid-cols-3 md:grid-cols-3'>
    {
    blogs.map((blog, index) => {
    const d = desc[index]; 
    return (
    <div key={blog.id} className='m-2 border rounded-md'>
      {d && ( 
        <div className='m-2'>
          <h1 className='text-gray-400 m-1'>{d.date}</h1>
          <motion.img 
          className='rounded-md m-1' 
          src={blog.itemImageSrc} alt={d.title}
          whileHover={{ scale: 0.9 }}  // Zoom léger au survol
          whileTap={{ scale: 0.9 }} 
          transition={{ duration: 0.2 }} 
          />
          <h2 className='text-zinc-800 m-1'>{d.title}</h2>
          <p className='text-gray-400 m-1'>{d.description}</p>
        </div>
      )}
    </div>
    );
    })}
    </div>
    </>
  )
}

export default Blog