import { useState } from "react";
// Import link untuk route
import { Link } from "wouter";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <header class="text-black relative">
        <div class="w-full lg:w-6/7 mx-auto flex justify-between items-center p-4">
          <div class="font-bold">
            <a href="#">
              <ul class="flex space-y-0 space-x-0 flex-col items-center">
                <li class="list-disc">Bayu</li>
                <li class="transform rotate-180">Ferdianto</li>
              </ul>
            </a>
          </div>
          {/* Navigation */}
          <nav className="hidden md:flex items-center text-sm space-x-12">
            <ul className="flex gap-x-8 lg:gap-x-12">
              <li className="group relative">
                <Link href="/">Home</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/about">About</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/projects">Projects</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/services">Services</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/contact">Contact</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
            </ul>
          </nav>
          {/* Mobile Menu */}
          <button
            id="menu-toggle"
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-black focus:outline-none pointer-events-auto cursor-pointer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
        {/* Mobile Navigation */}
        <div
          id="mobile-menu"
          className={`${isOpen ? "flex" : "hidden"} md:hidden bg-white/10
    backdrop-blur-md
    border border-white/20
    shadow w-50 p-4 absolute top-full right-4 z-99`}
        >
          <nav className="w-full sm:text-lg">
            <ul className="flex flex-col gap-y-4 items-center list-none w-full">
              <li className="group relative">
                <Link href="/">Home</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/about">About</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/projects">Projects</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/services">Services</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
              <li className="group relative">
                <Link href="/contact">Contact</Link>
                <span className="w-0 h-1 group-hover:w-full bg-black absolute -bottom-1 left-0 transition-all duration-300 ease-in-out"></span>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
