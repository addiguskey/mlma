import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import WhatWeOffer from "./components/pages/WhatWeOffer";

export default function App() {
  return (
    <>
      <Router>
        <div>
          <Navbar />
          <div>
            <Routes>
              <Route exact path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
              <Route exact path="/whatweoffer" element={<WhatWeOffer />} />
              {/* <Route exact path="/contact" element={<Contact />} /> */}
              {/* <Route exact path="/resume" element={<Resume />} /> */}
            </Routes>
            {/* <Socials /> */}
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}
