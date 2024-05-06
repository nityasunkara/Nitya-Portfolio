import React, { useState } from "react";
import { Link } from "react-router-dom";
import MenuIcon from "@mui/icons-material/Menu";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import { Button, Divider } from "@mui/material";
import IntroSection from "./IntroSection";
import About from "./About";
import MyServices from "./MyServices";
import EducationAndExperience from "./EducationAndExperience";
import ContactUs from "./ContactUs";
import Footer from "./Footer";
import MySkills from "./MySkills";
import TestinomialContainer from "../Containers/TestinomialContainer";
const NavBar = () => {
  const [open, setOpen] = useState(false);

  const scrollToID = (ID) => {
    const section = document.getElementById(ID);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  return (
    <div className="max-w-[1440px] mx-auto">
      <div className="fixed w-full 2k:w-[1440px] z-20">
        <nav className="bg-[#FFFFFF] py-[20px] iPhoneSE:py-[10px] laptop:py-[20px] flex justify-between px-[5%] items-center">
          <div>
            <Link to="/">
              <img
                alt="logo"
                className="h-[40px]"
                src={
                  "https://credesign.vercel.app/onePage/onePageFour/img/Logo.png"
                }
              />

            </Link>
          </div>
          <ul className="flex items-center gap-[20px] iPhoneSE:hidden laptop:flex">
            <li className="hover:text-[#FA6C2C] cursor-pointer" onClick={() => scrollToID("home")}>
              Home
            </li>
            <li className="hover:text-[#FA6C2C] cursor-pointer" onClick={() => scrollToID("about")}>
            About
            </li>
            <li className="hover:text-[#FA6C2C] cursor-pointer" onClick={() => scrollToID("services")}>
            Services
            </li>
            <li>
              <Link to="/contact-us">Resume</Link>
            </li>
            <li>
              <Link to="/contact-us">Portfolio</Link>
            </li>
            <li className="hover:text-[#FA6C2C] cursor-pointer" onClick={() => scrollToID("testimonial")}>
            Testimonial
            </li>
            <li>
              <Link to="/contact-us">Blog</Link>
            </li>
            <li>
              <Button
                sx={{
                  color: "white",
                  backgroundColor: "#FA6C2C",
                  ":hover": { backgroundColor: "#FA6C2C" },
                }}
                onClick={() => scrollToID("contact")}
              >
                Contact us
              </Button>
            </li>
          </ul>
          <div onClick={() => setOpen(!open)} className={`block laptop:hidden`}>
            <IconButton>{open ? <CloseIcon /> : <MenuIcon />}</IconButton>
          </div>
        </nav>
        <ul
        className={`dropdown-menu overflow-hidden transition-max-height duration-700 ease-in-out ${open ? 'max-h-screen' : 'max-h-0'} bg-[#0C1923] text-white text-[15px] text-start font-Poppins uppercase`}
          // className={`bg-[#0C1923] text-white text-[17px] text-start`}
          // style={{ display: open ? "block" : "none" }}
        >
          <li onClick={() => {scrollToID("home");setOpen(false)}} className="py-[8px] pl-[5%] hover:bg-[#263139] cursor-pointer">
          Home
          </li>
          <Divider sx={{backgroundColor:"#93989C"}}/>
          <li onClick={() => {scrollToID("about");setOpen(false)}} className="py-[8px] pl-[5%] hover:bg-[#263139] cursor-pointer">
            About
          </li>
          <Divider sx={{backgroundColor:"#93989C"}}/>
          <li onClick={() => {scrollToID("services");setOpen(false)}} className="py-[8px] pl-[5%] hover:bg-[#263139] cursor-pointer">
          Services
          </li>
          <Divider sx={{backgroundColor:"#93989C"}}/>
          <li className="py-[8px] pl-[5%] hover:bg-[#263139] cursor-pointer">
            <Link to="/contact-us">Resume</Link>
          </li>
          <Divider sx={{backgroundColor:"#93989C"}}/>
          <li className="py-[8px] pl-[5%] hover:bg-[#263139] cursor-pointer">
            <Link to="/contact-us">Portfolio</Link>
          </li>
          <Divider sx={{backgroundColor:"#93989C"}}/>
          <li onClick={() => {scrollToID("testimonial");setOpen(false)}} className="py-[8px] pl-[5%] hover:bg-[#263139] cursor-pointer">
          Testimonial
          </li>
          <Divider sx={{backgroundColor:"#93989C"}}/>
          <li className="py-[8px] pl-[5%] hover:bg-[#263139] cursor-pointer">
            <Link to="/contact-us">Blog</Link>
          </li>
          <Divider sx={{backgroundColor:"#93989C"}}/>
        </ul>
      </div>
      <div id="home" className="pt-0 laptop:pt-[50px]">
        <IntroSection />
      </div>
      <div className="pb-[20px]" id="about">
        <About />
      </div>
      <div className="pb-[20px]" id="about">
        <MySkills />
      </div>
      <div id="services">
        <MyServices />
      </div>
      <div id="education">
        <EducationAndExperience />
      </div>
      {/* <div id="testimonial">
        <TestinomialContainer/>
      </div> */}
      <div id="contact">
        <ContactUs />
      </div>
      <Footer />
    </div>
  );
};

export default NavBar;
