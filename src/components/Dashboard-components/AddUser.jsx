import { useState } from "react";
import { useAuth } from "../../context/auth";
import ButtonClose from "../shared/ButtonClose";
import Input from "../shared/Input";
import Label from "../shared/Label";
import SubmitButton from "../shared/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../../features/UserSlice";

const AddUser = () => {
  const { t, setShowAddUser } = useAuth();

  const [fullName, setFullName] = useState("");
  const [isFullNameValid, setIsFullNameValid] = useState(true);
  const [fullNameAr, setFullNameAr] = useState("");
  const [isFullNameValidAr, setIsFullNameValidAr] = useState(true);

  const [userName, setUserName] = useState("");
  const [isUserNameValid, setIsUserNameValid] = useState(true);
  const [password, setPassword] = useState("");
  const [isPasswordValid, setIsPasswordValid] = useState(true);

  const dispatch = useDispatch();
  const userStates = useSelector((state) => state.user);
  const [showErrReq , setShowErrReq] = useState(false)

  // ===== FUNCTION VALIDATION FOR FULL NAME =====
  const regexNoNumber = /^([^0-9]*)$/;
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  const checkFullNameEn = (inputValue) => {
    if (inputValue === "") {
      setIsFullNameValid(false);
    } else if (!regexNoNumber.test(inputValue)) {
      setIsFullNameValid(false);
    } else if (fullName.length < 4) {
      setIsFullNameValid(false);
    } else {
      setIsFullNameValid(true);
    }
  };
  const checkFullNameAr = (inputValue) => {
    if (inputValue === "") {
      setIsFullNameValidAr(false);
    } else if (!regexNoNumber.test(inputValue)) {
      setIsFullNameValidAr(false);
    } else if (fullNameAr.length < 4) {
      setIsFullNameValidAr(false);
    } else {
      setIsFullNameValidAr(true);
    }
  };

  // ===== END FUNCTION VALIDATION FOR FULL NAME =====

  // ===== FUNCTION VALIDATION FOR USER NAME =====

  const checkUserName = (inputValue) => {
    if (inputValue === "") {
      setIsUserNameValid(false);
    } else if (!emailRegex.test(inputValue)) {
      setIsUserNameValid(false);
    } else if (userName.length < 4) {
      setIsUserNameValid(false);
    } else {
      setIsUserNameValid(true);
    }
  };

  // ===== END FUNCTION VALIDATION FOR USER NAME =====

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

  // ===== HANDLE SUBMIT ======
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkFullNameEn(fullName);
    checkFullNameAr(fullNameAr);
    checkUserName(userName);
    checkPassword(password);

    const dataUser = {
      full_name_en: fullName,
      full_name_ar: fullNameAr,
      email: userName,
      password: password
    }

    if (fullName !== "" && fullNameAr !== "" && userName != "" && password !== "" && isFullNameValid && isFullNameValidAr && isUserNameValid && isPasswordValid){
     await dispatch(addUser(dataUser))
      if (userStates.statusAdd === "success") {
        setTimeout(() => setShowAddUser(false), 2000);
      }
      if (userStates.statusAdd === "failed"){
        setShowErrReq(true)
        setTimeout(() => setShowErrReq(false) , 7000)
     }
    }
  };
  // ===== HANDLE SUBMIT ======

  return (
    <div className="absoluteContainer">
      <div className="absoluteSecondContainer">
        <ButtonClose onClickFunc={() => setShowAddUser(false)} />
        <form className="formContainer" onSubmit={handleSubmit}>
        {
            showErrReq &&  
            <span className="tw-block tw-text-center tw-capitalize tw-text-xs tw-text-red-500">
              {t(userStates?.errorAdd)}
            </span>
          }
          <div className="form-group">
            <Label label={t("fullName")} />
            <div className="tw-flex tw-gap-3">
              <Input
                type={"text"}
                lang={"en"}
                onChangeFunc={(e) => {
                  setFullName(e.target.value);
                  checkFullNameEn(e.target.value);
                }}
                onBlurFunc={(e) => {
                  setFullName(e.target.value);
                  checkFullNameEn(e.target.value);
                }}
                onFocusFunc={(e) => {
                  setFullName(e.target.value);
                  checkFullNameEn(e.target.value);
                }}
                statusInput={isFullNameValid}
              />
              <Input
                type={"text"}
                lang={"ar"}
                onChangeFunc={(e) => {
                  setFullNameAr(e.target.value);
                  checkFullNameAr(e.target.value);
                }}
                onBlurFunc={(e) => {
                  setFullNameAr(e.target.value);
                  checkFullNameAr(e.target.value);
                }}
                onFocusFunc={(e) => {
                  setFullNameAr(e.target.value);
                  checkFullNameAr(e.target.value);
                }}
                statusInput={isFullNameValidAr}
              />
            </div>
          </div>
          <div className="form-group">
            <Label label={t("email")} />
            <Input
              type={"email"}
              onChangeFunc={(e) => {
                setUserName(e.target.value);
                checkUserName(e.target.value);
              }}
              onBlurFunc={(e) => {
                setUserName(e.target.value);
                checkUserName(e.target.value);
              }}
              onFocusFunc={(e) => {
                setUserName(e.target.value);
                checkUserName(e.target.value);
              }}
              statusInput={isUserNameValid}
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
          <div>
            <SubmitButton 
            text={
              userStates.isLoadingAdd
                ? t("loading")
                : t("add")
            }
            isDisabled={userStates.isLoadingAdd}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddUser;
