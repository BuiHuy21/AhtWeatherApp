import React from "react";
import { NavLink } from "react-router-dom";
import Img from "../../asset/banner.webp";
const Nav = () => {
  return (
    <div className="header">
      <div className="nav">
        <ul>
          <li>
            <NavLink to="/" className="nav-item ">
              Today
            </NavLink>
          </li>
          <li>
            <NavLink to="/week" className="nav-item">
              Week
            </NavLink>
          </li>
          <li>
            <NavLink to="/hour" className="nav-item">
              Hour
            </NavLink>
          </li>
        </ul>
      </div>
      <div className="avatar">
        <img src={Img} alt="avatar" />
      </div>
    </div>
  );
};

export default Nav;
