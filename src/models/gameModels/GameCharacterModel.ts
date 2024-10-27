import ArmorModel from "./ArmorModel";
import AttributesModel from "./AttributesModel";
import EquipmentModel from "./EquipmentModel";
import GameSkillModel from "./GameSkillModel";
import InventoryItemEffectModel from "./InventoryItemEffectModel";
import InventoryItemModel from "./InventoryItemModel";
import InventoryModel from "./InventoryModel";
import SkillDamageModel from "./SkillDamageModel";
import WeaponEffectModel from "./WeaponEffectModel";
import WeaponModel from "./WeaponModel";
import WeaponStatsModel from "./WeaponStatsModel";

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

  getAttributes(attributes: AttributesModel) {
    const { physical, mental } = attributes;
    return new AttributesModel(physical, mental);
  }

  getWeaponStats(stats: WeaponStatsModel) {
    const { damage, durability, effects } = stats;
    const effectInstances = effects.map((effect) => {
      const { type, damage, duration } = effect;
      return new WeaponEffectModel(type, damage, duration);
    });
    return new WeaponStatsModel(damage, durability, effectInstances);
  }

  getWeapon(weapon: WeaponModel) {
    const { id, name, stats } = weapon;
    const weaponStatsInstance = this.getWeaponStats(stats);
    return new WeaponModel(id, name, weaponStatsInstance);
  }

  getEquipment(equipment: EquipmentModel) {
    const { weapon, armor } = equipment;
    const weaponInstance = this.getWeapon(weapon);
    const { head, chest, legs } = armor;
    const armorInstance = new ArmorModel(head, chest, legs);
    return new EquipmentModel(weaponInstance, armorInstance);
  }

  getInventoryInstance(inventory: InventoryModel) {
    const { capacity, currentWeight, items } = inventory;
    const itemsInstances = items.map((item) => {
      const { id, name, quantity, weight, effects } = item;
      const { type, value, duration } = effects;
      const effectsInstance = new InventoryItemEffectModel(
        type,
        value,
        duration
      );
      return new InventoryItemModel(
        id,
        name,
        quantity,
        weight,
        effectsInstance
      );
    });
    return new InventoryModel(capacity, currentWeight, itemsInstances);
  }

  getCharacterSkills(skills: GameSkillModel[]) {
    const skillInstances = skills.map((skill) => {
      const { id, name, level, damage, cooldown } = skill;
      const { base, scaling } = damage;
      const skillDamageInstance = new SkillDamageModel(base, scaling);
      return new GameSkillModel(id, name, level, skillDamageInstance, cooldown);
    });
    return skillInstances;
  }

  setGameCharacterModal(gameCharacterData: GameCharacterModel) {
    const { id, basic, attributes, equipment, inventory, skills } =
      gameCharacterData;
    const attributeInstances = this.getAttributes(attributes);
    const equipmentInstance = this.getEquipment(equipment);
    const inventoryInstance = this.getInventoryInstance(inventory);
    const skillsInstances = this.getCharacterSkills(skills);

    this.id = id;
    this.basic = basic;
    this.attributes = attributeInstances;
    this.equipment = equipmentInstance;
    this.inventory = inventoryInstance;
    this.skills = skillsInstances;
  }
}

export default GameCharacterModel;
