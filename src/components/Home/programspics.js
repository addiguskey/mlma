import React from "react";

import fillerimg from "../../assets/images/filler.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const styles = {
  black: {
    backgroundColor: "black",
    color: "white",
  },
  classImg: {
    height: "55vw",
    width: "auto",
  },
  cardTitle: {
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
    fontSize: "2.3vw",
    fontWeight: "bold",
  },
  koreanTitle: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.3vw",
    fontWeight: "bold",
  },
  tkd: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.3vw",
    fontWeight: "bold",
    color: "#FF7377",
    textShadow: "1px 1px 1px red",
  },
  sword: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.3vw",
    fontWeight: "bold",
    color: "#BFD7ED",
    textShadow: "1px 1px 1px blue",
  },
};
export default function ProgramPics() {
  return (
    <div>
      <div
        className="d-flex felx-column align-items-center justify-content-around"
        id="programPics"
        style={styles.black}
      >
        <div className="row d-flex align-items-center mt-5">
          <div className="col col-md-6 col-lg-6 col-sm-12">
            <div className="card bg-dark text-white">
              <Link to="/whatweoffer" className="btn btn-dark">
                <img
                  className="card-img"
                  src={fillerimg}
                  style={styles.classImg}
                />
              </Link>

              <div className="card-img-overlay">
                <h5
                  className="card-title align-text-bottom "
                  style={styles.koreanTitle}
                >
                  {" "}
                   태권도 <span style={styles.tkd}>(Tae Kwon Do)</span>
                </h5>
              </div>
            </div>
          </div>
          <div className="col col-md-6 col-lg-6 col-sm-12">
            <div className="card bg-dark text-white">
              <Link to="/whatweoffer" className="btn btn-dark">
                <img
                  className="card-img"
                  src={fillerimg}
                  style={styles.classImg}
                />
              </Link>

              <div className="card-img-overlay">
                <h5
                  className="card-title align-text-bottom "
                  style={styles.koreanTitle}
                >
                  {" "}
                   해동검도{" "}
                  <span style={styles.sword}>(Korean Sword Martial Arts)</span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
