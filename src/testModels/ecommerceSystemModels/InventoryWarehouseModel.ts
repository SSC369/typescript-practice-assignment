class InventoryWarehouseModel {
  id: string;
  quantity: number;

  constructor(id: string, quantity: number) {
    this.id = id;
    this.quantity = quantity;
  }

  updateInventoryWareHouse(id: string, quantity: number) {
    this.id = id;
    this.quantity = quantity;
  }
}

export default InventoryWarehouseModel;
