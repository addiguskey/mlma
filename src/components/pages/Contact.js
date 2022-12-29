import React from "react";
import ContactForm2 from "../Contact/contactForm2";
import ContactPics1 from "../Contact/ContactPics1";
// import ContactPics2 from "../Contact/ContactPics2";

const styles = {
  container: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "3mm",
  },
  title: {
    fontWeight: "bold",
    fontFamily: "Reggae One",
    fontDisplay: "cursive",
    textShadow: "1px 1px 1px blue",
    color: "#BFD7ED",
  },
  koreanTitle: {
    fontFamily: "Nanum Brush Script",
    fontDisplay: "cursive",
    fontWeight: "bold",
  },
};
export default function Contact() {
  return (
    <div>
      <div className="p-5">
        <div className="section p-3 text-center" style={styles.container}>
          <div className="row p-3">
            <div className="col my-5">
              <h2 style={styles.title}>Master Lim's Martial Arts</h2>
              <br />
              <h3>1931 West Highway 50 Fairview Heights, IL 62208</h3>
              <h4>master.namlim@gmail.com</h4>
              <h4>618-726-2228</h4>
            </div>
            <div className="d-flex flex-column col align-items-center my-5">
              <ContactForm2></ContactForm2>
            </div>
          </div>
          <div className="row">
            <div className="col p-5">
              <ContactPics1></ContactPics1>
            </div>
            <h1 style={styles.koreanTitle}>
              We are excited for you to join us!
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
