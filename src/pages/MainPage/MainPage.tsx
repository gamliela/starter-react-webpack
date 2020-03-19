import * as React from "react";
import style from "./style.scss";

interface MainPageProps {
  version: string;
}

const MainPage = function(props: MainPageProps) {
  return (
    <div>
      <h1 className={style.header}>Hello World!</h1>
      <span>version: {props.version}</span>
    </div>
  );
};

export { MainPageProps, MainPage };
