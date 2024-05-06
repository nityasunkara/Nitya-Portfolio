import React from "react";
import Testinomial from "../Components/Testinomial";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TestinomialContainer = () => {
  return (
    <>
      <h1 className="text-4xl font-bold my-[20px]">My Testimonials</h1>
      <div className="my-[2%] px-[5%] bg-gradient-to-r from-slate-100 via-orange-100 to-pink-50 ">
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showStatus={false}
          transitionTime={1000}
          showThumbs={false}
        >
          <Testinomial />
          <Testinomial />
          <Testinomial />
          <Testinomial />
        </Carousel>
      </div>
    </>
  );
};

export default TestinomialContainer;
