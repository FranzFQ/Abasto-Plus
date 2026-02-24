import { PresentationId } from "./presentation/presentation-id";
import { PresentationName } from "./presentation/presentation-name";
import { PresentationQuantity } from "./presentation/presentation-net-quantity";
import { PresentationType } from "./presentation/presentation-type";
import { PresentationMeasureUnit } from "./presentation/presentation-unit-of-measure";

export class Presentation {
  public Id: PresentationId;
  public Name: PresentationName;
  public Quantity: PresentationQuantity;
  public Type: PresentationType;
  public MeasureUnit: PresentationMeasureUnit;

  constructor(
    id: PresentationId,
    name: PresentationName,
    quantity: PresentationQuantity,
    type: PresentationType,
    measureUnit: PresentationMeasureUnit,
  ) {
    this.Id = id;
    this.Name = name;
    this.Quantity = quantity;
    this.Type = type;
    this.MeasureUnit = measureUnit;
  }

  public static Build(
    id: string,
    name: string,
    quantity: number,
    type: string,
    measureUnit: string,
  ): Presentation {
    return new Presentation(
      new PresentationId(id),
      new PresentationName(name),
      new PresentationQuantity(quantity),
      new PresentationType(type),
      new PresentationMeasureUnit(measureUnit),
    );
  }
}
