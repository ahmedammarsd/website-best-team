import React from 'react'

const CardRealityProgram = ({icon , title}) => {
  return (
    <div 
    className="tw-flex tw-flex-col tw-justify-center tw-items-center tw-mt-2 tw-gap-8 sm:tw-gap-6 tw-border 
    tw-border-gray-100 hover:tw-border-r-red-500 tw-rounded-md tw-p-3 tw-shadow-sm hover:tw-shadow-lg 
    tw-cursor-pointer tw-transition-all tw-duration-500 tw-ease-in-out"
    data-aos="zoom-out"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    >
        <span className="tw-text-3xl lg:tw-text-xl sm:tw-text-xl tw-p-4 lg:tw-p-3.5 sm:tw-p-2 tw-shadow-md tw-rounded-md tw-text-white tw-bg-red-500">
            {icon}
        </span>
        <span
         className=" tw-text-xl lg:tw-text-sm md:tw-text-lg sm:tw-text-sm xs:tw-text-xs tw-capitalize tw-p-2 tw-text-gray-500 tw-whitespace-nowrap"
        >
            {title}
        </span>

    </div>
  )
}

export default CardRealityProgram