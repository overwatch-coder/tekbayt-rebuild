"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import { VscClose, VscMenu } from "react-icons/vsc";
import header_logo from "@/assets/icons/tekbayt-header-logo.png";
import Image from "next/image";
import { navLinks } from "@/constants/nav-items";
import Button from "./shared/Button";

const Header = () => {
  const pathname = usePathname();
  const [isNavOpen, setisNavOpen] = useState(false);
  useEffect(() => {
    if (pathname) {
      setisNavOpen(false);
    }
  }, [pathname]);

  return (
    <header className="sticky left-0 top-0 z-50 w-screen shadow-base bg-white mx-auto px-5 md:px-20">
      <div className="flex items-center justify-between py-3 md:py-2">
        {/* Logo */}
        <Link href={"/"}>
          <Image
            placeholder="blur"
            src={header_logo}
            width={40}
            height={40}
            quality={100}
            alt="Tekbayt header logo"
            className="object-contain"
          />
        </Link>

        {/* Hamburger Menu */}
        <div className="md:hidden flex items-center space-x-5">
          {isNavOpen ? (
            <VscClose
              onClick={() => setisNavOpen(false)}
              size={25}
              className="text-black-100 cursor-pointer "
            />
          ) : (
            <VscMenu
              onClick={() => setisNavOpen(true)}
              size={30}
              className="text-black cursor-pointer "
            />
          )}
        </div>

        {/* Desktop Navbar */}
        <nav className="items-center justify-center hidden gap-7 text-sm text-white uppercase md:flex">
          {navLinks.map(
            (navlink, idx) =>
              navlink.url !== "/contact-us" && (
                <Link
                  key={idx}
                  href={navlink.url}
                  className={`hover:text-blue-80 ${
                    pathname === navlink.url
                      ? "text-blue-100 font-semibold"
                      : "text-black-80 font-normal"
                  }`}
                >
                  {navlink.name}
                </Link>
              )
          )}

          <div className="w-[2px] h-12 bg-black-60" />

          <Button url="/contact-us" name="Contact Us" />
        </nav>
      </div>

      {/* Mobile Navbar */}
      <nav
        className={`flex-col py-10 gap-8 bg-white md:hidden ${
          isNavOpen ? "flex h-full z-50" : "hidden"
        } font-medium`}
      >
        {navLinks.map((navlink, idx) => (
          <Link
            key={idx}
            href={navlink.url}
            className="flex items-start gap-5 w-fit"
          >
            <Image
              placeholder="blur"
              src={navlink.icon}
              width={20}
              height={20}
              quality={100}
              alt={navlink.name}
              className="object-contain"
            />
            <span
              className={`hover:text-blue-80 ${
                pathname === navlink.url
                  ? "text-blue-100 font-semibold"
                  : "text-black font-medium"
              }`}
            >
              {navlink.name}
            </span>
          </Link>
        ))}
      </nav>
    </header>
  );
};

export default Header;
