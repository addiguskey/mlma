import React from "react";
import logo from "../assets/images/logo.png";
import { Link, useLocation } from "react-router-dom";
import info from "../assets/images/info.png";

const styles = {
  foot: {
    color: "gray",
    fontSize: "1rem",
  },
  footImg: {
    maxHeight: "12rem",
    maxWidth: "auto",
    marginTop: "2rem",
    marginLeft: "5vw",
  },
  info: {
    marginTop: "2rem",
    height: "7rem",
    width: "auto",
    marginRight: "7vw",
  },
};
export default function Footer() {
  return (
    <div>
      <div className="foot d-flex flex-column">
        <div className="row justify-content-between">
          <div className="d-flex col align-items-center mx-5">
            <Link to="/">
              <img src={logo} style={styles.footImg} />
            </Link>
          </div>
          <div className="d-flex col align-items-center mx-5 my-4 p-2">
            {/* <h6>
              <span>MON - FRI : 4:15 PM - 8:00 PM</span> <br></br>
              <span>SAT : 9:00 AM - 10:00 AM</span> <br></br>
              <p>
                **Private Lesson is available by appointment. <br></br> See
                "Calendar" page for monthly schedule
              </p>
            </h6> */}
          </div>
          <div
            className="d-flex col align-items-center justify-content-end mx-4
          "
          >
            <img src={info} alt="" style={styles.info} />
          </div>
        </div>

        <div
          className="footerContainer align-items-center text-center"
          style={styles.foot}
        >
          <p style={styles.p}>
            Website Designed and Built by addileeg©<br></br>
            <span style={{ fontSize: "1rem" }}>addisonguskey@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
