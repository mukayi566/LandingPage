"use client";
import { useState } from "react";
import { GoX } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const links = [
    { route: "/", name: "About" },
    { route: "/", name: "Blog" },
    { route: "/", name: "Pricing" },
    { route: "/", name: "Contact Us" },
    { route: "/", name: "Testimonials" },
  ];

  const [menu, setMenu] = useState(false);

  const toggleMenu = () => setMenu((prev) => !prev);

  return (
    <nav className="z-20">
      {/* Desktop View */}
      <div className="hidden lg:flex items-center p-4 shadow-sm">
         <div className="flex w-20 justify-start text-black">
            <p>Lupui</p>
          </div>
        {/* Links */}
        <div className="flex gap-8 text-gray-700 justify-items-center items-center justify-items-center">
          {links.map((link, index) => (
            <a
              key={index}
              href={link.route}
              className="hover:text-blue-500 cursor-pointer font-medium"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* Login and Sign Up */}
        <div className="ml-auto px-10 flex gap-4">
          <button className="text-gray-700 hover:text-blue-500 font-medium">
            Login
          </button>
          <button className="bg-blue-800 text-white px-4 py-2 rounded-full hover:bg-blue-900">
            Sign Up
          </button>
        </div>
      </div>

     <div className="lg:hidden bg-white ">
      {/* Mobile View */}
      <div className="lg:hidden display top-0 w-full">
        <div className="flex justify-end p-4">

          {/* Hamburger or Close Icon */}
          {menu ? (
            <GoX
              className="text-3xl cursor-pointer text-black"
              onClick={toggleMenu}
            />
          ) : (
            <RxHamburgerMenu
              className="text-3xl cursor-pointer text-black"
              onClick={toggleMenu}
            />
          )}
        </div>

        {/* Dropdown Menu */}
        {menu && (
          <div
            className="absolute top-16 w-full h-[50vh] bg-gray-100 p-6 flex flex-col items-start gap-4 animate-slide-in items-center justify-items-center"
            style={{
              animation: "slide-down 0.3s ease-out",
            }}
          >
            {links.map((link, index) => (
              <a
                key={index}
                href={link.route}
                className="text-gray-700 font-medium hover:text-blue-500"
              >
                {link.name}
              </a>
            ))}

            <div className="mt-4 flex flex-col gap-2 w-full">
              <button className="text-gray-700 hover:text-blue-500 font-medium">
                Login
              </button>
              <button className="bg-blue-800 py-3 w-[23vh] text-white px-7 rounded-full hover:bg-blue-900">
                Sign Up
              </button>
            </div>
          </div>
        )}
      </div>
      </div>
    </nav>
  );
}

export default NavBar;
