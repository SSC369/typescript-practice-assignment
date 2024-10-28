interface EquipmentArmorType {
  id: string;
  defense: number;
  weight: number;
}

class ArmorModel {
  head: EquipmentArmorType;
  chest: EquipmentArmorType;
  legs: EquipmentArmorType;

  constructor(
    head: EquipmentArmorType,
    chest: EquipmentArmorType,
    legs: EquipmentArmorType
  ) {
    this.head = head;
    this.chest = chest;
    this.legs = legs;
  }

  updateArmor(
    head: EquipmentArmorType,
    chest: EquipmentArmorType,
    legs: EquipmentArmorType
  ) {
    this.head = head;
    this.chest = chest;
    this.legs = legs;
  }
}

export default ArmorModel;
