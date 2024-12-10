"use client";

import { useState } from "react";
import { X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { HiMenu } from "react-icons/hi";

const Nav = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="">
      {/* Navbar Header */}
      <div className="flex items-center justify-end gap-16 py-3 bg-white  ">
        {/* Logo Centered */}
        <div className="flex items-center justify-center mr-10">
          <Image src="/images/logo.svg" alt="logo" width={100} height={100} />
        </div>

        {/* Menu Button */}
        <button onClick={toggleMenu} className="text-gray-800">
          <HiMenu className="w-8 h-6 font-bold" />
        </button>
      </div>

      {/* Overlay and Sidebar */}
      {isMenuOpen && (
        <>
          {/* Overlay */}
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-40"
            onClick={toggleMenu} // Closes menu when clicking outside
          ></div>

          {/* Sidebar */}
          <div className="absolute top-0 right-0 h-full md:w-full w-[80%] md:p-10 bg-[#F1F1F1] shadow-lg z-50">
            {/* Close Button */}
            <button
              onClick={toggleMenu}
              className="absolute top-4 right-4 md:top-10 md:right-10 text-[#A6AAB3] hover:text-[#5653FE]"
            >
              <X className="w-7 h-7 text-[20px] font-extrabold" />
            </button>

            {/* Navigation Links */}
            <nav className="flex flex-col mt-14 p-6 space-y-3">
              <Link href="#" className="text-black text-[19px]">
                Terms & Conditions
              </Link>
              <Link href="#" className="text-black text-[19px]">
                Privacy Policy
              </Link>
              <Link href="#" className="text-black text-[19px]">
                Subscription Terms
              </Link>
              <Link href="#" className="text-black text-[19px]">
                Support Center
              </Link>
            </nav>
          </div>
        </>
      )}
    </div>
  );
};

export default Nav;
