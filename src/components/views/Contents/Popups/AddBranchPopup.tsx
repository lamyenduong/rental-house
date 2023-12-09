import Button from "components/master-components/Button";
import Input from "components/master-components/Input";
import {
  ContentNumber,
  ContentString,
  FunctionToVoid,
} from "components/models/ContentModel";
import {X} from "lucide-react";
import React, {useState} from "react";
import {useTranslation} from "react-i18next";

const ALPHABETS_AND_SPACES_PATTERN: RegExp = /^[a-zA-Z\d\s]*$/;

const NUMBERS_PATTERN: RegExp = /^\d*\.?\d+$/;

const BranchAddPopup: React.FC<FunctionToVoid> = ({closing}) => {
  const {t} = useTranslation();

  const [name, setName] = useState("");
  const [suite, setSuite] = useState(0);
  const [address, setAddress] = useState("");
  const [energy, setEnergy] = useState(0);
  const [water, setWater] = useState(0);
  const [net, setNet] = useState(0);
  const [service, setService] = useState(0);

  const CheckName = (val: ContentString) => {
    if (ALPHABETS_AND_SPACES_PATTERN.test(val) || val === "") {
      setName(val);
    } else {
      setName("");
    }
  };
  const CheckSuite = (val: ContentNumber) => {
    if (NUMBERS_PATTERN.test(val.toString()) || val === null) {
      setSuite(val);
    } else {
      setSuite(0);
    }
  };
  const CheckAddress = (val: ContentString) => {
    if (ALPHABETS_AND_SPACES_PATTERN.test(val) || val === "") {
      setAddress(val);
    } else {
      setAddress("");
    }
  };
  const CheckEnergy = (val: ContentNumber) => {
    if (NUMBERS_PATTERN.test(val.toString()) || val === null) {
      setEnergy(val);
    } else {
      setEnergy(0);
    }
  };
  const CheckWater = (val: ContentNumber) => {
    if (NUMBERS_PATTERN.test(val.toString()) || val === null) {
      setWater(val);
    } else {
      setWater(0);
    }
  };
  const CheckNet = (val: ContentNumber) => {
    if (NUMBERS_PATTERN.test(val.toString()) || val === null) {
      setNet(val);
    } else {
      setNet(0);
    }
  };
  const CheckService = (val: ContentNumber) => {
    if (NUMBERS_PATTERN.test(val.toString()) || val === null) {
      setService(val);
    } else {
      setService(0);
    }
  };

  const handleClosePopup = () => {
    closing();
  };

  return (
    <form
      method="POST"
      encType="multipart/form-data"
      className="popup-content relative w-screen h-screen bg-blackist_gray_opacity z-50 top-0 flex flex-row flex-shrink-0 justify-center items-center"
    >
      <div className="w-10/12 lg:w-1/3 h- md:h-5/6 bg-white rounded-3xl overflow-hidden flex flex-col justify-start">
        <div className="w-full h-10 border-b-2 border-green flex justify-between items-center p-7">
          <span className="uppercase text-lg tracking-tight text-blackish_gray">
            {t(`Element.add_new_one`)}
          </span>
          <X
            className="text-green cursor-pointer hover:opacity-70 transition-opacity"
            onClick={() => {
              handleClosePopup();
            }}
          />
        </div>
        <div className="p-7 w-full h-full flex flex-col items-start overflow-y-scroll gap-3">
          <div className="w-full">
            <span className="text-green">{t(`Element.name`)}</span>
            <Input
              value={name}
              onChange={(e) => CheckName(e.target.value)}
              type="text"
              placeholder={t(`InputPlaceholder.name`)}
            />
          </div>
          <div className="w-full">
            <span className="text-green">{t(`Element.suite_numbers`)}</span>
            <Input
              value={suite}
              onChange={(e) => CheckSuite(Number(e.target.value))}
              type="number"
              placeholder={t(`InputPlaceholder.suite_number`)}
            />
          </div>
          <div className="w-full">
            <span className="text-green">{t(`Element.address`)}</span>
            <Input
              value={address}
              onChange={(e) => CheckAddress(e.target.value)}
              type="text"
              placeholder={t(`InputPlaceholder.address`)}
            />
          </div>
          <div className="flex flex-row w-full gap-3">
            <div className="flex flex-col w-1/2 gap-3">
              <div className="w-full">
                <span className="text-green">{t(`Element.price_energy`)}</span>
                <Input
                  value={energy}
                  onChange={(e) => CheckEnergy(Number(e.target.value))}
                  type="number"
                  placeholder={t(`InputPlaceholder.price_energy`)}
                />
              </div>
              <div className="w-full">
                <span className="text-green">{t(`Element.price_net`)}</span>
                <Input
                  value={net}
                  onChange={(e) => CheckNet(Number(e.target.value))}
                  type="number"
                  placeholder={t(`InputPlaceholder.price_net`)}
                />
              </div>
            </div>
            <div className="flex flex-col w-1/2 gap-3">
              <div className="w-full">
                <span className="text-green">{t(`Element.price_water`)}</span>
                <Input
                  value={water}
                  onChange={(e) => CheckWater(Number(e.target.value))}
                  type="number"
                  placeholder={t(`InputPlaceholder.price_water`)}
                />
              </div>

              <div className="w-full">
                <span className="text-green">{t(`Element.price_service`)}</span>
                <Input
                  value={service}
                  onChange={(e) => CheckService(Number(e.target.value))}
                  type="number"
                  placeholder={t(`InputPlaceholder.price_service`)}
                />
              </div>
            </div>
          </div>
        </div>
        <div className="w-full h-10 border-t-2 border-green flex flex-row justify-between items-center p-7 gap-7">
          <Button
            type="button"
            className="justify-self-end left-0 bottom-0"
            onClick={() => {
              handleClosePopup();
            }}
          >
            Create
          </Button>
        </div>
      </div>
    </form>
  );
};

export default BranchAddPopup;
