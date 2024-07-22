import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../constants";
import HamburgerMenu from "./HamburgerMenu";
import { useState } from "react";
function Nav() {
  let [hamburgerMenu, setHamburgerMenu] = useState(false);
  function closeHamburgerMenu() {
    setHamburgerMenu(false);
  }

  return (
    <header className="padding-x py-8 absolute z-[1000] w-full">
      <nav className="flex justify-between items-center max-container">
        <a href="/">
          <img src={headerLogo} alt="Logo" width={130} height={29} />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-16 max-lg:hidden">
          {navLinks.map((item) => {
            return (
              <li key={item.label}>
                <a
                  href={item.href}
                  className="font-montserrat leading-normal text-lg text-slate-gray hover:text-slate-950"
                >
                  {item.label}
                </a>
              </li>
            );
          })}
        </ul>

        <button
          className="hidden max-lg:block"
          onClick={() => {
            setHamburgerMenu(!hamburgerMenu);
          }}
        >
          <img src={hamburger} alt="Hamburger" width={25} height={25} />
        </button>
      </nav>
      <HamburgerMenu
        hamburgerMenu={hamburgerMenu}
        closeHamburgerMenu={closeHamburgerMenu}
      />
    </header>
  );
}

export default Nav;
