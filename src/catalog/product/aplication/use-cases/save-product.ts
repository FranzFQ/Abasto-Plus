import { ProductRepository } from "../product-repository";
import { Product } from "../../domain/product";
import PresentationInterface from "../../domain/entities/presentation/presentation-interface";

interface SaveProductRequest {
  id: string;
  name: string;
  baseUnit: string;
  presentations: Array<PresentationInterface>;
}

export class SaveProduct {
  constructor(private readonly repository: ProductRepository) {}

  async execute(request: SaveProductRequest): Promise<void> {
    const product = Product.Build(
      request.id,
      request.name,
      request.baseUnit,
      request.presentations,
    );

    await this.repository.save(product);
  }
}
