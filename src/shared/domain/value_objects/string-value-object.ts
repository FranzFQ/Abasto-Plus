import { ValueObject } from "./value-object";

export class StringValueObject extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.ensureValueIsString(value);
  }

  private ensureValueIsString(value: string): void {
    if (typeof value !== "string") {
      throw new Error("El valor debe ser un string");
    }
  }
}
