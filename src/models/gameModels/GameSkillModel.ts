import SkillDamageModel from "./SkillDamageModel";

class GameSkillModel {
  id: string;
  name: string;
  level: number;
  damage: SkillDamageModel;
  cooldown: string;

  constructor(
    id: string,
    name: string,
    level: number,
    damage: SkillDamageModel,
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
