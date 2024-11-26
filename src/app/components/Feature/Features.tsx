"use client";
import Image from 'next/image';
import React from 'react'

function Features() {
  return (
    <div>
      <div className="flex-col items-center justify-items-center w-full bg-blue-800 text-white px-6 ">
        <h2 className='flex text-4xl font-bold pt-8 px-9 py-6 sm:text-4xl'>Over 9000 Projects Completed</h2>
        <p className="py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className='md:flex py-7 gap-9 '>
            <div className='md:flex-col'>
            <div className='font-bold text-2xl sm:text-4xl'>
               2500+
            </div>
            <div className='text-xl sm:text-2xl'>
                Clients
            </div>
            </div>
            <div className='md:flex-col'>
            <div className='font-bold text-2xl sm:text-4xl'>
                $100M+
            </div>
            <div className='text-xl sm:text-2xl'>
                Revenue
            </div>
            </div>
            <div className='md:flex-col'>
            <div className='font-bold text-2xl sm:text-4xl' >
                150+
            </div>
            <div className='text-xl sm:text-2xl'>
                Employees
            </div>
            </div>
        </div>
        </div>

        <div className='flex-col items-center space-y-3 py-6 justify-items-center'>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Features
            </h5>
            <h2 className='text-4xl sm:text-6xl text-gray-800 font-bold '>
                Amazing
                <span className='text-4xl sm:text-6xl text-blue-800 font-semibold'>  Features</span>
            </h2>
            <p className='items-center text-gray-500 px-8'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            </p>
            <div className='grid grid-cols-1 lg:grid-cols-3 gap-4 items-center justify-items-center text-center'>
            <div className='flex-column items-center space-y-3 py-6 justify-items-center'>
           <div className='p-4 border-2 border-gray-200 rounded-full'>
            <Image
               src="https://projects.lupleg.org/static/media/shield-icon.daefe14b320b14fbd9cbd18908ac93ec.svg"
               alt="reliable"
               height={23}
               width={23}
            />
            </div>
            <h3 className='text-2xl text-blue-800 font-bold'>
                Secure
            </h3>
            <p className='items-center px-14 text-gray-500'>
            We strictly only deal with vendors that provide top notch security.
            </p>
        </div>
        <div className='flex-column items-center space-y-3 py-6 justify-items-center'>
        <div className='p-4 border-2 border-gray-200 rounded-full'>
        <Image
               src="https://projects.lupleg.org/static/media/support-icon.f9253ffa8cb6ffde5bbaa05eb5136375.svg"
               alt="reliable"
               height={23}
               width={23}
            />
            </div>
            <h5 className='text-2xl text-blue-800 font-bold'>
                24/7 Support
            </h5>
            <p className='items-center px-14 text-gray-500'>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
             </p>
            
        </div>
        <div className='flex-column items-center space-y-3 py-6 justify-items-center'>
        <div className='p-4 border-2 border-gray-200 rounded-full'>
        <Image
               src="https://projects.lupleg.org/static/media/customize-icon.367468c90fd796009b97fbfba67b2c6a.svg"
               alt="reliable"
               height={23}
               width={23}
            />
          </div>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Customizable
            </h5>
            <p className='items-center px-14  text-gray-500 '>
               Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
            </p>
        </div>
        <div className='flex-column items-center space-y-3 py-6 justify-items-center'>
        <div className='p-4 border-2 border-gray-200 rounded-full'>
            <Image
               src="https://projects.lupleg.org/static/media/reliable-icon.1367510a8f0a1bec76dc425d25f92f43.svg"
               alt="reliable"
               height={23}
               width={23}
            />
            </div>
            <h1 className=' text-2xl text-blue-800 font-bold'>
                Reliable
            </h1>
            <p className='items-center px-14  text-gray-500 '>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
            </p>
        </div>
        <div className='flex-column items-center space-y-3 py-6 justify-items-center'>
        <div className='p-4 border-2 border-gray-200 rounded-full'>
           <Image
              src="https://projects.lupleg.org/static/media/fast-icon.dbb971a73d4805d2fc3bcdacdb55beba.svg"
              alt='fast'
              height={23}
              width={23}
           /> 
           </div>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Fast
            </h5>
            <p className='items-center px-14  text-gray-500'>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
             </p>
        </div>
        <div className='flex-column items-center space-y-3 py-6 justify-items-center'>
        <div className='p-4 border-2 border-gray-200 rounded-full'>
            <Image
            src="https://projects.lupleg.org/static/media/simple-icon.673b7e1750b2a4ef32907fc164828d00.svg"
            alt='heart'
            height={23}
            width={23}
            />
            </div>
            <h5 className='text-2xl text-blue-800 font-bold'>
                Easy
            </h5>
            <p className='items-center px-14  text-gray-500 '>
            Lorem ipsum donor amet siti ceali ut enim ad minim veniam, quis nostrud.
             </p>
        </div>
    </div>
    </div>
    </div>
  )
}

export default Features;
