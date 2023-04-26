import React, { useContext, useState } from "react";
import logo from "../../../assets/logeoWhite.png";
import Cart from "./Cart";
import { navItems } from "./navBarItems";
import { Link, NavLink } from "react-router-dom";
import { VscThreeBars } from "react-icons/vsc";
import { GLOBAL_CONTEXT } from "../../../layouts/AppLayout";

const NavBar = () => {
  const { user } = useContext(GLOBAL_CONTEXT);
  const [navbar, setNavBar] = useState(false);
  const changeBgScroll = () => {
    if (window.scrollY >= 50) {
      setNavBar(true);
    } else {
      setNavBar(false);
    }
  };
  window.addEventListener("scroll", changeBgScroll);

  return (
    <div
      className={`${
        navbar && "bg-black shadow-md"
      } sticky top-0 z-50 duration-500`}
    >
      <div className="navbar container mx-auto ">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn glass mr-2 lg:hidden">
              <VscThreeBars className="text-2xl text-white" />
            </label>
            <ul
              tabIndex={0}
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-black rounded-box w-52"
            >
              {navItems.slice(0, user ? 3 : 4).map((item, index) => (
                <li key={index}>
                  <NavLink to={item[1]} className="bg-[unset] text-white">
                    {item[0]}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
          <Link to="/home" className="">
            <img
              src={logo}
              alt=""
              className="w-[100px] duration-300  hover:scale-[0.9]"
            />
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navItems.slice(0, user ? 3 : 4).map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item[1]}
                  className="bg-[unset] text-white font-semibold  hover:text-[#fff9f999]"
                >
                  {index !== 0 && (
                    <div className="border-2 border-white rounded-full" />
                  )}
                  {item[0]}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>
        <div className="navbar-end">{user && <Cart />}</div>
      </div>
    </div>
  );
};

export default NavBar;
