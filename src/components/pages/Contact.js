import React from "react";
import ContactForm2 from "../contactForm2";

const styles = {
  container: {
    backgroundColor: "black",
    color: "white",
    borderRadius: "3mm",
  },
};
export default function Contact() {
  return (
    <div>
      <div className="p-5">
        <div className="section p-3 text-center" style={styles.container}>
          <div className="row">
            <div className="col my-5">
              <h2>Master Lim's Martial Arts</h2>
              <h5>1931 West Highway 50 Fairview Heights, IL 62208</h5>
              <h6>master.namlim@gmail.com</h6>
              <h6>618-726-2228</h6>
            </div>
            <div className="d-flex flex-column col align-items-center my-5">
              <ContactForm2></ContactForm2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
