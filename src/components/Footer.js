import React from "react";
import logo from "../assets/images/logo.png";

const styles = {
  foot: {
    backgroundColor: "black",
    color: "white",
  },
  footImg: {
    maxHeight: "60%",
    maxWidth: "60%",
  },
  info: {
    marginTop: "2rem",
  },
  phoneNum: {
    marginLeft: "47.9%",
  },
};
export default function Footer() {
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="row justify-content-between">
          <div className="d-flex col align-items-center mx-5">
            <img src={logo} style={styles.footImg} />
          </div>
          <div className="d-flex col align-items-center justify-content-end mx-5">
            <h6 style={styles.info}>
              <span style={styles.phoneNum}>CALL US: (618) 726 - 2228</span>
              <br></br>1931 W. US Highway 50, Fairview Heights, IL, 62208
            </h6>
          </div>
        </div>

        <div
          className="footerContainer align-items-center text-center"
          style={styles.foot}
        >
          <p style={{ padding: "1rem" }}>
            Website Designed and Built by addileeg©<br></br>
            <span style={{ fontSize: "0.8rem" }}>addisonguskey@gmail.com</span>
          </p>
        </div>
      </div>
    </div>
  );
}
