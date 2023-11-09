import Navbar from "../components/Dashboard-components/Navbar"
import Sidebar from "../components/Dashboard-components/Sidebar"
import { useAuth } from "../context/auth"
import "../App.css"
import { Outlet } from "react-router-dom"



const Dashboard = () => {
  const {activeMenu , currenLanguageCode } = useAuth()
  return (
    <div className="tw-flex tw-relative">
      {/* ======= SIDEBAR ======= */}
      {
        activeMenu ? 
        (
          <div className="tw-w-72 tw-fixed sidebar tw-bg-white">
            <Sidebar />
          </div>
        )
        :
        (
          <div className="tw-w-0">
            <Sidebar />
          </div>
        )
      }
      {/* ======= END SIDEBAR ======= */}

      {/* ======= BIG SIDE - NAVBAR & PAGE CONTENTS ======= */}
      <div className={`tw-bg-main-bg tw-min-h-screen tw-w-full ${activeMenu ? (currenLanguageCode === "en" ? "tw-ml-72 md:tw-ml-0" : "tw-mr-72 md:tw-mr-0") : "tw-flex-1"}`}>
       
        {/* =======  NAVBAR ======= */}
      <div className="tw-static md:tw-fixed navbar tw-bg-main-bg tw-w-full">
        <Navbar />
      </div>
      {/* ======= END NAVBAR ======= */}

      {/* ======= PAGE CONTENTS ====== */}
      <div className=" md:tw-mt-20">
        <Outlet />
      </div>
      {/* ======= END PAGE CONTENTS ====== */}

      </div>
      {/* ======= END BIG SIDE - NAVBAR & PAGE CONTENTS ======= */}
    </div>
  )
}

export default Dashboard