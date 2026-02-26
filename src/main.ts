import { SaveProduct } from "./catalog/product/aplication/use-cases/save-product";
import { MongoProductRepository } from "./catalog/product/infrastructure/mongo-product-repository";

async function main() {
  const repository = new MongoProductRepository();
  const saveProduct = new SaveProduct(repository);

  await saveProduct.execute({
    id: "550e8400-e29b-41d4-a716-446655440000",
    name: "Arroz super grande largo",
    baseUnit: "kg",
    presentations: [
      {
        id: "660e8400-e29b-41d4-a716-446655440000",
        name: "Bolsa",
        type: "bag",
        netQuantity: 1,
        measureUnit: "kg",
      },
    ],
  });
}

main().catch(console.error);
