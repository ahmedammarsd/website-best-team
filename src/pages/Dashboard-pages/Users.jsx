import HeaderPage from "../../components/Dashboard-components/HeaderPage";
import { useAuth } from "../../context/auth";
// import { PiUserListLight } from "react-icons/pi";
import { TiUserDeleteOutline } from "react-icons/ti";
import { HiOutlineUserPlus } from "react-icons/hi2";
import { OpreationIcon } from "./NewsAndArticles";
import Button from "../../components/shared/Button";
import AddUser from "../../components/Dashboard-components/AddUser";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getUsers, updateEnable } from "../../features/UserSlice";
import { dashboardLinks } from "../../data/data";

const Users = () => {
  const { t, showAddUser, setShowAddUser, currenLanguageCode } = useAuth();

  const dispatch = useDispatch();
  const userStates = useSelector((state) => state.user);

  const [showSuccessDelete, setShowSuccessDelete] = useState(false);
  const [showErrorDelete, setShowErrorDelete] = useState(false);

  const userData = ( JSON.parse(localStorage.getItem("user")))
  
  useEffect(() => {
    dispatch(getUsers());
  }, []);

  useEffect( () => { 
    document.title = t(dashboardLinks[3].to);
  },[currenLanguageCode]);
  const handleDelete = async (id) => {
    const data = {
      id: id,
    };
    await dispatch(updateEnable(data));
    if (userStates.archiveStatus === "success") {
      setShowSuccessDelete(true);
      setTimeout(() => setShowSuccessDelete(false), 7000);
    }
    if (userStates.archiveStatus === "failed") {
      setShowErrorDelete(true);
      setTimeout(() => setShowErrorDelete(false), 7000);
    }
  };

  return (
    <div className="mainContainer">
      <HeaderPage title={t("users")} />

      {
        userData?.user?.email === "admin@admin.com" 
        ?
        <>
        <div className=" tw-p-3 tw-border-b">
        <Button
          text={t("addUser")}
          icon={<HiOutlineUserPlus />}
          onClickFunc={() => setShowAddUser(true)}
        />
      </div>
      {showAddUser && <AddUser />}
      {/* ===== DISPLAY USER ===== */}

      <div className="tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
        <div className="tw-py-4 tw-inline-block tw-w-full sm:tw-px-6 lg:tw-px-8">
          <div className="tw-overflow-auto tw-max-h-[500px] tw-rounded-md">
            {/* ====== HANDLE MSGS ==== */}
            {userStates?.archiveIsLoading && (
              <span className="tw-block tw-text-center tw-text-xs tw-text-blue-500">
                {t("loading")}
              </span>
            )}
            {showErrorDelete && (
              <span className="tw-block tw-text-center tw-text-xs tw-text-red-500">
                {t(userStates?.archiveError)}
              </span>
            )}
            {showSuccessDelete && (
              <span className="tw-block tw-text-center tw-text-xs tw-text-blue-500">
                {t("deleteSuccessflly")}
              </span>
            )}
            {/* ====== HANDLE MSGS ==== */}

            <table className="tw-w-full tw-text-center tw-mt-2">
              <thead>
                <tr className="tr">
                  <th className="th">#</th>
                  <th className="th">{t("fullName")}</th>
                  <th className="th">{t("email")}</th>
                  <th className="th"></th>
                </tr>
              </thead>
              <tbody>
                {userStates.isLoading ? (
                  <tr className="tr">
                    <td className="td" colSpan={"3"}>
                      {t("loaing")}
                    </td>
                  </tr>
                ) : userStates.status === "success" ? (
                  userStates.data?.map((user) => (
                    <tr key={user.id} className="tr">
                      <td className="td">{user.id}</td>
                      <td className="td">
                        {currenLanguageCode === "en"
                          ? user.full_name_en
                          : user.full_name_ar}
                      </td>
                      <td className="td">{user.email}</td>
                      <td className="td tw-flex tw-items-center tw-gap-2">
                        {/* <OpreationIcon
                          icon={<PiUserListLight />}
                          isDelete={false}
                        /> */}
                        <OpreationIcon
                          icon={<TiUserDeleteOutline />}
                          isDelete={true}
                          custFucn={() => {
                            handleDelete(user.id)
                          }}
                        />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr className="tr">
                    <td className="td" colSpan={"3"}>
                      {t(userStates.error)}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
      </>
      /* ===== END DISPLAY USER ===== */
      : <div className="tw-w-full tw-justify-center tw-items-center">
        <span className=" tw-text-red-500 tw-text-center tw-p-4 tw-rounded-md tw-block tw-bg-red-50 tw-capitalize tw-text-lg xs:tw-text-sm">
          {t("adminMsg")}
        </span>
      </div>
      }
      
      
    </div>
  );
};

export default Users;
