import { useState } from "react";
import { useAuth } from "../../context/auth"
import ButtonClose from "../shared/ButtonClose"
import Input from "../shared/Input";
import Label from "../shared/Label";
import SubmitButton from "../shared/SubmitButton";
import { useDispatch, useSelector } from "react-redux";
import { addCategory } from "../../features/CategorySlice";

const AddCategory = () => {
    const { t , setShowAddCategory } = useAuth();
    const dispatch = useDispatch();
    const categoryStates = useSelector((state) => state.category);

    const [categoryEn , setCategoryEn] = useState("");
    const [categoryIsValidEn, setCategoryIsValidEn] = useState(true) ;
    const [categoryAr , setCategoryAr] = useState("");
    const [categoryIsValidAr, setCategoryIsValidAr] = useState(true) ;

    const [showErrReq , setShowErrReq] = useState(false);
     // ===== FUNCTION VALIDATION FOR TITLE =====
  const regexNoNumber = /^([^0-9]*)$/;
  const checkCategoryEn = (inputValue) => {
    if (inputValue === "") {
      setCategoryIsValidEn(false);
    } else if (!regexNoNumber.test(inputValue)) {
      setCategoryIsValidEn(false);
    } else if (categoryEn.length < 4) {
      setCategoryIsValidEn(false);
    } else {
      setCategoryIsValidEn(true);
    }
  };
  const checkCategoryAr = (inputValue) => {
    if (inputValue === "") {
      setCategoryIsValidAr(false);
    } else if (!regexNoNumber.test(inputValue)) {
      setCategoryIsValidAr(false);
    } else if (categoryAr.length < 4) {
      setCategoryIsValidAr(false);
    } else {
      setCategoryIsValidAr(true);
    }
  };

  // ===== END FUNCTION VALIDATION FOR TITLE =====

    const handleClose = () => {
      setShowAddCategory(false)
    }
    const handleSubmit = async (e) => {
        e.preventDefault();
        checkCategoryEn(categoryEn);
        checkCategoryAr(categoryAr);

        const dataCategory = {
          name_en: categoryEn,
          name_ar: categoryAr
        }

        if (categoryAr !== "" && categoryEn !== "" && categoryIsValidAr && categoryIsValidEn) {
         await dispatch(addCategory(dataCategory));
          if (categoryStates.status === "success") {
            setTimeout(() =>  setShowAddCategory(false) , 2000 )
          }
          if (categoryStates.status === "failed"){
            setShowErrReq(true)
            setTimeout(() => setShowErrReq(false) , 7000)
         }
        }
    }
  return (
    <div className="absoluteContainer tw-z-20">
    <div className="absoluteSecondContainer">
        <ButtonClose onClickFunc={handleClose}/>
        <form className="formContainer" onSubmit={handleSubmit}>
        {
            showErrReq &&  
            <span className="tw-block tw-text-center tw-capitalize tw-text-xs tw-text-red-500">
              {t(categoryStates?.error)}
            </span>
          }
            <div className="form-group">
                <Label label={t("category")}/>
                <div className="tw-flex tw-gap-3">
                <Input type={"text"} lang={"en"}
                onChangeFunc={(e) => {
                    setCategoryEn(e.target.value);
                    checkCategoryEn(e.target.value);
                  }}
                  onBlurFunc={(e) => {
                    setCategoryEn(e.target.value);
                    checkCategoryEn(e.target.value);
                  }}
                  onFocusFunc={(e) => {
                    setCategoryEn(e.target.value);
                    checkCategoryEn(e.target.value);
                  }}
                  statusInput={categoryIsValidEn}
                />
                <Input type={"text"} lang={"ar"}
                onChangeFunc={(e) => {
                    setCategoryAr(e.target.value);
                    checkCategoryAr(e.target.value);
                  }}
                  onBlurFunc={(e) => {
                    setCategoryAr(e.target.value);
                    checkCategoryAr(e.target.value);
                  }}
                  onFocusFunc={(e) => {
                    setCategoryAr(e.target.value);
                    checkCategoryAr(e.target.value);
                  }}
                  statusInput={categoryIsValidAr}
                />
                </div>
            </div>
            <div>
                <SubmitButton text={categoryStates.isLoading ? t("loadin") : t("add")}  isDisabled={categoryStates.isLoading}/>
            </div>
        </form>
    </div>
    </div>    
  )
}

export default AddCategory