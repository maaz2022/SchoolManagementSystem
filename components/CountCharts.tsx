'use client'
import { count } from 'console';
import Image from 'next/image';
import React from 'react'
import { RadialBarChart, RadialBar, Legend, ResponsiveContainer } from 'recharts';

const data = [
  {
    name: 'Total',
    count: 100,
    fill: 'white',
  },
  {
    name: 'Boys',
    count: 50,
    fill: '#efd353',
  },
  {
    name: 'Girls',
    count: 50,
    fill: '#ADD8E6',
  }
];



const CountCharts = () => {
  return (
    <div className='bg-white rounded-xl h-full w-full p-4'>
      <div className='flex justify-between items-center'>
        <h1 className='text-lg font-semibold'>Student</h1>
        <Image src='/moreDark.png' alt='more' width={20} height={20}/>
      </div>
      <div className='relative w-full h-[70%]'>
         <ResponsiveContainer >
        <RadialBarChart cx="50%" cy="50%" innerRadius="40%" outerRadius="100%" barSize={32} data={data}>
          <RadialBar
            background
            dataKey="count"
          />
        
        </RadialBarChart>
      </ResponsiveContainer>
        <Image src='/maleFemale.png' alt='image' width={50} height={50} className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
      </div>
      <div className='flex justify-center gap-16'>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-blue-400 rounded-full'/>
              <h1 className='font-bold'>1,234</h1>
              <h2 className='text-xs text-gray-300'>Boys (55%)</h2>  
          </div>
          <div className='flex flex-col gap-1'>
            <div className='w-5 h-5 bg-yellow-400 rounded-full'/>
              <h1 className='font-bold'>1,234</h1>
              <h2 className='text-xs text-gray-300'>Boys (55%)</h2>  
          </div>
      </div>
    </div>
  )
}

export default CountCharts
