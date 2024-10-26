import InventoryWarehouseModel from "./InventoryWarehouseModel";
import StoreLocationModel from "./StoreLocationModel";

interface StoreType {
  name: string;
  locations: StoreLocationModel[];
}

interface ProductInventory {
  inStock: boolean;
  quantity: number;
  warehouses: InventoryWarehouseModel[];
}

interface ProductSpecificationsDimensionsType {
  width: number;
  height: number;
  depth: number;
}

interface ProductSpecifications {
  display: string;
  battery: string;
  features: string[];
  dimensions: ProductSpecificationsDimensionsType;
}

interface ProductType {
  id: string;
  name: string;
  category: string;
  price: number;
  specifications: ProductSpecifications;
  inventory: ProductInventory;
}

class EcommerceSystemModel {
  store: StoreType;
  products: ProductType[];

  constructor(store: StoreType, products: ProductType[]) {
    this.store = store;
    this.products = products;
  }
}

export default EcommerceSystemModel;
