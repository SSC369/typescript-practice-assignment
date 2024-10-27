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

class AttributesModel {
  physical: PhysicalType;
  mental: mentalType;

  constructor(physical: PhysicalType, mental: mentalType) {
    this.physical = physical;
    this.mental = mental;
  }
}

export default AttributesModel;
