import React from "react";
import { Button } from "@mui/material";
import CountUp from "react-countup";
import myPic from "../Utils/WhatsApp Image 2024-05-06 at 12.39.30.jpeg";
import { useInView } from 'react-intersection-observer';

const About = () => {
  const { ref:downloadButtonCV, inView:downloadButtonCVVisible } = useInView();
  return (
    <div className="flex pt-[100px] w-full bg-[#FFFFFF] iPhoneSE:flex-col laptop:flex-row gap-0 iPhoneSE:gap-[15px] laptop:gap-0">
      <div className="w-1/2 iPhoneSE:w-full laptop:w-1/2 flex justify-center">
        <img
          alt="profile"
          className="h-[500px] iPhoneSE:h-[400px] laptop:h-[500px] float-right"
          // src={
          //   "https://credesign.vercel.app/onePage/onePageFour/img/aboutFourImg.png"
          // }
          src={myPic}
        />
      </div>
      <div className="pr-[5%] w-1/2 iPhoneSE:w-full flex flex-col justify-center gap-[25px] laptop:w-1/2 text-left pl-[5%]">
        <h1 className="text-4xl font-semibold">
          I design that help user more easily to use
        </h1>
        <p className="text-[#656565]">
        Specializing in React, I'm passionate about crafting seamless user experiences and bringing designs to life. In addition to my frontend expertise, I also have a solid foundation in Python, adding versatility to my toolkit and allowing me to tackle diverse challenges with confidence.
        </p>
        <p className="text-[#656565]">
        When I'm not coding, you can often find me exploring the outdoors or diving into a good book. I believe in the power of continuous learning and embracing new experiences to fuel my creativity and growth.
        </p>
        <table ref={downloadButtonCV} >
          <tr>
            <td>
              <h1 className="text-3xl text-[#FA6C2C] font-bold">
                <CountUp enableScrollSpy end={107} duration={2} />+
              </h1>
              <p>Complete Project</p>
            </td>
            <td>
              <h1 className="text-3xl text-[#FA6C2C] font-bold">
                <CountUp enableScrollSpy end={17} duration={2} />+
              </h1>
              <p>Clients on worldwide</p>
            </td>
            <td>
              <h1 className="text-3xl text-[#FA6C2C] font-bold">
                <CountUp enableScrollSpy end={16} duration={2} />+
              </h1>
              <p>Client Satisfied</p>
            </td>
          </tr>
        </table>
        <div className={`mb-0 iPhoneSE:mb-[20px] laptop:mb-0 ${downloadButtonCVVisible ? "animate-slide-up" : ""}`}>
          <Button
            sx={{
              color: "white",
              backgroundColor: "#FA6C2C",
              ":hover": { backgroundColor: "#FA6C2C" },
              fontWeight: "bold",
            }}
          >
            Download My CV
          </Button>
        </div>
      </div>
    </div>
  );
};

export default About;
