import { useState } from "react";
import { Authentication } from "../../common/commons";
import {
  AccessProps,
  AuthProps,
  ModeProps,
  PasswordProps,
  UsernameProps,
} from "../../models/AuthenticaitonsModel";

export const GetAuthorized = (
  username: UsernameProps,
  password: PasswordProps
): AuthProps => {
  const [isMode, setIsMode] = useState<ModeProps>(
    Authentication.isTenantsMode.toString()
  ); //default is tenant mode
  const [isLoggedIn, setIsLoggedIn] = useState<AccessProps>(false);

  setIsMode(Authentication.isTenantsMode.toString());
  setIsLoggedIn(true);
  //do sth
  return { isLoggedIn, isMode };
};
