import React, { Component } from "react";
import { MenuItems } from "./MenuItems";
import icon from "../../images/tv.png";
import "./Navbar.css";
class Navbar extends Component {
  statte = {};
  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          My Movie
          <img className="logo" src={icon}></img>
        </h1>
        <div className="menu-icon"></div>
        <ul>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}
export default Navbar;
