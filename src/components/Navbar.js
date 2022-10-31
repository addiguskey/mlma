import React, { useState } from "react";
import logo from "../assets/images/logo.png";
import {
  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from "mdb-react-ui-kit";
import { Link, useLocation } from "react-router-dom";

const styles = {
  logo: {
    maxHeight: "14rem",
    maxWidth: "14rem",
    padding: "1rem",
  },
  span: {
    fontWeight: "bold",
  },
  li: {
    listStyle: "none",
    textDecoration: "none",
  },
};
export default function Navbar() {
  const [showAnimated, setShowAnimated] = useState(false);
  return (
    <div>
      <div className="d-flex flex-column text-right align-items-end">
        <section className="">
          <MDBNavbar>
            <MDBContainer fluid>
              <MDBNavbarToggler
                type="button"
                className="border-0 "
                data-target="#navbarToggleExternalContent"
                aria-controls="navbarToggleExternalContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
                onClick={() => setShowAnimated(!showAnimated)}
              >
                <div className={`animated-icon1 ${showAnimated && "open"}`}>
                  <span></span>
                  <span></span>
                  <span></span>
                </div>
              </MDBNavbarToggler>
            </MDBContainer>
          </MDBNavbar>
          <div className="d-flex flex-column align-items-end">
            <MDBCollapse show={showAnimated}>
              <div className="bg-light shadow-3 p-4">
                <ul style={styles.li} id="navMenu">
                  <li>
                    <Link
                      to="/about"
                      className="border-bottom m-0"
                      color="link"
                    >
                      About{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/calendar"
                      className="border-bottom m-0"
                      color="link"
                    >
                      Calendar{" "}
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/whatweoffer"
                      className="border-bottom m-0"
                      color="link"
                    >
                      What We Offer{" "}
                    </Link>
                  </li>
                  {/* <li>
                    <Link
                      to="/testimonials"
                      className="border-bottom m-0"
                      color="link"
                    >
                      Testimonials{" "}
                    </Link>
                  </li> */}
                  <li>
                    <Link
                      to="/contact"
                      className="border-bottom m-0"
                      color="link"
                    >
                      Contact{" "}
                    </Link>
                  </li>
                </ul>
              </div>
            </MDBCollapse>
          </div>
        </section>
      </div>

      <div className="nav d-flex flex-column ">
        <div className="align-itmes-center text-center">
          <Link to="/">
            <img src={logo} style={styles.logo}></img>
          </Link>
        </div>

        <div className="d-flex felx-column ">
          <div className="row text-center align-items-center mx-auto">
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h5>
                <span style={styles.span}>Fairview Heights, IL:</span> (618) 726
                - 2228{" "}
              </h5>
            </div>{" "}
            <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12">
              <h5>
                <span style={styles.span}>St. Louis, MO:</span> (314) 502 - 2037
              </h5>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
