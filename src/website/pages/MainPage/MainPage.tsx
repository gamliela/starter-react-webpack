import * as React from "react";
import { observer } from "mobx-react";
import style from "./style.scss";
import { WebsiteModel } from "../../WebsiteModel";

interface MainPageProps {
  websiteModel: WebsiteModel;
}

const MainPage = observer(function(props: MainPageProps) {
  const websiteModel = props.websiteModel;
  return (
    <div>
      <h1 className={style.header}>Hello World!</h1>
      <span>version: {websiteModel.version}</span>
    </div>
  );
});

export { MainPageProps, MainPage };
