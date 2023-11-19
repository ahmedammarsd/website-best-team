import { useEffect, useRef, useState } from "react";
import HeaderPage from "../../components/Dashboard-components/HeaderPage";
import Input from "../../components/shared/Input";
import Label from "../../components/shared/Label";
import SubmitButton from "../../components/shared/SubmitButton";
import Textarea from "../../components/shared/Textarea";
import { useAuth } from "../../context/auth";

import { useDispatch, useSelector } from "react-redux";
import SmallLoading from "../../components/shared/SmallLoading";
import ErrorMsg from "../../components/shared/ErrorMsg";
import { getMainParagraph, updateMainParagraph } from "../../features/MainPragraph";
import { dashboardLinks } from "../../data/data";

const MainParagraph = () => {
  const dataMain = useSelector((state) => state.mainPara);
  const { t , currenLanguageCode } = useAuth();
  const [titlePara, setTitlePara] = useState(dataMain?.data?.title_en);
  const [isTitleIsValid, setIsTitleIsValid] = useState(true);
  const [titleParaAr, setTitleParaAr] = useState(dataMain?.data?.title_ar);
  const [isTitleIsValidAr, setIsTitleIsValidAr] = useState(true);
  const [descPara, setDescPara] = useState(dataMain?.data?.description_en);
  const [isValidDescPara , setIsValidDescPara] = useState(true);
  const [descParaAr, setDescParaAr] = useState(dataMain?.data?.description_ar);
  const [isValidDescParaAr , setIsValidDescParaAr] = useState(true);

  const dispatch = useDispatch();
  
  // ===== FUNCTION VALIDATION FOR TITLE =====
  const regexNoNumber = /^([^0-9]*)$/;
  const checkTitleEn = (inputValue) => {
    if (inputValue === "") {
      setIsTitleIsValid(false);
    } else if (!regexNoNumber.test(inputValue)) {
      setIsTitleIsValid(false);
    } else if (titlePara?.length < 4) {
      setIsTitleIsValid(false);
    } else {
      setIsTitleIsValid(true);
    }
  }
    const checkTitleAr = (inputValue) => {
      if (inputValue === "") {
        setIsTitleIsValidAr(false);
      } else if (!regexNoNumber.test(inputValue)) {
        setIsTitleIsValidAr(false);
      } else if (titleParaAr.length < 4) {
        setIsTitleIsValidAr(false);
      } else {
        setIsTitleIsValidAr(true);
      }
  };
  
  // ===== END FUNCTION VALIDATION FOR TITLE =====

  // ===== FUNCTION VALIDATION FOR DESCRIPTION =====
    const checkDescEn = (descVal) => {
      if (descVal === "") {
        setIsValidDescPara(false);
      }  else if (descPara.length < 4) {
        setIsValidDescPara(false);
      } else {
        setIsValidDescPara(true);
      }
    }

    const checkDescAr = (descVal) => {
      if (descVal === "") {
        setIsValidDescParaAr(false);
      }  else if (descParaAr.length < 4) {
        setIsValidDescParaAr(false);
      } else {
        setIsValidDescParaAr(true);
      }
    }
  // ===== END FUNCTION VALIDATION FOR DESCRIPTION =====

  // ===== HANDLE SUBMIT ======
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkTitleEn(titlePara);
    checkTitleAr(titleParaAr);

    checkDescEn(descPara);
    checkDescAr(descParaAr);
    const dataForUpdate = {
      title_en: titlePara,
      title_ar: titleParaAr,
      description_en: descPara,
      description_ar: descParaAr,
    }
    if (titlePara !== "" && titleParaAr !== "" && descPara !== "" && descParaAr !== "" && isTitleIsValid && isTitleIsValidAr && isValidDescPara && isValidDescParaAr){
      dispatch(updateMainParagraph(dataForUpdate))
    }
    
  };
  useEffect(() => {
    dispatch(getMainParagraph())
    checkTitleEn(titlePara);
    checkTitleAr(titleParaAr);

    checkDescEn(descPara);
    checkDescAr(descParaAr);
  },[]);

  useEffect( () => { 
    document.title = t(dashboardLinks[1].to);
  },[currenLanguageCode]);
  // ===== HANDLE SUBMIT ======
  return (
    <div className="mainContainer">
      <HeaderPage title={t("mainParagraph")} />
      {/* ====== FORM PARAGRAPH ====== */}
      <div className="tw-w-full tw-relative tw-p-4 tw-flex tw-items-center tw-justify-center">
        
        <div className=" tw-w-[90%] tw-flex tw-items-center tw-justify-center tw-p-3">
          {/* ======= HANDLE STATUS REQUST AND DATA FROM API ======== */}
            {
              dataMain.isLoading ?
              <SmallLoading /> 
              : dataMain.status === "success" ?
              // ==== SUCCESS REQ ======
              <form
              className="tw-w-full tw-flex tw-flex-col tw-gap-5"
              onSubmit={handleSubmit}
            >
              <div className="form-group">
                <Label label={t("titleParagraph")} />
                <div className="tw-flex tw-gap-3">
                  <Input
                    type="text"
                    lang={"EN"}
                    dValue={dataMain.data.title_en}
                    onChangeFunc={(e) => {
                      setTitlePara(e.target.value);
                      checkTitleEn(e.target.value);
                    }}
                    onBlurFunc={(e) => {
                      setTitlePara(e.target.value);
                      checkTitleEn(e.target.value);
                    }}
                    onFocusFunc={(e) => {
                      setTitlePara(e.target.value);
                      checkTitleEn(e.target.value);
                    }}
                    statusInput={isTitleIsValid}
                  />
                  <Input type="text" lang={"AR"} 
                  dValue={dataMain.data.title_ar}
                    onChangeFunc={(e) => {
                      setTitleParaAr(e.target.value);
                      checkTitleAr(e.target.value);
                    }}
                    onBlurFunc={(e) => {
                      setTitleParaAr(e.target.value);
                      checkTitleAr(e.target.value);
                    }}
                    onFocusFunc={(e) => {
                      setTitleParaAr(e.target.value);
                      checkTitleAr(e.target.value);
                    }}
                    statusInput={isTitleIsValidAr}
                  />
                </div>
              </div>
  
              <div className="form-group">
                <Label label={t("descParagraph")} />
                <div className="tw-flex tw-gap-3">
                  <Textarea lang={"EN"} 
                  dValue={dataMain.data.description_en}
                   onChangeFunc={(e) => {
                    setDescPara(e.target.value);
                    checkDescEn(e.target.value);
                  }}
                  onBlurFunc={(e) => {
                    setDescPara(e.target.value);
                    checkDescEn(e.target.value);
                  }}
                  onFocusFunc={(e) => {
                    setDescPara(e.target.value);
                    checkDescEn(e.target.value);
                  }}
                  statusInput={isValidDescPara}
                  />
                  <Textarea lang={"AR"} 
                  dValue={dataMain.data.description_ar}
                   onChangeFunc={(e) => {
                    setDescParaAr(e.target.value);
                    checkDescAr(e.target.value);
                  }}
                  onBlurFunc={(e) => {
                    setDescParaAr(e.target.value);
                    checkDescAr(e.target.value);
                  }}
                  onFocusFunc={(e) => {
                    setDescParaAr(e.target.value);
                    checkDescAr(e.target.value);
                  }}
                  statusInput={isValidDescParaAr}
                  />
                </div>
              </div>
              <div>
                <SubmitButton text={dataMain?.updateIsLoading ? t("updateLoadng") : t("updateParagraph")} isDisabled={dataMain?.updateIsLoading}/>
              </div>
            </form>
            : <ErrorMsg msg={dataMain?.error} />

            }
          {/* ======= HANDLE STATUS REQUST AND DATA FROM API ======== */}
         
        </div>
      </div>
      {/* ====== END FORM PARAGRAPH ====== */}
    </div>
  );
};

export default MainParagraph;
