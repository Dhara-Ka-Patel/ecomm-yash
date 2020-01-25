import { action, computed, observable } from "mobx";
import { RootStore } from "./RootStore";
import { ILoggerService } from "@ifaces/ILoggerService";

export class ProductStore {
  @observable
  private _selectedProducts: any[] = [];

  private rootStore: RootStore;
  private logger: ILoggerService;

  constructor(rootStore: RootStore, logger: ILoggerService) {
    this.rootStore = rootStore;
    this.logger = logger;
  }

  @computed
  public get selectedProducts() {
    return this._selectedProducts;
  }

  @action
  public toggleProductInList(key: string) {
    const all = this._selectedProducts.slice();

    const i = all.findIndex((product: string) => product === key);

    if (i > -1) {
      all.splice(i, 1);
    } else {
      all.push(key);
    }
    this._selectedProducts = all;
  }
}
