import { ProductRepository } from "../aplication/product-repository";
import { Product } from "../domain/product";
import {MongoClient, Db} from "mongodb";

export class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    const uri = process.env.DB_MONGO || "";
    if (!uri) {
      throw new Error("MongoDB URI is not defined in environment variables");
    }
    const client = new MongoClient(uri);
    await this.Insert(client, data)

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
      ProductPresentation: {
        Id: data["ProductPresentation"].Presentations[0],
        Name: data["ProductPresentation"].Presentations[1],
        Quantity: data["ProductPresentation"].Presentations[2],
        Type: data["ProductPresentation"].Presentations[3],
        MeasureUnit: data["ProductPresentation"].Presentations[4],
      },
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
