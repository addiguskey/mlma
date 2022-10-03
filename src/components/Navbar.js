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

const styles = {
  logo: {
    maxHeight: "14rem",
    maxWidth: "14rem",
    padding: "1rem",
  },
  span: {
    fontWeight: "bold",
  },
};
export default function Home() {
  return (
    <div>
      <div className="nav d-flex flex-column ">
        <div className="align-itmes-center text-center">
          <img src={logo} style={styles.logo}></img>
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
