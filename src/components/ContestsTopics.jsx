import React from "react";
import RedHr from "./shared/RedHr";
import Topic from "./shared/Topic";
import { useTranslation } from "react-i18next";
import { contestsTopic } from "../data/data";

const ContestsTopics = () => {
  const { t } = useTranslation();
  return (
      <div className="tw-relative tw-py-16 tw-flex tw-justify-center tw-items-center tw-group tw-bg-imgRed tw-bg-fixed tw-bg-cover ">
      <div className="tw-absolute tw-top-0 tw-right-0 tw-w-full tw-h-full tw-z-1 tw-bg-transparent-black"></div>
        {/* <div id='program' className="tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center tw-group"> */}

      <div className="tw-static tw-z-2 tw-w-[85%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden ">
        <div className="tw-flex tw-items-center">
          <RedHr />
          <span   className="tw-text-3xl lg:tw-text-2xl tw-capitalize tw-font-bold tw-text-white tw-p-5 sm:tw-p-3 tw-whitespace-nowrap sm:tw-text-lg xs:tw-text-sm">
            {t("titleContestsTopic")}
          </span>
          </div>
          <div 
           className=" tw-grid tw-grid-cols-5 md:tw-grid-cols-2 tw-gap-4 tw-items-center tw-mt-8"
           >
            {
                contestsTopic.map( ({topic} , index) => (
                    <Topic key={index} text={t(topic)} />
                ))
            }
        </div>
      </div>
    </div>
    // </div>
  );
};

export default ContestsTopics;
