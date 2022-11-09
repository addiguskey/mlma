import React from "react";
import valueImg from "../../assets/images/filler.png";

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
            <div className="col p-2 mx-5 p-4">
              <h5>
                We are a family martial arts school that teaches Korean Style
                Martial Arts with an emphasis on character development, fitness
                and self-defense. We offer programs for children, teens, adults,
                and seniors.
              </h5>
              <h5>
                Master Lim’s Martial Arts offers Tae Kwon Do, Self-Defense,
                Sword Skills, break falls, and hand to hand combat in a facility
                at approximately 4500sqft, being one of the largest Martial Arts
                faciliries in the US. Our facility includes the training space,
                lobby, along with the waiting area.
              </h5>
              <h5>
                Our students will learn respect and good manners,
                self-discipline, a positive attitude, responsibility,
                concentration, self-esteem, flexibility, endurance, and
                strength.{" "}
              </h5>
              <h5>
                Martial Arts is beneficial for relieving stress and tension and
                it also enhances overall wellness and will help with weight
                control.
              </h5>
              <h5>
                We are positive, family-friendly environment that accommodates
                and welcomes all ages.
              </h5>
            </div>
            <div className="col">
              <img src={valueImg}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
