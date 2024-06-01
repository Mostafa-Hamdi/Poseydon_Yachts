"use client";
import React, {  useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Navbar = () => {
  const [menuOpen, setMenu] = useState(false);
  const [nestedUl, setNestedUl] = useState(false);
  const pathname = usePathname();
  const handleNav = () => {
    setMenu(!menuOpen);
  };
  const handleNestedMunu = () => {
    setNestedUl(!nestedUl);
  };
  return (
    <div className="navbar-container align-items-center">
      <div className="mw-100">
        <div className="h-100">
          <nav>
            <ul
              className={`links p-relative ${
                menuOpen ? "d-flex" : "d-none"
              }  w-100 text-white`}
            >
              <li className={`item ${pathname === '/'? 'active' : ''}`}>
                <Link href="/" className={`link `}>Home</Link>
              </li>
              <li className={`item ${pathname === '/about'? 'active' : ''}`}>
                <Link href="/about" className={`link `}>About Us</Link>
              </li>
              <li className={`item ${pathname === '/services'? 'active' : ''}`}>
                <Link href="/services" className={`link `}>Services</Link>
              </li>
              <li className={`yachts item d-flex ${nestedUl ? "active" : ""}  ${pathname === '/yachts' || pathname === '/yachts/yachtsPart2' || pathname === '/yachts/yachtsPart3' ||pathname === '/yachts/yachtsPart4' || pathname === '/yachts/yachtsPart5' ||pathname === '/yachts/yachtsPart6'? 'active' : ''}`}>
                  <Link href="/yachts" className={`link`}>Yachts</Link>
                  <span className="cursor-pointer">
                    <svg
                      onClick={handleNestedMunu}
                      className="e-font-icon-svg e-fas-caret-down"
                      viewBox="0 0 320 512"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path d="M31.3 192h257.3c17.8 0 26.7 21.5 14.1 34.1L174.1 354.8c-7.8 7.8-20.5 7.8-28.3 0L17.2 226.1C4.6 213.5 13.5 192 31.3 192z"></path>
                    </svg>
                  </span>
                <ul className="nested-ul">
                  <div></div>
                  <li>
                    <Link href="/luxurious" className={`link ${pathname === '/luxurious'? 'active' : ''}`}>
                      Luxurious
                    </Link>
                  </li>
                  <li>
                    <Link href="/premium" className={`link ${pathname === '/premium'? 'active' : ''}`}>
                      Premium{" "}
                    </Link>
                  </li>
                  <li>
                    <Link href="/standard" className={`link ${pathname === '/standard'? 'active' : ''}`}>
                      Standard
                    </Link>
                  </li>
                </ul>
              </li>
              <li className={`nested-menu item ${nestedUl ? "d-block" : "d-none"} ${pathname === '/luxurious'? 'active' : ''}`}>
                <Link href="/luxurious" className={`link `}>
                  Luxurious
                </Link>
              </li >
              <li className={`nested-menu item ${nestedUl ? "d-block" : "d-none"}`}>
                <Link href="/premium" className={`link ${pathname === '/premium'? 'active' : ''}`}>
                  Premium{" "}
                </Link>
              </li>
              <li className={`nested-menu item ${nestedUl ? "d-block" : "d-none"} ${pathname === '/standard'? 'active' : ''}`}>
                <Link href="/standard" className={`link `}>
                  Standard
                </Link>
              </li>
              <li className={`item ${pathname === '/contact'? 'active' : ''}`}>
                <Link href="/contact" className={`link`}>
                  Contact Us
                </Link>
              </li >
              <li className={`item ${pathname === '/wishlist'? 'active' : ''}`}>
                <Link href="/wishlist" className={`link`}>
                  My Wishlist
                </Link>
              </li>
            </ul>
            <div className="toggle-menu  justify-content-end">
              <svg
                onClick={handleNav}
                className={`toggle-shift ${menuOpen ? "d-none" : "d-block"} elementor-menu-toggle__icon--open e-font-icon-svg e-eicon-menu-bar`}
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M104 333H896C929 333 958 304 958 271S929 208 896 208H104C71 208 42 237 42 271S71 333 104 333ZM104 583H896C929 583 958 554 958 521S929 458 896 458H104C71 458 42 487 42 521S71 583 104 583ZM104 833H896C929 833 958 804 958 771S929 708 896 708H104C71 708 42 737 42 771S71 833 104 833Z"></path>
              </svg>
              <svg
                onClick={handleNav}
                className={`close ${menuOpen ? "d-block" : "d-none"} elementor-menu-toggle__icon--close e-font-icon-svg e-eicon-close`}
                aria-hidden="true"
                role="presentation"
                viewBox="0 0 1000 1000"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M742 167L500 408 258 167C246 154 233 150 217 150 196 150 179 158 167 167 154 179 150 196 150 212 150 229 154 242 171 254L408 500 167 742C138 771 138 800 167 829 196 858 225 858 254 829L496 587 738 829C750 842 767 846 783 846 800 846 817 842 829 829 842 817 846 804 846 783 846 767 842 750 829 737L588 500 833 258C863 229 863 200 833 171 804 137 775 137 742 167Z"></path>
              </svg>
            </div>
          </nav>
        </div>
      </div>
      {/* <script src="../logic.js"></script> */}
    </div>
  );
};

export default Navbar;
