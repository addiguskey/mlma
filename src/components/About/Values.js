import React from "react";
import valueImg from "../../assets/images/filler.png";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
  span: {
    fontWeight: "bold",
    fontSize: "1.2rem",
  },
  korean: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "2.5rem",
    fontWeight: "bold",
  },
  korean2: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontSize: "1.6rem",
  },
};
export default function Values() {
  return (
    <div>
      <div className="card p-2 align-items-center border-0">
        <h1 eventKey="values" style={styles.korean}>
          {" "}
          충효예의
        </h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col p-2 mx-5">
              <p>
                Master Lim's Martial Arts Academy is OUR facility where students
                learn patriotism, parental respect and obedience, righteousness
                and loyalty. We are learning and training ourselves from a
                family like environment.
              </p>
              <div className="d-flex flex-column text-left">
                <p>
                  {" "}
                  <span style={styles.korean2}>충 (Choong)</span>: Love our
                  country.
                </p>
                <p>
                  <span style={styles.korean2}>효 (Hyo) </span>: Love, care, and
                  respect our parents and grand parents.
                </p>
                <p>
                  <span style={styles.korean2}>예 (Ye)</span>: Practice respect
                  and manner.
                </p>
                <p>
                  <span style={styles.korean2}>의 (Eui)</span> : Be honest and
                  have a good relationship among all people. Make smart
                  decisions and be responsible.
                </p>
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
