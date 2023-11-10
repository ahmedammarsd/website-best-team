import { RxCross2 } from "react-icons/rx";
import { useAuth } from "../../context/auth";

const ButtonClose = ({onClickFunc}) => {
    const { currenLanguageCode } = useAuth()
  return (
    <button type="button" 
     className={`tw-absolute tw-top-2 tw-text-xl tw-cursor-pointer tw-p-2 tw-shadow-sm tw-rounded-md hover:tw-bg-slate-50 hover:tw-text-red-600
      ${currenLanguageCode === "en" ? "tw-left-3" : "tw-right-3"}
     `}
     onClick={onClickFunc}
    >
        <RxCross2 />
    </button>
  )
}

export default ButtonClose