import React from "react";

import MbBanner from "../components/Banner/MbBanner";
import Banner from "./Banner/Banner";
import MdForm from "./Basic/MdForm";
import XlForm from "./Basic/XlForm";
import AboutAthulya from "./Content/AboutAthulya";
import Athulya from "./Content/Athulya";
import Test1 from "./Content/Test1";
import MbTestimonial from "./Testimonal/MbTestimonial";
import TestimonalNew from "./Testimonal/Testimonial";

function Home() {
  return (
    <div>
      <Banner />
      <MbBanner />
      <XlForm />
      <MdForm />
      <AboutAthulya />
      <Test1 />
      <Athulya />
      <MbTestimonial />
      <TestimonalNew />
    </div>
  );
}

export default Home;
