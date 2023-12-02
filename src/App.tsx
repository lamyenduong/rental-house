import React, { useEffect, useState } from "react";
import "../src/i18n";
import Content from "./components/views/Contents/Content";
import Header from "./components/views/Header/Header";
import { GetModeForAuthorized } from "./components/controllers/Core/Authentication";
import { Authentication } from "./components/common/commons";
import Login from "./components/views/Login/Login";

const App = () => {
  const [isShow, setIsShow] = useState(true);

  const value = GetModeForAuthorized();

  return isShow === true ? (
    <div className="w-full flex flex-col flex-shrink-0">
      <Header value={value} />
      <Content value={value} />
    </div>
  ) : (
    <div className="w-full flex flex-col flex-shrink-0"><Login /></div>
  );
};

export default App
