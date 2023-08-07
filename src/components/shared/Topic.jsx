import React from 'react'

const Topic = ({text}) => {
  return (
    <div 
    className="tw-p-3 tw-text-white tw-text-lg lg:tw-text-sm md:tw-text-lg sm:tw-text-sm tw-border tw-border-transparent-white4
     tw-bg-transparent-white2 hover:tw-bg-transparent-white4 tw-cursor-pointer hover:tw-shadow-red-500
      hover:tw-shadow-sm tw-capitalize tw-rounded-md tw-duration-500 tw-ease-in-out
    ">
        <span className="tw-whitespace-nowrap">
            {text}
        </span>
    </div>
  )
}

export default Topic