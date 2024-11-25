
import Link from "next/link";
import React from "react";

function Herosection() {
  return (
    <section className="relative mt-4 flex h-fit max-w-7xl flex-col items-center gap-10 px-8 sm:gap-16 md:my-0 md:h-[84.9vh] md:flex-row md:gap-0 lg:px-12 xl:m-auto xl:gap-0 xl:overflow-hidden">
      <div className="sm:w-full md:w-3/6 md:text-left items-center space-y-8">
        <h1 className="mx-auto mb-8 w-[12ch] text-center text-5xl font-bold text-blue-800 sm:text-5xl md:mx-0 md:text-left">
          Better, Faster and Cheaper Cloud.
        </h1>
        <p className="m-auto w-[34ch] text-center text-gray-500 md:m-0 md:text-left">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
        </p>
        <Link href="/sign-up">
            <button className="bg-blue-800 text-white px-8 py-5 rounded-full hover:bg-blue-900">
              Get Started
            </button>
          </Link>
      <div className=" flex-column bg-blue-800 item-center text-white px-6 py-10">
      <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
      </p>
      <p className="flex py-2">
      Charlotte Hale    
      </p>
      <p className="text-gray-400">
        Delos lnc.
      </p>

      </div>
      </div>

      <div className="flex-column bg-blue-800 item-center text-white px-6 py-10">
        <h2>Over 9000 Projects Completed</h2>
        <p className="py-3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
}

export default Herosection;
