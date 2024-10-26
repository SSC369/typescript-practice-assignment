interface InventoryEffectType {
  type: string;
  value: number;
  duration: string;
}

class InventoryItemModel {
  id: string;
  name: string;
  quantity: number;
  weight: number;
  effects: InventoryEffectType;

  constructor(
    id: string,
    name: string,
    quantity: number,
    weight: number,
    effects: InventoryEffectType
  ) {
    this.id = id;
    this.name = name;
    this.quantity = quantity;
    this.weight = weight;
    this.effects = effects;
  }
}

export default InventoryItemModel;
