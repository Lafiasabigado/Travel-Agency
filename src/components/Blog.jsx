import React from 'react'

const Blog = () => {
  return (
    <div className='m-2 pt-10'>
        <div className='grid lg:grid-cols-2 md:grid-cols-2'>
          <div className='flex-1 m-2'>
            <h1 className='text-3xl font-bold'>Recent <span className='text-orange-400'>Blogs</span></h1>
          </div>
          <div className='flex-2 m-2'>
            <p className='text-gray-400'>Stay up to date with the latest tech trands and news in the pets.</p>
            <button className="my-4 border-orange-400 rounded-md border hover:bg-orange-400 hover:text-white px-3 py-2 font-blod text-orange-400">View All</button>
          </div>
        </div>
    </div>
  )
}

export default Blog