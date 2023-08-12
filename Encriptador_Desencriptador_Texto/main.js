function encriptar(){
    var texto = document.getElementById("text-area").value.toLowerCase();
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parrafo = document.getElementById("parrafo");
    var munheco = document.getElementById("munheco");



    var textCifrado = texto.replace(/e/gi, "enter");
    var textCifrado = textCifrado.replace(/i/gi, "imes");
    var textCifrado = textCifrado.replace(/a/gi, "ai");
    var textCifrado = textCifrado.replace(/o/gi, "ober");
    var textCifrado = textCifrado.replace(/u/gi, "ufat");

    if (texto.length != 0){ 
        document.getElementById("text-area").value = textCifrado;
        tituloMensaje.textContent = "Texto encriptado con exito";
        parrafo.textContent = " ";
        munheco.src = "./img/ok.jpg"
    } else {
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }

    
    document.getElementById("copy").style.display = "show";
    document.getElementById("copy").style.display = "inherit"
}

function copiar(){
    var contenido = document.querySelector("#text-area");
    contenido.select();
    document.execCommand("cut");
    alert("Copiado con exito");
}

function desencriptar(){
    var texto = document.getElementById("text-area").value.toLowerCase();
    var tituloMensaje = document.getElementById("titulo-mensaje");
    var parrafo = document.getElementById("parrafo");
    var munheco = document.getElementById("munheco");

    var textCifrado = texto.replace(/enter/gi, "e");
    var textCifrado = textCifrado.replace(/imes/gi, "i");
    var textCifrado = textCifrado.replace(/ai/gi, "a");
    var textCifrado = textCifrado.replace(/ober/gi, "o");
    var textCifrado = textCifrado.replace(/ufat/gi, "u");

    if(texto.length != 0){
        document.getElementById("text-area").value = textCifrado;
        tituloMensaje.textContent = "Texto desencriptado con exito";
        parrafo.textContent = " ";
        munheco.src = "./img/ok.jpg"
    } else {
        tituloMensaje.textContent = "Ningun mensaje fue encontrado";
        parrafo.textContent = "Ingresa el texto que desees encriptar o desencriptar";
        alert("Debes ingresar algun texto");
    }

}