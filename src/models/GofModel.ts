import FieldModel from "./FieldModel";

class GofModel {
  id: string;
  name: string;
  fields: FieldModel[];

  constructor(id: string, name: string, fields: FieldModel[]) {
    this.id = id;
    this.name = name;
    this.fields = fields;
  }
}

export default GofModel;
