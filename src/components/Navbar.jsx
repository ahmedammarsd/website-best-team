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
import SelectLanguage from "./SelectLanguage";

import { useTranslation } from "react-i18next";
import Links from "./shared/Links";


const Navbar = ({language , currenLanguageCode , currenLanguage}) => {
  const [showNav, setShowNav] = useState(false);
  const [navbar, setNavbar] = useState(false);

  const handleShowNav = () => {
    setShowNav(false)
  }

  const { t } = useTranslation();
  return (
    <div className="tw-relative tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-col">
      {/* START NAV */}
      <div className="tw-p-4 tw-w-full tw-z-10 tw-flex tw-justify-center">
        <div className="tw-flex tw-justify-between tw-items-center tw-w-[85%] lg:tw-w-[90%]">
         
          <div className="tw-w-[100px] tw-bg-gray-400 tw-rounded-lg lg:tw-w-[90px] sm:tw-w-[70px]">
             <img src={logo} className="tw-w-full" /> 
          </div>

          <div
            className="tw-hidden lg:tw-block tw-p-3 sm:tw-p-2 tw-text-2xl sm:tw-text-xl tw-text-white tw-shadow-md tw-rounded-md tw-bg-red-500 hover:tw-bg-red-700 tw-cursor-pointer tw-duration-500"
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
            <div className=" tw-flex tw-items-center lg:tw-flex-col lg:tw-items-start tw-gap-2 lg:tw-w-[80%] lg:tw-p-3 lg:tw-pt-9 lg:tw-h-screen lg:tw-bg-white lg:tw-relative">
              {/* change dir down here */}
              <span
                onClick={() => setShowNav(false)}
                className={`tw-hidden lg:tw-block lg:tw-absolute tw-top-3 ${currenLanguageCode === "en" ? "tw-left-3" : "tw-right-3"} tw-text-red-400 tw-p-3 tw-shadow-sm hover:tw-text-red-600 tw-cursor-pointer hover:tw-bg-gray-50 tw-rounded-md tw-text-xl tw-transition-all tw-duration-200 tw-ease-in-out`}
              >
                <RxCross2 />
              </span>
              <Links to="main" name={t("link1")} icon={<RiHome6Line />} link1={true} customFunc={handleShowNav} />
              <Links to="program" name={t("link2")} icon={<SiProgress />} customFunc={handleShowNav} />
              <Links to="" name={t("link3")} icon={<MdMiscellaneousServices />} customFunc={handleShowNav} />
              <Links to="contests" name={t("link4")} icon={<GiJeweledChalice />} customFunc={handleShowNav} />
              <Links to="company" name={t("link5")} icon={<VscInfo />} customFunc={handleShowNav} />
            </div>
          </div>
          <div>
            <SelectLanguage 
              language={language}
              currenLanguageCode={currenLanguageCode}
              currenLanguage={currenLanguage}
            />
          </div>
        </div>
      </div>
      {/* END NAV */}
      <div className="tw-flex tw-flex-col tw-gap-2 tw-h-[70vh] tw-items-center tw-justify-center md:tw-p-3">
      <h1 className=" tw-mt-5 tw-text-4xl lg:tw-text-2xl sm:tw-text-xl tw-font-extrabold tw-leading-[1.15] tw-tw-text-black tw-text-center">
         <span className=" tw-pb-10">{t("title1")} <br /> {t("con_title1")}</span> <br /><br/>
        <span className="tw-bg-gradient-to-r tw-from-red-500 tw-via-orange-600 tw-to-red-300 tw-bg-clip-text tw-text-5xl lg:tw-text-2xl sm:tw-text-xl tw-text-transparent">{t("title2")}</span>
      </h1>
      <h2 className="tw-mt-5 tw-text-lg tw-capitalize tw-text-gray-600 tw-sm:text-xl tw-text-center tw-max-w-2xl">
        {t("description")}
      </h2>
      </div>

    </div>
  );
};

export default Navbar;
