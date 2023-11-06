import express from "express";
import url from "url";
import path from "path";
import http from "http";
import { Server } from "socket.io";
import "./dbConnect.js";
const app = express();
const PORT = 3001;

const caminhoAtual = url.fileURLToPath(import.meta.url);
const diretorioPublico = path.join(caminhoAtual, "../..", "public");

app.use(express.static(diretorioPublico));

const servidorHttp = http.createServer(app);

servidorHttp.listen(PORT, () => {
  console.log(`Servidor escutando na porta ${PORT}`);
});

const io = new Server(servidorHttp);

export default io;
