class EnumValueObject extends ValueObject<string> {
  constructor(
    value: string,
    private readonly validValues: string[],
  ) {
    super(value);
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
