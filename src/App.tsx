import { useEffect, useState } from "react";
import "../src/i18n";
import Content from "./components/views/Contents/Content";
import Header from "./components/views/Header/Header";
import { GetModeForAuthorized } from "./components/controllers/Core/Authentication";
import { Authentication } from "./components/common/commons";
import Login from "./components/views/Login/Login";
import { AccessProps, ModeProps } from "./components/models/AuthenticaitonsModel";

const App = () => {
  const [isShow, setIsShow] = useState(false); //is logged in?

  const [value, setValue] = useState(""); //mode user

  useEffect(() => { });

  const setAuth = (isLogIn: AccessProps, isMode: ModeProps) => {
    setIsShow(isLogIn);
    setValue(isMode);
  };

  return isShow === true ? (
    <div className="w-full flex flex-col flex-shrink-0">
      <Header value={value} />
      <Content value={value} />
    </div>
  ) : (
    <div className="w-full flex flex-col flex-shrink-0">
      <Login checkAuth={setAuth} />
    </div>
  );
};
