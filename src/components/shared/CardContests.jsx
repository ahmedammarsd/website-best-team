import React from 'react'

const CardContests = ({image ,alt}) => {
  return (
    <div className="tw-p-3 sm:tw-p-2 tw-shadow-sm tw-border tw-border-gray-100 tw-rounded-md hover:tw-shadow-lg tw-cursor-pointer tw-flex tw-justify-center tw-items-center tw-h-[160px] sm:tw-h-[100px] tw-duration-500"
    data-aos="flip-up"
    data-aos-easing="ease-out-cubic"
    data-aos-duration="1000"
    >
        <img src={image} alt={alt} loading="lazy"
         className=" tw-w-[140px] md:tw-w-[120px] sm:tw-w-[80px] tw-rounded-full tw-object-contain"
        />
    </div>
  )
}

export default CardContests