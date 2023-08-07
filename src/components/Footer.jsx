import React from "react";
import { RiHome6Line } from "react-icons/ri";
import { MdMiscellaneousServices } from "react-icons/md";
import { GiJeweledChalice } from "react-icons/gi";
import { VscInfo } from "react-icons/vsc";
import { SiProgress } from "react-icons/si";

const Footer = () => {
  return (
    <div className="tw-py-5 tw-bg-red-700 tw-relative tw-flex tw-justify-center tw-items-center tw-group" >
      <div className=" tw-absolute tw-top-0 tw-right-0 tw-z-1 tw-w-full tw-h-full tw-bg-transparent-black"></div>
      <div className=" tw-static tw-z-2 tw-w-[85%] tw-px-5 lg:tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
        fd
      </div>
    </div>  
  );
};

export default Footer;




{/* <div id="company" className=" tw-bg-footer-bg tw-bg-cover">
<div className="tw-flex tw-py-16 tw-relative tw-justify-center tw-items-center tw-group">
  <div className=" tw-absolute tw-top-0 tw-right-0 tw-w-full tw-h-full tw-z-1 tw-bg-transparent-black"></div>
  <div className="tw-static tw-z-2 tw-w-[85%] tw-px-5 lg:tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
    <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-1 tw-gap-6">
      <div className="tw-text-white">
        <div className="tw-flex tw-items-center">
          <span className="tw-h-[2px] tw-bg-white tw-w-[40px] "></span>
          <h1 className="tw-text-2xl md:tw-text-xl tw-p-3">عن الشركة</h1>
        </div>
        <p className="tw-text-lg tw-tracking-wider tw-leading-8 tw-p-4 tw-shadow-sm tw-shadow-gray-600 tw-rounded-md">
          ومن هنا جاءت فكرة برنامج يقوم على معلومات الرياضة ويستلهم طرق
          المنافسة والتعبئة الجماهيرية ليكون البرنامج بمثابة بطولة ثقافية
          رياضية ويجمع بين نموذج منافسات الواقع والمسابقة التلفزبونية. وينقل
          نفس نظام التنافس الرياضي الى الاستديو.
        </p>
      </div>
      <div className="tw-text-white">
      <div className="tw-flex tw-items-center">
          <span className="tw-h-[2px] tw-bg-white tw-w-[40px] "></span>
          <h1 className="tw-text-2xl md:tw-text-xl tw-p-3">الروابط</h1>
        </div>
        <div className="tw-flex tw-flex-col">
        <a href="#main" className="tw-flex tw-items-center tw-gap-2 tw-text-white tw-p-4 tw-cursor-pointer tw-text-lg lg:tw-text-sm tw-font-semibold md:tw-font-normal xs:tw-font-thin md:tw-shadow-sm hover:md:tw-pr-7 tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md md:tw-w-[200px] xs:tw-text-sm tw-transition-all tw-duration-500 tw-ease-in-out">
        <span className="tw-text-2xl sm:tw-text-xl"><RiHome6Line /></span>
          <span>الرئيسية</span>
        </a>
        <a href="#program" className="tw-flex tw-items-center tw-gap-2 tw-text-white tw-p-4 tw-cursor-pointer tw-text-lg lg:tw-text-sm tw-font-semibold md:tw-font-normal xs:tw-font-thin md:tw-shadow-sm hover:md:tw-pr-7 tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md md:tw-w-[200px] xs:tw-text-sm tw-transition-all tw-duration-500 tw-ease-in-out">
        <span className="tw-text-2xl sm:tw-text-xl"><SiProgress /></span>
        <span>البرامج الواقعية</span>
        </a>
        <a href="#" className="tw-flex tw-items-center tw-gap-2 tw-text-white tw-p-4 tw-cursor-pointer tw-text-lg lg:tw-text-sm tw-font-semibold md:tw-font-normal xs:tw-font-thin md:tw-shadow-sm hover:md:tw-pr-7 tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md md:tw-w-[200px] xs:tw-text-sm tw-transition-all tw-duration-500 tw-ease-in-out">
          <span className="tw-text-2xl sm:tw-text-xl"><MdMiscellaneousServices /></span>
          <span>الخدمات</span>
        </a>
        <a href="#contests" className="tw-flex tw-items-center tw-gap-2 tw-text-white tw-p-4 tw-cursor-pointer tw-text-lg lg:tw-text-sm tw-font-semibold md:tw-font-normal xs:tw-font-thin md:tw-shadow-sm hover:md:tw-pr-7 tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md md:tw-w-[200px] xs:tw-text-sm tw-transition-all tw-duration-500 tw-ease-in-out">
          <span className="tw-text-2xl sm:tw-text-xl"><GiJeweledChalice /></span>
          <span>المسابقات</span>
        </a>
        <a href="#company" className="tw-flex tw-items-center tw-gap-2 tw-text-white tw-p-4 tw-cursor-pointer tw-text-lg lg:tw-text-sm tw-font-semibold md:tw-font-normal xs:tw-font-thin md:tw-shadow-sm hover:md:tw-pr-7 tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md md:tw-w-[200px] xs:tw-text-sm tw-transition-all tw-duration-500 tw-ease-in-out">
          <span className="tw-text-2xl sm:tw-text-xl"><VscInfo /></span>
          <span>عن الشركة</span>
        </a>
        </div>
      </div>
      <div className=" tw-p-1 tw-rounded-md">
      <div className="tw-flex tw-items-center tw-text-white">
          <span className="tw-h-[2px] tw-bg-white tw-w-[40px] "></span>
          <h1 className="tw-text-2xl md:tw-text-xl tw-p-3">موقع الشركة</h1>
        </div>
        <iframe
        className="tw-shadow-md tw-rounded-md tw-shadow-gray-600 tw-mt-3"
          width="100%"
          height="400px"
          id="gmap_canvas"
          src="https://maps.google.com/maps?q=HGVR+F9P,%20Al%20Khurtum,%20Sudan&t=&z=13&ie=UTF8&iwloc=&output=embed"
          frameBorder="0"
          scrolling="no"
          marginHeight="0"
          marginWidth="0"
        ></iframe>
      </div>
    </div>
  </div>
  
</div>
<div className="tw-static tw-font-sans tw-z-3 tw-w-full tw-p-3 tw-border-t tw-border-white tw-text-white tw-flex tw-justify-center tw-items-center">
    <p>Copyright &copy; <span> Right Businesses</span> all rights reserved</p>
  </div>
</div> */}