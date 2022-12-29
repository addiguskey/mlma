import React, { useRef, useState } from "react";
// import { useForm } from "react-hook-form";
import emailjs from "emailjs-com";

const styles = {
  inputForm: {
    backgroundColor: "transparent",
    border: "none",
    // borderBottom: "5px solid #771616",
    borderBottom: "4px solid #D3D3D3",
    lineHeight: 1.5,
    fontSize: "1.2rem",
    color: "white",
  },
};
export default function ContactForm(props) {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        // "YOUR_SERVICE_ID",
        "service_vitaccj",
        //   "YOUR_TEMPLATE_ID",
        "template_o0ox5g4",
        form.current,
        // "YOUR_PUBLIC_KEY"
        "vDmeerxkRbH-zgu0Y"
      )
      .then((response) => {
        console.log("SUCCESS!", response.status, response.text);
        props.openMsgMadolFunc(true);
        props.checkIsErrorFunc(false);
        //empty input field after each submit
        e.target.reset();
      })
      .catch((err) => {
        props.openMsgMadolFunc(true);
        props.checkIsErrorFunc(true);
        console.log("FAILED...", err);
      });
  };
  //   const emailSent = sendEmail.state.response;

  return (
    <div>
      <form ref={form} onSubmit={sendEmail}>
        <div className="d-block flex-column ">
          <div
            className="row align-items-center text-center mx-5 p-3"
            id="contact-row"
          >
            <div className="row ">
              <input
                type=""
                name="user_name"
                placeHolder="Your Name"
                style={styles.inputForm}
              />
            </div>
            <div className="row">
              <input
                type="email"
                name="user_email"
                placeHolder="Your Email"
                style={styles.inputForm}
              />
            </div>
            <div className="row">
              <input
                type="text"
                name="user_number"
                placeHolder="Phone Number"
                style={styles.inputForm}
              />
            </div>

            <textarea
              name="message"
              id="msg-box"
              placeHolder="Message"
              text-dark
            />
            <div className="">
              <input type="submit" value="Send" className="btn btn-light" />
            </div>
          </div>
        </div>
      </form>
    </div>
  );
}
