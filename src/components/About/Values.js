import React from "react";
import valueImg from "../../assets/images/filler.png";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },

  koreanTitle: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.7rem",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  span: {
    fontWeight: "bold",
    fontSize: "1.9rem",
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    color: "#708090",
  },
};
export default function Values() {
  return (
    <div>
      <div className="text-center  align-items-center border-0">
        <h1 eventKey="values" style={styles.koreanTitle} className="p-3">
          {" "}
          충효예의
        </h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col mx-5">
              <h5>
                Master Lim's Martial Arts Academy is where students learn
                patriotism, respect, obedience, righteousness and loyalty. We
                learn and train in a family like environment.
              </h5>
              <div className="d-flex flex-column text-left">
                <h5>
                  {" "}
                  <span style={styles.span}>충 (Choong)</span>: Love our
                  country.
                </h5>
                <h5>
                  <span style={styles.span}>효 (Hyo) </span>: Love, care, and
                  respect our parents and grandparents.
                </h5>
                <h5>
                  <span style={styles.span}>예 (Ye)</span>: Practice respect and
                  manner.
                </h5>
                <h5>
                  <span style={styles.span}>의 (Eui)</span> : Be honest and have
                  a good relationship among all people. Make smart decisions and
                  be responsible.
                </h5>
              </div>
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
