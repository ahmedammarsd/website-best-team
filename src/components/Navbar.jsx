import { useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { RxCross2 } from "react-icons/rx";
import logo from "../images/logo.png";
import { RiHome6Line } from "react-icons/ri";
import { GiJeweledChalice, GiNewspaper } from "react-icons/gi";
import { SiProgress } from "react-icons/si";
import { ImLocation } from "react-icons/im";
import SelectLanguage from "./SelectLanguage";
import { MdLogin } from "react-icons/md";

import { useTranslation } from "react-i18next";
import Links from "./shared/Links";
import { useAuth } from "../context/auth";
import { useNavigate, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = ({ showLinks }) => {
  const { setSuccess, currenLanguageCode } = useAuth();
  const { t } = useTranslation();
  const navigate = useNavigate();

  const [showNav, setShowNav] = useState(false);
  const titleAndParagraph = useSelector((state) => state.mainPara.data);
  const handleShowNav = () => {
    setShowNav(false);
  };

  useEffect(() => {
    document.title = t("link6")
  },[])

  return (
    <div className="tw-relative tw-w-full tw-flex tw-justify-center tw-items-center tw-flex-col">
      {/* START NAV */}
      <div className="tw-p-4 tw-w-full tw-z-10 tw-flex tw-justify-center">
        <div className="tw-flex tw-justify-between tw-items-center tw-w-[85%] lg:tw-w-[90%]">
          <div
            className="tw-w-[100px] tw-bg-gray-300 hover:tw-bg-red-400 tw-cursor-pointer tw-rounded-md lg:tw-w-[90px] sm:tw-w-[70px] tw-duration-300"
            onClick={() => {
              setSuccess(false);
              navigate("/");
            }}
          >
            <img src={logo} className="tw-w-full" />
          </div>

          {showLinks ? (
            <>
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
                    className={`tw-hidden lg:tw-block lg:tw-absolute tw-top-3 ${
                      currenLanguageCode === "en" ? "tw-left-3" : "tw-right-3"
                    } tw-text-red-400 tw-p-3 tw-shadow-sm hover:tw-text-red-600 tw-cursor-pointer hover:tw-bg-gray-50 tw-rounded-md tw-text-xl tw-transition-all tw-duration-200 tw-ease-in-out`}
                  >
                    <RxCross2 />
                  </span>
                  <Links
                    to="/home"
                    name={t("link1")}
                    icon={<RiHome6Line />}
                    link1={true}
                    customFunc={handleShowNav}
                  />
                  {/* <Links
                  to="/news"
                  name={t("link6")}
                  icon={<GiNewspaper />}
                  customFunc={handleShowNav}
                  isLocal={true}
                /> */}

                  <NavLink
                    to={"/news"}
                    className={`tw-flex tw-items-center tw-gap-2 tw-capitalize tw-text-red-500 hover:tw-text-white tw-p-2 lg:p-1.5 tw-cursor-pointer tw-text-sm tw-font-semibold lg:tw-font-normal xs:tw-font-thin tw-shadow-md lg:tw-shadow tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md hover:md:tw-text-white lg:tw-w-full tw-transition-all tw-duration-500 tw-ease-in-out`}
                    onClick={handleShowNav}
                  >
                    <span className="tw-text-lg lg:tw-text-xs sm:tw-text-lg">
                      <GiNewspaper />
                    </span>
                    <span>{t("link6")}</span>
                  </NavLink>

                  <Links
                    to="program"
                    name={t("link2")}
                    icon={<SiProgress />}
                    customFunc={handleShowNav}
                  />
                  <Links
                    to="contests"
                    name={t("link4")}
                    icon={<GiJeweledChalice />}
                    customFunc={handleShowNav}
                  />
                  {/* <Links to="company" name={t("link5")} icon={<VscInfo />} customFunc={handleShowNav} /> */}
                  <Links
                    to="location"
                    name={t("link5")}
                    icon={<ImLocation />}
                    customFunc={handleShowNav}
                  />
                </div>
              </div>
            </>
          ) : null}
          <div className="tw-flex tw-justify-between tw-items-center tw-gap-2">
            {/* ===== LOGIN BUTTON ===== */}
            <div>
              <button
                className="tw-flex tw-items-center tw-gap-1 tw-capitalize hover:tw-bg-white hover:tw-text-red-500 tw-duration-500 tw-bg-red-600 tw-text-white tw-shadow-md tw-py-1.5 tw-px-4 xs:tw-px-2 xs:tw-text-xs tw-rounded-md"
                onClick={() => navigate("/log-in")}
              >
                <span>{t("login")}</span>
                <MdLogin />
              </button>
            </div>
            {/* ===== END LOGIN BUTTON ===== */}
            <SelectLanguage />
          </div>
        </div>
      </div>
      {/* END NAV */}
      {showLinks ? (
        <div className="tw-flex tw-flex-col tw-gap-2 tw-h-[70vh] tw-items-center tw-justify-center md:tw-p-3">
          <h1
            className=" tw-mt-5 tw-text-4xl lg:tw-text-2xl sm:tw-text-xl tw-font-extrabold tw-leading-[1.15] tw-tw-text-black tw-text-center"
            data-aos="fade-up"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            <span className=" tw-pb-10">
              {/* {t("title1")} <br /> {t("con_title1")} */}
              {currenLanguageCode === "en"
                ? titleAndParagraph?.title_en
                : titleAndParagraph?.title_ar}
            </span>
            <br />
            <br />
            <span className="tw-bg-gradient-to-r tw-from-red-500 tw-via-orange-600 tw-to-red-300 tw-bg-clip-text tw-text-5xl lg:tw-text-2xl sm:tw-text-xl tw-text-transparent">
              {t("title2")}
            </span>
          </h1>
          <h2
            className="tw-mt-5 tw-text-lg tw-capitalize tw-text-gray-600 tw-sm:text-xl tw-text-center tw-max-w-2xl"
            data-aos="fade-down"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1500"
          >
            {/* {t("description")} */}
            {currenLanguageCode === "en"
              ? titleAndParagraph?.description_en
              : titleAndParagraph?.description_ar}
          </h2>
        </div>
      ) : null}
    </div>
  );
};

export default Navbar;
