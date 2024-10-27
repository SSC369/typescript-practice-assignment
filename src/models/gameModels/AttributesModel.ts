interface PhysicalType {
  strength: number;
  dexterity: number;
  constitution: number;
}

interface MentalType {
  intelligence: number;
  wisdom: number;
  charisma: number;
}

class AttributesModel {
  physical: PhysicalType;
  mental: MentalType;

  constructor(physical: PhysicalType, mental: MentalType) {
    this.physical = physical;
    this.mental = mental;
  }
}

export default AttributesModel;
