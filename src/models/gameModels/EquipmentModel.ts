import ArmorModel from "./ArmorModel";
import WeaponModel from "./WeaponModel";

class EquipmentModel {
  weapon: WeaponModel;
  armor: ArmorModel;

  constructor(weapon: WeaponModel, armor: ArmorModel) {
    this.weapon = weapon;
    this.armor = armor;
  }

  updateEquipment(weapon: WeaponModel, armor: ArmorModel) {
    const { name, stats } = weapon;
    weapon.updateWeapon(name, stats);

    const { head, chest, legs } = armor;
    armor.updateArmor(head, chest, legs);
  }
}

export default EquipmentModel;
