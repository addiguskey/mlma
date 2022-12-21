import React, { useState } from "react";
import ProgramPics from "../Home/programspics";
import MainHomeImg from "../Home/mainhomeimg";
import FeatureCards from "../Home/FeatureCards";
import Testimonials from "../Home/Testimonials";
import FreeClass from "../Home/FreeClass";

export default function Home() {
  return (
    <div className="p-3 mx-2 ">
      <MainHomeImg></MainHomeImg>
      <FreeClass></FreeClass>
      <ProgramPics></ProgramPics>
      <div>
        <Testimonials></Testimonials>
      </div>
      <FeatureCards></FeatureCards>
    </div>
  );
}
