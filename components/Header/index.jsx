import Image from "next/image";
import React, { useCallback, useEffect, useState } from "react";

import NavItem from "./NavItem";
import MobileMenu from "../MobileMenu";
import AccountMenu from "../AccountMenu";

import { AiOutlineBell } from "react-icons/ai";
import { IoChevronDownCircleOutline } from "react-icons/io5";
import { HiOutlineMagnifyingGlass } from "react-icons/hi2"

const Header = () => {
  const [showAccountMenu, setShowAccountMenu] = useState(false);
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [showBackground, setShowBackground] = useState(false);
  const TOP_OFFSET = 66;
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= TOP_OFFSET) {
        setShowBackground(true);
      } else {
        setShowBackground(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleAccountMenu = useCallback(() => {
    setShowAccountMenu((current) => !current);
  }, []);

  const toggleMobileMenu = useCallback(() => {
    setShowMobileMenu((current) => !current);
  }, []);

  return (
    <nav className="w-full fixed z-40">
      <div
        className={`px-4 md:px-16 py-6 flex flex-row items-center transition duration-500 ${
          showBackground ? "bg-zinc-900/90" : ""
        }`}
      >
        <Image width={112} height={28} src="/images/logo.png" className="h-4 w-28 lg:h-7" alt="Logo" />
        <ul className="flex-row ml-8 gap-7 hidden lg:flex">
          <NavItem label="Home" active />
          <NavItem label="Series" />
          <NavItem label="Films" />
          <NavItem label="New & Popular" />
          <NavItem label="My List" />
          <NavItem label="Browse by Languages" />
        </ul>
        <div
          onClick={toggleMobileMenu}
          className="lg:hidden flex flex-row items-center gap-2 ml-8 cursor-pointer relative"
        >
          <p className="text-white text-sm">Browse</p>
          <IoChevronDownCircleOutline
            className={`w-4 text-white fill-white transition ${
              showMobileMenu ? "rotate-180" : "rotate-0"
            }`}
          />
          <MobileMenu visible={showMobileMenu} />
        </div>
        <div className="flex flex-row ml-auto gap-7 items-center">
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <HiOutlineMagnifyingGlass className="w-8 h-8" />
          </div>
          <div className="text-gray-200 hover:text-gray-300 cursor-pointer transition">
            <AiOutlineBell className="w-8 h-8" />
          </div>
          <div
            onClick={toggleAccountMenu}
            className="flex flex-row items-center gap-2 cursor-pointer relative"
          >
            <div className="w-8 h-8 lg:w-10 lg:h-10 rounded-md overflow-hidden lg:mx-4">
              <img src="/images/default-blue.png" alt="avatar" />
            </div>
            <IoChevronDownCircleOutline
              className={`w-8 h-8 text-white fill-white transition ${
                showAccountMenu ? "rotate-180" : "rotate-0"
              }`}
            />
            <AccountMenu visible={showAccountMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
