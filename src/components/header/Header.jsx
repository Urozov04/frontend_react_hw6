import React from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom';
import logo from "../../assets/logoo-removebg-preview.png"
import { LINKS } from '../../static/Static';

const Header = () => {
  const {pathname} = useLocation()
  const isBlack = pathname.startsWith("/food")
  return (
    <header className={`${isBlack ? "bg-blue-400" : "bg-gray-400"} text-white`}>
      <nav className="container h-20 mx-auto flex gap-8 items-center justify-between">
        <Link to={"/"}>
          <div>
            <img src={logo} width={150} alt="" />
          </div>
        </Link>
        <ul className="flex gap-4">
          {LINKS?.map((link) => (
            <li key={link.id}>
              <NavLink
                className={({ isActive }) =>
                  `text-base ${isActive ? "text-blue-800 underline" : ""}`
                }
                to={link.path}
              >
                {link.text}
              </NavLink>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Header