import React from "react";
import homeimg from "../../assets/images/homeimg.png";
import fillerimg from "../../assets/images/filler.png";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Link } from "react-router-dom";

const styles = {
  blue: {
    backgroundColor: "#2b5f8d",
    color: "white",
  },
  span: {
    fontWeight: "bold",
  },
  textshadow: {
    color: "white",
    fontWeight: "bold",
    textShadow: "2px 2px 2px red",
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

export default function FeatureCards() {
  return (
    <>
      <div className="d-flex flex-column p-4" style={styles.blue}>
        <div className="row">
          {/* <div className="col p-1 my-5">
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
          </div> */}
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
          {/* <div className="col p-1 my-5">
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
          </div> */}
        </div>
      </div>
    </>
  );
}
