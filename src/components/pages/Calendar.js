import React from "react";
import calendar2 from "../../assets/images/calendar2.png";
import jan from "../../assets/images/calendar/jan.png";
import redbubble from "../../assets/images/calendar/redbubble.png";
import bluebubble from "../../assets/images/calendar/bluebubble.png";

const styles = {
  cal: {
    width: "70rem",
    height: "auto",
    // marginRight: "-10rem",
    borderRadius: "5mm",
  },
  calbox: {
    marginRight: "12rem",
  },
  redbubble: {
    width: "35rem",
    height: "auto",
    marginTop: "-40rem",
    marginLeft: "-1rem",
  },
  bluebubble: {
    width: "28rem",
    height: "auto",
    marginTop: "15rem",
    marginLeft: "5rem",
  },
};
export default function Calendar() {
  return (
    <div>
      <div className="d-flex flex-column">
        <div
          className="row text-center align-items-center mt-5 "
          style={styles.calbox}
        >
          <div className="col-sm-4 col-md-4 col-l-4 col-xl-4">
            <img
              src={bluebubble}
              alt=""
              style={styles.bluebubble}
              className="bluebubble"
            ></img>
          </div>
          <div className="col-sm-4 col-md-4 col-l-4 col-xl-4 text-center align-items-center ">
            <img src={jan} alt="" style={styles.cal} className="cal" />
          </div>
          <div className="col-sm-4 col-md-4 col-l-4 col-xl-4">
            <img
              src={redbubble}
              alt=""
              style={styles.redbubble}
              className="redbubble"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
}
