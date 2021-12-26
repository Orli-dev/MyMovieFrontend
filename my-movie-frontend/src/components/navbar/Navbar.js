import React, { Component } from "react";
import { Button } from "../button/Button";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";

class Navbar extends Component {
  //search API
  // const fetchData = async (searchString) => {
  //   const response = await Axios.get(
  //     `https://www.omdbapi.com/?s=${searchString}&apikey=${API_KEY}`,
  //   );
  //   updateMovieList(response.data.Search);
  // };

  // const onTextChange = (e) => {
  //   onMovieSelect("")
  //   clearTimeout(timeoutId);
  //   updateSearchQuery(e.target.value);
  //   const timeout = setTimeout(() => fetchData(e.target.value), 500);
  //   updateTimeoutId(timeout);
  // };
  state = { clicked: false };

  render() {
    return (
      <nav className="NavbarItems">
        <h1 className="navbar-logo">
          My Movie
          <i className="fas fa-tv"></i>
        </h1>

        <div className="searchBox">
          <i className="fas fa-search"></i>
          <Link to="/Catalog">
            <input
              className="searchInput"
              placeholder="Search Movie\Serie ..."
            />
          </Link>
        </div>

        <ul className={this.state.clicked ? "nav-menu active" : "nav-menu"}>
          {MenuItems.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  {item.title}
                </Link>
              </li>
            );
          })}
        </ul>
        <Link to={"/SignIn"}>
          <Button>Sign In</Button>
        </Link>
      </nav>
    );
  }
}
export default Navbar;
