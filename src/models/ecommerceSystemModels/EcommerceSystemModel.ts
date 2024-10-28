import InventoryWarehouseModel from "./InventoryWarehouseModel";
import ProductInventoryModel from "./ProductInventoryModel";
import ProductModel from "./ProductModel";
import ProductSpecificationModel from "./ProductSpecificationModel";
import StoreAddressModel from "./StoreAddressModel";
import StoreInventoryModel from "./StoreInventoryModel";
import StoreLocationModel from "./StoreLocationModel";
import StoreModel from "./StoreModel";

class EcommerceSystemModel {
  store: StoreModel;
  products: ProductModel[];
  constructor(store: StoreModel, products: ProductModel[]) {
    this.store = store;
    this.products = products;
  }

  addProduct(products: ProductModel[]) {
    products.forEach((product) => {
      const { id, name, category, price, specifications, inventory } = product;
      this.products.push(
        new ProductModel(id, name, category, price, specifications, inventory)
      );
    });
  }

  removeProduct(id: string) {
    this.products = this.products.filter((product) => product.id !== id);
  }

  updateEcommerceSystem(store: StoreModel, products: ProductModel[]) {
    const { name, locations } = store;
    store.updateStore(name, locations);
    this.products = products;
  }

  getStoreLocations(locations: StoreLocationModel[]): StoreLocationModel[] {
    const storeLocationInstances = locations.map((location) => {
      const { id, address, inventory } = location;
      const { street, city, state, zipCode, coordinates } = address;
      const addressObject = new StoreAddressModel(
        street,
        city,
        state,
        zipCode,
        coordinates
      );
      const { total, categories } = inventory;
      const inventoryObject = new StoreInventoryModel(total, categories);
      const storeLocationObject = new StoreLocationModel(
        id,
        addressObject,
        inventoryObject
      );
      return storeLocationObject;
    });
    return storeLocationInstances;
  }

  getProductInventory(inventory: ProductInventoryModel): ProductInventoryModel {
    const { inStock, quantity, warehouses } = inventory;
    const warehousesInstances = warehouses.map((warehouse) => {
      const { id, quantity } = warehouse;
      return new InventoryWarehouseModel(id, quantity);
    });
    return new ProductInventoryModel(inStock, quantity, warehousesInstances);
  }

  getProductSpecifications(
    specifications: ProductSpecificationModel
  ): ProductSpecificationModel {
    const { display, battery, features, dimensions } = specifications;
    return new ProductSpecificationModel(
      display,
      battery,
      features,
      dimensions
    );
  }

  setStoreData(storeData: StoreModel) {
    const { name, locations } = storeData;
    const storeLocationInstances = this.getStoreLocations(locations);
    this.store = new StoreModel(name, storeLocationInstances);
  }

  setProductsData(products: ProductModel[]) {
    const productsInstances = products.map((product) => {
      const { id, name, category, price, specifications, inventory } = product;
      const productSpecificationsInstance =
        this.getProductSpecifications(specifications);
      const productInventoryInstance = this.getProductInventory(inventory);
      return new ProductModel(
        id,
        name,
        category,
        price,
        productSpecificationsInstance,
        productInventoryInstance
      );
    });
    this.products = productsInstances;
  }
}

export default EcommerceSystemModel;
