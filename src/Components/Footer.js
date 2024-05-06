import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import XIcon from "@mui/icons-material/X";
import { Stack } from "@mui/material";
import NearMeOutlinedIcon from "@mui/icons-material/NearMeOutlined";
import Divider from '@mui/material/Divider';

const Footer = () => {
  return (
    <div className="bg-[#101010]">
      <div className="py-[90px] flex px-[5%] text-white flex-wrap justify-between gap-[20px]">
        <ul className="flex flex-col gap-[15px] text-white text-start">
          <li className="text-xl">Quick Link</li>
          <li className="hover:text-[#FA6C2C] cursor-pointer block w-full">
            About
          </li>
          <li className="hover:text-[#FA6C2C] cursor-pointer block">
            Portfolio
          </li>
          <li className="hover:text-[#FA6C2C] cursor-pointer block">Resume</li>
          <li className="hover:text-[#FA6C2C] cursor-pointer block">Contact</li>
        </ul>
        <ul className="flex flex-col gap-[15px]  text-white text-start">
          <li className="text-xl">Services</li>
          <li className="hover:text-[#FA6C2C] cursor-pointer block w-full">
            Photography
          </li>
          <li className="hover:text-[#FA6C2C] cursor-pointer block">
            Videography
          </li>
          <li className="hover:text-[#FA6C2C] cursor-pointer block">Wedding</li>
        </ul>
        <ul className="flex flex-col gap-[15px]  text-white text-start">
          <li className="text-xl">Contact</li>
          <li className="w-full">98 North First Street, #501 <br/> San Jose, California 95113</li>
          <li className="text-[#FA6C2C]">+1 925-913-0940</li>
          <li className="">
            <Stack direction={"row"} spacing={2}>
              <div className="bg-[#606060] hover:text-white cursor-pointer h-[50px] w-[50px] rounded-md hover:bg-[#FA6C2C] justify-center items-center flex">
                <FacebookIcon />
              </div>
              <div className="hover:text-white cursor-pointer h-[50px] w-[50px] bg-[#606060] rounded-md hover:bg-[#FA6C2C] justify-center items-center flex">
                <LinkedInIcon />
              </div>
              <div className="hover:text-white cursor-pointer h-[50px] w-[50px] bg-[#606060] rounded-md hover:bg-[#FA6C2C] justify-center items-center flex">
                <XIcon />
              </div>
            </Stack>
          </li>
        </ul>
        <div className="w-full laptop:w-[40%] flex flex-col gap-[20px]">
          <h1 className="text-start font-bold text-4xl">
            Let's Make Consultation With Us!
          </h1>
          <div className="flex gap-[10px]">
            <input
              type="text"
              placeholder="Enter your email"
              className="border-[1px] border-[#6A6A6A] bg-[#101010] px-[20px] py-[10px] rounded-md"
            />
            <div className="bg-[#FA6C2C] hover:text-white cursor-pointer h-[50px] w-[50px] rounded-md hover:bg-[#101010] hover:border-[1px] hover:border-[#FA6C2C] justify-center items-center flex">
              <NearMeOutlinedIcon />
            </div>
          </div>
        </div>
      </div>
      <Divider sx={{ backgroundColor: "#606060" }}/>
      <div className="text-white text-center py-[20px] flex flex-col iPadMini:flex-row justify-between px-[5%]">
        <p>All rights reserved © 2024 Nitya Sunkara</p>
        <p>Made with ❤️</p>
      </div>
    </div>
  );
};

export default Footer;
