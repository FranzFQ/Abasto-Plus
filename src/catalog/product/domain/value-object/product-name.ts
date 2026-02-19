export class ProductName {
  private Value: string;

  constructor(Value: string) {
    this.Value = Value;
  }

  static VerifyName(value: string) {
    if (value.length <= 10) {
      return new ProductName(value);
    } else {
      throw new Error(
        "El nombre del producto no puede tener más de 10 caracteres",
      );
    }
  }
}
