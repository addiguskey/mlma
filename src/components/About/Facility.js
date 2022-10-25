import React from "react";
import facilityImg from "../../assets/images/filler.png";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
};
export default function Facility() {
  return (
    <div>
      <div className="card p-2 align-items-center border-0">
        <h1 eventKey="values"> Our Facility</h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col p-3 mx-5">
              <h6>
                Master Lim's Martial Arts is one of the largest Martial Arts
                facilities in the US with approximately 4500sq.ft including the
                training space, and the lobby along with the waiting area.{" "}
                <br></br>
                <br></br>We provide a clean, well-organized, and pleasant
                environment for students to train themselves. ​ We will have
                many different opportunities to participate in competitions and
                tournaments in the States and in overseas. <br></br>
                <br></br>In addition, we are teaching Taekwondo, Kickboxing,
                Self-Defense skills, Ground Fighting Techniques, Sword Skills
                and other weapons, and Break falls and rolling techniques
                throughout the regular class sessions. <br></br>
                <br></br>Master Lim's Martial Arts helps students improve
                concentration, respect others, learn self-discipline, and more.
                We learn and train Martial Arts in a family-like environment.
                Students are encouraged to come to the class as often as
                possible.
              </h6>
            </div>
            <div className="col">
              <img src={facilityImg}></img>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
