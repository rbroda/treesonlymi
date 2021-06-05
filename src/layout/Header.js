import React, { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";

import SVG from "../assets/color_logo_transparent.png";

function Header() {
  const [active, setActive] = useState(false);

  const onClick = () => {
    setActive(!active);
  };
  const scrollToTop = () => {
    scroll.scrollToTop();
  };

  return (
    <header className="min-w-full z-50 bg-black text-white fixed">
      <div className="max-w-7xl mx-auto flex justify-between max-h-16">
        <div
          onClick={scrollToTop}
          className="flex items-center p-2 cursor-pointer"
        >
          <img src={SVG} alt="logo" className="max-h-40 py-5" />
        </div>
        <div
          onClick={onClick}
          className="md:hidden flex items-center uppercase text-2xl p-4"
        >
          {!active ? (
            <i className="fas fa-bars min-w-full"></i>
          ) : (
            <i className="fas fa-window-close"></i>
          )}
        </div>

        <nav
          className={`
          ${!active && "hidden"}
          absolute flex flex-col self-center items-center bg-black top-full w-1/2 right-0 z-20
          md:static md:w-auto md:flex
        `}
        >
          <ul className="md:flex-row md:flex w-full">
            <Link
              activeClass="active"
              to="Services"
              spy={true}
              smooth={true}
              offset={-16}
              duration={500}
              onClick={onClick}
            >
              <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer p-2.5 border-b-2 border-white md:border-none">
                <span>Service</span>s
              </li>
            </Link>
            <Link
              activeClass="active"
              to="About"
              spy={true}
              smooth={true}
              offset={-16}
              duration={500}
              onClick={onClick}
            >
              <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer p-2.5 border-b-2 border-white md:border-none">
                About
              </li>
            </Link>
            <Link
              activeClass="active"
              to="Contact"
              spy={true}
              smooth={true}
              offset={-16}
              duration={500}
              onClick={onClick}
            >
              <li className="list-none md:mr-5 flex w-full text-base uppercase hover:text-red-600 cursor-pointer p-2.5 ">
                Request a quote
              </li>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
