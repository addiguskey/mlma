import React, { useState } from "react";
import ContactForm from "./contactForm";
import Card from "react-bootstrap/Card";

const styles = {
  red: {
    backgroundColor: "#e25b36",
    color: "white",
  },
  bluetext: {
    fontWeight: "bold",
    color: "#BFD7ED",
    fontSize: "3.5vw",
    textShadow: "2px 2px 2px blue",
  },
};

export default function FreeClass2() {
  const [open, setOpen] = useState(false);
  const [isError, setError] = useState(false);

  const openMsgMadolFunc = (open) => {
    setOpen(open);
  };

  const checkIsErrorFunc = (isError) => {
    setError(isError);
  };
  return (
    <>
      <Card className="p-2">
        <div
          className=" d-flex flex-column p-4"
          id="formContainer"
          style={styles.red}
        >
          <h1 className="text-center p-4">
            Claim Your <span style={styles.bluetext}>FREE CLASS</span> !
          </h1>
          <ContactForm
            openMsgMadolFunc={openMsgMadolFunc}
            checkIsErrorFunc={checkIsErrorFunc}
          />
        </div>
      </Card>
    </>
  );
}
