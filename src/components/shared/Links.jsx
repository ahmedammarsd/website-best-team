

const Links = ({to , icon , name , customFunc , link1}) => {
  return (
    <a
      href={`#${to}`}
      className={`tw-flex tw-items-center tw-gap-2 tw-capitalize tw-text-red-500 hover:tw-text-white tw-p-2 tw-cursor-pointer tw-text-lg tw-font-semibold lg:tw-font-normal xs:tw-font-thin tw-shadow-md lg:tw-shadow tw-whitespace-nowrap hover:tw-bg-red-500 tw-rounded-md hover:md:tw-text-white lg:tw-w-full xs:tw-text-sm tw-transition-all tw-duration-500 tw-ease-in-out ${link1 && "lg:tw-mt-10"}`}
      onClick={customFunc}
    >
      <span className="tw-text-xl lg:tw-text-sm sm:tw-text-xl">
        {icon}
      </span>
      <span>{name}</span>
    </a>
  );
};

export default Links;
