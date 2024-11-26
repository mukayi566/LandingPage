"use client";
import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white text-gray-800 py-12 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Main Links */}
        <div aria-label="Main Links">
          <h3 className="text-lg font-bold">Main</h3>
          <ul className="space-y-4 mt-4">
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/faqs">FAQs</Link></li>
            <li><Link href="/support">Support</Link></li>
            <li><Link href="/about-us">About Us</Link></li>
          </ul>
        </div>

        {/* Column 2: Product Links */}
        <div aria-label="Product Links">
          <h3 className="text-lg font-bold">Product</h3>
          <ul className="space-y-4 mt-4">
            <li><Link href="/login">Log In</Link></li>
            <li><Link href="/personal">Personal</Link></li>
            <li><Link href="/business">Business</Link></li>
            <li><Link href="/team">Team</Link></li>
          </ul>
        </div>

        {/* Column 3: Legal Links */}
        <div aria-label="Legal Links">
          <h3 className="text-lg font-bold">Legal</h3>
          <ul className="space-y-4 mt-4">
            <li><Link href="/press">Press</Link></li>
            <li><Link href="/logos">Logos</Link></li>
            <li><Link href="/events">Events</Link></li>
            <li><Link href="/stories">Stories</Link></li>
          </ul>
        </div>

        {/* Column 4: Newsletter and Footer Info */}
        <div>
          <h3 className="text-lg font-bold">Subscribe to our Newsletter</h3>
          <p className="text-sm mt-2">
            We deliver high-quality blog posts written by professionals weekly. And we promise no spam.
          </p>
          <form className="mt-4" aria-label="Newsletter Subscription">
            <input
              type="email"
              placeholder="Your Email Address"
              className="p-2 w-full rounded-md text-gray-800"
              required
            />
            <button
              type="submit"
              className="mt-2 bg-blue-800 text-white px-6 py-2 rounded-full hover:bg-blue-900"
            >
              Subscribe
            </button>
          </form>

          <div className="mt-6 text-sm text-gray-500">
            <p>Treact Inc. &copy; 2024 Lupleg LLC. All Rights Reserved.</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
