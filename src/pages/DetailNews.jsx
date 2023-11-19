import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import NewsDetails from "../components/NewsDetails";
import imageNotFound from "../images/Image_not_available.png";
import { BaseUrl } from "../utils/BaseUrl";
import ErrorMsg from "../components/shared/ErrorMsg";
import { getNews } from "../features/NewsSlice";
import NoData from "../components/shared/NoData";
import { useAuth } from "../context/auth";
import CalcDays from "../components/shared/CalcDays";
import SmallLoading from "../components/shared/SmallLoading";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";


const DetailNews = () => {
  const { currenLanguageCode } = useAuth();
  const { id } = useParams();
  const dispatch = useDispatch();
  
  const newsStates = useSelector((state) => state.news);

 
  useEffect(() => {
    window.scrollTo({top: 100, behavior: "smooth"})
    // document.title = t(linksNavbar[3].name);
   //console.log(newsOrArticle , dataNews)
  }, [currenLanguageCode]);

  useEffect(() => {
    if (newsStates.data?.length === 0){
      dispatch(getNews());
    }
  },[]);

  const detailNews = newsStates.data?.filter((news) => {
    return news.id == id  //============================ remembeer to check is archved
  })
  useEffect(() => {
    document.title = currenLanguageCode === "en" ? detailNews[0]?.title_en : detailNews[0]?.title_ar
  },[currenLanguageCode])
  // const newsOrArticleTwo = !dataNews.status  && newsOrArticle[0];
  return (
    <div>
        <div className="tw-shadow-lg">
        <Navbar showLinks={false} />
        </div>
      {/* <TitleHeader title={t(linksNavbar[3].name)} bgImageSrc={newsImage} /> */}
    <div className="tw-py-2 tw-mt-5 tw-relative tw-flex tw-justify-center tw-items-center">
      <div className="tw-w-full">
        <div className="tw-w-[85%] sm:tw-w-[95%] tw-px-5 md:tw-px-3 sm:tw-px-2 tw-mx-auto tw-py-6 tw-my-2 tw-overflow-hidden">
          {
            newsStates.loading ?
            <SmallLoading />
            :
            newsStates.status === "fialed" 
            ? <ErrorMsg msg={newsStates.error} />
            :
            detailNews?.length === 1
            ? 
            <NewsDetails 
            image={`${
              detailNews[0].image_url !== ""
                ? BaseUrl + "images/" + detailNews[0].image_url
                : imageNotFound
            }`}
            category={
                currenLanguageCode === "en" 
                ? detailNews[0].Category?.name_en || "No Category"
                : detailNews[0].Category?.name_ar || "لا يوجد فئة"
              }
            title={
              currenLanguageCode === "en"
                ? detailNews[0].title_en || "No Title"
                : detailNews[0].title_ar || "لا يوجد عنوان"
            }
            desc={
              currenLanguageCode === "en"
                ? detailNews[0].body_en || "Not add description"
                : detailNews[0].body_ar || "لم يتم إضافة وصف"
            }
            date={<CalcDays date={detailNews[0].createdAt} />}
        
            />
            : <NoData />
          }
        
          
        </div>
      </div>
    </div>
    <Footer />
    </div>
  );
};

export default DetailNews;
