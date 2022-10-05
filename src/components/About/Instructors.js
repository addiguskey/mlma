import React from "react";
import valueImg from "../../assets/images/filler.png";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
};
export default function Instructors() {
  return (
    <div>
      <div className="card p-2 align-items-center border-0">
        <h1 eventKey="values"> Our Instructors</h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col p-2 mx-5">
              <h3>Master Lim</h3>
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
