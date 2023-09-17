import React from "react";
import PropTypes from "prop-types";
import "./Navbar.css";
import { Link } from "react-router-dom/cjs/react-router-dom";
export default function Navbar(props) {
  return (
    <>
      <nav
        id="navbar"
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <ul className="navbar-nav ">
            <li className="nav-item ">
              <Link className="nav-link font-bold" aria-current="page" to="/">
                TextUtils
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active " aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item ">
              <Link className="nav-link active" aria-current="page" to="/about">
                {props.HomeText}
              </Link>
            </li>
          </ul>


          
          <div className="d-flex ">
            

            <div
              className="bg-primary rounded mx-2"
              onClick={() => {
                props.toggleMode("primary");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-danger rounded mx-2"
              onClick={() => {
                props.toggleMode("danger");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-success  rounded mx-2"
              onClick={() => {
                props.toggleMode("success");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-warning rounded mx-2"
              onClick={() => {
                props.toggleMode("warning");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-light rounded mx-2"
              onClick={() => {
                props.toggleMode("light");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
            <div
              className="bg-dark rounded mx-2"
              onClick={() => {
                props.toggleMode("dark");
              }}
              style={{ height: "30px", width: "30px", cursor: "pointer" }}
            ></div>
          </div>
          {/* <div className="collapse navbar-collapse" id="navbarNav">
              <div
                className={`form-check form-switch text-${props.mode === "light" ? "dark" : "light"}`}id="navbarNav">
                <input
                  onClick={()=>{props.toggleMode(null)}}
                  className="form-check-input mx-2"
                  type="checkbox"
                  role="switch"
                  id="flexSwitchCheckDefault"
                />
                <label
                  className="form-check-label"
                  htmlFor="flexSwitchCheckDefault"
                >
                  {`${props.mode === 'light'? 'DarkMode':'LightMode'}`}
                </label>
              </div>
          </div> */}
        </div>
      </nav>
    </>
  );
}

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  HomeText: PropTypes.string.isRequired,
};

Navbar.defaultProps = {
  title: "Set title hear",
  HomeText: "Home text here",
};
