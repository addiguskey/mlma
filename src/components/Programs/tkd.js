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
export default function Tkd() {
  return (
    <div>
      <div className="card p-2 align-items-center border-0">
        <h1 eventKey="values"> Tae Kwon Do(태권도)</h1>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col p-3 mx-5">
              <h6>
                <span style={styles.span1}>"The Way of the Hand and Foot"</span>
              </h6>
              <h6>
                The name Taekwondo is derived from the Korean words:
                <br></br> <span style={styles.span}>태 (Tae)</span>: meaning
                foot <br></br> <span style={styles.span}>권 (Kwon)</span>:
                meaning fist <br></br>
                <span style={styles.span}>도(Do)</span>: meaning "way of".
              </h6>
              <h6>
                It is more than a mere physical fighting skill, it reflects a
                way of thinking and a pattern of life requiring strict
                discipline. It trains both the mind and the body in which great
                emphasis is placed on the development of the trainee's moral
                character while gainig{" "}
                <span style={styles.span2}>self-defense</span> skills.
              </h6>
              <h6>
                MLMA offers very competitive kicking and hand techniques
                throughout our regular classes.
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
