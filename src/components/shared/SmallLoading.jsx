import Loader from "../../images/loader.svg"

const SmallLoading = () => {
  return (
    <div className="tw-w-full tw-p-5 tw-py-10 tw-flex tw-justify-center tw-items-center tw-rounded-md">
        <div className="tw-w-[60px] sm:tw-w-[40px]">
            <img src={Loader} className="tw-w-full tw-h-full"/>
        </div>
</div>
  )
}

export default SmallLoading