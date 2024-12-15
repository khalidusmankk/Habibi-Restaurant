import React from "react";

import { NavLink } from "react-router-dom";

//props are used to pass the from one component to another component using these props, similar to how the arguments are passed in a function.
// see props at the end of this page.
export default function Navbar1() {
  return (
    <>
      <div className="topNav " style={{ backgroundColor: "#0a2e2c", borderBottom: "2px solid yellow" }}>
        <img src="https://www.chinarresthouse.com/wp-content/uploads/2023/08/Chinar-New-Logo.png" alt="mainimage" />

        <div className="topNav2 d-flex justify-content-center ms-5 ps-5  " style={{ marginTop: "-55px" }}>
          <img
            src="https://img.freepik.com/premium-vector/map-inside-magnifier-flat-icon_738121-1160.jpg?w=2000"
            alt="mapsearch"
            style={{ height: "50px", width: "50px", marginLeft: "50px" }}
          />
          <span className="text-warning " style={{ fontSize: "13px", marginLeft: "10px" }}>
            {" "}
            Near Sharjah Masijid Timergara <br></br>
            <p className="text-secondary ">KPK Pakistan.</p>
          </span>

          <img
            src="https://w7.pngwing.com/pngs/532/239/png-transparent-computer-icons-mobile-phones-telephone-call-email-miscellaneous-telephone-call-text.png"
            alt="contact"
            style={{ height: "50px", width: "50px", marginLeft: "100px" }}
          />
          <span className="text-warning   " style={{ fontSize: "13px", marginLeft: "10px" }}>
            {" "}
            +923178940983 <br></br>
            <p className="text-secondary ">24/7 Customer Support</p>
          </span>

          <img
            src="https://www.nicepng.com/png/full/826-8263933_email-icons-white-color-message-vector-png.png"
            alt="mapsearch"
            style={{ height: "50px", width: "50px", marginLeft: "100px" }}
          />
          <span className="text-warning " style={{ fontSize: "13px", marginLeft: "10px" }}>
            {" "}
            example@chinar.com <br></br>
            <p className="text-secondary ">Feel Free to Mail Here</p>
          </span>
        </div>
      </div>
      <nav className="navbar navbar-expand-lg navbar-light    " style={{ backgroundColor: "#012c6d", height: "50px" }}>
        <div className="container-fluid">
          <button
            className="navbar-toggler  bg-light "
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="true"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon "></span>
          </button>
          <div className="collapse navbar-collapse  " id="navbarSupportedContent">
            <ul className="navbar-nav  mb-2 mb-lg-0 ms-lg-0 p-lg-5 ">
              <li className="nav-item ">
                <NavLink className="  nav-link text-light " aria-current="page" to="/About">
                  {" "}
                  <strong>About Us</strong>
                </NavLink>
              </li>

              <li className="nav-item">
                <NavLink className="nav-link text-light " aria-current="page" to="/Rooms">
                  {" "}
                  <strong>Rooms</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Services">
                  <strong>Services</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light" to="/Gallery">
                  {" "}
                  <strong>Gallery</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light " to="/Blogs">
                  <strong>Blogs</strong>
                </NavLink>
              </li>
              <li className="nav-item">
                <NavLink className="nav-link text-light " to="/Contacts1">
                  <strong>Contact Us</strong>
                </NavLink>
              </li>
              {/* <li className="nav-item">
            <NavLink className="nav-link text-light " to="/FormtryPlusBasics" ><strong>Forms</strong></NavLink>
          </li> */}
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
