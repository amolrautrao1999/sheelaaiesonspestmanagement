import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../img/logo.jpg"
import '../css/header.css'
import Enquiry from "./Enquiry";
const Navbar = () => {
  return (
    <>
      <div className="main-div">
        <div className="container navbar navbar-custom">
          <NavLink className="navbar-brand " to="/">
            <img src={logo} alt='logo' />
          </NavLink>
          <nav className="navbar navbar-expand-lg nav-hide">
            <div className="container-fluid  show">
              <div className="right">
                <button
                  className="navbar-toggler"
                  type="button"
                  data-bs-toggle="collapse"
                  data-bs-target="#navbarSupportedContent"
                  aria-controls="navbarSupportedContent"
                  aria-expanded="false"
                  aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
                </button>
                <div
                  className="collapse navbar-collapse .nav"
                  id="navbarSupportedContent">
                  <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/">
                        Home
                      </NavLink>
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link" to="/about">
                        About us
                      </NavLink>
                    </li>
                    <li className="nav-item ">
                      <NavLink
                        className="nav-link"
                        to="/service"
                        role="button"
                        data-bs-toggle=""
                        aria-expanded="false">
                        Services
                      </NavLink>
                      
                    </li>

                    <li className="nav-item">
                      <NavLink
                        className="nav-link enquiry"
                        aria-current="page"
                        // to="/enquiry"
                        data-bs-toggle="modal" data-bs-target="#exampleModal"
                      >
                        Enquiry
                      </NavLink >
                    </li>
                    <li className="nav-item">
                      <NavLink className="nav-link " aria-current="page" to="/contact">
                        Contact Us
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

          </nav>
        </div>
      </div>



      {/* enquiry Modal */}

      <div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
        {<Enquiry title="Submit Your Enquiry" modal="modalBody" buttonType="reset" buttonTitle="Close" closeBtn={true}/>}
      </div>

    </>
  );
};

export default Navbar;
