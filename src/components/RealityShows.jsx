import React from "react";
import RedHr from "./shared/RedHr";
import { useTranslation } from "react-i18next";

import { realityShowsProgram } from "../data/data";
import CardRealityProgram from "./shared/CardRealityProgram";

const RealityShows = () => {
  const { t } = useTranslation();
  return (
    <div
      id="program"
      className="tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center tw-group"
    >
      <div className="tw-w-full">
        <div className="tw-w-[85%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          <div>
            <div
              className="tw-flex tw-items-center"
              data-aos="zoom-in"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <RedHr isTransparent={false} />
              <span className="tw-text-3xl lg:tw-text-2xl tw-capitalize tw-font-bold tw-text-gray-500 tw-p-5 sm:tw-p-3 tw-whitespace-nowrap sm:tw-text-lg xs:tw-text-sm">
                {t("titleReality")}
              </span>
            </div>
            <div
              className="tw-flex tw-items-center"
              data-aos="zoom-in-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <RedHr isTransparent={true} />
              <p className="tw-text-lg sm:tw-text-xs tw-p-5 sm:tw-p-3 tw-text-gray-500">
                {t("descReality")}
              </p>
            </div>
            <div className="tw-grid tw-grid-cols-3 md:tw-grid-cols-2 tw-items-center tw-gap-1 tw-mt-3">
              {realityShowsProgram.map(({ icon, title }) => (
                <CardRealityProgram key={title} icon={icon} title={t(title)} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RealityShows;
