import React from "react";

import fillerimg from "../../assets/images/filler.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";
import tkd1 from "../../assets/images/homepgims/tkd1.png";
import tkd2 from "../../assets/images/homepgims/tkd2.png";
import ksma1 from "../../assets/images/homepgims/ksma1.png";
import ksma2 from "../../assets/images/homepgims/ksma2.png";

const styles = {
  black: {
    backgroundColor: "black",
    color: "white",
  },
  classImg: {
    height: "40rem",
    width: "25rem",
  },
  cardTitle: {
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  koreanTitle: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.3rem",
    fontWeight: "bold",
  },
  tkd: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.3rem",
    fontWeight: "bold",
    color: "#FF7377",
    textShadow: "1px 1px 1px red",
  },
  sword: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.3rem",
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
        <div className="programpics row d-flex align-items-center text-centermt-5 mx-2 justify-content-around justify-content-between">
          <div className="col col-md-6 col-lg-6 col-xl-3 col-sm-12">
            {/* <div className="card bg-dark text-white"> */}
            <a href="/whatweoffer" className="programhome">
              <img className="card-img" src={tkd1} style={styles.classImg} />
            </a>

            {/* <h5
                className="card-title align-text-bottom "
                style={styles.koreanTitle}
              >
                {" "}
                 태권도 <span style={styles.tkd}>(Tae Kwon Do)</span>
              </h5> */}
          </div>
          <div className="col col-md-6 col-lg-6 col-xl-3 col-sm-12 ">
            <a href="/whatweoffer" className="programhome">
              {" "}
              <img className="card-img" src={tkd2} style={styles.classImg} />
            </a>
          </div>
          <div className="col col-md-6 col-lg-6 col-xl-3 col-sm-12">
            <a href="/whatweoffer" className="programhome">
              <img className="card-img" src={ksma1} style={styles.classImg} />
            </a>{" "}
            {/* <h5
                className="card-title align-text-bottom "
                style={styles.koreanTitle}
              >
                {" "}
                 해동검도{" "}
                <span style={styles.sword}>(Korean Sword Martial Arts)</span>
              </h5> */}
          </div>
          <div className="col col-md-6 col-lg-6 col-xl-3 col-sm-12">
            <a href="/whatweoffer" className="programhome">
              {" "}
              <img className="card-img" src={ksma2} style={styles.classImg} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
