import React, { useState } from "react";
import homeimg from "../../assets/images/homeimg.png";
import ContactForm from "../contactForm";
// import Stack from "react-bootstrap/Stack";
// import stamp from "../../assets/images/stamp.png";
// import code from "../../assets/images/code.png";
import fillerimg from "../../assets/images/filler.png";
const styles = {
  img: {
    maxHeight: "auto",
    maxWidth: "100%",
    // padding: "1rem",
  },
  title: {
    fontSize: "200%",
  },
  formBox: {
    backgroundColor: "black",
    color: "white",
  },
  span: {
    fontWeight: "bold",
  },
  cards: {
    borderRadius: "0mm",
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
      <div className="nav d-flex flex-column">
        <div className="container align-itmes-center text-center">
          <img src={homeimg} style={styles.img}></img>
          <div className="home-title">
            <h2 style={styles.title}>OLYMPIC STYLE TAEKWONDO</h2>
            <h1>&</h1>
            <h2>KOREAN SWORD MARTIAL ARTS</h2>
          </div>
        </div>
      </div>
      <div
        className=" d-flex flex-column p-4"
        id="formContainer"
        style={styles.formBox}
      >
        <h1 className="text-center p-1">
          fill out the form for a <span>FREE CLASS</span> !
        </h1>
        <ContactForm
          openMsgMadolFunc={openMsgMadolFunc}
          checkIsErrorFunc={checkIsErrorFunc}
        />
      </div>
      <div
        className="d-flex felx-column p-3 align-items-center justify-content-around"
        id="programPics"
      >
        <div className="row d-flex align-items-center">
          <div className="col col-md-4 col-lg-4 col-sm-4">
            <div className="card bg-dark text-white" style={styles.cards}>
              <img className="card-img" src={fillerimg} alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title align-text-bottom">Card title</h5>

                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col col-md-4 col-lg-4 col-sm-4">
            <div className="card bg-dark text-white" style={styles.cards}>
              <img className="card-img" src={fillerimg} alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title align-text-bottom">Card title</h5>

                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
          <div className="col col-xl-4 col-md-4 col-lg-4 col-sm-4">
            <div className="card bg-dark text-white" style={styles.cards}>
              <img className="card-img" src={fillerimg} alt="..." />
              <div className="card-img-overlay">
                <h5 className="card-title align-text-bottom">Card title</h5>

                <a href="#" className="btn btn-primary">
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
