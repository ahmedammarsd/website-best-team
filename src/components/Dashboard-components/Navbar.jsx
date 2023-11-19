import { useEffect } from "react"
import { useAuth } from "../../context/auth"
import { AiOutlineMenu } from "react-icons/ai";
import { CiUser } from "react-icons/ci"
import SelectLanguage from "../SelectLanguage";
import { FiLogOut } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

const NavButton = ({customeFunc , icon}) => (
    <button type="button"
    className="tw-relative tw-text-xl tw-text-red-600 tw-rounded-lg tw-p-3 hover:tw-bg-slate-100"
     onClick={customeFunc}
    >
        {icon}
    </button>
)

const Navbar = () => {
    const {t ,currenLanguageCode ,setActiveMenu , screenSize , setScreenSize} = useAuth()
    const navigate = useNavigate()
    const userData = ( JSON.parse(localStorage.getItem("user")))
    const handleLogout = () => {
        localStorage.removeItem("user");
        navigate("/log-in");
    }
    useEffect(() => {
        const handleResize = () => setScreenSize(window.innerWidth);
        window.addEventListener("resize" , handleResize)
    },[]);
    useEffect(() => {
        screenSize >= 900 ? setActiveMenu(false) : setActiveMenu(true)
    },[])
  return (
    <div className="tw-flex tw-justify-between tw-p-2 tw-px-4 md:tw-px-2 tw-relative tw-w-full">
        <NavButton icon={<AiOutlineMenu />} customeFunc={() => setActiveMenu(prevActiveMenu => !prevActiveMenu)} />
        <div className="tw-flex tw-gap-3 tw-items-center">
            <div className=" tw-flex tw-items-center tw-gap-2 tw-cursor-pointer tw-p-2 hover:tw-bg-slate-100 tw-rounded-lg">
                <span className=" tw-text-xl tw-text-red-600">
                    <CiUser />
                </span>
                <p>
                    <span className="tw-text-gray-400 tw-text-sm xs:tw-text-xs tw-capitalize">{t("welcome")}, </span>
                    <span className="tw-text-gray-400 tw-font-bold tw-text-sm xs:tw-text-xs tw-capitalize"> { currenLanguageCode === "en" ? userData?.user?.full_name_en || "no" : userData?.user?.full_name_ar } </span>
                </p>
            </div>
            <div>
                <SelectLanguage />
            </div>
            <div>
                <button type="button" className="tw-p-2.5 tw-text-red-500 tw-text-lg tw-shadow-md hover:tw-bg-slate-100 tw-rounded-md tw-duration-300"
                 onClick={() => handleLogout()}
                >
                    <FiLogOut />
                </button>
            </div>
        </div>
    </div>
  )
}

export default Navbar