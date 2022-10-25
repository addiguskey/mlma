import React from "react";
import facilityImg from "../../assets/images/filler.png";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
  span1: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  span2: {
    fontWeight: "bold",
  },
};
export default function Sword() {
  return (
    <div>
      <div className="card p-2 align-items-center border-0">
        <h1 eventKey="values"> Korean Sword Martial Arts (해동검도)</h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col p-3 mx-5">
              <h6>
                <span style={styles.span1}>"The Way of the Sword"</span>
              </h6>

              <h6>
                A sword based martial art, Haedong Gumdo. Beginner students will
                start with a wooden sword, 목검 (Mok-Gum), from the first day of
                practice. Intermediate students will be asked to begin with a
                metal training sword, 가검 (Ga-Gum), to prepare for the weight,
                balance, and danger of using the real sword, 진검(Jin-Gum),
                after the 1st degree of Black Belt: 1st Dan.
                <br></br>
                Gumdo helps with improving concentration level and the students
                are also taught break fall & rolling techniques. Students learn
                and practice self discipline and respect.
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
