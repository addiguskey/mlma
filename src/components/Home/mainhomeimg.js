import React from "react";
import homeimg from "../../assets/images/homeimg.png";
import fillerimg from "../../assets/images/filler.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const styles = {
  black: {
    backgroundColor: "black",
    color: "white",
  },
  img: {
    maxHeight: "auto",
    maxWidth: "130%",
    // padding: "1rem",
  },
  title: {
    fontSize: "3vw",
    whiteSpace: "nowrap",
  },
  textshadow2: {
    color: "#FF7377",
    fontWeight: "bold",
    textShadow: "1px 1px 1px #771616",
    fontSize: "1.3vw",
  },
  bluetext: {
    color: "#BFD7ED",
    fontWeight: "bold",
    textShadow: "1px 1px 1px #2b5f8d",
    fontSize: "1.3vw",
    whiteSpace: "nowrap",
  },
};

export default function MainHomeImg() {
  return (
    <div>
      <div className="nav d-flex flex-column" style={styles.black}>
        <div className="container align-itmes-center text-center my-5">
          <img src={homeimg} style={styles.img}></img>
          <div className="home-title">
            <h6 style={styles.bluetext}>
              looking for SELF-DEFENSE, DICIPLICINE, and FUN FAMILY FITNESS?
            </h6>
            <h2 style={styles.title}>OLYMPIC STYLE TAEKWONDO</h2>
            <h1 style={styles.title}>&</h1>
            <h2 style={styles.title}>KOREAN SWORD MARTIAL ARTS</h2>
            <h5 style={styles.textshadow2}>FOR YOU AND YOUR FAMILY</h5>
          </div>
          {/* BUTTONS */}
        </div>
      </div>
    </div>
  );
}
