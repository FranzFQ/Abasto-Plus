import { ProductRepository } from "../aplication/product-repository";
import { Product } from "../domain/product";
import "dotenv/config";
import { MongoClient, Db } from "mongodb";

export class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    const uri = process.env.DATABASE || "";
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    const client = new MongoClient(uri);
    await this.Insert(client, data);

    return Promise.resolve();
  }

  private async Insert(client: MongoClient, data: Product): Promise<void> {
    try {
      const db = await this.connect(client);

      const coleccion = db.collection("Products");
      await coleccion.insertOne({
        ProductId: data["ProductId"],
        ProductName: data["ProductName"],
        ProductBaseUnit: data["ProductBaseUnit"],
        ProductPresentation: data["ProductPresentation"].Presentations.map(
          (p) => ({
            Id: p.Id._value,
            Name: p.Name._value,
            Quantity: p.Quantity._value,
            Type: p.Type._value,
            MeasureUnit: p.MeasureUnit._value,
          }),
        ),
      });

      const usuarios = await coleccion.find({}).toArray();
      console.log(usuarios);
    } finally {
      await client.close();
    }
  }

  public async connect(client: MongoClient): Promise<Db> {
    await client.connect();
    console.log("Conectado a MongoDB");
    return client.db("mi_base_de_datos");
  }
}
