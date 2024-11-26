import Image from 'next/image';
import React from 'react';
import { FaStar } from 'react-icons/fa';

function Testimonials() {
  return (
    <section className="bg-gray-50 py-12 px-6 text-center">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center">
        {/* SVG Image on top for small screens and below the text on larger screens */}
        <div className="order-last lg:order-first">
          <Image
            src="/icons/love.svg"
            alt="love"
            width={500}
            height={500}
            className="mx-auto mb-4"
          />
        </div>

        <div className="flex flex-col items-center lg:items-start lg:ml-12">
          <h1 className="text-3xl font-semibold text-gray-800">Testimonials</h1>
          <p className="text-lg text-gray-600 mt-4">Our Clients Love Us</p>

          <p className="text-sm text-gray-500 mt-4 max-w-2xl mx-auto lg:mx-0">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.
          </p>

          {/* Star Rating */}
          <div className="mt-6 flex justify-center space-x-1 text-yellow-500">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <div className="mt-8">
            {/* Additional testimonial can be added here */}
            <p className="text-sm text-gray-500 mt-2">"This is the best service I've used, highly recommend it!" - John Doe</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;
