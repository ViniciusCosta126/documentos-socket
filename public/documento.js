import {
  emitirTextoEditor,
  selecionarDocumento,
} from "./socket-front-documento.js";

const parametros = new URLSearchParams(window.location.search);
const nomeDocumento = parametros.get("nome");

const campoTexto = document.querySelector("#editor-texto");
const tituloDocumento = document.querySelector("#titulo-documento");

tituloDocumento.textContent = nomeDocumento || "Documento sem titulo";
selecionarDocumento(nomeDocumento);

campoTexto.addEventListener("keyup", () => {
  emitirTextoEditor({ texto: campoTexto.value, nomeDocumento });
});

function atualizaTextoEditor(texto) {
  campoTexto.value = texto;
}

export { atualizaTextoEditor };
