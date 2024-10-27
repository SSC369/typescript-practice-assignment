import WeaponEffectModel from "./WeaponEffectModel";

class WeaponStatsModel {
  damage: number;
  durability: number;
  effects: WeaponEffectModel[];

  constructor(
    damage: number,
    durability: number,
    effects: WeaponEffectModel[]
  ) {
    this.damage = damage;
    this.durability = durability;
    this.effects = effects;
  }
}

export default WeaponStatsModel;
