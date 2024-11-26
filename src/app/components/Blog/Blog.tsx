"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Blog() {
  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Blog Section Title */}
        <h1 className="text-5xl font-bold text-gray-800">Blog</h1>

        {/* Blog Introduction */}
        <p className="text-4xl sm:text-5xl font-bold text-gray-800">
          We Love Writing
        </p>
        <p className="text-gray-500 text-sm sm:text-base max-w-2xl mx-auto">
          Enjoying the beach life while on a vacation. Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>

        {/* Blog Post List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {/* Blog Post 1 */}
          <div className="p-8 bg-white shadow-lg rounded-lg border">
            <Image
              src="/images/vacation-beach.jpg" // Replace with your image path
              alt="Vacation Beach"
              height={200}
              width={300}
              className="object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Getting the most out of your vacation</h3>
            <p className="text-gray-500 mt-2">Adam Cuppy</p>
          </div>

          {/* Blog Post 2 */}
          <div className="p-8 bg-white shadow-lg rounded-lg border">
            <Image
              src="/images/safari-africa.jpg" // Replace with your image path
              alt="Safari in Africa"
              height={200}
              width={300}
              className="object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Choosing the perfect Safaris in Africa</h3>
            <p className="text-gray-500 mt-2">Aaron Patterson</p>
          </div>

          {/* Blog Post 3 */}
          <div className="p-8 bg-white shadow-lg rounded-lg border">
            <Image
              src="/images/asia-hiking.jpg" // Replace with your image path
              alt="Hiking in Asia"
              height={200}
              width={300}
              className="object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Hiking during the monsoon in Asia</h3>
            <p className="text-gray-500 mt-2">Sam Phipphen</p>
          </div>

          {/* Blog Post 4 */}
          <div className="p-8 bg-white shadow-lg rounded-lg border">
            <Image
              src="/images/thailand-travel.jpg" // Replace with your image path
              alt="Traveling to Thailand"
              height={200}
              width={300}
              className="object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Must carry items while traveling to Thailand</h3>
            <p className="text-gray-500 mt-2">Tony Hawk</p>
          </div>

          {/* Blog Post 5 */}
          <div className="p-8 bg-white shadow-lg rounded-lg border">
            <Image
              src="/images/treact.jpg" // Replace with your image path
              alt="Treact"
              height={200}
              width={300}
              className="object-cover rounded-t-lg"
            />
            <h3 className="text-xl font-semibold text-gray-800 mt-4">Interested in Treact?</h3>
            <p className="text-gray-500 mt-2">Himali Turn</p>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="mt-12 text-center">
          <p className="text-xl text-gray-800 font-semibold">Join the closed beta now</p>
          <Link href="/get-started">
            <button className="mt-6 bg-blue-800 text-white px-10 py-4 rounded-full hover:bg-blue-900">
              Get Started
            </button>
          </Link>
        </div>

        {/* Contact Us Link */}
        <div className="mt-6 text-center">
          <Link href="/contact-us">
            <button className="bg-gray-800 text-white px-10 py-4 rounded-full hover:bg-gray-900">
              Contact Us
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
