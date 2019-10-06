import * as React from "react";
import { observer } from "mobx-react";
import style from "./style.scss";
import { AppModel } from "../../AppModel";

interface MainPageProps {
  appModel: AppModel;
}

@observer
class MainPage extends React.Component<MainPageProps> {
  render() {
    const appModel = this.props.appModel;
    return (
      <div>
        <h1 className={style.header}>Hello World!</h1>
        <span>version: {appModel.version}</span>
      </div>
    );
  }
}

export { MainPageProps, MainPage };
