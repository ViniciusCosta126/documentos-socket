import { MongoClient } from "mongodb";

const cliente = new MongoClient(
  "mongodb+srv://admin:admin123@docscluster.8schgxv.mongodb.net/?retryWrites=true&w=majority"
);
let documentosColecao;
try {
  await cliente.connect();
  const db = cliente.db("docs-websockets");
  documentosColecao = db.collection("documentos");

  console.log("Conectado ao banco de dados com sucesso");
} catch (error) {
  console.log(error);
}

export { documentosColecao };
