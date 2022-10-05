import React, { useEffect } from "react";

import AOS from "aos";
import "aos/dist/aos.css";

function Test1() {
  useEffect(() => {
    AOS.init({ duration: 2000 });
  }, []);
  return (
    <div className="bg-zinc-100 ">
      <div className="container px-6 pt-10 m-auto md:px-12 xl:px-6">
        <div className="flex justify-center">
          <div className="mt-3 text-3xl font-semibold font-Poppins text-sky-800 ">
            <div className="mt-4 mb-4 font-sans text-xl font-semibold md:text-3xl md:px-0 ">
              <h1 className=" md:text-3xl">Our Doctor Visits At Home</h1>
            </div>
          </div>
        </div>
        <div
          data-aos="zoom-in"
          className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 md:gap-5"
        >
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-01.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white text-center font-Poppins   md:text-lg  text-xl">
                  General Medicine
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-08.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-lg  text-xl text-center">
                  Dental
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500  w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-06.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins text-xl  md:text-lg text-center">
                  Orthopaedics
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-07.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-lg text-xl text-center">
                  ENT
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-05.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-lg text-xl text-center">
                  Ophthalmology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-02.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-lg text-xl text-center">
                  Diabetology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-400 to-pink-500  w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-04.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-lg text-xl text-center">
                  Neurology
                </h4>
              </div>
            </div>
          </div>
          <div class="relative max-w-md mx-auto xl:max-w-xl min-w-0 break-words bg-gradient-to-r from-pink-500 to-pink-400 w-full mb-6 shadow-lg rounded-xl mt-16">
            <div class="card">
              <div class=" mx-4 -mt-6">
                <img
                  class=" w-full rounded-lg"
                  src="https://athulyahomecare.com/lp/images/1-03.jpg"
                  alt="tailwind-card"
                />
              </div>
              <div class="p-5">
                <h4 class="font-semibold text-white font-Poppins md:text-lg text-xl text-center">
                  Oncology
                </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Test1;
