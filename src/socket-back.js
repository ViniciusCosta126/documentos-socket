import io from "./servidor.js";

const documentos = [
  {
    nome: "JavaScript",
    texto: "texto de javascript",
  },
  {
    nome: "Node",
    texto: "texto de Node",
  },
  {
    nome: "Socket.io",
    texto: "texto de socket.io",
  },
];

io.on("connection", (socket) => {
  console.log("Um cliente se conectou ID:", socket.id);

  socket.on("selecionar_documento", (nomeDocumento, devolveTexto) => {
    socket.join(nomeDocumento);

    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      devolveTexto(documento.texto);
    }
  });

  socket.on("texto_editor", ({ texto, nomeDocumento }) => {
    const documento = encontrarDocumento(nomeDocumento);

    if (documento) {
      documento.texto = texto;
      socket.to(nomeDocumento).emit("texto_editor_cliente", texto);
    }
  });
});

function encontrarDocumento(nome) {
  const documento = documentos.find((documento) => {
    return documento.nome === nome;
  });
  return documento;
}
