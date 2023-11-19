import {BsClockHistory } from "react-icons/bs";
import imageNotFound from "../images/Image_not_available.png";

const NewsDetails = ({image , date , title , category , desc }) => {
  return (
    <div>
        <div className="tw-w-full tw-h-[500px]">
            <img src={image} className="tw-w-full tw-h-full tw-object-cover" onError={(e) => {
              e.target.src = imageNotFound
            }} />
        </div>
        <div className="tw-flex tw-items-start tw-flex-col tw-gap-5 sm:tw-gap-3 tw-p-4 tw-py-5">
        <div className=" tw-flex tw-justify-between tw-w-full tw-items-center">
            <span className="tw-p-2 tw-px-2.5 tw-bg-red-500 tw-text-white tw-whitespace-nowrap tw-text-sm xs:tw-text-xs xs:tw-p-1.5 tw-rounded-sm tw-capitalize">
              {category}
            </span>
            <div className="tw-flex tw-items-center tw-gap-2 tw-text-sm tw-text-gray-400 xs:tw-text-xs">
            <span><BsClockHistory /></span>
            <span>{date}</span>
          </div>
          </div>
          <div>
            <span className="tw-font-bold tw-text-xl sm:tw-text-lg tw-capitalize tw-text-main-blue">
              {title}
            </span>
          </div>
          <div>
            <p dangerouslySetInnerHTML={{__html: desc}} className="tw-text-sm tw-text-gray-500 xs:tw-text-xs">
               {/* {desc.replace(/\n/g , "<br />" )} */}
               {/* {
                desc.split("\n")
                .map( (item , index) => (
                  <span key={index}>
                    {item}
                    <br />
                  </span>
                ))
               } */}
               {/* <div dangerouslySetInnerHTML={{__html: item.body}} className='tc text-gray-500'></div> */}
            </p>
          </div>
        </div>
    </div>
  )
}

export default NewsDetails