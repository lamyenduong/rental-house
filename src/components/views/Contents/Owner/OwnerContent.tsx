import {ChevronLeft, ChevronRight, Plus} from "lucide-react";
import ContentController, {
  SidebarItemsList,
} from "../../../controllers/ContentController";
import {useState, useEffect} from "react";
import {
  ContentNavigatorProps,
  ContentNumber,
  ContentShowHideNavigatorProps,
  ContentTitleNavigatorProps,
} from "../../../models/ContentModel";
import {Colors, Navigator} from "../../../common/commons";
import Button from "../../../master-components/Button";
import {useTranslation} from "react-i18next";

const OwnerContent = () => {
  const [value, setValue] = useState<ContentNavigatorProps>(0);
  const [title, setTitle] = useState("Home");
  const [isShow, setIsShow] = useState<ContentShowHideNavigatorProps>(true);

  const {t} = useTranslation();

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

  // sliding

  const [position, setPosition] = useState(0);
  const totalNumberOfItems = SidebarItemsList.length;

  const handleSlideLeft = () => {
    setPosition((prevPosition: ContentNumber) => Math.max(prevPosition - 1, 0));
  };

  const handleSlideRight = () => {
    setPosition((prevPosition: ContentNumber) => {
      const newPosition = Math.min(prevPosition + 1, totalNumberOfItems - 1);
      return newPosition;
    });
  };

  // Function to reset position when the screen size is large
  const resetPositionOnLargeScreen = () => {
    if (window.innerWidth >= 1024) {
      setPosition(0);
    }
  };

  useEffect(() => {
    window.addEventListener("resize", resetPositionOnLargeScreen);

    return () => {
      window.removeEventListener("resize", resetPositionOnLargeScreen);
    };
  }, []);

  return (
    <div className="w-full lg:w-10/12 h-full lg:h-5/6 lg:rounded-3xl lg:shadow-light_gray lg:shadow-around overflow-hidden">
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
              {t(`ContentOwner.new_suite`)}
            </span>
          </div>
        )}
      </div>

      <div className="flex flex-shrink-0 flex-col-reverse lg:flex-row w-full lg:h-full">
        <div className="w-full h-screen lg:w-9/12 pt-4 pl-7 pr-7">
          <ContentController value={value} />
        </div>
        <div className="lg:h-full w-screen flex scrollbar-hide lg:w-3/12 lg:border-l border-b border-green overflow-x-scroll lg:overflow-y-scroll flex-shrink-0 overflow-hidden">
          <Button
            variant="icon"
            className="w-8 absolute left-0 bg-gradient-to-l from-transparent to-white from-5% to-95% lg:hidden cursor-pointer flex flex-shrink-0 flex-row justify-end items-center rounded-none bg-transparent h-16 hover:opacity-70 transition-opacity z-10"
            onClick={() => {
              handleSlideLeft();
            }}
          >
            <ChevronLeft
              color={Colors.green}
              className="cursor-pointer h-6 w-6"
            />
          </Button>
          <div
            style={{
              transform: `translateX(-${
                (position * 100) / totalNumberOfItems
              }%)`,
            }}
            className="pl-4 pr-4 lg:h-full flex lg:w-full flex-shrink-0 scrollbar-hide lg:flex-col flex-row justify-start items-center top-0 lg:pt-4 lg:pl-5 lg:pr-5 transition-transform ease-in-out duration-300"
          >
            {SidebarItemsList.map((item, index) => {
              return (
                <div
                  key={`items${index}`}
                  className="overflow-hidden gap-2 group hover:bg-light_gray cursor-pointer w-fit lg:w-full pl-2 pr-2 lg:border-b lg:border-green h-16 flex flex-shrink-0 flex-row justify-start items-center"
                  onClick={() => {
                    handleNavigate(item.id);
                    handleGetTitle(item.title);
                  }}
                >
                  <div className="flex group-hover:border group-hover:border-green transition-all bg-light_gray rounded-full h-12 aspect-square flex-shrink-0 flex-row justify-center items-center">
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
          <Button
            variant="icon"
            className="w-8 absolute right-0 bg-gradient-to-r from-transparent to-white from-5% to-95% lg:hidden cursor-pointer flex flex-shrink-0 flex-row justify-end items-center rounded-none bg-transparent h-16 "
            onClick={() => {
              handleSlideRight();
            }}
          >
            <ChevronRight
              color={Colors.green}
              className="cursor-pointer h-6 w-6"
            />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default OwnerContent;
