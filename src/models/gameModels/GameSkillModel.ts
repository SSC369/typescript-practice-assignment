interface GameSkillDamageType {
  base: number;
  scaling: {
    strength: number;
    dexterity: number;
  };
}

class GameSkillModel {
  id: string;
  name: string;
  level: number;
  damage: GameSkillDamageType;
  cooldown: string;

  constructor(
    id: string,
    name: string,
    level: number,
    damage: GameSkillDamageType,
    cooldown: string
  ) {
    this.id = id;
    this.name = name;
    this.level = level;
    this.damage = damage;
    this.cooldown = cooldown;
  }
}

export default GameSkillModel;
