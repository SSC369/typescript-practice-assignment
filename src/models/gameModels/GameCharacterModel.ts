import GameSkillModel from "./GameSkillModel";
import InventoryItemModel from "./InventoryItemModel";
import WeaponEffectModel from "./WeaponEffectModel";

interface BasicType {
  name: string;
  class: string;
  level: number;
  experience: number;
}

interface PhysicalType {
  strength: number;
  dexterity: number;
  constitution: number;
}

interface mentalType {
  intelligence: number;
  wisdom: number;
  charisma: number;
}

interface AttributesType {
  physical: PhysicalType;
  mental: mentalType;
}

interface WeaponStats {
  damage: number;
  durability: number;
  effects: WeaponEffectModel[];
}

interface EquipmentArmorType {
  id: string;
  defense: number;
  weight: number;
}
interface EquipmentType {
  weapon: {
    id: string;
    name: string;
    stats: WeaponStats;
  };
  armor: {
    head: EquipmentArmorType;
    chest: EquipmentArmorType;
    legs: EquipmentArmorType;
  };
}

interface InventoryType {
  capacity: number;
  currentWeight: number;
  items: InventoryItemModel[];
}

class GameCharacterModel {
  id: string;
  basic: BasicType;
  attributes: AttributesType;
  equipment: EquipmentType;
  inventory: InventoryType;
  skills: GameSkillModel[];

  constructor(
    id: string,
    basic: BasicType,
    attributes: AttributesType,
    equipment: EquipmentType,
    inventory: InventoryType,
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
