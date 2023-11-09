import { useAuth } from "../../context/auth"


const HeaderPage = ({title}) => {
  const { t } = useAuth();
  return (
    <div className=" tw-mb-10">
        <p className="tw-text-gray-400 tw-capitalize">
            {t("page")}
        </p>
        <p className="tw-text-2xl tw-font-extrabold tw-tracking-tight tw-text-red-500 tw-capitalize">
            {title}
        </p>
    </div>
  )
}

export default HeaderPage