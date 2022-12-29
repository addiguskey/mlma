import React from "react";
import masterlim from "../../assets/images/Instructors/masterlim.jpeg";
import bayleL from "../../assets/images/Instructors/bayleL.jpeg";
import DonovanO from "../../assets/images/Instructors/DonovanO.jpeg";
import graceW from "../../assets/images/Instructors/graceW.jpeg";
import HeatherD from "../../assets/images/Instructors/HeatherD.jpeg";
import jadynA from "../../assets/images/Instructors/jadynA.jpeg";
import RowanO from "../../assets/images/Instructors/RowanO.jpeg";
import samV from "../../assets/images/Instructors/samV.jpeg";

const styles = {
  card: {
    backgroundColor: "black",
    color: "white",
    fontWeight: "bold",
  },
  korean: {
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
    fontSize: "2rem",
    fontWeight: "bold",
  },
  desc: {
    lineHeight: 2,
    fontSize: "1.5rem",
  },
  masterlimpic: {
    height: "45rem",
    width: "auto",
    borderRadius: "5mm",
  },
  instpics: {
    height: "30rem",
    width: "auto",
    borderRadius: "5mm",
  },
};
export default function Instructors() {
  return (
    <div>
      <div className="card align-items-center border-0">
        <h1 eventKey="values" style={styles.korean} className="p-4">
          {" "}
          Our Instructors
        </h1>

        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center " id="masterlim">
            <div className="col p-2 mx-5 p-4 mt-5">
              <h1 style={{ fontWeight: "bold" }}>Master Lim</h1>
              <br />
              <h5 style={styles.desc}>
                Master Nam Lim holds a 5th degree black belt in HaeDong Gumdo
                (Korean Sword Martial Arts), a 4th degree black belt in
                Taekwondo and is certified for instructing bare hand combat in
                Korean Martial Arts. He has been teaching Martial Arts in South
                Korea and in the United States for over 20 years and also taught
                U.S. Army soldiers when he was an instructor in South Korea.{" "}
                <br />
                <br />
                He started Korean Martial Arts at 6YO in his hometown of
                Pyeongtaek, S. Korea. Taekwondo was the first traditional Korean
                Martial Arts that he started with, then he specialized in Korean
                Sword Martial Arts. <br />
                Master Lim studied several other Martial Arts and taught
                different skills. He graduated from Southern Illinois University
                Edwardsville (SIUE) with a Biological Science degree. He was a
                student instructor for the SIUE Taekwondo Club throughout his
                time at SIUE. He also played football for the SIUE Club Football
                Team for four years and was a captain his senior year. <br />
                Master Lim loves training with his students in classes every
                day. His dream is to help his students become successful in
                their lives with good morals, respect, positive attitude, a
                mindset to do their best on everything.
              </h5>
            </div>
            <div className="col-sm-12 col-md-12 col-l-6 col-xl-6">
              <img src={masterlim} style={styles.masterlimpic}></img>
            </div>
          </div>
          <div className="row align-items-center p-5 " id="other-instructors">
            <div className="col p-4">
              <img src={DonovanO} style={styles.instpics}></img>
              <h3 className="text-center p-4" style={{ fontWeight: "bold" }}>
                Donovan O.
              </h3>
            </div>{" "}
            <div className="col p-4">
              <img src={bayleL} style={styles.instpics}></img>
              <h3 className="text-center p-4" style={{ fontWeight: "bold" }}>
                Bayle L.
              </h3>
            </div>{" "}
            <div className="col p-4">
              <img src={graceW} style={styles.instpics}></img>
              <h3 className="text-center p-4" style={{ fontWeight: "bold" }}>
                Grace W.
              </h3>
            </div>{" "}
            <div className="col p-4">
              <img src={HeatherD} style={styles.instpics}></img>
              <h3 className="text-center p-4" style={{ fontWeight: "bold" }}>
                Heather D.
              </h3>
            </div>{" "}
            <div className="col p-4">
              <img src={jadynA} style={styles.instpics}></img>
              <h3 className="text-center p-4" style={{ fontWeight: "bold" }}>
                Jadyn A.
              </h3>
            </div>{" "}
            <div className="col p-4">
              <img src={RowanO} style={styles.instpics}></img>
              <h3 className="text-center p-4" style={{ fontWeight: "bold" }}>
                Rowan O.
              </h3>
            </div>{" "}
            <div className="col p-4">
              <img src={samV} style={styles.instpics}></img>
              <h3 className="text-center p-4" style={{ fontWeight: "bold" }}>
                Sam V.
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
