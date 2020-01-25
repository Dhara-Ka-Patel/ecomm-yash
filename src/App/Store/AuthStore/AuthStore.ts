import { action, computed, observable } from "mobx";
import { RootStore } from "../RootStore";
import { AuthAPIService } from "src/App/APIServices/AuthAPIService";
import { ILoggerService } from "@ifaces/ILoggerService";
import { get } from "lodash";

export class AuthStore {
  @observable
  public isAuthenticated: boolean = false; // false

  @observable
  public _me: any = null;

  private rootStore: RootStore;
  private logger: ILoggerService;

  constructor(rootStore: RootStore, logger: ILoggerService) {
    this.rootStore = rootStore;
    this.logger = logger;
  }

  @computed
  public get me() {
    return this._me;
  }

  @action
  public async isLoggedin() {
    return true;
  }
}
