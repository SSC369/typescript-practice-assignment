import InventoryItemEffectModel from "./InventoryItemEffectModel";

class InventoryItemModel {
  id: string;
  name: string;
  quantity: number;
  weight: number;
  effects: InventoryItemEffectModel;

  constructor(
    id: string,
    name: string,
    quantity: number,
    weight: number,
    effects: InventoryItemEffectModel
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.weight = weight;
    this.effects = effects;
  }
}

export default InventoryItemModel;
