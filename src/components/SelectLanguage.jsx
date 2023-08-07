import React, { useEffect } from "react";
import i18next from "i18next";
import { MdLanguage } from "react-icons/md";

const SelectLanguage = ({ language, currenLanguageCode }) => {
  return (
    <div className="tw-flex tw-items-center tw-justify-between tw-shadow-md tw-overflow-hidden tw-rounded-md hover:tw-bg-red-500 tw-duration-300">
      {language.map(({ code, name }) => (
        <button
          key={code}
          type="button"
          className={` ${
            currenLanguageCode === code ? "tw-hidden" : ""
          } tw-text-red-500 hover:tw-text-white tw-font-semibold tw-text-sm sm:tw-text-xs tw-p-2 sm:tw-p-1 tw-px-2.5 sm:tw-px-1.5  `}
          onClick={() => i18next.changeLanguage(code)}
        >
          <span>{name}</span>
        </button>
      ))}
      <span className="tw-p-2.5 sm:tw-p-1.5 tw-bg-red-500 tw-text-white tw-rounded-md">
        <MdLanguage />
      </span>
    </div>
  );
};

export default SelectLanguage;
