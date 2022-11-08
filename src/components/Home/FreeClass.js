import React, { useState } from "react";
import ContactForm from "../contactForm";

const styles = {
  red: {
    backgroundColor: "#e24d24",
    color: "white",
  },
};

export default function FreeClass() {
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
      <div
        className=" d-flex flex-column p-4"
        id="formContainer"
        style={styles.red}
      >
        <h1 className="text-center p-4">
          Claim Your <span>FREE CLASS</span> !
        </h1>
        <ContactForm
          openMsgMadolFunc={openMsgMadolFunc}
          checkIsErrorFunc={checkIsErrorFunc}
        />
      </div>
    </>
  );
}
