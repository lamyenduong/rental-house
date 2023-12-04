import React, {useEffect, useState} from "react";
import "./Login.css";
import logo from "../../../assets/images/logo.png";
import Input from "../../master-components/Input";
import Button from "../../master-components/Button";
import {Colors} from "../../common/commons";
import {useTranslation} from "react-i18next";
import {AuthProps, CheckAuthProps} from "../../models/AuthenticaitonsModel";
import {GetAuthorized} from "../../controllers/Core/Authentication";

const Login: React.FC<CheckAuthProps> = ({checkAuth}) => {
  const [usename, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [auth, setAuth] = useState<AuthProps | undefined>();

  const {t} = useTranslation();

  // useEffect(() => {
  //   const authorize = async () => {
  //     if (usename !== "" && password !== "") {
  //       const authorized = await GetAuthorized(usename, password);
  //       setAuth(authorized);
  //     }
  //   };
  //   console.log(auth);
  //   authorize();
  // }, []);

  const handleLogin = async () => {
    if (usename !== "" && password !== "") {
      setAuth(await GetAuthorized(usename, password));
    }
    if (auth) {
      await checkAuth(auth);
      alert(auth.isLoggedIn + "-" + auth.isMode);
    }
  };

  return (
    <div className="login__frame relative flex h-screen w-screen justify-center items-center">
      <div className="w-full flex max-w-screen-xl">
        <div className="flex-1 text-center w-1/2">
          <div className="uppercase mb-7 text-2xl">
            {t(`LoginPage.secondTitle`)}
          </div>
          <img className="mx-auto" src={logo} alt="logo" width={80} />
          <div className="uppercase mt-7 text-2xl logo">
            {t(`General.logo`)}
          </div>
        </div>
        <div className="flex-1 text-center w-1/2">
          <div className="uppercase text-2xl mb-8">
            {t(`LoginPage.firstTitle`)}
          </div>
          <Input
            className="mb-5 w-2/3"
            placeholder={t(`InputPlaceholder.username`)}
            value={usename}
            onChange={(e) => setUsername(e.target.value)}
          />
          <Input
            type="password"
            className="w-2/3"
            placeholder={t(`InputPlaceholder.password`)}
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <div className="w-2/3 text-right mt-3 mx-auto">
            <a
              style={{color: Colors.newgrowth}}
              className="capitalize"
              href="###"
            >
              {t(`LoginPage.forgotMessage`)}
            </a>
          </div>
          <Button
            className="btn mt-3 w-2/3 uppercase"
            variant="default"
            onClick={() => {
              handleLogin();
            }}
          >
            {t(`ButtonLabel.login`)}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Login;
