import { BiSolidErrorAlt } from "react-icons/bi";
import { useAuth } from "../../context/auth";

const ErrorMsg = ({msg}) => {
    const { t } = useAuth();
  return (
    <div className="tw-w-full tw-p-5 tw-py-10 tw-flex tw-justify-center tw-items-center tw-bg-red-5 tw-border tw-shadow-sm tw-rounded-md">
    <div className=' tw-flex tw-flex-col tw-items-center tw-justify-center tw-gap-1 '>
        <span className=" tw-text-5xl sm:tw-text-4xl tw-text-red-500">
            <BiSolidErrorAlt />
        </span>
        <p className={`tw-whitespace-nowrap tw-text-lg sm:tw-text-sm tw-p-1 tw-text-red-500 tw-capitalize`}>
            {t(msg)}
        </p>
    </div>
</div>
  )
}

export default ErrorMsg