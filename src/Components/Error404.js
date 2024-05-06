import React from "react";
import WestIcon from '@mui/icons-material/West';
import { useNavigate } from "react-router-dom";
import errorBg from "../Utils/404Bg.avif"

const Error404 = () => {
  const navigate = useNavigate();
  return (
    <div className="h-screen" style={{ backgroundImage: `url(${errorBg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat' }}>
      <div className="flex flex-col items-center justify-center gap-3 pt-[10%] px-[5%] text-center">
        <h1 className="text-[#ffffff] font-semibold font-Poppins text-2xl">404</h1>
        <p className="text-[#ffffff] font-bold text-4xl">Page not found</p>
        <p className="text-[#f1f5f9] font-Poppins">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="flex group items-center justify-center gap-1 cursor-pointer" onClick={() => navigate("/")}>
          <p className="group-hover:-translate-x-1 transition delay- ease-in-out"><WestIcon fontSize="small" sx={{ color: "#FFFFFF" }}/></p>
          <p className="text-[#FFFFFF] font-semibold font-Poppins">Back to home</p>
        </div>
      </div>
    </div>
  );
};

export default Error404;
