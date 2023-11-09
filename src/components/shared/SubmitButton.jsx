const SubmitButton = ({text , handleClick}) => {
  return (
    <div className="tw-w-full tw-flex tw-justify-center tw-items-center">
      <button
        onClick={handleClick}
        className="tw-bg-red-500 tw-text-white tw-w-[90%] tw-py-4 sm:tw-py-3 tw-rounded-sm tw-mt-10 tw-capitalize tw-whitespace-nowrap hover:tw-bg-red-600"
      >
        {text}
      </button>
    </div>
  );
};

export default SubmitButton;
