import React from "react";
import { useTranslation } from "react-i18next";
import RedHr from "./shared/RedHr";

const Location = () => {
  const { t } = useTranslation();
  return (
    <div
      id="location"
      className="tw-py-16 tw-flex tw-bg-gray-50 tw-justify-center tw-items-center"
    >
      <div className="tw-w-[85%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
        <div>
          <div className="tw-flex tw-items-center">
            <RedHr isTransparent={false} />
            <span className="tw-text-3xl lg:tw-text-2xl tw-capitalize tw-font-bold tw-text-gray-500 tw-p-5 sm:tw-p-3 tw-whitespace-nowrap sm:tw-text-lg xs:tw-text-sm">
              {t("location")}
            </span>
          </div>
          <div>
          <iframe
        className="tw-shadow-md tw-rounded-md tw-drop-shadow-lg tw-mt-3"
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
  );
};

export default Location;
