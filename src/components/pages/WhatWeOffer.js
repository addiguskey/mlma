import React from "react";
import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap";
import Sword from "../Programs/sword";
import Tkd from "../Programs/tkd";
import FreeClass2 from "../FreeClass2";
import { Link } from "react-router-dom";

const styles = {
  tab: {
    color: "black",
  },
  lessons: {
    backgroundColor: "black",
    color: "gray",
    padding: "2rem",
  },
};
export default function WhatWeOffer() {
  return (
    <div>
      <div>
        <Tabs
          defaultActiveKey="values"
          id="justify-tab-example"
          className="mb-3"
          justify
          style={styles.tab}
        >
          <Tab eventKey="sword" title="Korean Sword Martial Arts">
            <Sword />
          </Tab>

          <Tab eventKey="values" title="Tae Kwon Do">
            <Tkd />
          </Tab>
        </Tabs>
        <div style={styles.lessons}>
          <h6 className="text-center">
            *Private Lessons Available by Appointment*
          </h6>
        </div>
      </div>
      <FreeClass2></FreeClass2>
    </div>
  );
}
