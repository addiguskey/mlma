import React, { useState } from "react";
import ContactForm from "./contactForm";
import Card from "react-bootstrap/Card";

const styles = {
  container: {
    backgroundColor: "black",
    color: "white",
  },
  card: {
    backgroundColor: "#708090",
  },
  title: {
    fontWeight: "bold",
  },
  bluetext: {
    fontWeight: "bold",
    color: "black",
    fontSize: "3.5vw",
    textShadow: "2px 2px 2px #36454F",
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
      <div>
        <div
          className=" d-flex flex-column p-3"
          id="formContainer"
          style={styles.container}
        >
          <Card style={styles.card} className="p-3 mb-3">
            <h1 className="text-center p-3" style={styles.title}>
              Claim Your <span style={styles.bluetext}> FREE CLASS</span> !
            </h1>
            <div className="p-2">
              {" "}
              <ContactForm
                openMsgMadolFunc={openMsgMadolFunc}
                checkIsErrorFunc={checkIsErrorFunc}
              />
            </div>
          </Card>
        </div>
      </div>
    </>
  );
}
