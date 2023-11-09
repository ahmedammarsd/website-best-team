import HeaderPage from "../../components/Dashboard-components/HeaderPage";
import { useAuth } from "../../context/auth";
import imageTest from "../../images/celador.png";
import { LiaEditSolid } from "react-icons/lia";
import { MdOutlineDeleteSweep } from "react-icons/md";

export const OpreationIcon = ({ icon, isDelete }) => (
  <span
    className={`tw-p-3 tw-rounded-md tw-text-sm tw-shadow-md ${
      isDelete
        ? " tw-bg-red-50 hover:tw-bg-red-500 tw-text-red-500 hover:tw-text-white"
        : " tw-bg-blue-100 tw-text-blue-600 hover:tw-bg-blue-600 hover:tw-text-white"
    } `}
  >
    {icon}
  </span>
);
const NewsAndArticles = () => {
  const { t } = useAuth();
  return (
    <div className="mainContainer">
      <HeaderPage title={t("newsAticales")} />

      {/* ==== NEWS AND ARTICLES ==== */}
      <div className="tw-overflow-x-auto sm:-tw-mx-6 lg:-tw-mx-8">
        <div className="tw-py-4 tw-inline-block tw-w-full sm:tw-px-6 lg:tw-px-8">
          <div className="tw-overflow-auto tw-max-h-[500px] tw-rounded-md">
            <table className="tw-w-full tw-text-center">
              <thead>
                <tr className="tr">
                  <th className="th">#</th>
                  <th className="th">{t("imageArticle")}</th>
                  <th className="th">{t("titleArticle")}</th>
                  <th className="th"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="tr">
                  <td className="td">1</td>
                  <td className="td tw-flex tw-justify-center tw-items-center">
                    <div className=" tw-overflow-hidden tw-w-[60px] tw-h-[60px] tw-rounded-full">
                      <img
                        src={imageTest}
                        className="tw-w-full tw-h-full tw-object-cover"
                      />
                    </div>
                  </td>
                  <td>test title</td>
                  <td className="td tw-flex tw-items-center tw-gap-2">
                    <OpreationIcon icon={<LiaEditSolid />} isDelete={false} />
                    <OpreationIcon
                      icon={<MdOutlineDeleteSweep />}
                      isDelete={true}
                    />
                  </td>
                </tr>
                <tr className="tr">
                  <td className="td">2</td>
                  <td className="td tw-flex tw-justify-center tw-items-center">
                    <div className="tw-w-[60px] tw-h-[60px] tw-overflow-hidden tw-rounded-full tw-shadow-md">
                      <img
                        src={imageTest}
                        className="tw-w-full tw-h-full tw-object-cover"
                      />
                    </div>
                  </td>
                  <td>test title</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* ==== END NEWS AND ARTICLES ==== */}
    </div>
  );
};

export default NewsAndArticles;
