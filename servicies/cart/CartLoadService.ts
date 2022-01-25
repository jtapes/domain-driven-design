import { CartLoadQuery } from "../../domain/cart/ports/in/CartLoadQuery";
import { CartLoadAdapter } from "../../adapters/card/CartLoadAdapter";

export class CartLoadService implements CartLoadQuery {
  cartLoadPort = new CartLoadAdapter();

  load() {
    return this.cartLoadPort.load();
  }
}
