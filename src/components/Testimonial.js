import React from "react";

// import Heading from "./Heading";
import {
  CarouselProvider,
  Slider,
  Slide,
  ButtonBack,
  ButtonNext,
} from "pure-react-carousel";
import "pure-react-carousel/dist/react-carousel.es.css";

function Testimonial() {
  return (
    <div className="md:block hidden ">
      <div>
        <div className="flex justify-center">
          <div className="font-Poppins text-3xl font-semibold  mt-3 text-sky-800  ">
            <div className="md:text-3xl  font-sans font-semibold  mb-10 mt-10  md:px-0 text-xl ">
              <h1 className="  md:text-3xl">Our Testimonial</h1>
            </div>
          </div>
        </div>
        <div className="bg-zinc-100">
          <div className="xl:px-20 px-8 py-20 2xl:mx-auto 2xl:container relative z-40">
            <CarouselProvider
              naturalSlideWidth={100}
              isIntrinsicHeight={true}
              totalSlides={2}
            >
              <Slider>
                <Slide index={0} tabIndex="null">
                  <div class="flex items-center justify-center px-5 py-5">
                    <div class="w-full mx-auto max-w-xl rounded-lg bg-white  shadow-lg px-5 pt-5 pb-10 text-gray-800 ">
                      <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                        <img
                          alt="profil"
                          src="/images/person/1.jpg"
                          class="mx-auto object-cover rounded-full h-20 w-20 "
                        />
                      </div>
                      <div class="w-full mb-10">
                        <div class="text-3xl text-indigo-500 text-left leading-tight h-3">
                          “
                        </div>
                        <p class="text-sm text-gray-600 px-5">
                          To get social media testimonials like these, keep your
                          customers engaged with your social media accounts by
                          posting regularly yourself
                        </p>
                        <div class="text-3xl text-indigo-500 text-right leading-tight h-3 -mt-3">
                          ”
                        </div>
                      </div>
                      <div class="w-full">
                        <p class="text-md text-indigo-500 font-bold text-center">
                          Tom Hardy
                        </p>
                        <p class="text-xs text-gray-500  text-center">
                          @thom.hardy
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
                <Slide index={1}>
                  <div class="flex items-center justify-center px-5 py-5">
                    <div class="w-full mx-auto max-w-xl rounded-lg bg-white  shadow-lg px-5 pt-5 pb-10 text-gray-800 ">
                      <div class="w-full pt-1 text-center pb-5 -mt-16 mx-auto">
                        <img
                          alt="profil"
                          src="/images/person/1.jpg"
                          class="mx-auto object-cover rounded-full h-20 w-20 "
                        />
                      </div>
                      <div class="w-full mb-10">
                        <div class="text-3xl text-pink-500 text-left leading-tight h-3">
                          “
                        </div>
                        <p class="text-sm text-gray-600  text-center px-5">
                          To get social media testimonials like these, keep your
                          customers engaged with your social media accounts by
                          posting regularly yourself
                        </p>
                        <div class="text-3xl text-pink-500 text-right leading-tight h-3 -mt-3">
                          ”
                        </div>
                      </div>
                      <div class="w-full">
                        <p class="text-md text-indigo-500 font-bold text-center">
                          Tom Hardy
                        </p>
                        <p class="text-xs text-gray-500  text-center">
                          @thom.hardy
                        </p>
                      </div>
                    </div>
                  </div>
                </Slide>
              </Slider>
              <div className="flex justify-center">
                <ButtonBack
                  className="cursor-pointer text-white "
                  role="button"
                  aria-label="previous slide"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                    />
                  </svg>
                </ButtonBack>

                <ButtonNext
                  role="button"
                  aria-label="next slide"
                  className="text-white "
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke-width="1.5"
                    stroke="currentColor"
                    class="w-6 h-6"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5.25 7.5A2.25 2.25 0 017.5 5.25h9a2.25 2.25 0 012.25 2.25v9a2.25 2.25 0 01-2.25 2.25h-9a2.25 2.25 0 01-2.25-2.25v-9z"
                    />
                  </svg>
                </ButtonNext>
              </div>
            </CarouselProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
