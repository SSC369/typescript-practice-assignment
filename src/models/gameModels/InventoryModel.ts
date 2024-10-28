import InventoryItemEffectModel from "./InventoryItemEffectModel";
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

  addInventoryItem(
    id: string,
    name: string,
    quantity: number,
    weight: number,
    effects: InventoryItemEffectModel
  ) {
    this.items.push(
      new InventoryItemModel(id, name, quantity, weight, effects)
    );
  }
  removeInventoryItem(id: string) {
    this.items = this.items.filter((item) => item.id !== id);
  }

  updateInventory(
    capacity: number,
    currentWeight: number,
    items: InventoryItemModel[]
  ) {
    this.capacity = capacity;
    this.currentWeight = currentWeight;
    this.items = items;
    // items.forEach((item) => {
    //   const { name, quantity, weight, effects } = item;
    //   item.updateInventoryItem(name, quantity, weight, effects);
    // });
  }
}

export default InventoryModel;
