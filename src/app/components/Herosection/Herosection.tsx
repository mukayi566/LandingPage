"use client";

import Image from "next/image";
import Link from "next/link";
import React from "react";
import { ImQuotesLeft } from "react-icons/im";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";

function Herosection() {
  const List = (
    <ul className="space-y-4">
      {[
        "Available in 7 Locations",
        "Premium Internet Backbone",
        "99.99% Uptime SLA",
      ].map((item, index) => (
        <li key={index} className="flex items-center gap-2">
          <IoMdCheckmarkCircleOutline className="text-blue-800 text-xl" />
          <p className="text-gray-700">{item}</p>
        </li>
      ))}
    </ul>
  );

  return (
    <section className="relative mt-4 h-fit max-w-7xl px-8 sm:px-12 md:px-16 xl:px-20 mx-auto">
      {/* Main Container */}
      <div className="flex flex-col md:grid md:grid-cols-2 md:gap-x-12 lg:gap-x-16 items-center md:items-start">
        {/* Left Section */}
        <div className="space-y-8 text-center md:text-left">
          <h1 className="mx-auto md:mx-0 text-5xl font-bold text-blue-800 w-[12ch]">
            Better, Faster, and Cheaper Cloud.
          </h1>
          <p className="mx-auto md:mx-0 w-[34ch] text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam.
          </p>
          <Link href="/sign-up">
            <button className="bg-blue-800 text-white px-12 py-5 rounded-full hover:bg-blue-900">
              Get Started
            </button>
          </Link>
          <div className="text-gray-600 font-semibold">{List}</div>
        </div>

        {/* Right Section */}
        <div className="relative mt-8 md:mt-0 flex flex-col items-center md:items-end">
          <Image
            src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=634&q=80"
            alt="Cloud Technology"
            height={800}
            width={400}
            className="rounded-lg"
          />
          <div className="absolute bottom-0 left-0 right-0 bg-blue-800 bg-opacity-60 px-6 py-7 text-gray-300">
            <div className="flex items-start gap-4">
              <ImQuotesLeft className="text-red-400 w-8 h-8" />
              <div>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                  do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                </p>
                <p className="mt-2 font-bold text-gray-400">Charlotte Hale</p>
                <p className="text-gray-400">Delos Inc.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Herosection;
