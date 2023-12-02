import {LogOut, Menu} from "lucide-react";
import {Colors} from "../../../common/commons";
import Button from "../../../master-components/Button";
import Logo from "../../../../assets/images/logo.png";

const TenantsHeader = () => {
  const handleReload = () => {
    window.location.reload();
  };
  return (
    <div className=" z-50 relative bg-white flex flex-shrink-0 overflow-hidden flex-row justify-between items-center pl-2 pr-2 lg:pl-28 lg:pr-28 h-16 border-b-2 border-green">
      <div
        className="cursor-pointer flex flex-shrink-0 flex-row justify-start h-full items-center gap-2"
        onClick={() => {
          handleReload();
        }}
      >
        <img src={Logo} className="h-9" alt="Logo" />
        <span className="text-center text-lg text-blackish_gray uppercase tracking-tight">
          Motel CenPer
        </span>
      </div>
      <Button
        variant="icon"
        className="lg:hidden cursor-pointer flex flex-shrink-0 flex-row justify-end items-center rounded-none bg-transparent h-full pl-2 pr-2 hover:bg-light_gray transition-colors"
      >
        <Menu color={Colors.green} className="cursor-pointer h-6 w-6" />
      </Button>
      <div className="hidden lg:flex flex-shrink-0 flex-row justify-end items-center h-full">
        <div className="cursor-pointer flex flex-shrink-0 flex-row gap-2 justify-center items-center h-full pl-2 pr-2 hover:bg-light_gray transition-colors">
          <span className="text-center text-lg text-blackish_gray uppercase tracking-tight font-semibold">
            Username
          </span>
          <hr className="w-7 bg-blackish_gray text-blackish_gray rotate-90 h-1.5" />
          <span className="text-center text-lg text-blackish_gray uppercase tracking-tight font-semibold">
            Role
          </span>
        </div>
        <div className="cursor-pointer flex flex-shrink-0 flex-row justify-end items-center h-full pl-2 pr-2">
          <LogOut color={Colors.green} className="cursor-pointer h-6 w-6" />
        </div>
      </div>
    </div>
  );
};

export default TenantsHeader;
