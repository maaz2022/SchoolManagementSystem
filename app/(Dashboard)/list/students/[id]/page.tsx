import Announcement from '@/components/Announcement'
import BigCalendar from '@/components/BigCalender'
import Performance from '@/components/Performance'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const SingleStudentPage = () => {
  return (
    <div className='flex-1 gap-4 flex flex-col xl:flex-row'>
      <div className='w-full xl:w-2/3'>
      <div className='flex flex-col lg:flex-row gap-4'>
        <div className='bg-blue-100 py-6 px-6 rounded-md flex-1 flex gap-4'>
            <div className='w-1/3'>
                <Image
                    src='https://images.pexels.com/photos/936126/pexels-photo-936126.jpeg?auto=compress&cs=tinysrgb&w=1200'
                    alt='image'
                    width={144}
                    height={144}
                    className='w-36 h-36 object-cover rounded-full'
                />
            </div>
            <div className='w-2/3 flex flex-col justify-between gap-4'>
                <h1 className='text-xl font-semibold'>Sara Noah</h1>
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
                        <span>sara@gmail.com</span>
                    </div>
                    <div className='w-full md:w-1/3 lg:w-full 2xl:w-1/3 flex items-center gap-2'>
                        <Image src='/phone.png' alt='phone' width={14} height={14}/>
                        <span>+12 1234 1234</span>
                    </div>
                </div>
            </div>
        </div>
         <div className='flex-1 flex gap-4 justify-between flex-wrap'>
            <div  className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                <Image
                src='/singleAttendance.png'
                alt='attendee'
                width={24}
                height={24}
                className='w-6 h-6'
            />    
            <div>
                <h1 className='text-xl font-semibold'>100%</h1>
                <span className='text-gray-400 text-sm'>Attendence</span>
            </div>
            </div>
            <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%] '>
                <Image
                src='/singleLesson.png'
                alt='attendee'
                width={24}
                height={24}
                className='w-6 h-6'
            />    
            <div>
                <h1 className='text-xl font-semibold'>8</h1>
                <span className='text-gray-400 text-sm'>Lessons</span>
            </div>
            </div>
            <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                <Image
                src='/singleBranch.png'
                alt='attendee'
                width={24}
                height={24}
                className='w-6 h-6'
            />    
            <div>
                <h1 className='text-xl font-semibold'>9th</h1>
                <span className='text-gray-400 text-sm'>Grade</span>
            </div>
            </div>
            <div className='bg-white p-4 rounded-md flex gap-4 w-full md:w-[48%] xl:w-[45%] 2xl:w-[48%]'>
                <Image
                src='/singleClass.png'
                alt='attendee'
                width={24}
                height={24}
                className='w-6 h-6'
            />    
            <div>
                <h1 className='text-xl font-semibold'>9C</h1>
                <span className='text-gray-400 text-sm'>Class</span>
            </div>
            </div>
        </div> 
      </div>
      <div className='mt-4 bg-white rounded-md p-4 h-[800px]'>
            <h1>Student&apos;s Schedule</h1>
            <BigCalendar/>
        </div>
     
      </div>
      <div className='w-full xl:w-1/3'>
      <div className='bg-white p-4 rounded-md flex flex-col gap-3'>
        <h1 className='text-xl font-semibold'>Shortcuts</h1>
        <div className='mt-4 flex gap-4 flex-wrap text-xs text-gray-500'>
            <Link href='/' className='p-3 rounded-md bg-blue-100'>Student&apos;s Classes</Link>
            <Link href='/' className='p-3 rounded-md bg-purple-100'>Student&apos;s Teachers</Link>
            <Link href='/' className='p-3 rounded-md bg-yellow-100'>Student&apos;s Exams</Link>
            <Link href='/' className='p-3 rounded-md bg-pink-100'>Student&apos;s Assignments</Link>
            <Link href='/' className='p-3 rounded-md bg-red-100'>Student&apos;s Results</Link>
        </div>
      </div>
      <div>
        <Performance/>
      </div>
        <div>
            <Announcement/>
        </div>
      </div>
    </div>
  )
}
export default SingleStudentPage
