import React from "react";
import Banner from "./Basic/Banner";
import MbBanner from "./Basic/MbBanner";
import MdForm from "./Basic/MdForm";
import XlForm from "./Basic/XlForm";
import Content from "./Content";
import Grid from "./Grid";
import Mbtestimonal from "./Mbtestimonal";
import Testimonial from "./Testimonial";

function Home() {
  return (
    <div>
      <Banner />
      <MbBanner />
      <XlForm />
      <MdForm />
      <Content />
      <Grid />
      <Testimonial />
      <Mbtestimonal />
    </div>
  );
}

export default Home;
