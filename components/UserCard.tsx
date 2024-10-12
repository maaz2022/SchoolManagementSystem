import Image from 'next/image'
import React from 'react'

const UserCard = ({type}:{type:string}) => {
  return (
    <div className='rounded-2xl odd:bg-yellow-200 even:bg-purple-200 p-4 flex-1 min-w-[130px]'>
        <div className='flex justify-between items-center'>
            <span className='text-[10px] bg-white rounded-full text-green-600 px-2 py-1'>2024/12</span>
            <Image src='/more.png' alt='more' width={20} height={20} className='cursor-pointer'/>
        </div>
            <h1 className='text-2xl font-semibold my-4'>1204</h1>
            <h2 className='capitalize text-sm text-gray-500 font-medium'>{type}</h2>
    </div>
  )
}

export default UserCard
