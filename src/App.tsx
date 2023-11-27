import React from "react";
import "../src/i18n";
import Button from "./components/master-components/Button";
import {PieChart} from "lucide-react";
import {Colors} from "./components/common/commons";
import Input from "./components/master-components/Input";
import Content from "./components/views/Contents/Content";
import Header from "./components/views/Header/Header";

const App = () => {
  return (
    // <Header />
    // <Content />

    <div>
      <h1>Hello World!</h1>
      {/*master button element*/}
      <Button variant="default">Hello Button</Button>
      {/*master button element*/}
      <Button variant="icon" type="submit" className="bg-transparent">
        {/*icon library*/}
        <PieChart color={Colors.green} />
      </Button>
      {/*master button element*/}
      <Input className="bg-slate-400" />
      {/*master button element*/}
      <Input variant="secondary" />
    </div>
  );
};

export default App;
