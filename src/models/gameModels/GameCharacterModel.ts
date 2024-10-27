import AttributesModel from "./AttributesModel";
import EquipmentModel from "./EquipmentModel";
import GameSkillModel from "./GameSkillModel";
import InventoryModel from "./InventoryModel";

interface BasicType {
  name: string;
  class: string;
  level: number;
  experience: number;
}

class GameCharacterModel {
  id: string;
  basic: BasicType;
  attributes: AttributesModel;
  equipment: EquipmentModel;
  inventory: InventoryModel;
  skills: GameSkillModel[];

  constructor(
    id: string,
    basic: BasicType,
    attributes: AttributesModel,
    equipment: EquipmentModel,
    inventory: InventoryModel,
    skills: GameSkillModel[]
  ) {
    this.id = id;
    this.basic = basic;
    this.attributes = attributes;
    this.equipment = equipment;
    this.inventory = inventory;
    this.skills = skills;
  }
}

export default GameCharacterModel;
