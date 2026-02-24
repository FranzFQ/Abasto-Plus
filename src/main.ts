import { MongoClient, Db } from "mongodb";

const uri = "mongodb+srv://Memo:w366wb2Sb9twGrHC@abasto-plus.hkvjwna.mongodb.net/?appName=abasto-plus"; // o tu connection string
const client = new MongoClient(uri);

async function connect(): Promise<Db> {
  await client.connect();
  console.log("Conectado a MongoDB");
  return client.db("mi_base_de_datos");
}

async function main() {
  try {
    const db = await connect();

    const coleccion = db.collection("usuarios");
    await coleccion.insertOne({ nombre: "Juan", edad: 30 });

    const usuarios = await coleccion.find({}).toArray();
    console.log(usuarios);
  } finally {
    await client.close();
  }
}

main();