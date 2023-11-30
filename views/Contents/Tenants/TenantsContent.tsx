import {useState} from "react";
import {Navigator} from "../../../common/commons";
import {
  ContentNavigatorProps,
  ContentShowHideNavigatorProps,
  ContentTitleNavigatorProps,
} from "../../../models/ContentModel";

const TenantsContent = () => {
  const [value, setValue] = useState<ContentNavigatorProps>(0);
  const [title, setTitle] = useState("Home");
  const [isShow, setIsShow] = useState<ContentShowHideNavigatorProps>(true);

  const handleGetTitle = (val: ContentTitleNavigatorProps) => {
    if (val === title) {
      return;
    }
    setTitle(val.toString());
  };

  const handleShowNewSuite = (val: ContentShowHideNavigatorProps) => {
    setIsShow(val);
  };

  const handleNavigate = (val: ContentNavigatorProps) => {
    setValue(val);
    if (val === Navigator.home) {
      handleGetTitle("Home");
      handleShowNewSuite(true);
    } else {
      handleShowNewSuite(false);
    }
  };

  return (
    <div className="w-10/12 h-5/6 rounded-3xl shadow-light_gray shadow-around overflow-hidden">
      <div className="w-full bg-green h-12 flex flex-shrink-0 flex-row justify-between items-center pl-7 pr-7">
        <div
          className={`${
            !isShow && "hover:opacity-70 transition-opacity cursor-pointer"
          } h-full flex flex-shrink-0 flex-row justify-between items-center gap-1`}
          onClick={() => {
            !isShow && handleNavigate(Navigator.home);
          }}
        >
          <span className=" text-white text-center text-lg uppercase tracking-tight font-semibold">
            {title}
          </span>
        </div>
      </div>

      <div className="flex flex-shrink-0 flex-row w-full h-full"></div>
    </div>
  );
};

export default TenantsContent;
