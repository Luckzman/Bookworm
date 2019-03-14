import React, { Fragment } from "react";
import { Route } from "react-router-dom";
import HomePage from "./component/page/HomePage";
import LoginPage from "./component/page/LoginPage";

const App = () => {
  return (
    <Fragment>
      <Route path="/" exact component={HomePage} />
      <Route path="/login" exact component={LoginPage} />
    </Fragment>
  );
};

export default App;
