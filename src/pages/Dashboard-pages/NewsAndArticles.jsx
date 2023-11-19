import HeaderPage from "../../components/Dashboard-components/HeaderPage";
import { useAuth } from "../../context/auth";
import imageNotFound from "../../images/Image_not_available.png";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDeleteSweep } from "react-icons/md";
import { MdOutlineAdd } from "react-icons/md";
import Button from "../../components/shared/Button";
import AddAndUpdateNews from "../../components/Dashboard-components/AddAndUpdateNews";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { archiveNews, getNews } from "../../features/NewsSlice";
import { BaseUrl } from "../../utils/BaseUrl";
import { dashboardLinks } from "../../data/data";


export const OpreationIcon = ({ icon, isDelete , custFucn }) => (
  <span
    className={`tw-p-3 tw-rounded-md tw-text-sm tw-shadow-sm tw-border hover:tw-text-white ${
      isDelete
        ? "hover:tw-bg-red-500"
        : " hover:tw-bg-blue-600"
    } `}
    onClick={custFucn}
  >
    {icon}
  </span>
);
const NewsAndArticles = () => {
  const { t , showAddNews , setShowAddNews , currenLanguageCode  , setIsUpdateNews , setNewsId } = useAuth();

  const dispatch = useDispatch();
  const newsStates = useSelector((state) => state.news);

  const [idForUseInFilter  , setIdForUserInFilter] = useState(0);
  const [showSuccessDelete , setShowSuccessDelete] = useState(false)
  const [showErrorDelete , setShowErrorDelete] = useState(false)

  useEffect(() => {
    dispatch(getNews());
  },[])

  useEffect( () => {
    document.title = t(dashboardLinks[2].to);
  },[currenLanguageCode]);
  const handleDelete = (id) => {
    const data = {
      id: id
    }
    
    dispatch(archiveNews(data));
    if (newsStates.archiveStatus === "success") {
      setShowSuccessDelete(true)
      setTimeout(() => setShowSuccessDelete(false), 7000);
    }
    if (newsStates.archiveStatus === "failed"){
      setShowErrorDelete(true)
      setTimeout(() => setShowErrorDelete(false) , 7000)
   }
  }

  return (
    <div className="mainContainer">
      <HeaderPage title={t("newsAticales")} />

      <div className=" tw-p-3 tw-border-b">
        <Button text={t("addNews")} icon={<MdOutlineAdd />} onClickFunc={() => setShowAddNews(true)}/>
      </div>
      {
        showAddNews && <AddAndUpdateNews />
      }
      {/* ==== NEWS AND ARTICLES ==== */}
      <div className="tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
        <div className="tw-py-4 tw-inline-block tw-w-full sm:tw-px-6 lg:tw-px-8">
          <div className="tw-overflow-auto tw-max-h-[500px] tw-rounded-md">
           {/* ====== HANDLE MSGS ==== */}
           {
            newsStates?.archiveIsLoading &&  
            <span className="tw-block tw-text-center tw-text-xs tw-text-blue-500">
              {t("loading")}
            </span>
          }
          {
            showErrorDelete &&  
            <span className="tw-block tw-text-center tw-text-xs tw-text-red-500">
              {t(newsStates?.archiveError)}
            </span>
          }
          {
            showSuccessDelete &&  
            <span className="tw-block tw-text-center tw-text-xs tw-text-blue-500">
              {t("deleteSuccessflly")}
            </span>
          }
           {/* ====== HANDLE MSGS ==== */}
            <table className="tw-w-full tw-text-center tw-mt-2">
              <thead>
                <tr className="tr">
                  <th className="th">#</th>
                  <th className="th">{t("imageArticle")}</th>
                  <th className="th">{t("titleArticle")}</th>
                  <th className="th"></th>
                </tr>
              </thead>
              <tbody>
                {
                  newsStates.isLoading ?
                  <tr className="tr">
                    <td className="td" colSpan={"3"}>{t("loaing")}</td>
                  </tr>
                  : newsStates.status === "success" ?
                   newsStates.data?.filter((n) => n.is_archive === false || idForUseInFilter === n.id).map((newss) => (
                    <tr key={newss.id} className="tr">
                    <td className="td">{newss.id}</td>
                    <td className="td tw-flex tw-justify-center tw-items-center">
                      <div className=" tw-overflow-hidden tw-w-[60px] tw-h-[60px] tw-rounded-full">
                        <img
                          src={`${BaseUrl}/best_team/images/${newss.image_url}`}
                          className="tw-w-full tw-h-full tw-object-cover"
                          alt={currenLanguageCode === "en" ? newss.title_en : newss.title_ar}
                          onError={(e) => {
                            e.target.src = imageNotFound
                          }}
                        />
                      </div>
                    </td>
                    <td className="td">{currenLanguageCode === "en" ? newss.title_en : newss.title_ar}</td>
                    <td className="td tw-flex tw-items-center tw-gap-2">
                      <OpreationIcon icon={<LiaEditSolid />} isDelete={false}
                       custFucn={() => {
                        setShowAddNews(true)
                        setIsUpdateNews(true)
                        setNewsId(newss.id)
                      }}
                      />
                      <OpreationIcon
                        icon={<MdOutlineDeleteSweep />}
                        isDelete={true}
                        custFucn={() => {
                          handleDelete(newss.id)
                          setIdForUserInFilter(newss.id)
                        }}
                      />
                    </td>
                  </tr>
                   )) 
                   : 
                   <tr className="tr">
                    <td className="td" colSpan={"3"}>{t(newsStates.error)}</td>
                  </tr>  
                }
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ==== END NEWS AND ARTICLES ==== */}
    </div>
  );
};

export default NewsAndArticles;
