import InventoryItemModel from "./InventoryItemModel";

class InventoryModel {
  capacity: number;
  currentWeight: number;
  items: InventoryItemModel[];

  constructor(
    capacity: number,
    currentWeight: number,
    items: InventoryItemModel[]
  ) {
    this.capacity = capacity;
    this.currentWeight = currentWeight;
    this.items = items;
  }
}

export default InventoryModel;
