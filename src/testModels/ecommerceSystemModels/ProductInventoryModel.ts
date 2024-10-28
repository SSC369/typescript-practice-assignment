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

  addWarehouse(warehouses: InventoryWarehouseModel[]) {
    warehouses.forEach((warehouse) => {
      const { id, quantity } = warehouse;
      this.warehouses.push(new InventoryWarehouseModel(id, quantity));
    });
  }

  removeWarehouse(id: string) {
    this.warehouses = this.warehouses.filter(
      (warehouse) => warehouse.id !== id
    );
  }

  updateProductInventory(
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
