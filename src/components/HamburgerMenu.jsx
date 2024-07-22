import React from "react";
import { navLinks } from "../constants";
import { arrowRight } from "../assets/icons";

export default function HamburgerMenu({ hamburgerMenu, closeHamburgerMenu }) {
  return (
    <nav
      className={
        hamburgerMenu
          ? "flex flex-col bg-white fixed w-1/2 sm:w-1/3 h-full z-50 shadow-[rgba(149,157,165,0.2)_0px_8px_24px] translate-x-0 duration-300 ease-[ease-in-out] p-6 right-0 top-0 transition-all"
          : "hidden"
      }
    >
      <div className="w-1/3">
        <button
          className="absolute text-slate-950 transition-all duration-300 ease-[ease-in-out] right-3.5 pr-4
        hover:text-coral-red"
          onClick={closeHamburgerMenu}
        >
          X
        </button>
      </div>
      <ul className="mt-11">
        {navLinks.map((item) => (
          <li key={item.label} className="list-none ">
            <a
              href={item.href}
              className=" flex justify-between font-montserrat text-xl leading-normal text-slate font-semi-bold hover:text-slate-700"
              onClick={closeHamburgerMenu}
            >
              {item.label}
              <img src={arrowRight} alt="Hamburger" width={25} height={25} />
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
