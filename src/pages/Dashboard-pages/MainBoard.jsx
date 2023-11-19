import { useEffect } from "react";
import { useAuth } from "../../context/auth"
import { dashboardLinks } from "../../data/data";
import { useDispatch, useSelector } from "react-redux";
import { getUsers } from "../../features/UserSlice";
import { useNavigate } from "react-router-dom";
import { getNews } from "../../features/NewsSlice";


const CardInfo = ({icon , number , title , custmFun}) => (
  <div className="tw-bg-white tw-p-4 tw-rounded-2xl tw-flex tw-flex-col tw-gap-2 tw-items-center tw-w-[300px] tw-shadow-sm tw-cursor-pointer hover:tw-shadow-lg tw-duration-500"
   onClick={custmFun}
  >
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
  const { t , currenLanguageCode } = useAuth();
  const dispatch = useDispatch();
  const newsStates = useSelector((state) => state.news);
  const userStates = useSelector((state) => state.user);

  const navigate = useNavigate()
 
  useEffect( () => {
    document.title = t(dashboardLinks[0].to);
  },[currenLanguageCode]);
  useEffect(() => {
    dispatch(getUsers());
    dispatch(getNews())
  },[])
  return (
    <div className="tw-mt-20">
      <div className=" tw-flex m-3 tw-flex-wrap tw-justify-center tw-gap-2 tw-items-center tw-w-full">
        <CardInfo icon={dashboardLinks[2].icon} number={newsStates.data?.length} title={t(dashboardLinks[2].name)} custmFun={() => navigate(`/dashboard/${dashboardLinks[2].to}`)} />
        <CardInfo icon={dashboardLinks[3].icon} number={userStates.data?.length} title={t(dashboardLinks[3].name)} custmFun={() => navigate(`/dashboard/${dashboardLinks[3].to}`)}/>
      </div>
    </div>
  )
}

export default MainBoard


/*
news & articals
users
*/