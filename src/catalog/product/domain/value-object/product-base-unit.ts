export class ProductBaseUnit {
  private Value: number;
  private Unit: string;

  constructor(Value: number, Unit: string) {
    this.Value = Value;
    this.Unit = Unit;
  }

  static VerifyBaseUnit(value: string, unit: string) {
    const units = ["kg", "g", "lb", "ml", "lt", "unit"];
    if (units.includes(unit)) {
      return new ProductBaseUnit(parseFloat(value), unit);
    } else {
      throw new Error("La unidad de medida no es válida");
    }
  }
}
