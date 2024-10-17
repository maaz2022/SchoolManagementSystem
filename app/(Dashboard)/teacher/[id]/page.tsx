import Image from 'next/image'
import React from 'react'

const SingleTeacherPage = () => {
  return (
    <div className='flex-1 gap-4 flex flex-col xl:flex-row'>
      <div className='w-full xl:w-2/3'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='bg-blue-100 py-6 px-6 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
                <Image
                    src='https://images.pexels.com/photos/2888150/pexels-photo-2888150.jpeg?auto=compress&cs=tinysrgb&w=1200'
                    alt='image'
                    width={144}
                    height={144}
                    className='w-36 h-36 object-cover rounded-full'
                />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
                <h1 className='text-xl font-semibold'>John Doe</h1>
                <p className='text-sm text-gray-500'>Lorem ipsum dolor sit, amet consectetur adipisicing elit.!</p>
                <div className='flex items-center justify-between flex-wrap gap-2 text-xs font-medium'>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                        <Image src='/blood.png' alt='blood group' width={14} height={14}/>
                        <span>A+</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                        <Image src='/date.png' alt='date' width={14} height={14}/>
                        <span>January 2025</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                        <Image src='/mail.png' alt='mail' width={14} height={14}/>
                        <span>john@gmail.com</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                        <Image src='/phone.png' alt='phone' width={14} height={14}/>
                        <span>+12 1234 1234</span>
                    </div>
                </div>
            </div>
        </div>
         <div className='flex-1'></div>
      </div>
     
      
      </div>
      <div className='w-full xl:w-1/3'>R</div>
    </div>
  )
}
export default SingleTeacherPage
