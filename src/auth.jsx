import {React, useState , useEffect ,createContext, useContext } from "react";
import { BrowserRouter, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next"
const AuthContext = createContext(null);
import i18next from "i18next";

export const AuthProvider = ({children}) => {
    const { t} = useTranslation();
    const [success , setSuccess] = useState(false)
    const [error , setError] = useState(false);
    

    const login = (user , pass) => {
        if (user === "Karar" && pass === "bestteam19"){
            setSuccess(true)
            setError(false);
            // <Navigate to={"/home"} />
            // console.log("good")
        }
        else{
            setError(true);
            setSuccess(false);
            setTimeout(() => setError(false) , 5000)
        }
    }
    const logout = () => {
        setSuccess(false)
    }



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
  
   useEffect( () => {
    document.body.dir = currenLanguage.dir || "ltr"
    document.title = t("web_title")
  },[currenLanguage]);

   const changeLang = (code) => {
    i18next.changeLanguage(code);
    console.log(code)
    }
  
  //END OPERATION LANGUAGE /////////////////////////////



    return (
        <AuthContext.Provider
         value={{
             login , logout,
            success , setSuccess , error ,
            language , currenLanguage , currenLanguageCode , changeLang
         }}
        >
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
}