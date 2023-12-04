import { useState } from "react";
import "../src/i18n";
import Content from "./components/views/Contents/Content";
import Header from "./components/views/Header/Header";
import Login from "./components/views/Login/Login";
import { AccessProps, AuthProps, ModeProps } from "./components/models/AuthenticationsModel";
import Verify from "./components/views/Login/Verify";

const App = () => {
  const [isShow, setIsShow] = useState(false); //is logged in?

  const [value, setValue] = useState(""); //mode user

  // useEffect(() => { });

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

export default App;
