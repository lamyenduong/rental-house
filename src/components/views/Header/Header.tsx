import React from "react";
import {HeaderModeProps} from "../../models/HeaderModel";
import {Authentication} from "../../common/commons";
import OwnerHeader from "./Owner/OwnerHeader";
import TenantsHeader from "./Tenants/TenantsHeader";

const Header: React.FC<HeaderModeProps> = ({value}) => {
  return (
    <div className="w-full">
      {value === Authentication.isOwnerMode.toString() ? (
        <OwnerHeader />
      ) : (
        <TenantsHeader />
      )}
    </div>
  );
};
export default Header;
