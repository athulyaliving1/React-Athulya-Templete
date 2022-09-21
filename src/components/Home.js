import React from "react";
import Banner from "./Basic/Banner";

import Navbar from "./Basic/Navbar";
import NavbarXl from "./Basic/NavbarXl";
import Content from "./Content";
import Grid from "./Grid";
import Mbtestimonal from "./Mbtestimonal";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Navbar />
      <NavbarXl />
      <Banner/>
      <Content />
      <Grid />
      <Testimonial />
      <Mbtestimonal />
    </div>
  );
}

export default Home;
