import React from "react";
import valueImg from "../../assets/images/filler.png";
import groupimg3 from "../../assets/images/groupimg3.jpeg";
import FreeClass2 from "../FreeClass2";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
  korean: {
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  content: {
    lineHeight: 2,
    fontSize: "1.5rem",
  },
  span: {
    lineHeight: 2,
    fontSize: "1.7rem",
    fontWeight: "bold",
  },
};
export default function Values() {
  return (
    <div>
      <div className="card align-items-center border-0">
        <h1 eventKey="values" style={styles.korean} className="p-4">
          {" "}
          Family Martial Arts
        </h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col mx-5 p-5">
              <h5 style={styles.content}>
                We are a family martial arts school that teaches Korean Style
                Martial Arts with an emphasis on character development, fitness
                and self-defense. We offer programs for children, teens, adults,
                and seniors.
              </h5>
              <br />
              <h5 style={styles.content}>
                Master Lim’s Martial Arts offers Tae Kwon Do, Sword Skills,
                break falls, and hand to hand combat in a facility at
                approximately 4500sq ft, being one of the largest Martial Arts
                faciliries in the US. Our facility includes the training space,
                lobby, along with the waiting area.
              </h5>
              <br />
              <h5 style={styles.content}>
                Our students will learn respect and good manners,
                self-discipline, a positive attitude, responsibility,
                concentration, self-esteem, flexibility, endurance, and
                strength.{" "}
              </h5>
              <h5 style={styles.content}>
                Martial Arts is beneficial for relieving stress and tension. It
                also enhances overall wellness.
              </h5>
              <h5 style={styles.content}>
                We are positive, family-friendly environment that accommodates
                and welcomes all ages.
              </h5>
              <br />
              <h2 style={styles.span}>We are a martial arts family!</h2>
            </div>
            <div className="col">
              <img src={groupimg3} className="aboutimg"></img>
            </div>
          </div>
        </div>
      </div>
      <FreeClass2></FreeClass2>
    </div>
  );
}
