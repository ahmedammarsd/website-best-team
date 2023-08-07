import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
//import { dataPie } from "../data/data";
import { useTranslation } from "react-i18next";

ChartJS.register(ArcElement, Tooltip, Legend);

const Charts = () => {
  const { t } = useTranslation();

  const dataPie = {
    labels: [t("pieTitle1"), t("pieTitle3"), t("pieTitle3"), t("pieTitle4")],
    datasets: [
      {
        label: "# of Votes",
        data: [10, 20, 30, 40],
        backgroundColor: [
          "rgba(153, 102, 255,  .4)",
          "rgba(255, 99, 132, .4)",
          "rgba(75, 192, 192,  .4)",
          "rgba(54, 162, 235,  .4)",
        ],
        borderColor: [
          "rgba(153, 102, 255, 1)",
          "rgba(255, 99, 132,1)",
          "rgba(75, 192, 192, 1)",
          "rgba(54, 162, 235, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };

  return (
    <div className="tw-py-16  tw-relative tw-flex tw-justify-center tw-items-center tw-group">
      <div
        className=" tw-w-[85%] tw-px-5 lg:tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden"
        data-aos="fade-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="1000"
      >
        <div className="tw-flex tw-justify-around md:tw-flex-col tw-items-center tw-gap-5">
          <div
            className=" tw-w-[60%] md:tw-w-[90%] tw-h-[300px] sm:tw-h-[240px] tw-flex tw-justify-center tw-items-center tw-p-3 tw-shadow-md tw-rounded-lg"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <Pie data={dataPie} />
          </div>
          <div>
            <p className="tw-text-gray-500 tw-text-lg sm:tw-text-sm">
              {t("descCharts")}
            </p>
            <button className="tw-p-3 tw-bg-red-500 tw-text-white tw-rounded-md tw-capitalize tw-whitespace-nowrap tw-px-5 tw-mt-12 hover:tw-bg-red-600 tw-duration-500">
              {t("buttonMore")}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Charts;
