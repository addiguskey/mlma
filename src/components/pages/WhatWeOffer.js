import React from "react";
import { Tab, Tabs } from "react-bootstrap";
import Sword from "../Programs/sword";
import Tkd from "../Programs/tkd";
import FreeClass2 from "../FreeClass2";

const styles = {
  container: {
    borderRadius: "2mm",
  },
  tab: {
    backgroundColor: "rgba(42, 42, 42, 0.000)",
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
      <div className="p-4">
        <Tabs
          defaultActiveKey="values"
          id="justify-tab-example"
          className=""
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
        <FreeClass2></FreeClass2>
      </div>
    </div>
  );
}
