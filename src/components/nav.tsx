"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { DarkButton } from "./ui/darkButton";
import { Menu } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

const navItems = [
  { id: 1, text: "Home", href: "/" },
  { id: 2, text: "Booking", href: "/booking" },
  { id: 3, text: "Gallery", href: "/gallery" },
  { id: 4, text: "Contact Us", href: "/contact-us" },
];

export const Nav = () => {
  const [nav, showNav] = useState(false);
  const navRef = useRef<HTMLDivElement>(null);
  const pathname = usePathname();

  const handleNav = () => {
    showNav((prev) => !prev);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (navRef.current && !navRef.current.contains(event.target as Node)) {
      showNav(false);
    }
  };

  useEffect(() => {
    if (nav) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [nav]);

  return (
    <div className=" md:text-2xl text-xl relative ">
      <nav className="py-2 flex gap-10 bg-white items-center justify-between  lg:px-12 px-4 ">
        <Link href={"/"}>
          <h1 className="custom-gradient-text lg:text-[40px] text-3xl font-bold">
            Doncaster Housing
          </h1>
        </Link>

        <ul className="gap-10 text-lg hidden md:flex">
          {navItems.map((items) => {
            const isActive = pathname === items.href;
            return (
              <li
                key={items.id}
                className={`${
                  isActive ? `border-b border-[#1B54A9]` : `border-none`
                }`}
              >
                {" "}
                <Link href={items.href}>{items.text}</Link>
              </li>
            );
          })}
        </ul>
        <Link target="_blank" href="https://calendly.com/bookablestr/30min">
          <DarkButton
            text="Make a Reservation"
            classname="text-xl hidden lg:block my-2"
          />
        </Link>

        {/* Mobile Menu Button */}
        <div
          onClick={handleNav}
          className="cursor-pointer md:hidden block pr-[10px] text-black"
        >
          <Menu />
        </div>
      </nav>

      {/* Background Overlay */}
      <AnimatePresence>
        {nav && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black cursor-pointer bg-opacity-10 backdrop-blur-sm z-10"
            />
            {/* Animated Mobile Nav */}
            <motion.div
              ref={navRef}
              initial={{ x: "-100%", opacity: 0 }}
              animate={{ x: "0%", opacity: 1 }}
              exit={{ x: "-100%", opacity: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="h-screen pt-[52px] fixed inset-0 w-[75%] max-w-[270px] bg-white text-[#121212] z-20"
            >
              {/* <div
                className="absolute top-4 right-4 cursor-pointer"
                onClick={handleNav}
              >
                <X />
              </div> */}

              <Link href={"/"}>
                <h1 className="custom-gradient-text text-[28px] pl-2 font-bold">
                  Doncaster Housing
                </h1>
              </Link>

              <ul className="space-y-[48px] pl-2 mx-3 pt-[40px] text-black">
                {navItems.map((items) => {
                  const isActive = pathname === items.href;
                  return (
                    <li
                      key={items.id}
                      className={`${
                        isActive
                          ? `border-b w-fit border-[#1B54A9]`
                          : `border-none`
                      }`}
                    >
                      {" "}
                      <Link href={items.href}>{items.text}</Link>
                    </li>
                  );
                })}
              </ul>
              <div className="mt-20 mx-3">
                <Link
                  target="_blank"
                  href="https://calendly.com/bookablestr/30min"
                >
                  <DarkButton
                    text="Make a Reservation"
                    classname="text-xl py-5 px-3"
                  />
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};
