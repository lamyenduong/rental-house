import {ChevronLeft, Plus} from "lucide-react";
import ContentController, {
  SidebarItemsList,
} from "../../../controllers/ContentController";
import {useState} from "react";
import {
  ContentNavigatorProps,
  ContentShowHideNavigatorProps,
  ContentTitleNavigatorProps,
} from "../../../models/ContentModel";
import {Navigator} from "../../../common/commons";

const OwnerContent = () => {
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
          {!isShow && <ChevronLeft className="text-white " />}

          <span className=" text-white text-center text-lg uppercase tracking-tight font-semibold">
            {title}
          </span>
        </div>
        {isShow && (
          <div
            className="hover:opacity-70 transition-opacity h-full flex flex-shrink-0 flex-row justify-between items-center gap-1 cursor-pointer"
            onClick={() => {
              // Show insert suite view;
            }}
          >
            <Plus className="text-white " />
            <span className="bg-transparent text-white text-center text-lg uppercase tracking-tight font-semibold">
              New Suite
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-shrink-0 flex-row w-full h-full">
        <div className="w-9/12 pt-4 pl-7 pr-7">
          <ContentController value={value} />
        </div>
        <div className="w-3/12 pl-7 pt-4 pr-7 border-l border-green overflow-y-scroll">
          {SidebarItemsList.map((item, index) => {
            return (
              <div
                key={`items${index}`}
                className="overflow-hidden gap-2 group hover:bg-light_gray cursor-pointer w-full pl-2 pr-2 border-b border-green h-16 flex flex-shrink-0 flex-row justify-start items-center"
                onClick={() => {
                  handleNavigate(item.id);
                  handleGetTitle(item.title);
                }}
              >
                <div className="group-hover:border group-hover:border-green transition-all bg-light_gray rounded-full h-12 aspect-square flex flex-shrink-0 flex-row justify-center items-center">
                  {item.chart}
                </div>
                <div className="flex flex-shrink-0 flex-col w-full justify-center items-start">
                  <span className="text-blackish_gray text-lg">
                    {item.title}
                  </span>
                  <span className="text-plants text-xs break-words">
                    {item.desc}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default OwnerContent;
