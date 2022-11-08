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
    height: "30rem",
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
