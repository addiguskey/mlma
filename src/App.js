import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/pages/Home";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import WhatWeOffer from "./components/pages/WhatWeOffer";
import Calendar from "./components/pages/Calendar";
// import Testimonials from "./components/Testimonials/Testimonials";

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
              <Route exact path="/calendar" element={<Calendar />} />
              <Route exact path="/whatweoffer" element={<WhatWeOffer />} />
              {/* <Route exact path="/testimonials" element={<Testimonials />} /> */}
              <Route exact path="/contact" element={<Contact />} />
            </Routes>
            <Footer />
          </div>
        </div>
      </Router>
    </>
  );
}
