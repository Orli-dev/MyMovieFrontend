import React, { Component } from "react";
import { Button } from "../button/Button";
import { MenuItems } from "./MenuItems";

import "./Navbar.css";

class Navbar extends Component {
  state = { clicked: false };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          My Movie
          <i class="fas fa-tv"></i>
        </h1>

        <div className="searchBox">
          <i class="fas fa-search"></i>
          <input className="searchInput" placeholder="Search Movie\Serie ..." />
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
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

        <Button>Sign Up</Button>
      </nav>
    );
  }
}
export default Navbar;
