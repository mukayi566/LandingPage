"use client";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export default function Expertise() {
  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto flex flex-col lg:grid lg:grid-cols-2 lg:gap-x-12 items-center lg:items-start">
        {/* Text Section (always appears first) */}
        <article className="space-y-6 text-center lg:text-left">
          <p className="text-blue-500 font-semibold">Our Expertise</p>
          <h2 className="text-gray-800 text-4xl sm:text-5xl font-bold">
            Cloud built by and for{" "}
            <span className="text-blue-500">Professionals</span>
          </h2>
          <p className="text-sm font-semibold text-gray-500">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
          {/* Expertise Items */}
          <div className="space-y-6">
            <div>
              <h5 className="text-gray-800 font-semibold text-xl">
                Professionalism
              </h5>
              <p className="text-gray-500">
                We have the best professional marketing people across the globe
                just to work with you.
              </p>
            </div>
            <div>
              <h5 className="text-gray-800 font-semibold text-xl">
                Affordable
              </h5>
              <p className="text-gray-500">
                We promise to offer you the best rate we can - at par with the
                industry standard.
              </p>
            </div>
          </div>
          {/* Learn More Button */}
          <Link href="/home">
            <button className="bg-blue-800 text-white px-10 py-4 rounded-full hover:bg-blue-900">
              Learn More
            </button>
          </Link>
        </article>

        {/* Image Section */}
        <div className="mt-8 lg:mt-0 flex justify-center lg:justify-end">
          <Image
            src="/icons/team.svg"
            alt="Team profile"
            height={500}
            width={500}
            className="rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
