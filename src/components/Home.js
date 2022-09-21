import React from "react";
import Banner from "./Basic/Banner";
import MbBanner from "./Basic/MbBanner";
import MdForm from "./Basic/MdForm";

import Navbar from "./Basic/Navbar";
import NavbarXl from "./Basic/NavbarXl";

import XlForm from "./Basic/XlForm";

import Content from "./Content";
import Grid from "./Grid";
import Mbtestimonal from "./Mbtestimonal";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Navbar />
      <NavbarXl />
      <Banner />
      <MbBanner/>
      <XlForm />
      <MdForm/>
      <Content />
      <Grid />
      <Testimonial />
      <Mbtestimonal />
    </div>
  );
}

export default Home;
