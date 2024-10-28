import ProductInventoryModel from "./ProductInventoryModel";
import ProductSpecificationModel from "./ProductSpecificationModel";

class ProductModel {
  id: string;
  name: string;
  category: string;
  price: number;
  specifications: ProductSpecificationModel;
  inventory: ProductInventoryModel;
  constructor(
    id: string,
    name: string,
    category: string,
    price: number,
    specifications: ProductSpecificationModel,
    inventory: ProductInventoryModel
  ) {
    this.id = id;
    this.name = name;
    this.category = category;
    this.price = price;
    this.specifications = specifications;
    this.inventory = inventory;
  }

  updateProductModel(
    name: string,
    category: string,
    price: number,
    specifications: ProductSpecificationModel,
    inventory: ProductInventoryModel
  ) {
    this.name = name;
    this.category = category;
    this.price = price;
    const { display, battery, features, dimensions } = specifications;
    specifications.updateProductSpecifications(
      display,
      battery,
      features,
      dimensions
    );

    const { inStock, quantity, warehouses } = inventory;
    inventory.updateProductInventory(inStock, quantity, warehouses);
  }
}

export default ProductModel;
