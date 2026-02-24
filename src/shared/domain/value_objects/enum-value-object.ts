import { ValueObject } from "./value-object";

export class EnumValueObject extends ValueObject<string> {
  private validValues: string[];

  constructor(value: string, validValues: string[]) {
    super(value);
    this.validValues = validValues;
    this.ensureValueIsValid(value);
  }

  private ensureValueIsValid(value: string): void {
    if (!this.validValues.includes(value)) {
      throw new Error(
        `Valor inválido. Debe ser uno de: ${this.validValues.join(", ")}`,
      );
    }
  }
}
