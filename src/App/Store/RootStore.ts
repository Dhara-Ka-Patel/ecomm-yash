import { AuthStore } from "./AuthStore/AuthStore";
import { ILoggerService } from "@ifaces/ILoggerService";
import { ProductStore } from "./ProductStore";

export class RootStore {
  public authStore: AuthStore;
  public productStore: ProductStore;
  private logger: ILoggerService;

  constructor(logger: ILoggerService) {
    this.logger = logger;
    this.authStore = new AuthStore(this, logger);
    this.productStore = new ProductStore(this, logger);
  }
}
