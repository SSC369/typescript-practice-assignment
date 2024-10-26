import { FieldTypesEnum, FieldValueType } from "../types";

class OverviewModel {
  fieldId: string;
  name: string;
  value: FieldValueType;
  fieldType: FieldTypesEnum;

  constructor(
    fieldId: string,
    name: string,
    value: FieldValueType,
    fieldType: FieldTypesEnum
  ) {
    this.fieldId = fieldId;
    this.name = name;
    this.value = value;
    this.fieldType = fieldType;
  }
}

export default OverviewModel;
