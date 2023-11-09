import { useAuth } from "../../context/auth"
import { dashboardLinks } from "../../data/data";


const CardInfo = ({icon , number , title}) => (
  <div className="tw-bg-white tw-p-4 tw-rounded-2xl tw-flex tw-flex-col tw-gap-2 tw-items-center tw-w-[300px] tw-shadow-sm tw-cursor-pointer hover:tw-shadow-lg tw-duration-500">
    <button type="button" 
     className="tw-text-2xl tw-opacity-0.9 tw-rounded-full tw-p-4 tw-text-white tw-bg-red-500 hover:tw-drop-shadow-xl"
    >
      {icon}
    </button>
    <p className="tw-mt-3 tw-text-lg tw-font-semibold"> 
      {number}
    </p>
    <p className=" tw-mt-1 tw-text-gray-400 tw-text-lg tw-capitalize">
      {title}
    </p>
  </div>
)
const MainBoard = () => {
  const { t } = useAuth();
  return (
    <div className="tw-mt-20">
      <div className=" tw-flex m-3 tw-flex-wrap tw-justify-center tw-gap-2 tw-items-center tw-w-full">
        <CardInfo icon={dashboardLinks[2].icon} number={"0"} title={t(dashboardLinks[2].name)} />
        <CardInfo icon={dashboardLinks[3].icon} number={"0"} title={t(dashboardLinks[3].name)} />
      </div>
    </div>
  )
}

export default MainBoard


/*
news & articals
users
*/