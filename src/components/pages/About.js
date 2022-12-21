import React from "react";
import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap";
import Values from "../About/Values";
import Instructors from "../About/Instructors";
// import Facility from "../About/Facility";
import WhoAreWe from "../About/WhoAreWe";

// const styles = {
//   tabs: {
//     backgroundColor: "black",
//   },
// };

export default function About() {
  return (
    <div>
      <div className="p-3">
        <Tabs
          defaultActiveKey="values"
          id="justify-tab-example"
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
      </div>
    </div>
  );
}
