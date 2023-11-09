import { useState } from "react";
import HeaderPage from "../../components/Dashboard-components/HeaderPage";
import Input from "../../components/shared/Input";
import Label from "../../components/shared/Label";
import SubmitButton from "../../components/shared/SubmitButton";
import Textarea from "../../components/shared/Textarea";
import { useAuth } from "../../context/auth";

const MainParagraph = () => {
  const { t } = useAuth();
  const [titlePara, setTitlePara] = useState("");
  const [isTitleIsValid, setIsTitleIsValid] = useState(true);
  const [titleParaAr, setTitleParaAr] = useState("");
  const [isTitleIsValidAr, setIsTitleIsValidAr] = useState(true);
  const [descPara, setDescPara] = useState("");
  const [isValidDescPara , setIsValidDescPara] = useState(true);
  const [descParaAr, setDescParaAr] = useState("");
  const [isValidDescParaAr , setIsValidDescParaAr] = useState(true);
  
  // ===== FUNCTION VALIDATION FOR TITLE =====
  const regexNoNumber = /^([^0-9]*)$/;
  const checkTitleEn = (inputValue) => {
    if (inputValue === "") {
      setIsTitleIsValid(false);
    } else if (!regexNoNumber.test(inputValue)) {
      setIsTitleIsValid(false);
    } else if (titlePara.length < 4) {
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
  const handleSubmit = (e) => {
    e.preventDefault();
    checkTitleEn();
    checkTitleAr();

    checkDescEn();
    checkDescAr();
    
  };
  // ===== HANDLE SUBMIT ======
  return (
    <div className="mainContainer">
      <HeaderPage title={t("mainParagraph")} />
      {/* ====== FORM PARAGRAPH ====== */}
      <div className="tw-w-full tw-p-4 tw-flex tw-items-center tw-justify-center">
        <div className=" tw-w-[90%] tw-flex tw-items-center tw-justify-center tw-p-3">
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
              <SubmitButton text={t("updateParagraph")} />
            </div>
          </form>
        </div>
      </div>
      {/* ====== END FORM PARAGRAPH ====== */}
    </div>
  );
};

export default MainParagraph;
