import Image from 'next/image'
import React from 'react'
import { FaStar } from 'react-icons/fa'

function Testimonials() {
  return (
    <div>
      <Image
        src="/icons/love.svg"
        alt="love" 
        width={200}
        height={200}
      />
      <h1>Testimonials</h1>

      <p>Our Clients Love Us</p>

      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua enim ad minim veniam.</p>
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />

      <p></p>
    </div>
  )
}

export default Testimonials