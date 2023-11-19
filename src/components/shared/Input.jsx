import { useAuth } from "../../context/auth"

const Input = ({type , lang , ref , dValue , onChangeFunc , onBlurFunc , onFocusFunc , statusInput}) => {
    const { currenLanguageCode } = useAuth();
  return (
    <div className="tw-relative tw-overflow-hidden tw-w-full">
        <input type={type}
        onChange={onChangeFunc}
        onFocus={onFocusFunc}
        onBlur={onBlurFunc}
        defaultValue={dValue}
        ref={ref}
        dir="auto"
        className={`tw-w-full tw-text-gray-800 tw-border-b-2 tw-py-1.5 focus:tw-outline-none tw-ring-0
        file:tw-py-2 file:tw-px-6 file:tw-bg-red-50 hover:file:tw-bg-red-200 
        file:tw-rounded-md file:tw-border-0 tw-duration-300 file:tw-cursor-pointer
        ${statusInput ? "" : "tw-border-red-500"}
        ${currenLanguageCode === "en" ? "tw-pl-10" : "tw-pr-10"}
        `}
        />
        <span className={`tw-absolute tw-top-0 tw-p-1.5 tw-text-xs tw-rounded-md tw-bg-red-50 tw-uppercase
        ${currenLanguageCode === "en" ? "tw-left-0" : "tw-right-0"} `}>
            {lang}
        </span>
    </div>
  )
}

export default Input