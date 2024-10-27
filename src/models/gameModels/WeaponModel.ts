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
}

export default WeaponModel;
