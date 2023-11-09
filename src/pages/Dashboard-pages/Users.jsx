import HeaderPage from "../../components/Dashboard-components/HeaderPage"
import { useAuth } from "../../context/auth";
import { PiUserListLight } from "react-icons/pi";
import { TiUserDeleteOutline } from "react-icons/ti";
import { HiOutlineUserPlus } from "react-icons/hi2"
import { OpreationIcon } from "./NewsAndArticles";

const Users = () => {
  const { t } = useAuth();
  return (
    <div className="mainContainer">
      <HeaderPage title={t("users")} />

      {/* ===== DISPLAY USER ===== */}

      <div className="tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
        <div className="tw-py-4 tw-inline-block tw-w-full sm:tw-px-6 lg:tw-px-8">
          <div className="tw-overflow-auto tw-max-h-[500px] tw-rounded-md">
            <table className="tw-w-full tw-text-center">
              <thead>
                <tr className="tr">
                  <th className="th">#</th>
                  <th className="th">{t("fullName")}</th>
                  <th className="th">{t("username")}</th>
                  <th className="th"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr">
                  <td className="td">1</td>
                  <td className="td">
                    Snhoory
                  </td>
                  <td className="td">SnhooryTest</td>
                  <td className="td tw-flex tw-items-center tw-gap-2">
                    <OpreationIcon icon={<PiUserListLight />} isDelete={false} />
                    <OpreationIcon
                      icon={<TiUserDeleteOutline />}
                      isDelete={true}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ===== END DISPLAY USER ===== */}

    </div>
  )
}

export default Users