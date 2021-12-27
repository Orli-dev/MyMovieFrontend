import React from "react";
import "./Modal.css";
import { Button } from "../button/Button";

function Modal({ setOpenModal }) {
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={() => {
              setOpenModal(false);
            }}
          >
            X
          </button>
        </div>

        <div className="main">
          <div className="sub-main">
            <div>
              <div>
                <h1>Login Page</h1>
                <div>
                  <input type="text" placeholder="user name" className="name" />
                </div>
                <div className="second-input">
                  <input
                    type="password"
                    placeholder="password"
                    className="name"
                  />
                </div>
                <div className="login-button">
                  <Button>Login</Button>
                </div>

                <p className="link">
                  <i className="sub-link">Forgot password ? </i> Or
                  <i className="sub-link"> Sign Up</i>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal;
