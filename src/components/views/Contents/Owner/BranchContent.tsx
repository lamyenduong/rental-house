import {Colors, ShowOrHide} from "components/common/commons";
import Button from "components/master-components/Button";
import Model3D from "components/master-components/Model3D";
import {
  ContentNumber,
  ContentString,
  FunctionToData,
} from "components/models/ContentModel";
import {MoreHorizontal, Plus} from "lucide-react";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";
import BranchDetailPopup from "../Popups/BranchDetailPopup";
import {useSpring, animated} from "react-spring";
import {branchsList} from "components/controllers/BranchContentController";
import BranchAddPopup from "../Popups/AddBranchPopup";

const BranchContent: React.FC<FunctionToData> = ({contentReturnData}) => {
  const {t} = useTranslation();
  const [isShow, setIsShow] = useState(false);
  const [isAddShow, setIsAddShow] = useState(false);
  const [style, set] = useSpring(() => ({
    opacity: 0,
    visibility: "hidden",
  }));

  const [styleAdd, setAdd] = useSpring(() => ({
    opacity: 0,
    visibility: "hidden",
  }));

  const [name, setName] = useState("");
  const [suite, setSuite] = useState(0);
  const [room, setRoom] = useState(0);
  const [address, setAddress] = useState("");

  const setData = (
    isName: ContentString,
    isSuite: ContentNumber,
    isRoom: ContentNumber,
    isAddress: ContentString
  ) => {
    setName(isName);
    setSuite(isSuite);
    setRoom(isRoom);
    setAddress(isAddress);
  };

  const handleItemClick = (code: ContentString) => {
    contentReturnData(code, Boolean(ShowOrHide.show));
  };

  //detail popup action
  const handleDetailPopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const isParentClicked = (event.target as HTMLElement).classList.contains(
      "popup-content"
    );

    if (isParentClicked) {
      handleDetailCloseClick();
    }
  };

  //add popup action
  const handleAddPopupClick = (event: React.MouseEvent<HTMLDivElement>) => {
    const isParentClicked = (event.target as HTMLElement).classList.contains(
      "popup-content"
    );

    if (isParentClicked) {
      handleAddCloseClick();
    }
  };

  //detail handle action detail popup
  const handleDetailCloseClick = () => {
    set({opacity: 0, visibility: "hidden"});
    setIsShow(false);
  };

  const handleDetailOpenClick = () => {
    set({opacity: 1, visibility: "visible"});
    setIsShow(true);
  };

  //add handle action add popup
  const handleAddOpenClick = () => {
    setAdd({opacity: 1, visibility: "visible"});
    setIsAddShow(true);
  };

  const handleAddCloseClick = () => {
    setAdd({opacity: 0, visibility: "hidden"});
    setIsAddShow(true);
  };

  return (
    <>
      {isShow === Boolean(ShowOrHide.show) && (
        <animated.div
          style={style as unknown as React.CSSProperties}
          className="popup-overlay w-full absolute top-0 z-50 "
          onClick={handleDetailPopupClick}
        >
          <BranchDetailPopup
            closing={() => {
              handleDetailCloseClick();
            }}
            name={name}
            suite={suite}
            room={room}
            address={address}
          />
        </animated.div>
      )}
      {isAddShow === Boolean(ShowOrHide.show) && (
        <animated.div
          style={styleAdd as unknown as React.CSSProperties}
          className="popup-overlay w-full absolute top-0 z-50 "
          onClick={handleAddPopupClick}
        >
          <BranchAddPopup
            closing={() => {
              handleAddCloseClick();
            }}
          />
        </animated.div>
      )}
      <div className="w-full lg:w-10/12 h-full lg:h-5/6 lg:rounded-3xl lg:shadow-light_gray lg:shadow-around overflow-hidden flex flex-col justify-center items-start relative">
        <div className="w-full bg-green h-12 flex flex-shrink-0 flex-row justify-between items-center pl-7 pr-7">
          <span className=" text-white text-center text-lg uppercase tracking-tight font-semibold">
            {t(`ContentOwner.branch`)}
          </span>
        </div>
        <div className="w-full h-full grid row-auto auto-rows-max grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 scrollbar-hide md:scrollbar-default overflow-y-scroll justify-center items-start gap-5 p-7">
          {branchsList.map((branch, index) => {
            return (
              <div
                key={`branch-is${index}`}
                className="w-full h-96 bg-white shadow-around rounded-xl relative overflow-hidden"
              >
                <div className="w-full h-3/5 flex justify-center items-center">
                  <Model3D />
                </div>
                <div
                  className="absolute top-3 right-3 cursor-pointer group hover:bg-green w-7 border border-green aspect-square bg-white flex flex-row justify-center items-center rounded-full"
                  title={t(`Element.more`)}
                >
                  <MoreHorizontal
                    className="group-hover:text-white text-green transition-colors"
                    onClick={() => {
                      setData(
                        branch.name,
                        branch.suite,
                        branch.room,
                        branch.address
                      );
                      handleDetailOpenClick();
                    }}
                  />
                </div>
                <div className="flex flex-col flex-shrink-0 w-full h-2/5 pl-3 pr-3 overflow-hidden gap-x-0.5 relative">
                  <span className="text-green overflow-hidden overflow-ellipsis whitespace-nowrap flex flex-row gap-1">
                    {t(`Element.name`)}
                    <p className="text-blackish_gray overflow-hidden overflow-ellipsis whitespace-nowrap">
                      {branch.name}
                    </p>
                  </span>
                  <span className="text-green overflow-hidden overflow-ellipsis whitespace-nowrap flex flex-row gap-1">
                    {t(`Element.suite_numbers`)}
                    <p className="text-blackish_gray overflow-hidden overflow-ellipsis whitespace-nowrap">
                      {branch.suite}
                    </p>
                  </span>
                  <span className="text-green overflow-hidden overflow-ellipsis whitespace-nowrap flex flex-row gap-1">
                    {t(`Element.room_numbers`)}
                    <p className="text-blackish_gray overflow-hidden overflow-ellipsis whitespace-nowrap">
                      {branch.room}
                    </p>
                  </span>
                  <span className="text-green overflow-hidden overflow-ellipsis whitespace-nowrap flex flex-row gap-1">
                    {t(`Element.address`)}
                    <p className="text-blackish_gray overflow-hidden overflow-ellipsis whitespace-nowrap">
                      {branch.address}
                    </p>
                  </span>
                  <div className="absolute w-full self-center bottom-0">
                    <Button
                      className="rounded-none"
                      onClick={() => {
                        handleItemClick("hello");
                      }}
                    >
                      {t(`Element.lets_go`)}
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
          <div
            className="w-full h-96 bg-white border-green border-0 shadow-around cursor-pointer hover:opacity-70 transition-opacity p-10 rounded-xl relative overflow-hidden"
            onClick={() => {
              handleAddOpenClick();
            }}
          >
            <div className="w-full h-full flex flex-col justify-center items-center">
              <Plus className="w-16 h-64 text-green" />
              <span className="text-lg text-green overflow-hidden overflow-ellipsis whitespace-nowrap flex flex-row gap-1">
                {t(`Element.add_new_one`)}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default BranchContent;
