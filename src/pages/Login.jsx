import { useState } from 'react';
import { useNavigate } from 'react-router-dom'
import bgLogin from "../images/bg-login.jpg";
import {useTranslation} from "react-i18next";
import { useAuth } from '../context/auth';
import Navbar from '../components/Navbar';

const Login = () => {
    const { t } = useTranslation();

    const {login , error} = useAuth();
    const navigate = useNavigate()
    const [username , setUsername] = useState("");
    const [password , setPssword] = useState("");


    const handleLogin = async (e) => {
        e.preventDefault();
       await login(username, password);
      if ( username === "Karar" && password === "bestteam19" ){
      navigate("/home" , {replace: true})
      }
    }
  return (
    
    <div 
    style={{
        backgroundImage: `url("${bgLogin}")`
    }}
    className="tw-w-full tw-h-screen tw-bg-cover tw-overflow-hidden">
    <Navbar showLinks={false} />
        <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">

            <div className="tw-w-[60%] sm:tw-w-[95%] tw-p-8 sm:tw-p-3 tw-shadow-lg tw-rounded-sm tw-border-t-2 tw-border-red-500 tw-backdrop-blur-lg">
               
                    <p className={`tw-text-red-500 tw-text-center tw-py-2  tw-text-sm
                    ${error ? "tw-opacity-100" : "tw-opacity-0"}
                    `}>
                        {t("error")}
                    </p>
                
                <form>
                    <div className="tw-p-3 tw-flex tw-flex-col tw-justify-start tw-gap-2 tw-mt-3 sm:tw-mt-1 ">
                    <label
                     className="tw-text-lg tw-capitalize sm:tw-text-sm tw-text-red-500 tw-whitespace-nowrap"
                    >
                            {t("username")}
                        </label>
                        <input type="text" placeholder={t("username")}
                        className="tw-px-2 tw-w-full tw-border-gray-300 tw-rounded-md tw-whitespace-nowrap
                        tw-border-0 tw-border-none focus:tw-border-none tw-py-1.5 tw-text-gray-900 tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-tw-ring-inset focus:tw-ring-red-600 sm:tw-text-sm sm:tw-leading-6
                        "
                        onChange={(e) => setUsername(e.target.value)}
                        />
                    </div>
                    <div className="tw-p-3 tw-flex tw-flex-col tw-justify-start tw-gap-2 tw-mt-3  sm:tw-mt-1">
                        <label
                         className="tw-text-lg tw-capitalize sm:tw-text-sm tw-text-red-500 tw-whitespace-nowrap"
                        >
                            {t("password")}
                        </label>
                        <input type="password" placeholder={t("password")}
                      className="tw-px-2 tw-w-full tw-border-gray-300 tw-rounded-md tw-whitespace-nowrap
                      tw-border-0 tw-border-none focus:tw-border-none tw-py-1.5 tw-text-gray-900 tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-tw-ring-inset focus:tw-ring-red-600 sm:tw-text-sm sm:tw-leading-6
                      "
                        onChange={(e) => setPssword(e.target.value)}
                        />
                    </div>
                    <div className="tw-w-full tw-flex tw-justify-center tw-items-center">
                        <button
                        onClick={handleLogin}
                        className="tw-bg-red-500 tw-text-white tw-w-[90%] tw-py-4 sm:tw-py-3 tw-rounded-sm tw-mt-10 tw-capitalize tw-whitespace-nowrap hover:tw-bg-red-600"
                        >
                            {t("login")}
                        </button>
                    </div>
                </form>
            </div>

        </div>
    </div>
  )
}

export default Login