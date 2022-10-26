import React, { useState } from "react";
import homeimg from "../../assets/images/homeimg.png";
import ContactForm from "../contactForm";
// import Stack from "react-bootstrap/Stack";
// import stamp from "../../assets/images/stamp.png";
// import code from "../../assets/images/code.png";
import fillerimg from "../../assets/images/filler.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const styles = {
  img: {
    maxHeight: "auto",
    maxWidth: "100%",
    // padding: "1rem",
  },
  title: {
    fontSize: "200%",
  },
  black: {
    backgroundColor: "black",
    color: "white",
  },
  span: {
    fontWeight: "bold",
  },
  classCards: {
    borderRadius: "0mm",
  },
  classImg: {
    height: "30rem",
  },
  red: {
    backgroundColor: "#e24d24",
    color: "white",
  },
  blue: {
    backgroundColor: "#2b5f8d",
    color: "white",
  },
  textshadow: {
    color: "white",
    fontWeight: "bold",
    textShadow: "1px 1px 1px red",
  },
  textshadow2: {
    color: "#e24d24",
    fontWeight: "bold",
    textShadow: "1px 1px 1px black",
  },
  redtext: {
    color: "#e24d24",
    fontWeight: "bold",
    textShadow: "1px 1px 1px black",
  },
  testimonial: {
    fontSize: "0.9rem",
  },
};
export default function Home() {
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);

  const openMsgMadolFunc = (open) => {
    setOpen(open);
  };

  const checkIsErrorFunc = (isError) => {
    setError(isError);
  };
  return (
    <div>
      <div className="nav d-flex flex-column" style={styles.black}>
        <div className="container align-itmes-center text-center my-5">
          <img src={homeimg} style={styles.img}></img>
          <div className="home-title">
            <h2 style={styles.title}>OLYMPIC STYLE TAEKWONDO</h2>
            <h1>&</h1>
            <h2>KOREAN SWORD MARTIAL ARTS</h2>
            <h5 style={styles.textshadow2}>FOR YOU AND YOUR FAMILY</h5>
          </div>
        </div>
      </div>
      <div
        className=" d-flex flex-column p-4"
        id="formContainer"
        style={styles.red}
      >
        <h1 className="text-center p-1">
          Claim Your <span>FREE CLASS</span> !
        </h1>
        <ContactForm
          openMsgMadolFunc={openMsgMadolFunc}
          checkIsErrorFunc={checkIsErrorFunc}
        />
      </div>
      {/* blue cards */}
      <div className="d-flex flex-column p-4" style={styles.blue}>
        <div className="row">
          <div className="col p-1 my-5">
            <Card
              className="text-center bg-transparent border-0"
              style={styles.dealsCards}
            >
              <h6>FEATURED</h6>
              <Card.Body>
                <Card.Title className="" style={styles.span}>
                  Come on by or <span style={styles.textshadow}>JOIN US </span>
                  for Upcoming Events!
                </Card.Title>
                <Card.Text>Programs for All ages</Card.Text>

                <Link to="/calendar" className="btn btn-dark">
                  Learn More
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col p-1">
            <Card className="text-center bg-transparent border-0 my-4">
              <h5 style={styles.redtext}>LIMITED TIME SPECIAL</h5>
              <Card.Body>
                <h2 style={styles.textshadow}>
                  1st Month of UNLIMITED class for only $99!
                </h2>
                <Card.Text>
                  Uniform <span style={styles.span}>INCLUDED</span>
                </Card.Text>
                <Link to="/contact" className="btn btn-dark">
                  Learn More
                </Link>
              </Card.Body>
            </Card>
          </div>
          <div className="col p-1 my-5">
            <Card
              className="text-center bg-transparent border-0"
              style={styles.dealsCards}
            >
              <h6>TESTIMONIALS</h6>
              <Card.Body>
                <Card.Text style={styles.testimonial}>
                  When my son and I came into Master Lim's Martial Arts, we were
                  only looking for a fun and active option to get some exercise.
                  We found so much more...
                </Card.Text>

                <Link to="/calendar" className="btn btn-dark">
                  Read More
                </Link>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
      {/* blue cards */} {/* Programs */}
      <div
        className="d-flex felx-column align-items-center "
        id="programPics"
        style={styles.black}
      >
        <div className="row d-flex align-items-center">
          <div className="col col-md-3 col-lg-3 col-sm-3">
            <div className="card bg-dark text-white">
              <Link to="/whatweoffer" className="btn btn-dark">
                <img
                  className="card-img"
                  src={fillerimg}
                  style={styles.classImg}
                />
              </Link>

              <div className="card-img-overlay">
                <h5 className="card-title align-text-bottom">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col col-md-3 col-lg-3 col-sm-3">
            <div className="card bg-dark text-white">
              <Link to="/whatweoffer" className="btn btn-dark">
                <img
                  className="card-img"
                  src={fillerimg}
                  style={styles.classImg}
                />
              </Link>

              <div className="card-img-overlay">
                <h5 className="card-title align-text-bottom">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-md-3 col-lg-3 col-sm-3">
            <div className="card bg-dark text-white">
              <Link to="/whatweoffer" className="btn btn-dark">
                <img
                  className="card-img"
                  src={fillerimg}
                  style={styles.classImg}
                />
              </Link>

              <div className="card-img-overlay">
                <h5 className="card-title align-text-bottom">Card title</h5>
              </div>
            </div>
          </div>
          <div className="col col-xl-3 col-md-3 col-lg-3 col-sm-3">
            <div className="card bg-dark text-white">
              <Link to="/whatweoffer" className="btn btn-dark">
                <img
                  className="card-img"
                  src={fillerimg}
                  style={styles.classImg}
                />
              </Link>

              <div className="card-img-overlay">
                <h5 className="card-title align-text-bottom">Card title</h5>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
