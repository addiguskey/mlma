import React from "react";
import calendar2 from "../../assets/images/calendar2.png";
import jan from "../../assets/images/calendar/jan.png";
import redbubble from "../../assets/images/calendar/redbubble.png";
import bluebubble from "../../assets/images/calendar/bluebubble.png";

const styles = {
  cal: {
    width: "70rem",
    height: "auto",
    marginLeft: "-10.5rem",
    borderRadius: "5mm",
  },
  redbubble: {
    width: "35rem",
    height: "auto",
    marginTop: "-40rem",
    marginLeft: "-8rem",
  },
  bluebubble: {
    width: "28rem",
    height: "auto",
    marginTop: "15rem",
    marginLeft: "8rem",
  },
};
export default function Calendar() {
  return (
    <div>
      <div className="d-flex flex-column">
        <div className="row text-center align-items-center mt-5">
          <div className="col-sm-4 col-md-4 col-l-4 col-xl-4">
            <img
              src={bluebubble}
              alt=""
              style={styles.bluebubble}
              className="bluebubble"
            />
          </div>
          <div className="col-sm-4 col-md-4 col-l-4 col-xl-4">
            <img src={jan} alt="" style={styles.cal} />
          </div>
          <div className="col-sm-4 col-md-4 col-l-4 col-xl-4">
            <img
              src={redbubble}
              alt=""
              style={styles.redbubble}
              className="redbubble"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
