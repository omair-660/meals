import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../../assets/logo.png";
export default function NavBar() {
  let links = [
    { name: "home", link: "/" },
    { name: "Categories", link: "/Categories" },
    { name: "aria", link: "/aria" },
    { name: "Ingredients", link: "/ingredients" },
  ];
  const [isOpen, setisOpen] = useState(false);
  return (
    <>
      <nav className="bg-slate-950 shadow-md w-full fixed top-0 left-0 px-11 z-50">
        <div className="md:flex items-center justify-between py-4">
          <div className="logo flex items-center text-white gap-3 font-bold text-xl">
            <img src={logo} alt="logo" className="w-[35px]" /> <h3>yummy</h3>
          </div>
          <div
            onClick={() => setisOpen(!isOpen)}
            className="menu absolute right-5 top-6 md:hidden cursor-pointer"
          >
            <i
              aria-label={isOpen ? "Close menu" : "Open menu"}
              className={`transform transition-transform duration-500 text-xl ${
                isOpen
                  ? "fa-solid fa-xmark rotate-180 text-red-500"
                  : "fa-solid fa-bars rotate-0 text-white"
              }`}
            />
          </div>
          <ul
            className={`bg-slate-950 md:bg-transparent md:flex md:items-center md:pb-0 pb-12 absolute md:static md:w-auto w-full left-0 md:z-auto z-[-1] md:pl-0 pl-9 transition-all duration-500 ease-in ${
              isOpen
                ? "top-14 opacity-100"
                : "opacity-0 md:opacity-100 top-[-490px]"
            }`}
          >
          
            {links.map((link, index) => (
              <li key={index} className="md:ml-8 text-xl md:my-0 my-4">
             <NavLink
      to={link.link}
      className={({ isActive }) =>
        `text-gray-50 hover:text-gray-300 transition duration-500 capitalize ${isActive ? 'text-[#ffc107] active' : 'text-gray-50'}`
      }
    >
      {link.name}
    </NavLink>
              </li>
            ))}
            <li>
              <Link className="bg-yellow-700 px-4 py-2 ms-5 rounded text-white" to={'/search'}>Search</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}
