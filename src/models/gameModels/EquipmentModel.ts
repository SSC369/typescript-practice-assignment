import ArmorModel from "./ArmorModel";
import WeaponModel from "./WeaponModel";

class EquipmentModel {
  weapon: WeaponModel;
  armor: ArmorModel;

  constructor(weapon: WeaponModel, armor: ArmorModel) {
    this.weapon = weapon;
    this.armor = armor;
  }
}

export default EquipmentModel;
