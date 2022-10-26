import React from "react";
import facilityImg from "../../assets/images/filler.png";
import SwordPics from "./swordPics";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
  span1: {
    fontWeight: "bold",
    fontSize: "1.2rem",
    textShadow: "1px 1px 1px red",
  },
  span2: {
    fontWeight: "bold",
  },
  span3: {
    color: "#e24d24",
    fontWeight: "bold",
    textShadow: "1px 1px 1px blue",
  },
  content: {
    lineHeight: 1.5,
  },
};
export default function Sword() {
  return (
    <div>
      <div className="card  align-items-center border-0">
        <h1 eventKey="values"> Korean Sword Martial Arts (해동검도)</h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center p-0">
            <div className="col p-3 mx-5">
              <h6 style={styles.content} className="my-2">
                <span style={styles.span1}>"The Way of the Sword"</span>
              </h6>

              <h6 className="p-2">
                <span style={styles.span2}>해동검도 (Haedong Gumdo)</span> is
                traditional Korean sword based martial arts.
              </h6>

              <h6 style={styles.content}>
                Beginner students will start with a wooden sword, 목검
                (Mok-Gum), from the first day of practice. Intermediate students
                will be asked to begin with a metal training sword, 가검
                (Ga-Gum), to prepare for the weight, balance, and danger of
                using the real sword, 진검(Jin-Gum), after the 1st degree of
                Black Belt: 1st Dan.
              </h6>
              <h6 className="my-4" style={styles.content}>
                {" "}
                Gumdo <span style={styles.span3}>
                  improves concentration
                </span>{" "}
                and students are taught break fall & rolling techniques.
                Students also learn and practice{" "}
                <span style={styles.span3}>self-discipline</span> and respect.
              </h6>
            </div>
            <div className="col">
              <SwordPics></SwordPics>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
