import React from "react";
import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap";
import Values from "../About/Values";
import Instructors from "../About/Instructors";
// import Facility from "../About/Facility";
import WhoAreWe from "../About/WhoAreWe";
import FreeClass2 from "../FreeClass2";

const styles = {
  tab: {
    backgroundColor: "rgba(42, 42, 42, 0.000)",
  },
};

export default function About() {
  return (
    <div>
      <div className="p-2">
        <Tabs
          defaultActiveKey="values"
          style={styles.tab}
          id="justify-tab"
          className=""
          justify
        >
          <Tab eventKey="whoarewe" title="Who Are We">
            <WhoAreWe />
          </Tab>
          <Tab eventKey="values" title="Values">
            <Values />
          </Tab>
          <Tab eventKey="instructors" title="Instructors">
            <Instructors />
          </Tab>
          {/* <Tab eventKey="facility" title="Facility">
            <Facility />
          </Tab> */}
        </Tabs>
        {/* <FreeClass2></FreeClass2> */}
      </div>
    </div>
  );
}
