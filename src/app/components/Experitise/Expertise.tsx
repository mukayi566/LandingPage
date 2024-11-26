"use client";
import Link from 'next/link';
import React from 'react'

export default function Expertise() {
  return (
    <div>
      <div
         className='flex-col items-center justify-items-center w-full text-white px-6'
      >
        <p className='text-blue-500 font-semibold'>Our Expertise</p>
        <p className='ml:auto px-6 text-gray-800 py-2 text-4xl sm:text-5xl font-bold'>Cloud built by and for <span className='text-blue-500'>Professionals</span></p>
         <br/>
        
         <p className='text-sm font-semibold text-gray-500'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          <br/ >
          <h5 className='text-gray-800 font-semibold text-xl'>Professionalism</h5>
         <p className='py-6 text-gray-500'>We have the best professional marketing people across the globe just to work with you.</p>
         <br/ >
          <h5 className='text-gray-800 font-semibold text-xl'>Affordable</h5>
         <p className='text-gray-500'>We promise to offer you the best rate we can - at par with the industry standard.</p>      
          <Link 
            href={"/home"}
            className='bg-blue-800 text-white px-10 py-4 rounded-full hover:bg-blue-900'
            >
             <button className='text-white mt-9 mb-7'>Learn More</button>
          </Link>
      </div>
    </div>
  )
}
