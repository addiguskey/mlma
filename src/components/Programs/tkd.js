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
    fontWeight: "bold",
  },
  koreanTitle: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontWeight: "bold",
  },
  content: {
    lineHeight: 1.5,
  },

  subtitle: {
    fontWeight: "bold",
    color: "#FF7377",
    textShadow: "1px 1px 1px red",
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
  },
  span: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontWeight: "bold",
    fontSize: "2rem",
    color: "#FF7377",
    textShadow: "1px 1px 1px red",
  },
  lessons: {
    color: "gray",
  },
};
export default function Tkd() {
  return (
    <div>
      <div className=" text-center align-items-center border-0 bg-white">
        <h2 eventKey="values" style={styles.titleFont} className="p-4">
          {" "}
          Tae Kwon Do <span style={styles.koreanTitle}>(태권도)</span>
        </h2>
        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center p-0">
            <div className="col p-3 mx-5">
              <h3 style={styles.content} className="my-4">
                <span style={styles.subtitle}>
                  "The Way of the Hand and Foot"
                </span>
              </h3>
              <h3 className="my-3" style={styles.content}>
                The name Taekwondo is derived from the Korean words:
                <br></br> <span style={styles.span}>태 (Tae)</span>: meaning
                foot <br></br> <span style={styles.span}>권 (Kwon)</span>:
                meaning fist <br></br>
                <span style={styles.span}>도(Do)</span>: meaning "way of".
              </h3>
              <h3 className="my-3" style={styles.content}>
                It is more than a mere physical fighting skill, it reflects a
                way of thinking and a pattern of life requiring strict
                discipline. It trains both the mind and the body in which great
                emphasis is placed on the development of the trainee's moral
                character while gainig{" "}
                <span style={styles.span}> SELF-DEFENSE </span> skills.
              </h3>
              <h3 style={styles.content}>
                MLMA offers competitive kicking and hand techniques throughout
                all regular classes.
              </h3>
            </div>
            <div className="col-sm-12 col-md-12 col-l-6 col-xl-6">
              <TkdPics></TkdPics>
            </div>
            <h4 className="text-center p-5" style={styles.lessons}>
              *Private Lessons Available by Appointment*
            </h4>
          </div>
        </div>
      </div>
    </div>
  );
}
