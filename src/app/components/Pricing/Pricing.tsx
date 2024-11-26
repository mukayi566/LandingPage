
"use client";
import React from "react";

export default function Pricing() {
  return (
    <section className="w-full px-6 py-12 bg-gray-50">
      <div className="max-w-7xl mx-auto text-center space-y-8">
        {/* Pricing Section Title */}
        <h1 className="text-5xl font-bold text-gray-800">Pricing</h1>

        {/* Section Header */}
        <div className="space-y-4">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-800">
            Flexible Plans
          </h2>
          <p className="text-gray-500 text-sm sm:text-base">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
          {/* Monthly / Yearly Toggle Placeholder */}
          <div className="flex justify-center gap-4 mt-4">
            <button className="px-6 py-2 bg-blue-800 text-white rounded-full hover:bg-blue-900">
              Monthly
            </button>
            <button className="px-6 py-2 bg-gray-200 text-gray-600 rounded-full hover:bg-gray-300">
              Yearly
            </button>
          </div>
        </div>

        {/* Pricing Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Free Plan */}
          <div className="p-8 bg-white shadow-lg rounded-lg border">
            <h3 className="text-2xl font-bold text-gray-800">Free Plan</h3>
            <p className="mt-2 text-gray-500">For Personal Blogs</p>
            <div className="mt-4 p-4 bg-aliceblue rounded-md">
              <p className="text-4xl font-bold text-blue-800">$0</p>
              <p className="text-sm text-gray-500">/ Month</p>
            </div>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="bg-white p-2 rounded-md shadow-sm">30 Templates</li>
              <li className="bg-white p-2 rounded-md shadow-sm">7 Landing Pages</li>
              <li className="bg-white p-2 rounded-md shadow-sm">12 Internal Pages</li>
              <li className="bg-white p-2 rounded-md shadow-sm">Basic Assistance</li>
            </ul>
            <button className="mt-6 w-full bg-blue-800 text-white py-3 rounded-full hover:bg-blue-900">
              Buy Now
            </button>
          </div>

          {/* Pro Plan */}
          <div className="p-8 bg-white shadow-lg rounded-lg border border-blue-800">
            <h3 className="text-2xl font-bold text-gray-800">Pro Plan</h3>
            <p className="mt-2 text-gray-500">Suited for Production Websites</p>
            <div className="mt-4 p-4 bg-aliceblue rounded-md">
              <p className="text-4xl font-bold text-blue-800">$49</p>
              <p className="text-sm text-gray-500">/ Month</p>
            </div>
            <ul className="mt-6 space-y-3 text-gray-600">
              <li className="bg-white p-2 rounded-md shadow-sm">60 Templates</li>
              <li className="bg-white p-2 rounded-md shadow-sm">8 Landing Pages</li>
              <li className="bg-white p-2 rounded-md shadow-sm">22 Internal Pages</li>
              <li className="bg-white p-2 rounded-md shadow-sm">Priority Assistance</li>
              <li className="bg-white p-2 rounded-md shadow-sm">Lifetime Updates</li>
            </ul>
            <button className="mt-6 w-full bg-blue-800 text-white py-3 rounded-full hover:bg-blue-900">
              Buy Now
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}