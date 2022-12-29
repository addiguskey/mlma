import React from "react";
import valueImg from "../../assets/images/filler.png";
import ValuesPics from "./ValuesPics";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },

  koreanTitle: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "3.5rem",
    fontWeight: "bold",
    backgroundColor: "white",
  },
  content: {
    lineHeight: 2,
  },
  span: {
    fontWeight: "bold",
    fontSize: "2.5rem",
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    color: "#708090",
  },
};
export default function Values() {
  return (
    <div>
      <div className="card text-center  align-items-center border-0">
        <h1 eventKey="values" style={styles.koreanTitle} className="p-3">
          {" "}
          충효예의
        </h1>

        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col mx-5 p-4" style={styles.content}>
              <h3>
                Master Lim's Martial Arts Academy is where students learn
                patriotism, respect, obedience, righteousness and loyalty. We
                learn and train in a family like environment.
              </h3>
              <br />
              <div className="d-flex flex-column text-left">
                <h3>
                  {" "}
                  <span style={styles.span}>충 (Choong)</span>: Love our
                  country.
                </h3>
                <h3>
                  <span style={styles.span}>효 (Hyo) </span>: Love, care, and
                  respect our parents and grandparents.
                </h3>
                <h3>
                  <span style={styles.span}>예 (Ye)</span>: Practice respect and
                  manner.
                </h3>
                <h3>
                  <span style={styles.span}>의 (Eui)</span> : Be honest and have
                  a good relationship among all people. Make smart decisions and
                  be responsible.
                </h3>
                <br />
                <h2></h2>
              </div>
            </div>
            <div className="col-sm-12 col-md-12 col-l-6 col-xl-6">
              <ValuesPics></ValuesPics>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
