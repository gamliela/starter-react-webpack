import {observable} from "mobx";

class AppModel {
  @observable version: string = '1.0.0';
}

export {AppModel};
