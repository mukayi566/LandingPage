"use client";
import { useState } from "react";
import { GoX } from "react-icons/go";
import { RxHamburgerMenu } from "react-icons/rx";

function NavBar() {
  const links = [
    {
      route: "/",
      name: "About",
    },
    {
        route: "/",
        name: "Blog",
      },
    {
      route: "/",
      name: "Pricing",
    },
    {
      route: "/",
      name: "Contact Us",
    },
    {
      route: "/",
      name: "Testimionials",
    },
  ];
  const [menu, setMenu] = useState(false);
  const toggleMenu = () => {
    setMenu(!menu);
  };

  return (
    <div className="md:sticky md:top-0   md:shadow-none z-20 mt-[4rem] md:mt-0">
      {/* DESKTOP */}
      <div className=" hidden lg:block animate-in fade-in zoom-in bg-white p-4">
        <div className="flex justify-between mx-4 ">
          <div className="flex gap-[10px] xl:gap-[40px] text-[16px] items-center select-none">
            {links.map((item, index) => (
              <div key={index} className="flex gap-1">
                <p
                  className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                >
                  {item.name}
                </p>
              </div>
            ))}
          </div>
          <div className="flex items- gap-[20px] select-none">
          </div>
        </div>
      </div>
      {/* MOBILE */}
      <div
        className={` block lg:hidden shadow-sm  fixed top-0 w-full z-[999] bg-white py-4 animate-in fade-in zoom-in  ${
          menu ? " bg-primary py-2" : ""
        } `}
      >
        <div className="flex justify-between mx-[10px]">
          <div className="flex gap-[50px] text-[16px] items-center select-none">
          <RxHamburgerMenu 
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              /> 
          </div>
          <div className="flex items-center gap-[40px]">
            {menu ? (
              <GoX
                className="cursor-pointer animate-in fade-in zoom-in text-black"
                onClick={toggleMenu}
              /> 
            ) : (
              <p>=</p>
            )}
          </div>
        </div>
        {menu ? (
          <div className="my-8 select-none animate-in slide-in-from-right">
            <div className="flex flex-col gap-8 mt-8 mx-4">
              {links.map((item, index) => (
                <div key={index} className="flex gap-2">
                  <p
                    className={`hover:text-primary cursor-pointer flex items-center gap-2  font-[500] text-gray`}
                  >
                    {item.name}
                  </p>
                    <div />
                </div>
              ))}

              <div className="flex flex-col gap-[20px] select-none">
              <button
                  className="bg-white text-[#31373D] border-[#EDEEF0] hover:bg-white"
                >Sign in</button>
              </div>
            </div>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
