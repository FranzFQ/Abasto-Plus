import { StringValueObject } from "../../../../../shared/domain/value_objects/string-value-object";

export class PresentationName extends StringValueObject {
  constructor(value: string) {
    super(value);
  }
}
