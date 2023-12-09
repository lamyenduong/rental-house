import {Authentication} from "../../common/commons";
import {
  AuthProps,
  PasswordProps,
  UsernameProps,
} from "../../models/AuthenticationsModel";

export const GetAuthorized = (
  username: UsernameProps,
  password: PasswordProps
): AuthProps => {
  let isMode = Authentication.isOwnerMode.toString();

  let isLoggedIn = true;
  //do sth
  return {isLoggedIn, isMode};
};
