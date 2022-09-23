import React from "react";
import Banner from "./Basic/Banner";
import MbBanner from "./Basic/MbBanner";
import MdForm from "./Basic/MdForm";
import XlForm from "./Basic/XlForm";

function Home() {
  return (
    <div>
      <Banner />
      <MbBanner />
      <XlForm />
      <MdForm />
    </div>
  );
}

export default Home;
