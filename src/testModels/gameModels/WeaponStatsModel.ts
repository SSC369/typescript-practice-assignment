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

  addEffect(type: string, damage: number, duration: string) {
    this.effects.push(new WeaponEffectModel(type, damage, duration));
  }

  deleteEffect(type: string) {
    this.effects = this.effects.filter((effect) => effect.type !== type);
  }

  updateWeaponStats(
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
