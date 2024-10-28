class WeaponEffectModel {
  type: string;
  damage: number;
  duration: string;

  constructor(type: string, damage: number, duration: string) {
    this.type = type;
    this.damage = damage;
    this.duration = duration;
  }

  updateWeaponEffect(type: string, damage: number, duration: string) {
    this.type = type;
    this.damage = damage;
    this.duration = duration;
  }
}

export default WeaponEffectModel;
