import InventoryWarehouseModel from "./InventoryWarehouseModel";

class ProductInventoryModel {
  inStock: boolean;
  quantity: number;
  warehouses: InventoryWarehouseModel[];

  constructor(
    inStock: boolean,
    quantity: number,
    warehouses: InventoryWarehouseModel[]
  ) {
    this.inStock = inStock;
    this.quantity = quantity;
    this.warehouses = warehouses;
  }
}

export default ProductInventoryModel;
