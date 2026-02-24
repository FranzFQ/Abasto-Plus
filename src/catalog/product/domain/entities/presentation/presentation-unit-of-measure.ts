import { EnumValueObject } from "../../../../../shared/domain/value_objects/enum-value-object";

export class PresentationMeasureUnit extends EnumValueObject {
  private static validUnits = ["kg", "lb", "g", "oz", "l", "ml", "unit"];

  constructor(value: string) {
    super(value, PresentationMeasureUnit.validUnits);
  }
}
