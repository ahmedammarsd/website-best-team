import Loader from "../../images/loader.svg"
const Loading = () => {
  return (
    <div className="tw-w-full tw-border-4 tw-relative tw-h-screen tw-flex tw-items-center tw-justify-center">
       <div>
        <img src={Loader} alt='Loading' width="60px" height="60px" />
        </div>
    </div>
  )
}

export default Loading