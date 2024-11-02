import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const HomeNav = () => {
  return (
    <div className='px-10 py-6 flex justify-between bg-white border-b-2 shadow-md '> 
        <div className='flex items-center gap-1'> 
            <Image
            src='/school-bag.png'
            alt='logo'
            width={30}
            height={20}
            />
            <Link href='/'><h1 className='font-bold text-[20px] text-black'>Hogwarts</h1></Link>
        </div>
        <div className='space-x-5'>
            {/* Tailwind hover effect for "Sign Up" button */}
            <Link href='/admin' className='relative inline-block bg-[#F7666F] te  xt-white px-4 py-2 rounded-md transition-colors duration-1000 group text-white'>
                Sign Up
                <span className="absolute inset-0 border-2 border-[#F7666F] scale-110 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-100"></span>
            </Link>

            {/* Tailwind hover effect for "Contact Us" button */}
            <Link href='' className='relative inline-block bg-blue-400 text-white px-4 py-2 rounded-md transition-colors duration-1000 group'>
                Contact Us
                <span className="absolute inset-0 border-2 border-blue-400 scale-110 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-100"></span>
            </Link>
        </div>
    </div>
  )
}

export default HomeNav
