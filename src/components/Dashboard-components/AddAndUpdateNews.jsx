import { useState } from "react";
import { useAuth } from "../../context/auth";
import ButtonClose from "../shared/ButtonClose";
import Input from "../shared/Input";
import Label from "../shared/Label";
import SubmitButton from "../shared/SubmitButton";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../shared/Button";
import { MdOutlineAdd } from "react-icons/md"
import AddCategory from "./AddCategory";

const AddAndUpdateNews = () => {
  const { t, setShowAddNews , showAddCategory , setShowAddCategory} = useAuth();

  const [category , setCategory] = useState(0);
  const [titlePara, setTitlePara] = useState("");
  const [isTitleIsValid, setIsTitleIsValid] = useState(true);
  const [titleParaAr, setTitleParaAr] = useState("");
  const [isTitleIsValidAr, setIsTitleIsValidAr] = useState(true);

  const [image, setImage] = useState("");
  const [isImageValid, setImageValid] = useState(true);
  const [imageSize, setImageSize] = useState(0);
  const [checkFindImage, setCheckFindImage] = useState("");
  const [typeImage, setTypeImage] = useState("");

  const [body, setBody] = useState("");
  const [bodyIsValid, setBodyIsValid] = useState(true);

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
  };
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

  // ===== FUNCTION VALIDATION FOR IMAGE ====
  const checkImage = (inputValue , size , type) => {
    if (inputValue === 0) {
      setImageValid(false);
    }
        else if (size > 2000000){
            setImageValid(false)
        }
        else if (type === "image/jpeg" || type === "image/jpg" || type === "image/png" ){
            setImageValid(true)
        }    
    else {
      setImageValid(true);
    }
  };

  // ===== END FUNCTION VALIDATION FOR IMAGE ====

  // ===== FUNCTION VALIDATION FOR BODY =====
   const checkBody = (bodyVal) => {
    if (bodyVal === ""){
        setBodyIsValid(false);
    }
    else if (body.length < 500) {
        setBodyIsValid(false);
    }
    else {
        setBodyIsValid(true)
    }
   }
  // ===== END FUNCTION VALIDATION FOR BODY =====

  // ===== HANDLE SUBMIT ======
  const handleSubmit = (e) => {
    e.preventDefault();
    checkTitleEn(titlePara);
    checkTitleAr(titleParaAr);

    checkImage(imageSize , checkFindImage , typeImage);
    checkBody(body)
  };
  // ===== HANDLE SUBMIT ======
  return (
    <div className="tw-absolute tw-top-0 tw-left-0 tw-h-screen tw-w-full tw-bg-transparent-black4 tw-flex tw-items-center tw-justify-center tw-z-10">
      <div className="tw-w-[70%] md:tw-w-[90%] sm:tw-w-[95%] tw-p-5 tw-py-16 tw-px-7 tw-drop-shadow-md tw-border tw-flex tw-items-center tw-justify-center tw-bg-white tw-relative tw-overflow-hidden tw-rounded-md">
        <ButtonClose onClickFunc={() => setShowAddNews(false)} />
        {showAddCategory && <AddCategory />}
        <form
          className="formContainer"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          <div className="form-group">
            <Label label={t("category")}/>
            <div className=" tw-flex tw-gap-3">
            <select 
             className={`tw-w-full tw-text-gray-800 tw-border-b tw-py-1.5 focus:tw-outline-none tw-ring-0`}
             onChange={(e) => setCategory(e.target.value)}
            >
                <option value={'1'}>test</option>
                <option value={'1'}>test</option>
            </select>
            <Button text={"addCategory"} icon={<MdOutlineAdd />} onClickFunc={() => setShowAddCategory(true)} />
            </div>
          </div>  
          <div className="form-group">
            <Label label={t("titleArticle")} />
            <div className="tw-flex tw-gap-3">
              <Input
                type={"text"}
                lang={"en"}
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
              <Input
                type={"text"}
                lang={"ar"}
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
            <Label label={t("imageArticle")} />
            <Input
              type={"file"}
              onChangeFunc={(e) => {
                setImage(e.target.files[0]);
                setCheckFindImage(e.target.files.length);
                setImageSize(e.target.files[0].size);
                setTypeImage(e.target.files[0].type)
                checkImage(e.target.files.length , e.target.files[0].size , e.target.files[0].type );
              }}
              onFocusFunc={(e) => {
                setImage(e.target.files[0]);
                setCheckFindImage(e.target.files.length);
                setImageSize(e.target.files[0].size);
                setTypeImage(e.target.files[0].type)
                checkImage(e.target.files.length , e.target.files[0].size , e.target.files[0].type );
              }}
              onBlurFunc={(e) => {
                setImage(e.target.files[0]);
                setCheckFindImage(e.target.files.length);
                setImageSize(e.target.files[0].size);
                setTypeImage(e.target.files[0].type)
                checkImage(e.target.files.length , e.target.files[0].size , e.target.files[0].type );
              }}
              statusInput={isImageValid}
            />
          </div>
          <div className="form-group">
            <Label label={"contentArticle"} />
            <ReactQuill theme="snow" className={`tw-w-full tw-border ${bodyIsValid ? "" : "tw-border-red-500"}`} 
            onChange={(e) => {
                setBody(e)
                checkBody(e)
                console.log(e)
            }}
            />
          </div>
          <div>
            <SubmitButton text={t("add")} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAndUpdateNews;
