import React from "react";
import facilityImg from "../../assets/images/filler.png";
import TkdPics from "./tkdPics";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
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
  content: {
    lineHeight: 1.5,
    fontSize: "1.5vw",
  },

  subtitle: {
    fontWeight: "bold",
    fontSize: "2vw",
    color: "#FF7377",
    textShadow: "1px 1px 1px red",
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
  },
  span: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontWeight: "bold",
    fontSize: "2.2vw",
    color: "#FF7377",
    textShadow: "1px 1px 1px red",
  },
};
export default function Tkd() {
  return (
    <div>
      <div className="card align-items-center border-0">
        <h3 eventKey="values" style={styles.titleFont}>
          {" "}
          Tae Kwon Do <span style={styles.koreanTitle}>(태권도)</span>
        </h3>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center p-0">
            <div className="col p-3 mx-5">
              <h6>
                <span style={styles.subtitle}>
                  "The Way of the Hand and Foot"
                </span>
              </h6>
              <h6 className="my-3" style={styles.content}>
                The name Taekwondo is derived from the Korean words:
                <br></br> <span style={styles.span}>태 (Tae)</span>: meaning
                foot <br></br> <span style={styles.span}>권 (Kwon)</span>:
                meaning fist <br></br>
                <span style={styles.span}>도(Do)</span>: meaning "way of".
              </h6>
              <h6 className="my-3" style={styles.content}>
                It is more than a mere physical fighting skill, it reflects a
                way of thinking and a pattern of life requiring strict
                discipline. It trains both the mind and the body in which great
                emphasis is placed on the development of the trainee's moral
                character while gainig{" "}
                <span style={styles.span}> SELF-DEFENSE </span> skills.
              </h6>
              <h6 style={styles.content}>
                MLMA offers competitive kicking and hand techniques throughout
                all regular classes.
              </h6>
            </div>
            <div className="col">
              <TkdPics></TkdPics>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
