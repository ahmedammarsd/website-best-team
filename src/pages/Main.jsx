import  { useEffect }from 'react'
import { useTranslation } from 'react-i18next';
import Navbar from "../components/Navbar"
import Contests from '../components/Contests';
import RealityShows from "../components/RealityShows"
import ContestsTopics from '../components/ContestsTopics';
import Charts from '../components/Chart';
import Location from '../components/Location';
import Footer from '../components/Footer';
import { useAuth } from '../context/auth';
import News from '../components/News';



const Main = () => {

  const { currenLanguage } = useAuth();
// // OPERATION LANGUAGE /////////////////////////////
// // LANGUAGE IN PROJECT
//  const language = [
//   {
//     code: "en",
//     name: "English",
//     country_code: "gb",
//     dir: "ltr",
//   },
//   {
//     code: "ar",
//     name: "العربية",
//     country_code: "sa",
//     dir: "rtl"
//   }
// ]

//  const currenLanguageCode = localStorage.getItem("i18nextLng") || "en"
//  const currenLanguage = language.find(l => l.code === currenLanguageCode);

// //  const changeLang = (code) => {
// //   i18next.changeLanguage(code);
// //   }

// //END OPERATION LANGUAGE /////////////////////////////
const { t } = useTranslation();
  useEffect( () => {
    // document.body.dir = currenLanguage.dir || "ltr"
    document.title = t("web_title")
  },[currenLanguage]);


  return (
    <div>
      <div className="main">
            <div className="gradient" />
        </div>
    <Navbar showLinks={true} />
    <div className="tw-mt-20"></div>
    <News />
   <Contests />
   <RealityShows />
   <ContestsTopics />
   <Charts />
   <Location />
   <Footer />
   </div>
  )
}

export default Main