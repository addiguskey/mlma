import React from "react";
import { Tab, Tabs, Row, Col, Nav } from "react-bootstrap";
import Sword from "../Programs/sword";
import Tkd from "../Programs/tkd";

const styles = {
  tab: {
    color: "black",
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
      </div>
    </div>
  );
}
