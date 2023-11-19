import { useState } from "react";
import { useNavigate } from "react-router-dom";
import bgLogin from "../images/bg-login.jpg";
import { useAuth } from "../context/auth";
import Navbar from "../components/Navbar";
import { useDispatch, useSelector } from "react-redux";
import { loginUser } from "../features/UserSlice";
import SubmitButton from "../components/shared/SubmitButton";
import Label from "../components/shared/Label";
import Input from "../components/shared/Input";

const Login = () => {
  const { t } = useAuth();
  const dispatch = useDispatch();
  const userStates = useSelector((state) => state.user)

  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [isEmailValid, setIsEmailValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  // ===== FUNCTION VALIDATION FOR EMAIL =====
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const checkEmail = (inputValue) => {
    if (inputValue === "") {
      setIsEmailValid(false);
    } else if (!emailRegex.test(inputValue)) {
      setIsEmailValid(false);
    } else if (email.length < 4) {
      setIsEmailValid(false);
    } else {
      setIsEmailValid(true);
    }
  };

  // ===== END FUNCTION VALIDATION FOR EMAIL =====

  // ===== FUNCTION VALIDATION FOR USER NAME =====

  const checkPassword = (inputValue) => {
    if (inputValue === "") {
      setIsPasswordValid(false);
    } else if (password.length < 4) {
      setIsPasswordValid(false);
    } else {
      setIsPasswordValid(true);
    }
  };

  // ===== END FUNCTION VALIDATION FOR USER NAME =====
  const [showErrLogin , setShowErrLogin] = useState(false);

  const handleLogin = async (e) => {
    e.preventDefault();
    checkEmail(email);
    checkPassword(password)
    const dataUser = {
      email: email,
      password: password
    }
    if (email !== "" && password !== "" && isEmailValid && isPasswordValid){
      dispatch(loginUser(dataUser))
      .then((result) => {
        if (result.type === "loginUser/fulfilled"){
          navigate("/dashboard" , { replace: true })
        }
        if (userStates.loginStatus === "failed"){
        setShowErrLogin(true)
        setTimeout(() => setShowErrLogin(false) , 7000)
        }
      })  
     
    // if (userStates.loginStatus === "failed"){
    //   setShowErrLogin(true)
    //   setTimeout(() => setShowErrLogin(false) , 7000)
    // }
    // if (userStates.datalogin?.status === 200){
    //   navigate("/dashboard" , { replace: true })
    // }
    // console.log("work" , email);
    // console.log(userStates.dataLogin?.status);
  }
    // await login(username, password);
    // if (username === "Karar" && password === "bestteam19") {
    //   navigate("/dashboard", { replace: true });
    // }

  };

  // useEffect(() => {
  //   if (userStates.datalogin?.status === 200){
  //     navigate("/dashboard" , { replace: true })
  //   }
  //   if (userStates.loginStatus === "failed"){
  //     setShowErrLogin(true)
  //     setTimeout(() => setShowErrLogin(false) , 7000)
  //   }
  // },[userStates.datalogin?.status , userStates.loginStatus])
  return (
    <div
      style={{
        backgroundImage: `url("${bgLogin}")`,
      }}
      className="tw-w-full tw-h-screen tw-bg-cover tw-overflow-hidden"
    >
      <Navbar showLinks={false} />
      <div className="tw-w-full tw-h-full tw-flex tw-justify-center tw-items-center">
        <div className="tw-w-[450px] sm:tw-w-[90%] tw-p-8 sm:tw-p-3 tw-shadow-lg tw-rounded-sm tw-border-t-2 tw-border-red-500 tw-backdrop-blur-lg">
          <p
            className={`tw-text-red-500 tw-text-center tw-py-2  tw-text-sm
                    ${showErrLogin ? "tw-opacity-100" : "tw-opacity-0"}
                    `}
          >
            {userStates?.loginError}
          </p>

          <form onSubmit={handleLogin} className="formContainer">

          <div className="form-group">
            <Label label={t("email")} />
            <Input
              type={"email"}
              onChangeFunc={(e) => {
                setEmail(e.target.value);
                checkEmail(e.target.value);
              }}
              onBlurFunc={(e) => {
                setEmail(e.target.value);
                checkEmail(e.target.value);
              }}
              onFocusFunc={(e) => {
                setEmail(e.target.value);
                checkEmail(e.target.value);
              }}
              statusInput={isEmailValid}
            />
          </div>
          <div className="form-group">
            <Label label={t("password")} />
            <Input
              type={"password"}
              onChangeFunc={(e) => {
                setPassword(e.target.value);
                checkPassword(e.target.value);
              }}
              onBlurFunc={(e) => {
                setPassword(e.target.value);
                checkPassword(e.target.value);
              }}
              onFocusFunc={(e) => {
                setPassword(e.target.value);
                checkPassword(e.target.value);
              }}
              statusInput={isPasswordValid}
            />
          </div>
            {/* <div className="tw-p-3 tw-flex tw-flex-col tw-justify-start tw-gap-2 tw-mt-3 sm:tw-mt-1 ">
              <label className="tw-text-lg tw-capitalize sm:tw-text-sm tw-text-red-500 tw-whitespace-nowrap">
                {t("username")}
              </label>
              <input
                type="text"
                placeholder={t("username")}
                className="tw-px-2 tw-w-full tw-rounded-md tw-whitespace-nowrap focus:tw-outline-none 
                        tw-border-0 tw-border-none focus:tw-border-none tw-py-1.5 tw-text-gray-900 tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-tw-ring-inset focus:tw-ring-red-600 sm:tw-text-sm sm:tw-leading-6
                        "
                onChange={(e) => setEmail(e.target.value)}
              />
            </div> */}
            {/* <div className="tw-p-3 tw-flex tw-flex-col tw-justify-start tw-gap-2 tw-mt-3  sm:tw-mt-1">
              <label className="tw-text-lg tw-capitalize sm:tw-text-sm tw-text-red-500 tw-whitespace-nowrap">
                {t("password")}
              </label>
              <input
                type="password"
                placeholder={t("password")}
                className="tw-px-2 tw-w-full tw-border-gray-300 tw-rounded-md tw-whitespace-nowrap focus:tw-outline-none
                      tw-border-0 tw-border-none focus:tw-border-none tw-py-1.5 tw-text-gray-900 tw-ring-1 tw-ring-inset tw-ring-gray-300 placeholder:tw-text-gray-400 focus:tw-ring-2 focus:tw-tw-ring-inset focus:tw-ring-red-600 sm:tw-text-sm sm:tw-leading-6
                      "
                onChange={(e) => setPssword(e.target.value)}
              />
            </div> */}
            <div className="tw-w-full tw-flex tw-justify-center tw-items-center">
              {/* <button
                onClick={handleLogin}
                className="tw-bg-red-500 tw-text-white tw-w-[90%] tw-py-4 sm:tw-py-3 tw-rounded-sm tw-mt-10 tw-capitalize tw-whitespace-nowrap hover:tw-bg-red-600"
              >
                {t("login")}
              </button> */}
              <SubmitButton 
               text={
                userStates.loginIsLoading
                  ? t("loading")
                  : t("login")
              }
              isDisabled={userStates.loginIsLoading}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
