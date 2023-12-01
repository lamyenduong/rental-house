import {useState} from "react";
import {Authentication} from "../../common/commons";
import {ModeProps} from "../../models/AuthenticaitonsModel";

export const GetModeForAuthorized = (): ModeProps => {
  const [isMode, setIsMode] = useState(Authentication.isOwnerMode.toString()); //default is tenant mode
  //do sth
  return isMode === Authentication.isOwnerMode.toString()
    ? Authentication.isOwnerMode
    : Authentication.isTenantsMode;
};
