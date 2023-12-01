import React from "react";
import {ContentModeProps} from "../../models/ContentModel";
import {Authentication} from "../../common/commons";
import TenantsContent from "./Tenants/TenantsContent";
import OwnerContent from "./Owner/OwnerContent";

const Content: React.FC<ContentModeProps> = ({value}) => {
  return (
    <div className="flex flex-shrink-0 flex-row justify-center items-center w-full h-screen absolute top-0 pt-16 bg-white">
      {value === Authentication.isOwnerMode.toString() ? (
        <OwnerContent />
      ) : (
        <TenantsContent />
      )}
    </div>
  );
};
export default Content;
