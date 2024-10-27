import ProductModel from "./ProductModel";
import StoreModel from "./StoreModel";

class EcommerceSystemModel {
  store: StoreModel;
  products: ProductModel[];

  constructor(store: StoreModel, products: ProductModel[]) {
    this.store = store;
    this.products = products;
  }
}

export default EcommerceSystemModel;
