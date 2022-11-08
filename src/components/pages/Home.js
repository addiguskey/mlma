import React, { useState } from "react";
import ProgramPics from "../Home/programspics";
import MainHomeImg from "../Home/mainhomeimg";
import FeatureCards from "../Home/FeatureCards";
import Testimonials from "../Home/Testimonials/Testimonials";
import FreeClass from "../Home/FreeClass";

export default function Home() {
  return (
    <div>
      <MainHomeImg></MainHomeImg>
      <FreeClass></FreeClass>
      <FeatureCards></FeatureCards>
      <ProgramPics></ProgramPics>
      <div>
        <Testimonials></Testimonials>
      </div>
    </div>
  );
}
