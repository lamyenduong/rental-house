import React, {Suspense, useEffect, useState} from "react";
import {
  ContentBoolean,
  ContentModeProps,
  ContentString,
} from "../../models/ContentModel";
import {Authentication, ShowOrHide} from "../../common/commons";
import TenantsContent from "./Tenants/TenantsContent";
import OwnerContent from "./Owner/OwnerContent";
import BranchContent from "./Owner/BranchContent";

const Content: React.FC<ContentModeProps> = ({value}) => {
  const [code, setCode] = useState("");
  const [isShowHome, setIsShowHome] = useState(false);

  //get return value pass to main page
  useEffect(() => {
    if (
      code !== "" &&
      code !== null &&
      isShowHome === Boolean(ShowOrHide.show)
    ) {
      alert(code);
      //there will pass code to a func in controller
    }
  }, [code, isShowHome]);

  //get and re-set to hook variable
  const getReturnData = (code: ContentString, val: ContentBoolean) => {
    setCode(code);
    setIsShowHome(val);
  };

  //check status to return owner
  const showOwnerFnc = () => {
    return isShowHome === Boolean(ShowOrHide.show) ? (
      <OwnerContent />
    ) : (
      <BranchContent contentReturnData={getReturnData} />
    );
  };

  //return view tenants
  const showTenantsFnc = () => {
    return <TenantsContent />;
  };

  return (
    <div className="flex flex-shrink-0 flex-row justify-center items-center w-full h-screen absolute top-0 pt-16 bg-white">
      {value === Authentication.isOwnerMode.toString()
        ? showOwnerFnc()
        : showTenantsFnc()}
    </div>
  );
};
export default Content;
