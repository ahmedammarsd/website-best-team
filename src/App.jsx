import { useEffect, useState } from 'react';
import i18next from 'i18next';
import { useTranslation } from 'react-i18next';
import Navbar from './components/Navbar';
import Contests from './components/Contests';



function App() {

// OPERATION LANGUAGE /////////////////////////////
// LANGUAGE IN PROJECT
 const language = [
  {
    code: "en",
    name: "English",
    country_code: "gb",
    dir: "ltr",
  },
  {
    code: "ar",
    name: "العربية",
    country_code: "sa",
    dir: "rtl"
  }
]

 const currenLanguageCode = localStorage.getItem("i18nextLng") || "en"
 const currenLanguage = language.find(l => l.code === currenLanguageCode);

 const changeLang = (code) => {
  i18next.changeLanguage(code);
  }

//END OPERATION LANGUAGE /////////////////////////////
  useEffect( () => {
    document.body.dir = currenLanguage.dir || "ltr"
  },[currenLanguage]);


  const { t } = useTranslation();
  return (
   <div>
      <div className="main">
            <div className="gradient" />
        </div>
    <Navbar 
    language={language}
    currenLanguageCode={currenLanguageCode}
    currenLanguage={currenLanguage}
    />
    <div className="tw-mt-20"></div>
   <Contests />
   </div>
  )
}

export default App
