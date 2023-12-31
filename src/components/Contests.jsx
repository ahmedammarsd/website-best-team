import React from "react";
import RedHr from "./shared/RedHr";
import { useTranslation } from "react-i18next";
import CardContests from "./shared/CardContests";

import millon from "../images/millonPNG.PNG";
import jeopafdy from "../images/jeopafdy.PNG";
import wakest from "../images/wakest.jpg";
import smarter from "../images/smarter.PNG";
import arabIdol from "../images/arabIdol.jpg";
import celador from "../images/celador.png";
import endemol from "../images/endemol.jpg";
import talentpng from "../images/talentpng.png"
import twoWay from "../images/twoWay.png"

const Contests = () => {
  const { t } = useTranslation();
  return (
    <div
      id="contests"
      className="tw-py-16 tw-bg-gray-50 tw-relative tw-flex tw-justify-center tw-items-center tw-group"
    >
      <div className="tw-w-full">
        <div className="tw-w-[85%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          <div>
            <div
              className="tw-flex tw-items-center"
              data-aos="fade-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <RedHr isTransparent={false} />
              <span className="tw-text-3xl lg:tw-text-2xl tw-font-bold tw-text-gray-500 tw-p-5 sm:tw-p-3 tw-whitespace-nowrap sm:tw-text-lg xs:tw-text-sm tw-capitalize">
                {t("titleContests")}
              </span>
            </div>
            <div
              className="tw-flex tw-items-center"
              data-aos="fade-right"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="1000"
            >
              <RedHr isTransparent={true} />
              <p className="tw-text-lg sm:tw-text-xs tw-p-5 sm:tw-p-3 tw-text-gray-500">
                {t("descContests")}
              </p>
            </div>
            <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-2 xs:tw-grid-cols-1 tw-items-center tw-flex-1 tw-gap-1">
              <CardContests image={millon} alt="millon" />
              <CardContests image={jeopafdy} alt="jeopafdy" />
              <CardContests image={wakest} alt="wakest" />
              <CardContests image={smarter} alt="smarter" />
              <CardContests image={arabIdol} alt="arabIdol" />
              <CardContests image={celador} alt="celador" />
              <CardContests image={endemol} alt="endemol" />
              <CardContests image={talentpng} alt="talentpng" />
              <CardContests image={twoWay} alt="twoWay" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contests;
