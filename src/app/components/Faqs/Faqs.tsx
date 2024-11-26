"use client";
import React from "react";

export default function FAQs() {
  return (
    <section className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl font-bold">Any Questions?</h2>
        <p className="mt-4 text-lg text-gray-600">
          And we have got answers to all of them. Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>

        <div className="mt-8 space-y-6">
          {/* Example FAQ Item 1 */}
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">What is the purpose of this platform?</h3>
            <p className="mt-2 text-gray-600">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum tincidunt urna et risus facilisis, ac venenatis dui interdum.</p>
          </div>

          {/* Example FAQ Item 2 */}
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">How can I subscribe to the newsletter?</h3>
            <p className="mt-2 text-gray-600">To subscribe, simply enter your email address in the subscription form located at the bottom of the page.</p>
          </div>

          {/* Example FAQ Item 3 */}
          <div className="border-b pb-4">
            <h3 className="text-xl font-semibold">How do I contact customer support?</h3>
            <p className="mt-2 text-gray-600">You can reach customer support by clicking the "Support" link in the footer, or through the "Contact Us" page.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
