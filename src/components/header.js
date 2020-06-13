import React from "react";
import { Link } from "gatsby";
import logo from "../images/living-type-logo.png";

const Header = ({ siteTtitle, menu }) => (
  <header className="bg-black">
    <nav className="container flex flex-col sm:flex-row justify-center sm:justify-between items-center py-3">
      <Link to="/" className="">
        <img src={logo} alt={siteTtitle} />
      </Link>
      <ul className="flex space-x-4 uppercase">
        {menu.map((item, index) => (
          <li key={index}>
            <Link to={item.link} className="text-white" activeClassName="active">
              {item.name}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  </header>
);

export default Header;
