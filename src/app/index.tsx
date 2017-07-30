import * as React from "react";
import * as ReactDOM from "react-dom";
import {useStrict} from "mobx";
import {AppManager} from "./AppManager";
import App from "./App";

// mobx configuration
useStrict(true);

// create our app manager
const appManager: AppManager = new AppManager();

ReactDOM.render(
    <App appManager={appManager}/>,
    document.getElementById('app-root'));
