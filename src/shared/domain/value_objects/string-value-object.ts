import {ValueObject} from "./value-object"

class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsString(value);
  }

  private ensureValueIsString(value: string): void {
    if (!Number.isInteger(value)) {
      throw new Error("El valor debe ser un número entero");
    }
  }
}
