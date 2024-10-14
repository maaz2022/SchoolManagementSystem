import React from 'react'

const Announcement = () => {
  return (
    <div className='bg-white rounded-md p-4 '>
        <div className='flex justify-between'>
            <h1 className='text-xl font-semibold'>Announcement</h1>
            <span className='text-xs text-gray-400'>View All</span>
        </div>
        <div className='flex flex-col gap-4 mt-4'>
            <div className='bg-blue-100 rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-medium'>Lorem ipsum dolor sit</h1>
                    <span className='bg-white rounded py-1 px-1 text-sm text-gray-400'>2024/10/15</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, necessitatibus totam vel.</p>
            </div>
            <div className='bg-yellow-100 rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-medium'>Lorem ipsum dolor sit</h1>
                    <span className='bg-white rounded py-1 px-1 text-sm text-gray-400'>2024/10/15</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, necessitatibus totam vel.</p>
            </div>
            <div className='bg-purple-100 rounded-md p-4'>
                <div className='flex items-center justify-between'>
                    <h1 className='font-medium'>Lorem ipsum dolor sit</h1>
                    <span className='bg-white rounded py-1 px-1 text-sm text-gray-400'>2024/10/15</span>
                </div>
                <p className='text-sm text-gray-400 mt-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat, necessitatibus totam vel.</p>
            </div>
        </div>
    </div>
  )
}

export default Announcement
