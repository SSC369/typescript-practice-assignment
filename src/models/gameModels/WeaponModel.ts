import WeaponStatsModel from "./WeaponStatsModel";

class WeaponModel {
  id: string;
  name: string;
  stats: WeaponStatsModel;

  constructor(id: string, name: string, stats: WeaponStatsModel) {
    this.id = id;
    this.name = name;
    this.stats = stats;
  }

  updateWeapon(name: string, stats: WeaponStatsModel) {
    this.name = name;
    const { damage, durability, effects } = stats;
    stats.updateWeaponStats(damage, durability, effects);
  }
}

export default WeaponModel;
