import {FunctionBranchToVoid} from "components/models/ContentModel";
import {X} from "lucide-react";
import React from "react";
import {useTranslation} from "react-i18next";

const BranchDetailPopup: React.FC<FunctionBranchToVoid> = ({
  closing,
  name,
  suite,
  room,
  address,
}) => {
  const {t} = useTranslation();
  const handleClosePopup = () => {
    closing();
  };
  return (
    <div className="popup-content relative w-screen h-screen bg-blackist_gray_opacity z-50 top-0 flex flex-row flex-shrink-0 justify-center items-center">
      <div className="w-10/12 lg:w-1/3 h-5/6 md:h-5/6 bg-white rounded-3xl overflow-hidden">
        <div className="w-full h-12 border-b-2 border-green flex justify-between items-center p-7">
          <span className="uppercase text-lg tracking-tight text-blackish_gray">
            {t(`Element.detail_branch`)}
          </span>
          <X
            className="text-green cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => {
              handleClosePopup();
            }}
          />
        </div>
        <div className="p-7 w-full h-fit flex flex-col justify-start items-start gap-1 overflow-y-scroll">
          <div className="w-full">
            <span className="text-green">{t(`Element.name`)}</span>
            <span>{name}</span>
          </div>
          <div className="w-full">
            <span className="text-green">{t(`Element.suite_numbers`)}</span>
            <span>{suite}</span>
          </div>
          <div className="w-full">
            <span className="text-green">{t(`Element.room_numbers`)}</span>
            <span>{room}</span>
          </div>
          <div className="w-full">
            <span className="text-green">{t(`Element.address`)}</span>
            <span>{address}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BranchDetailPopup;
