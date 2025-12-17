"use client";
import Image from "next/image";
import React, { useState } from "react";
import Logo from "../assets/pexels-foteros-352505.jpg";
import { BiCaretDown } from "react-icons/bi";
import { BiCaretUp } from "react-icons/bi";
import { FiMinus, FiPlus } from "react-icons/fi";

import Menu from "./Menu";
import HiddenMenu from "./HiddenMenu";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isMoreOpen, setIsMoreOpen] = useState(false);
  const links = [
    {
      name: "Live",
    },
    {
      name: "Push",
    },
    {
      name: "Note",
    },
    {
      name: "Link",
    },
    {
      name: "Shop",
    },
    {
      name: "Packs",
    },
    {
      name: "Help",
    },
    {
      name: "Move",
    },
  ];

  return (
    <>
      <div
        className={`max-w-[1600px] h-25 mx-auto w-full bg-white flex justify-between ${
          isMoreOpen ? "border-b-0" : "border-b-2"
        } border-b-[#eeeeee] px-4 lg:px-8`}
      >
        <div className="flex gap-8 items-center">
          <Image
            src={Logo}
            alt="logo"
            width={50}
            className="rounded-full z-52"
          />
          <div className="hidden lg:flex items-center gap-8">
            {links.map((link, id) => (
              <div
                key={id}
                className="font-futura-medium desktop:text-xl cursor-not-allowed"
              >
                {link.name}
              </div>
            ))}
            <button
              className="font-futura-medium desktop:text-xl text-Orange flex items-center gap-1 cursor-pointer"
              onClick={() => setIsMoreOpen(!isMoreOpen)}
            >
              More
              {isMoreOpen ? (
                <FiMinus className="mt-1" />
              ) : (
                <FiPlus className="mt-1" />
              )}
            </button>
          </div>
          <button
            className={`flex lg:hidden items-center gap-2 cursor-pointer z-51 transition-all duration-600 ${
              isOpen ? "text-white" : "text-black"
            }`}
            onClick={() => setIsOpen(!isOpen)}
          >
            <span className="text-xl font-futura-medium">Menu</span>
            {isOpen ? <BiCaretUp /> : <BiCaretDown />}
          </button>
          {/* Menu */}
          <Menu isOpen={isOpen} links={links} />
        </div>

        <div className="hidden lg:flex items-center gap-8">
          <div className="text-Dark-blue font-futura-medium xl:text-xl">
            Try Live 12 for free
          </div>
          <div className="font-futura-medium">Log in or register</div>
        </div>
      </div>
      {isMoreOpen && (
        <div className="hidden lg:block">
          <HiddenMenu />
        </div>
      )}
    </>
  );
}
