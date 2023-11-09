import { useAuth } from "../../context/auth"

const Input = ({type , lang , onChangeFunc , onBlurFunc , onFocusFunc , statusInput}) => {
    const { currenLanguageCode } = useAuth();
  return (
    <div className="tw-relative tw-overflow-hidden tw-w-full">
        <input type={type}
        onChange={onChangeFunc}
        onFocus={onFocusFunc}
        onBlur={onBlurFunc}
        dir="auto"
        className={`tw-w-full tw-text-gray-800 tw-border-b tw-py-1.5 focus:tw-outline-none tw-ring-0
        ${statusInput ? "" : "tw-border-red-500"}
        ${currenLanguageCode === "en" ? "tw-pl-10" : "tw-pr-10"}
        `}
        />
        <span className={`tw-absolute tw-top-0 tw-p-1.5 tw-text-xs tw-rounded-md tw-bg-red-50
        ${currenLanguageCode === "en" ? "tw-left-0" : "tw-right-0"} `}>
            {lang}
        </span>
    </div>
  )
}

export default Input