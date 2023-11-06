import { atualizaDocumento, encontrarDocumento } from "./documentosDB.js";
import io from "./servidor.js";

io.on("connection", (socket) => {
  console.log("Um cliente se conectou ID:", socket.id);

  socket.on("selecionar_documento", async (nomeDocumento, devolveTexto) => {
    socket.join(nomeDocumento);

    const documento = await encontrarDocumento(nomeDocumento);

    if (documento) {
      devolveTexto(documento.texto);
    }
  });

  socket.on("texto_editor", async ({ texto, nomeDocumento }) => {
    const atualizacao = await atualizaDocumento(nomeDocumento, texto);
    if (atualizacao.modifiedCount) {
      socket.to(nomeDocumento).emit("texto_editor_cliente", texto);
    }
  });
});
