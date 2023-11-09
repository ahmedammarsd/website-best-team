import { Link, NavLink } from "react-router-dom";
import { useAuth } from "../../context/auth";
import logo from "../../images/logo.png";
import { MdOutlineCancel } from "react-icons/md";
import { dashboardLinks } from "../../data/data";


const Sidebar = () => {
    const { t , activeMenu , setActiveMenu , screenSize , currenLanguageCode } = useAuth();

    const handleCloseSidebar = () => {
        if (activeMenu && screenSize <= 900){
            setActiveMenu(false)
        }
    }

    const activeLink = `tw-flex tw-items-center tw-gap-4 ${currenLanguageCode === "en" ? "tw-pl-4" : "tw-pr-4"} tw-pt-3 tw-pb-2.5 tw-rounded-lg tw-text-white tw-bg-red-600 tw-m-2`
    const normalLink = `tw-flex tw-items-center tw-gap-4 ${currenLanguageCode === "en" ? "tw-pl-4" : "tw-pr-4"} tw-pt-3 tw-pb-2.5 tw-rounded-lg tw-text-red-500 hover:tw-bg-slate-100 tw-m-2`
  return (
    <div className={`tw-h-screen ${currenLanguageCode === "en" ? "tw-ml-3" : "tw-mr-3"} tw-overflow-hidden md:tw-overflow-auto hover:tw-overflow-auto tw-pb-10`}>
        {
            activeMenu  && (
                <>
                {/* ====== LOGO AND CLOSE SIDEBAR ======*/}
                  <div className="tw-flex tw-justify-center tw-items-center tw-w-full">
                    <Link to={"/dashboard"}
                     className=" tw-mt-5 tw-w-[180px] md:tw-w-[150px] sm:tw-w-[130px] xs:tw-w-[100px]  tw-bg-gray-200 tw-rounded-md"
                    >
                        <img src={logo} alt="logo" className="tw-w-full tw-h-full tw-drop-shadow-xl" />
                    </Link>
                    <button type="button"
                     className={`tw-absolute tw-top-2 ${currenLanguageCode === "en" ? "tw-left-2" : "tw-right-2"} tw-text-xl tw-p-2 tw-hidden md:tw-block hover:tw-bg-gray-100 tw-text-red-500 tw-rounded-lg`}
                     onClick={handleCloseSidebar}
                    >
                        <MdOutlineCancel />
                    </button>
                  </div>
                  {/* ====== END LOGO AND CLOSE SIDEBAR ======*/}

                   {/* ====== LINKS DASHBOARD ======*/}
                   <div className="tw-mt-10">
                    {
                        dashboardLinks.map((link , index) => (
                            <NavLink key={index} to={link.to}
                             className={({isActive}) => isActive ? activeLink : normalLink}
                             onClick={handleCloseSidebar}
                            >
                                <span>{link.icon}</span>
                               <span className="tw-capitalize">{t(link.name)}</span>
                            </NavLink>
                        ))
                    }
                   </div>
                   {/* ====== END LINKS DASHBOARD ======*/}
                </>
            )
        }
    </div>
  )
}

export default Sidebar