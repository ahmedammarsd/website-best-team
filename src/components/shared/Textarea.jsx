import { useAuth } from "../../context/auth"

const Textarea = ({ lang , dValue, onChangeFunc , onBlurFunc , onFocusFunc , statusInput}) => {
    const { currenLanguageCode } = useAuth();
  return (
    <div className="tw-relative tw-overflow-hidden tw-w-full">
        <textarea
        rows={4}
        onChange={onChangeFunc}
        onFocus={onFocusFunc}
        onBlur={onBlurFunc}
        defaultValue={dValue}
        dir="auto"
        className={`tw-w-full tw-text-gray-800 tw-border-b tw-py-1.5 focus:tw-outline-none tw-ring-0
        ${statusInput ? "" : "tw-border-red-500"}
        ${currenLanguageCode === "en" ? "tw-pl-10" : "tw-pr-10"}
        `}
        >
        </textarea>
        <span className={`tw-absolute tw-top-1 tw-p-1.5 tw-text-xs tw-rounded-md tw-bg-red-50
        ${currenLanguageCode === "en" ? "tw-left-0" : "tw-right-0"} `}>
            {lang}
        </span>
    </div>
  )
}

export default Textarea