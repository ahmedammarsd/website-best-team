
const Button = ({text , icon , onClickFunc}) => {
  return (
    <button type="button"
     className=" tw-flex tw-items-center tw-justify-center tw-gap-1 tw-rounded-md hover:tw-drop-shadow-md tw-px-6 tw-w-[150px] tw-capitalize tw-py-2 tw-text-sm tw-bg-red-500 tw-text-white hover:tw-bg-red-600 tw-duration-300"
     onClick={onClickFunc}
    >
        <span>{icon}</span>
        <span>{text}</span>
    </button>
  )
}

export default Button