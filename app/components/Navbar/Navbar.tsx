"use client";
import Link from "next/link";
import { useEffect, useState } from "react";
import MenuButton from "./MenuButton/MenuButton";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const projectSection = document.getElementById("project");
      if (projectSection) {
        if (window.scrollY > projectSection.offsetTop) {
          setIsScrolled(true);
        } else {
          setIsScrolled(false);
        }
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav
      className={`${
        isScrolled ? "bg-color-dark" : ""
      } fixed top-0 w-full z-50 transition-colors duration-500`}
    >
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex md:flex-row md:justify-around justify-between items-center h-16">
          <div className="flex items-center">
            <Link
              href="/"
              className={`text-${
                isScrolled ? "color-accent" : "color-dark"
              } md:text-lg font-semibold text-md hover:text-color-secondary transition-all duration-300`}
            >
              Aditya Putra
            </Link>
          </div>
          <div
            className={`md:hidden ${
              isOpen ? "transform translate-x-0" : "transform translate-x-full"
            } absolute left-0 top-16 pt-2 w-full bg-color-dark z-10 transition-transform duration-500`}
          >
            <Link
              href="#home"
              className="block px-4 py-2 text-color-accent hover:text-opacity-70 text-md "
            >
              Home
            </Link>
            <Link
              href="#project"
              className="block px-4 py-2 text-color-accent hover:text-opacity-70 text-md "
            >
              Project
            </Link>
            <Link
              href="#about"
              className="block px-4 py-2 text-color-accent hover:text-opacity-70 text-md "
            >
              About
            </Link>
          </div>
          <div className="hidden md:flex items-center justify-between gap-8">
            <Link
              href="#home"
              className={`text-${
                isScrolled ? "color-accent" : "color-dark"
              } md:text-lg font-semibold text-md hover:text-color-secondary transition-all duration-300`}
            >
              Home
            </Link>
            <Link
              href="#project"
              className={`text-${
                isScrolled ? "color-accent" : "color-dark"
              } md:text-lg font-semibold text-md hover:text-color-secondary transition-all duration-300`}
            >
              Project
            </Link>
            <Link
              href="#about"
              className={`text-${
                isScrolled ? "color-accent" : "color-dark"
              } md:text-lg font-semibold text-md hover:text-color-secondary transition-all duration-300`}
            >
              About
            </Link>
          </div>
          <MenuButton isOpen={isOpen} toggleMenu={toggleMenu} />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
