import * as React from "react";
import * as ReactDOM from "react-dom";
import {AppManager} from "./AppManager";
import MainPage from "./pages/MainPage/index";

// create our app manager
const appManager: AppManager = new AppManager();

ReactDOM.render(
  <MainPage appManager={appManager}/>,
  document.getElementById('app-root'));
