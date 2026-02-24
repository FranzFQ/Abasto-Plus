import { IntValueObject } from "../../../../../shared/domain/value_objects/int-value-object";

export class PresentationQuantity extends IntValueObject {
  constructor(value: number) {
    super(value);
  }
}
