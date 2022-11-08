import React from "react";
import facilityImg from "../../assets/images/filler.png";
import SwordPics from "./swordPics";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
  content: {
    lineHeight: 1.5,
    fontSize: "1.5vw",
  },
  titleFont: {
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
    fontSize: "2.3vw",
    fontWeight: "bold",
  },
  koreanTitle: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.3vw",
    fontWeight: "bold",
  },
  subtitle: {
    fontWeight: "bold",
    fontSize: "2vw",
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
    textShadow: "1px 1px 1px blue",
    color: "#BFD7ED",
  },
  span: {
    fontWeight: "bold",
    color: "#BFD7ED",
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    textShadow: "1px 1px 1px blue",
    fontSize: "2.1vw",
  },
};
export default function Sword() {
  return (
    <div>
      <div className="card  align-items-center border-0">
        <h2 eventKey="values" style={styles.titleFont}>
          {" "}
          Korean Sword Martial Arts{" "}
          <span style={styles.koreanTitle}>(해동검도)</span>
        </h2>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center p-0">
            <div className="col p-3 mx-5">
              <h6 style={styles.content} className="my-2">
                <span style={styles.subtitle}>"The Way of the Sword"</span>
              </h6>

              <h6 className="p-2">
                <span style={styles.span}>해동검도 </span>(Haedong Gumdo) is
                traditional Korean sword based martial arts.
              </h6>

              <h6 style={styles.content}>
                Beginner students will start with a wooden sword,{" "}
                <span style={styles.span}>목검 </span>(Mok-Gum), from the first
                day of practice. Intermediate students will be asked to begin
                with a metal training sword,{" "}
                <span style={styles.span}>가검 </span>(Ga-Gum), to prepare for
                the weight, balance, and danger of using the real sword,{" "}
                <span style={styles.span}>진검</span>(Jin-Gum), after the 1st
                degree of Black Belt: 1st Dan.
              </h6>
              <h6 className="my-4" style={styles.content}>
                {" "}
                Gumdo <span style={styles.span}>
                  IMPROVES CONCENTRATION
                </span>{" "}
                and students are taught break fall & rolling techniques.
                Students also learn and practice{" "}
                <span style={styles.span2}>SELF-DICIPLINE</span> and respect.
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
