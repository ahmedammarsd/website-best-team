import React from "react";

const Footer = () => {
  return (
    <div className="tw-py-3 tw-bg-red-700 tw-relative tw-flex tw-justify-center tw-items-center tw-group">
      <div className=" tw-absolute tw-top-0 tw-right-0 tw-z-1 tw-w-full tw-h-full tw-bg-transparent-black"></div>
      <div className=" tw-static tw-z-2 tw-w-full tw-px-5 lg:tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-2 tw-my-2 tw-overflow-hidden">
        <div className="tw-font-sans tw-w-full tw-p-3 tw-border-t tw-border-white tw-text-white tw-flex tw-justify-center tw-items-center">
          <a
            className="tw-cursor-pointer hover:tw-text-gray-300 tw-mt-2 lg:tw-text-sm sm:tw-text-xs tw-whitespace-nowrap tw-capitalize tw-duration-300"
            href="http://www.right-businesses.com/"
            target="_blank"
          >
            Copyright &copy; <span> Right Businesses</span> all rights reserved
          </a>
        </div>
      </div>
    </div>
  );
};

export default Footer;