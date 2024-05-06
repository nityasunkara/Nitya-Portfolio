import React from "react";
import { TypeAnimation } from "react-type-animation";
import FacebookIcon from "@mui/icons-material/Facebook";
import { IconButton } from "@mui/material";
import XIcon from "@mui/icons-material/X";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import myPic from "../Utils/WhatsApp Image 2024-05-06 at 12.39.30.jpeg";
import tailwindCssLogo from "../Utils/tailwindcss-mark.3c5441fc7a190fb1800d4a5c7f07ba4b1345a9c8.svg";

const IntroSection = () => {
  return (
    <div className="flex pt-[100px] w-full bg-[#FFF3EA] iPhoneSE:flex-col-reverse laptop:flex-row pb-[50px] laptop:pb-[0px] gap-0 iPhoneSE:gap-[20px] laptop:gap-0">
      <div className="w-1/2 iPhoneSE:w-full flex flex-col justify-center gap-[15px] laptop:w-1/2 text-left pl-[5%]">
        <h1 className="font-semibold">I'M GLAD YOU'RE HERE.</h1>
        <h1 className="font-medium text-4xl font-Poppins ">Hi 👋 I’m Nitya Sunkara Solving</h1>
        <TypeAnimation
          className="text-[#FA6C2C] font-bold text-5xl iPhoneSE:text-4xl laptop:text-5xl"
          sequence={[
            // Same substring at the start will only be typed out once, initially
            "modern problems",
            1000, // wait 1s before replacing "Mice" with "Hamsters"
            "modern solutions",
            1000,
          ]}
          wrapper="span"
          speed={50}
          // style={{ fontSize: "45px", display: "inline-block" }}
          repeat={Infinity}
        />
        <h1 className="font-medium text-4xl font-Poppins">through design</h1>
        <p className="text-[#72687B]">
        Master's student of Software Engineering at San Jose State University. Adaptable problem solver with exceptional organizational abilities and a collaborative team spirit. Passionate software engineer actively seeking summer 2024 internships, eager to address real-time challenges by delivering impeccable solutions with heightened efficiency.
        </p>
        <div>
          <h1 className="mb-[10px] font-medium">FIND WITH ME</h1>
          <div className="flex gap-[10px]">
            <div className="rounded-lg bg-[#FA6C2C] hover:bg-[#FFFFFF]">
              <a rel="noreferrer" href="#" target="_blank"><IconButton
                sx={{ color: "white", ":hover": { color: "#FA6C2C" } }}
              >
                <FacebookIcon />
              </IconButton></a>
            </div>
            <div className="rounded-lg bg-[#FA6C2C] hover:bg-[#FFFFFF]">
              <a rel="noreferrer" href="#" target="_blank"><IconButton>
                <XIcon
                  sx={{ color: "white", ":hover": { color: "#FA6C2C" } }}
                />
              </IconButton></a>
            </div>
            <div className="rounded-lg bg-[#FA6C2C] hover:bg-[#FFFFFF]">
              <a rel="noreferrer" href="https://www.linkedin.com/in/nitya-sunkara-651495216/" target="_blank">
              <IconButton>
                <LinkedInIcon
                  sx={{ color: "white", ":hover": { color: "#FA6C2C" } }}
                />
              </IconButton>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="w-1/2 iPhoneSE:w-full laptop:w-1/2 flex justify-center">
        {/* <div className="w-full bg-[#FBD7BD] h-[600px] relative bottom-[30px]"></div> */}
        <div className="bg-[#FBE3D2] rounded-lg relative">
          <div className="bg-[#FBD7BD] rounded-t-lg absolute z-[0] top-0 w-full h-[50px]"></div>
          <div className="h-[13px] w-[13px] bg-[#FC964C] top-[20px] left-[30px] absolute rounded-full z-2"></div>
          <div className="h-[13px] w-[13px] bg-[#FC964C] top-[20px] left-[10px] absolute rounded-full z-2"></div>
          <div className="h-[13px] w-[13px] bg-[#FDEBDE] top-[20px] left-[50px] absolute rounded-full z-2"></div>
          {/* <img className="absolute transform animate-scale-up top-[40%] z-10 h-[100px] left-0" src="https://credesign.vercel.app/onePage/onePageFour/img/SketchShape.png"/> */}
          <div className="absolute animate-scale-up bg-white rounded-full h-[60px] flex justify-center items-center w-[60px] top-[40%] z-10">
            <img
            alt="logo"
              className="h-[40px]"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="absolute animate-scale-up bg-white rounded-full h-[60px] flex justify-center items-center w-[60px] top-[60%] right-0 z-10">
            <img
            alt="logo"
              className="h-[40px]"
              src="data:image/png;base64,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"
            />
          </div>
          <div className="absolute animate-scale-up bg-white rounded-full h-[60px] flex justify-center items-center w-[60px] bottom-0 left-[50%] z-10">
            <img alt="logo" className="h-[20px]" src={tailwindCssLogo} />
          </div>
          {/* <div className="absolute animate-scale-up bg-white rounded-full h-[60px] flex justify-center items-center w-[60px] top-[10%] right-0 z-10">
            <img
            alt="logo"
              className="h-[20px]"
              src="https://cdn.worldvectorlogo.com/logos/material-ui-1.svg"
            />
          </div> */}
          <img
            alt="profile"
            className="h-[500px] iPhoneSE:h-[350px] relative top-0 laptop:h-[500px] float-right"
            // src={
            //   "https://credesign.vercel.app/onePage/onePageFour/img/homeBannerFourImg.png"
            // }
            src={myPic}
          />
        </div>
      </div>
    </div>
  );
};

export default IntroSection;
