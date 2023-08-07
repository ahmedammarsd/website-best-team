import React from 'react'

const Topic = ({text}) => {
  return (
    <div 
    className="tw-p-3 tw-text-white tw-text-lg lg:tw-text-sm md:tw-text-lg sm:tw-text-sm xs:tw-text-xs tw-border tw-border-transparent-white4
     tw-bg-transparent-white2 hover:tw-bg-transparent-white4 tw-cursor-pointer hover:tw-shadow-red-500
      hover:tw-shadow-sm tw-capitalize tw-rounded-md tw-duration-500 tw-ease-in-out
    "
    data-aos="fade-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    data-aos-anchor-placement="top-bottom"
    >
        <span className="tw-whitespace-nowrap">
            {text}
        </span>
    </div>
  )
}

export default Topic