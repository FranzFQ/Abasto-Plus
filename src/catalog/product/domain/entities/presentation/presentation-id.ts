import { IdentifierValueObject } from "../../../../../shared/domain/value_objects/identifier-value-object";

export class PresentationId extends IdentifierValueObject {
  constructor(value: string) {
    super(value);
  }
}
