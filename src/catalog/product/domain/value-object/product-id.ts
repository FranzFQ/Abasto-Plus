export class ProductId {
  private Value: string;

  constructor(Value: string) {
    this.Value = Value;
  }

  static VerifyUUID(value: string) {
    const uuidRegex =
      /^[0-9a-f]{8}-[0-9a-f]{4}-[0-4][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;
    if (!uuidRegex.test(value)) {
      throw new Error("El valor no es un UUID válido");
    }
    return new ProductId(value);
  }
}
