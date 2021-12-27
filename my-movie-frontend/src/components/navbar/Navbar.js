import React, { useState } from "react";
import { Button } from "../button/Button";
import { MenuItems } from "./MenuItems";
import { Link } from "react-router-dom";
import "./Navbar.css";
import Modal from "../pages/Modal";
// import styled from "styled-components";

export const Navbar = () => {
  const [modalOpen, setModalOpen] = useState(false);
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
  const state = { clicked: false };

  return (
    <nav className="NavbarItems">
      <h1 className="navbar-logo">
        My Movie
        <i className="fas fa-tv"></i>
      </h1>

      <div className="searchBox">
        <i className="fas fa-search"></i>
        <Link to="/Catalog">
          <input className="searchInput" placeholder="Search Movie\Serie ..." />
        </Link>
      </div>

      <ul className={state.clicked ? "nav-menu active" : "nav-menu"}>
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

      <Button
        onClick={() => {
          setModalOpen(true);
        }}
      >
        Sign In
      </Button>

      {modalOpen && <Modal setOpenModal={setModalOpen} />}
    </nav>
  );
};

export default Navbar;
