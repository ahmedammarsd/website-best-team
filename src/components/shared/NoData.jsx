import noData from "../../images/No data-rafiki.png"

const NoData = () => {
  return (
    <div className="tw-w-full tw-p-5 tw-py-10 tw-flex tw-justify-center tw-items-center tw-rounded-md">
    <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 '>
        <div className="tw-w-[50%] sm:tw-w-[95%] ">
            <img src={noData} className="tw-w-full tw-h-full"/>
        </div>
    </div>
</div>
  )
}

export default NoData