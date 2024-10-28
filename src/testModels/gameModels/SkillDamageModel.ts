interface ScalingType {
  strength: number;
  dexterity: number;
}

class SkillDamageModel {
  base: number;
  scaling: ScalingType;

  constructor(base: number, scaling: ScalingType) {
    this.base = base;
    this.scaling = scaling;
  }

  updateSkillDamage(base: number, scaling: ScalingType) {
    this.base = base;
    this.scaling = scaling;
  }
}

export default SkillDamageModel;
