import { useState } from "react";
import { useAuth } from "../../context/auth"
import ButtonClose from "../shared/ButtonClose"
import Input from "../shared/Input";
import Label from "../shared/Label";
import SubmitButton from "../shared/SubmitButton";

const AddCategory = () => {
    const { t , setShowAddCategory } = useAuth();

    const [categoryEn , setCategoryEn] = useState("");
    const [categoryIsValidEn, setCategoryIsValidEn] = useState(true) ;
    const [categoryAr , setCategoryAr] = useState("");
    const [categoryIsValidAr, setCategoryIsValidAr] = useState(true) ;
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

    const handleSubmit = (e) => {
        e.preventDefault();
        checkCategoryEn(categoryEn);
        checkCategoryAr(categoryAr)
    }
  return (
    <div className="absoluteContainer tw-z-20">
    <div className="absoluteSecondContainer">
        <ButtonClose onClickFunc={() => setShowAddCategory(false)}/>
        <form className="formContainer" onSubmit={handleSubmit}>
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
                <SubmitButton text={t("add")} />
            </div>
        </form>
    </div>
    </div>    
  )
}

export default AddCategory