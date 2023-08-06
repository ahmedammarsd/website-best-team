import React, { useState } from "react";
import { IoLogoWebComponent } from "react-icons/io5";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import logo from "../images/logo.png";
import { RiHome6Line } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiJeweledChalice } from "react-icons/gi";
import { VscInfo } from "react-icons/vsc";
import { SiProgress } from "react-icons/si";

const Navbar = () => {
  const [showNav, setShowNav] = useState(false);
  const [navbar, setNavbar] = useState(false);
  return (
    <div className="tw-relative tw-bg-slate-900">
      <div className=" tw-w-full">
        <div className="tw-flex tw-justify-between tw-items-center tw-w-[85%] lg:tw-w-[90%]">
         
          <div className="tw-w-[200px] lg:tw-w-[140px] xs:tw-w-[100px]">
             <img src={logo} className="tw-w-full" /> 
          </div>

          <div
            className="tw-hidden lg:tw-block tw-p-3 tw-text-2xl tw-text-white tw-shadow-md tw-rounded-md hover:tw-bg-red-500 tw-cursor-pointer"
            onClick={() => setShowNav(true)}
          >
              <AiOutlineMenu />
          </div>

          <div
            className={`lg:tw-absolute tw-right-0
                ${showNav ? "tw-top-0" : "tw-top-[-1000px]"}
                lg:tw-w-full lg:tw-h-screen lg:tw-z-4 lg:tw-bg-transparent-black tw-transition-all tw-duration-500 tw-ease-in-out
                `}
          >
            <div className=" tw-flex tw-items-center lg:tw-flex-col lg:tw-items-start tw-gap lg:tw-w-[80%] tw-border tw-border-yellow-400 lg:tw-p-3 lg:tw-pt-9 lg:tw-h-screen lg:tw-bg-white lg:tw-relative">
              {/* change dir down here */}
              <span
                onClick={() => setShowNav(false)}
                className="tw-hidden lg:tw-block lg:tw-absolute tw-top-3 tw-right-3 tw-text-red-400 tw-p-3 tw-shadow-sm hover:tw-text-red-600 tw-cursor-pointer hover:tw-bg-gray-50 tw-rounded-md tw-text-xl tw-transition-all tw-duration-200 tw-ease-in-out"
              >
                <RxCross2 />
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
