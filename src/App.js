import React from "react";
import { HashRouter, Routes, Route } from "react-router-dom";
import Home from "./components/Home.js";
import { loadProgressBar } from "axios-progress-bar";
import "axios-progress-bar/dist/nprogress.css";
import Footer from "./components/Basic/Footer.js";

loadProgressBar();

function App() {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route index element={<Home />} />
          {/* <Route path="dashboard" element={<Dashboard/>}/>
          <Route path="add" element={<Add />} />
          <Route path="edit" element={<Edit />} /> */}

          <Route
            path="*"
            element={
              <main style={{ padding: "1rem" }}>
                <p>Page in Deveploment!</p>
              </main>
            }
          />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
