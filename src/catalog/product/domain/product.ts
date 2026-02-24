import { ProductId } from "./value-object/product-id";
import { ProductName } from "./value-object/product-name";
import { ProductBaseUnit } from "./value-object/product-base-unit";
import { Presentation } from "./entities/presentation";
import { PresentationList } from "./entities/presentation/presentation-list";
import PresentationInterface from "./entities/presentation/presentation-interface";

export default class Product {
  private ProductId: ProductId;
  private ProductName: ProductName;
  private ProductBaseUnit: ProductBaseUnit;
  private ProductPresentation: PresentationList;

  constructor(
    ProductId: ProductId,
    ProductName: ProductName,
    ProductBaseUnit: ProductBaseUnit,
    ProductPresentation: PresentationList
  ) {
    this.ProductId = ProductId;
    this.ProductName = ProductName;
    this.ProductBaseUnit = ProductBaseUnit;
    this.ProductPresentation = ProductPresentation;
  }

  public static Build(
    id: string,
    name: string,
    baseUnit: string,
    presentations: Array<PresentationInterface>,
  ): Product {
    const NewId = ProductId.VerifyUUID(id);
    const NewName = ProductName.VerifyName(name);
    const NewBaseUnit = ProductBaseUnit.VerifyBaseUnit(baseUnit, "unit");
    return new Product(NewId, NewName, NewBaseUnit, new PresentationList(this.buildPresentations(presentations)));
  }

  private static buildPresentations(
    presentations: Array<PresentationInterface>,
  ): Presentation[] {
    return presentations.map((presentation) => {
      return Presentation.Build(
        presentation.id,
        presentation.name,
        presentation.netQuantity,
        presentation.type,
        presentation.measureUnit,
      );
    });
  }
}
