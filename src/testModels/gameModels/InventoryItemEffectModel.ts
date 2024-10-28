class InventoryItemEffectModel {
  type: string;
  value: number;
  duration: string;
  constructor(type: string, value: number, duration: string) {
    this.type = type;
    this.value = value;
    this.duration = duration;
  }

  updateInventoryItemEffect(type: string, value: number, duration: string) {
    this.type = type;
    this.value = value;
    this.duration = duration;
  }
}

export default InventoryItemEffectModel;
