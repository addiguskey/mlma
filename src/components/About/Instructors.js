import React from "react";
import valueImg from "../../assets/images/filler.png";

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
};
export default function Instructors() {
  return (
    <div>
      <div className="card align-items-center border-0">
        <h1 eventKey="values" style={styles.korean} className="p-3">
          {" "}
          Master Lim
        </h1>

        <div className="d-flex flex-column text-center" style={styles.card}>
          <div className="row align-items-center ">
            <div className="col p-2 mx-5 p-4">
              <h2>Master Lim</h2>
              <h5>
                Master Nam Lim holds a 5th degree black belt in HaeDong Gumdo
                (Korean Sword Martial Arts), a 4th degree black belt in
                Taekwondo and is certified for instructing bare hand combat in
                Korean Martial Arts. He has been teaching Martial Arts in South
                Korea and in the United States for over 20 years. In addition,
                he taught U.S. Army soldiers when he was an instructor in South
                Korea. He started Korean Martial Arts at age 6 in his hometown
                of Pyeongtaek, South Korea. Taekwondo was the first traditional
                Korean Martial Arts that he started with, then he specialized in
                Korean Sword Martial Arts. Master Lim studied several other
                Martial Arts and taught different skills. Master Lim graduated
                from Southern Illinois University Edwardsville (SIUE) with a
                Biological Science degree. He was a student instructor for the
                SIUE Taekwondo Club throughout his school years. He played
                football for the SIUE Club Football Team for four years and was
                a captain his senior year. Master Lim loves training with his
                students in classes every day. Master Lim's dream is to help his
                students become successful in their lives with good morals,
                respect, positive attitude, a mindset to do their best on
                everything, and satisfaction from the results of their efforts.
              </h5>
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
