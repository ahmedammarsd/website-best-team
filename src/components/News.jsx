import { useAuth } from "../context/auth";
import { BaseUrl } from "../utils/BaseUrl";
import CardNews from "./shared/CardNews";
import { useDispatch, useSelector } from "react-redux";
import imageNotFound from "../images/Image_not_available.png";
import { useEffect } from "react";
import RedHr from "./shared/RedHr";
import { getNews } from "../features/NewsSlice";
import NoData from "./shared/NoData";
import ErrorMsg from "./shared/ErrorMsg";
import CalcDays from "./shared/CalcDays";
import { useNavigate } from "react-router-dom";
import SmallLoading from "./shared/SmallLoading";

const News = () => {
  const { t , currenLanguageCode } = useAuth();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const newsStates = useSelector((state) => state.news);

  useEffect(() => {
    if (newsStates.data?.length === 0){
        dispatch(getNews());
    }
  }, []);
  return (
    <div className="tw-py-16 tw-relative tw-flex tw-justify-center tw-items-center tw-group">
      <div className="tw-w-full">
        <div className="tw-w-[85%] xs:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          <div
            className="tw-flex tw-items-center"
            data-aos="fade-left"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <RedHr isTransparent={false} />
            <span className="tw-text-3xl lg:tw-text-2xl tw-font-bold tw-text-gray-500 tw-p-5 sm:tw-p-3 tw-whitespace-nowrap sm:tw-text-lg xs:tw-text-sm tw-capitalize">
              {t("link6")}
            </span>
          </div>
          {/* =========== START NEWS ============= */}
          <div className=" tw-w-full">
            {
                newsStates.isLoading ?
                <SmallLoading /> :
                newsStates.status === "failed" ?
                <ErrorMsg msg={newsStates.error}  />
                :  newsStates.data?.length === 0 ?
                <NoData />
                :
                <div className="tw-grid tw-grid-cols-3 lg:tw-grid-cols-2 sm:tw-grid-cols-1 tw-items-center tw-gap-4">
                    {
                         newsStates.data?.slice(0 ,6)?.map((n) => (
                            <CardNews 
                             key={n.id}
                             image={`${
                                n.image_url !== ""
                                  ? BaseUrl + "files/uploads" + n.image_url
                                  : imageNotFound
                              }`}
                              title={
                                currenLanguageCode === "en"
                                  ? n.title_en || "No Title"
                                  : n.title_ar || "لا يوجد عنوان"
                              }
                              category={
                                currenLanguageCode === "en" 
                                ? n.Category?.name_en
                                : n.Category?.name_ar
                              }
                              date={<CalcDays date={n.createdAt} />}
                              customNav={() => navigate(`/news/detail-news/${n.id}`)}
                            />
                         ))
                    }
                </div>    


            }
          </div>
          {/* =========== END NEWS ============= */}
        </div>
      </div>
    </div>
  );
};

export default News;
