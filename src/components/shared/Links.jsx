
const Links = ({to , icon , name , customFunc , link1 }) => {
  return (
    <a
      href={`"#"${to}`}
      className={`tw-flex tw-items-center tw-gap-2 tw-capitalize tw-text-red-500 hover:tw-text-white tw-p-2 lg:p-1.5 tw-cursor-pointer tw-text-sm tw-font-semibold lg:tw-font-normal xs:tw-font-thin tw-shadow-md lg:tw-shadow tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md hover:md:tw-text-white lg:tw-w-full tw-transition-all tw-duration-500 tw-ease-in-out ${link1 && "lg:tw-mt-10"}`}
      onClick={customFunc}
    >
      <span className="tw-text-lg lg:tw-text-xs sm:tw-text-lg">
        {icon}
      </span>
      <span>{name}</span>
    </a>
  );
};

export default Links;
