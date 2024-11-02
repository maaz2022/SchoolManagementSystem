"use client"; // Ensure this line is at the top of the component file

import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import { motion } from 'framer-motion';

const Hero = () => {
  const balloonAnimation = {
    x: [0, 100, -100, 0], // Move right, left, and back to the center
    y: [0, -100, 100, 0], // Move up, down, and back to the center
    transition: {
      duration: 5, // Duration of the entire animation cycle
      ease: 'easeInOut',
      repeat: Infinity,
      repeatType: 'loop',
      times: [0, 0.3, 0.6, 1], // Control timing of keyframes
    } as const,
  };

  return (
    <div className='flex justify-between mt-10 items-center border-b-2 h-[600px] relative'>
      <div className='w-1/2'>
        <h1 className='text-5xl ml-52 font-bold'>
          Empowering <span className='text-[#F7666F]'>Education</span> through Exceptional Teams
        </h1>
        <p className='ml-52 mt-10 max-w-[600px]'>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia accusamus adipisci ullam voluptatum et officia aspernatur.
        </p>
        <Link href='' className='ml-52 mt-10 relative inline-block bg-[#F7666F] text-white px-8 py-2 transition-colors duration-1000 group'>
          Contact Us
          <span className="absolute inset-0 border-2 border-[#F7666F] scale-110 opacity-0 transition-all duration-1000 group-hover:opacity-100 group-hover:scale-100"></span>
        </Link>
      </div>
      <div className='w-1/2 flex justify-end mr-72'>
        <Image
          src='/Hero-Wrapper__image--center.png'
          alt='image'
          width={500}
          height={100}
        />
      </div>
      <motion.div
        className='absolute left-[10%] top-20 opacity-40'
        animate={balloonAnimation}
      >
        <Image
          src='/circle.png'
          alt='circle'
          width={200}
          height={100}
        />
      </motion.div>
      <motion.div
        className='absolute right-[5%] top-20 opacity-40'
        animate={balloonAnimation}
      >
        <Image
          src='/circle.png'
          alt='circle'
          width={200}
          height={100}
        />
      </motion.div>
      <motion.div
        className='absolute right-[50%] top-20 opacity-40'
        animate={balloonAnimation}
      >
        <Image
          src='/circle.png'
          alt='circle'
          width={100}
          height={100}
        />
      </motion.div>
    </div>
  );
};

export default Hero;
