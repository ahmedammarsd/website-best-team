import { useEffect, useState } from "react";
import { useAuth } from "../../context/auth";
import ButtonClose from "../shared/ButtonClose";
import Input from "../shared/Input";
import Label from "../shared/Label";
import SubmitButton from "../shared/SubmitButton";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Button from "../shared/Button";
import { MdOutlineAdd } from "react-icons/md";
import AddCategory from "./AddCategory";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../../features/CategorySlice";
import { addNews, updateNews } from "../../features/NewsSlice";
import { uploadeSingleImg } from "../../features/ImageSlice";
import { BaseUrl } from "../../utils/BaseUrl";
import imageNotFound from "../../images/Image_not_available.png"

const AddAndUpdateNews = () => {
  const {
    t,
    setShowAddNews,
    showAddCategory,
    setShowAddCategory,
    currenLanguageCode,
    newsId,
    isUpdateNews,
    setIsUpdateNews,
  } = useAuth();

  const getNews = useSelector((state) =>
    state.news.data?.filter((n) => n.id === newsId)
  );

  const [category, setCategory] = useState(
    isUpdateNews ? getNews[0].category_id : 0
  );
  const [titlePara, setTitlePara] = useState(
    isUpdateNews ? getNews[0].title_en : ""
  );
  const [isTitleIsValid, setIsTitleIsValid] = useState(true);
  const [titleParaAr, setTitleParaAr] = useState(
    isUpdateNews ? getNews[0].title_ar : ""
  );
  const [isTitleIsValidAr, setIsTitleIsValidAr] = useState(true);

  const [image, setImage] = useState("");
  const [isImageValid, setImageValid] = useState(true);
  const [imageSize, setImageSize] = useState(0);
  const [checkFindImage, setCheckFindImage] = useState("");
  const [typeImage, setTypeImage] = useState("");

  const [body, setBody] = useState(isUpdateNews && getNews[0].body_en);
  const [bodyIsValid, setBodyIsValid] = useState(true);

  const [bodyAr, setBodyAr] = useState(isUpdateNews && getNews[0].body_ar);
  const [bodyArIsValid, setBodyArIsValid] = useState(true);

  const dispatch = useDispatch();
  const categoryStates = useSelector((state) => state.category);
  const newsStates = useSelector((state) => state.news);
  const [showErrReq , setShowErrReq] = useState(false)
  //const imageStates = useSelector((state) => state.image);

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

  useEffect(() => {
    dispatch(getCategories());
  }, []);
  // ===== FUNCTION VALIDATION FOR IMAGE ====
  const checkImage = (inputValue, size, type) => {
    if (inputValue === 0) {
      setImageValid(false);
    } else if (size > 2000000) {
      setImageValid(false);
    } else if (
      type === "image/jpeg" ||
      type === "image/jpg" ||
      type === "image/png"
    ) {
      setImageValid(true);
    } else {
      setImageValid(true);
    }
  };

  // ===== END FUNCTION VALIDATION FOR IMAGE ====

  // ===== FUNCTION VALIDATION FOR BODY =====
  const checkBody = (bodyVal) => {
    if (bodyVal === "") {
      setBodyIsValid(false);
    } else if (body.length < 50) {
      setBodyIsValid(false);
    } else {
      setBodyIsValid(true);
    }
  };
  // ===== END FUNCTION VALIDATION FOR BODY =====

  // ===== FUNCTION VALIDATION FOR BODY =====
  const checkBodyAr = (bodyVal) => {
    if (bodyVal === "") {
      setBodyArIsValid(false);
    } else if (bodyAr.length < 50) {
      setBodyArIsValid(false);
    } else {
      setBodyArIsValid(true);
    }
  };
  // ===== END FUNCTION VALIDATION FOR BODY =====

  // const uploadeImage = () => {
  //   checkImage(imageSize , checkFindImage , typeImage);
  //   const formData = new FormData();
  //    formData.append("files", image);

  //   if (image !== "" && isImageValid){
  //     dispatch(uploadeSingleImg(formData))
  //   }
  // }
  // ===== HANDLE SUBMIT ======
  const handleSubmit = async (e) => {
    e.preventDefault();
    checkTitleEn(titlePara);
    checkTitleAr(titleParaAr);
    const formData = new FormData();
    formData.append("files", image);

    checkImage(imageSize, checkFindImage, typeImage);
    checkBody(body);
    checkBodyAr(bodyAr);

    const dataNews = {
     
      user_id: 1,
      category_id: category,
      title_en: titlePara,
      title_ar: titleParaAr,
      body_en: body,
      body_ar: bodyAr,
      image_url: image?.name,
    };
    //  const promises = [dispatch(uploadeSingleImg(formData)) , dispatch(addNews(dataNews))]

    if (isUpdateNews) { ///  IN UPDATE WHITHOUT IMAGE
      if (
        titlePara !== "" &&
        titleParaAr !== "" &&
        body !== "" &&
        bodyAr !== "" &&
        image === "" &&
        isTitleIsValid &&
        isTitleIsValidAr &&
        bodyArIsValid &&
        bodyArIsValid
      ) {
        
       await dispatch(updateNews({...dataNews , id: getNews[0]?.id}));
        if (newsStates.statusUpdate === "success") {
          setTimeout(() => {
            setShowAddNews(false);
            setIsUpdateNews(false);
          }, 2000);
        }
        if (newsStates.statusUpdate === "failed"){
          setShowErrReq(true)
          setTimeout(() => setShowErrReq(false) , 4000)
       }
        // console.log(image?.name)
        //Promise.all(promises)
      } else if ( // IN UPDATE WIHT IMAGE
        titlePara !== "" &&
        titleParaAr !== "" &&
        body !== "" &&
        bodyAr !== "" &&
        image !== "" &&
        isImageValid &&
        isTitleIsValid &&
        isTitleIsValidAr &&
        bodyArIsValid &&
        bodyArIsValid
      ) {
       await dispatch(uploadeSingleImg(formData));
       await dispatch(updateNews({...dataNews , id: getNews[0]?.id}));
        if (newsStates.statusUpdate === "success") {
          setTimeout(() => {
            setShowAddNews(false);
            setIsUpdateNews(false);
          }, 2000);
        }
        if (newsStates.statusUpdate === "failed"){
           setShowErrReq(true)
           setTimeout(() => setShowErrReq(false) , 4000)
        }
        // console.log(image?.name)
        //Promise.all(promises)
      }
    } else {
      if ( // IN ADD NEW NEWS
        titlePara !== "" &&
        titleParaAr !== "" &&
        body !== "" &&
        bodyAr !== "" &&
        image !== "" &&
        isImageValid &&
        isTitleIsValid &&
        isTitleIsValidAr &&
        bodyArIsValid &&
        bodyArIsValid
      ) {
       await dispatch(uploadeSingleImg(formData));
        await dispatch(addNews(dataNews));
        if (newsStates.statusAdd === "success") {
          setTimeout(() => setShowAddNews(false), 2000);
        }
        if (newsStates.statusAdd === "failed"){
          setShowErrReq(true)
          setTimeout(() => setShowErrReq(false) , 7000)
       }
        // console.log(image?.name)
        //Promise.all(promises)
      }
    }
  };

  
  // ===== END HANDLE SUBMIT ======
  return (
    <div className="tw-absolute tw-top-0 tw-left-0 tw-h-screen tw-w-full tw-bg-transparent-black4 tw-flex tw-items-center tw-justify-center tw-z-10">
      <div className="tw-w-[80%] md:tw-w-[90%] sm:tw-w-[95%] tw-p-5 tw-py-16 tw-px-7 tw-drop-shadow-md tw-border tw-flex tw-items-center tw-justify-center tw-bg-white tw-relative tw-overflow-hidden tw-rounded-md">
        <ButtonClose
          onClickFunc={() => {
            setShowAddNews(false);
            setIsUpdateNews(false);
          }}
        />
        {showAddCategory && <AddCategory />}
        <form
          className="formContainer"
          onSubmit={handleSubmit}
          encType="multipart/form-data"
        >
          {
            showErrReq &&  
            <span className="tw-block tw-text-center tw-text-xs tw-text-red-500">
              {t(newsStates?.errorUpdate)}
            </span>
          }
          <div className="form-group">
            <Label label={t("category")} />
            <div className=" tw-flex tw-gap-3">
              {categoryStates.isLoadingCategories ? (
                <span className=" tw-text-sm tw-p-1 tw-w-full tw-text-blue-500">
                  Loading Categories
                </span>
              ) : categoryStates.statusGetCategories === "success" ? (
                <select
                  className={`tw-w-full tw-text-gray-800 tw-border-b tw-py-1.5 focus:tw-outline-none tw-ring-0`}
                  onChange={(e) => setCategory(e.target.value)}
                  defaultValue={isUpdateNews && getNews[0]?.category_id}
                >
                  {categoryStates.categories?.map((categoryy) => (
                    <option key={categoryy.id} value={categoryy.id}>
                      {currenLanguageCode === "en"
                        ? categoryy.name_en
                        : category.name_ar}
                    </option>
                  ))}
                </select>
              ) : (
                <span className=" tw-text-sm tw-p-1 tw-w-full tw-text-blue-500">
                  {categoryStates.errorGetCategories}
                </span>
              )}
              <Button
                text={"addCategory"}
                icon={<MdOutlineAdd />}
                onClickFunc={() => setShowAddCategory(true)}
              />
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
                dValue={isUpdateNews ? titlePara : ""}
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
                dValue={isUpdateNews ? titleParaAr : ""}
              />
            </div>
          </div>
          <div className="form-group">
            <Label label={t("imageArticle")} />
            <div className="tw-flex tw-gap-3 tw-items-center">
              <Input
                type={"file"}
                onChangeFunc={(e) => {
                  setImage(e.target.files[0]);
                  setCheckFindImage(e.target.files?.length);
                  setImageSize(e.target.files[0]?.size);
                  setTypeImage(e.target.files[0]?.type);
                  checkImage(
                    e.target.files?.length,
                    e.target.files[0]?.size,
                    e.target.files[0]?.type
                  );
                }}
                onFocusFunc={(e) => {
                  setImage(e.target.files[0]);
                  setCheckFindImage(e.target.files?.length);
                  setImageSize(e.target.files[0]?.size);
                  setTypeImage(e.target.files[0]?.type);
                  checkImage(
                    e.target.files?.length,
                    e.target.files[0]?.size,
                    e.target.files[0]?.type
                  );
                }}
                onBlurFunc={(e) => {
                  setImage(e.target.files[0]);
                  setCheckFindImage(e.target.files.length);
                  setImageSize(e.target.files[0]?.size);
                  setTypeImage(e.target.files[0]?.type);
                  checkImage(
                    e.target.files?.length,
                    e.target.files[0]?.size,
                    e.target.files[0]?.type
                  );
                }}
                statusInput={isImageValid}
              />
              {isUpdateNews ? (
                <div className=" tw-overflow-hidden tw-w-[50px] tw-h-[50px] tw-rounded-full">
                  <img
                    src={`${BaseUrl}/best_team/images/${getNews[0]?.image_url}`}
                    className="tw-w-full tw-h-full tw-object-cover"
                    alt={
                      currenLanguageCode === "en"
                        ? getNews[0]?.title_en
                        : getNews[0]?.title_ar
                    }
                    onError={(e) => {
                      e.target.src = imageNotFound
                    }}
                  />
                </div>
              ) : null}
            </div>
            {/* <span className="tw-text-xs tw-p-1 tw-text-blue-500">
              {
                imageStates.isLoading ?
                t("loaing")  :
                imageStates.status === "success" ?
                t("successUploadeImage") :
                t(imageStates.error)
              }
            </span> */}
          </div>
          <div className="form-group">
                <Label label={t("contentArticle")} />
            <div className=" tw-flex tw-gap-3">
              <div className="tw-overflow-hidden">
                <span className="tw-p-1.5 tw-text-xs tw-rounded-md tw-bg-red-50 tw-uppercase tw-block">
                  EN
                </span>
                <ReactQuill
                  theme="snow"
                  className={`tw-w-full tw-max-h-32 tw-overflow-auto tw-border ${
                    bodyIsValid ? "" : "tw-border-red-500"
                  }`}
                  onChange={(e) => {
                    setBody(e);
                    checkBody(e);
                  }}
                  defaultValue={isUpdateNews && body}
                />
              </div>
              <div className="tw-overflow-hidden">
               
                <span className="tw-p-1.5 tw-text-xs tw-rounded-md tw-bg-red-50 tw-uppercase tw-block">
                  AR
                </span>
                <ReactQuill
                  theme="snow"
                  className={`tw-w-full tw-max-h-32 tw-overflow-auto tw-border ${
                    bodyArIsValid ? "" : "tw-border-red-500"
                  }`}
                  onChange={(e) => {
                    setBodyAr(e);
                    checkBodyAr(e);
                  }}
                  defaultValue={isUpdateNews && bodyAr }
                />
              </div>
            </div>
          </div>

          <div>
            <SubmitButton
              text={
                newsStates.isLoadingAdd
                  ? t("loading")
                  : isUpdateNews
                  ? t("update")
                  : t("add")
              }
              isDisabled={newsStates.isLoadingAdd}
            />
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAndUpdateNews;
