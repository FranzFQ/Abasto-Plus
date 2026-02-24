import { ProductRepository } from "../aplication/product-repository";
import { Product } from "../domain/product";
import {MongoClient, Db} from "mongodb";

export class MongoProductRepository implements ProductRepository {
  async save(data: Product): Promise<void> {
    const uri = "mongodb+srv://quemejavi_db_user:JD49veU4A7hrmxDh@abasto-plus.rx4w2j6.mongodb.net/?appName=Abasto-Plus"; // o tu connection string
    const client = new MongoClient(uri);
    console.log("Saving product to MongoDB:", client);
  }
}
