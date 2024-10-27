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
}

export default ProductModel;
