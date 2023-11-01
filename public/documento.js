const socket = io();

const campoTexto = document.querySelector("#editor-texto");

campoTexto.addEventListener("keyup",()=>{
    socket.emit("texto_editor",campoTexto.value);
});

socket.on("texto_editor_cliente",(texto)=>{
    campoTexto.value = texto;
});