
function verificarTexto() {
    var texto = entrada.value;
    for (i=0;i<texto.length;i++){
        if (texto.charCodeAt(i) == 32 ||
            texto.charCodeAt(i) == 164 ||
            (texto.charCodeAt(i) >= 97 &&
            texto.charCodeAt(i) <= 122)){
            // Texto válido
            textoValido=true;
        } else {
           textoValido= false;
           break;
        }
    }
    return textoValido;
}

function funcionEncriptar() {
    var texto = entrada.value
    var textoEncriptado = "";  

    /* 
    e = "enter"
    i = "imes"
    a = "ai"
    o = "ober"
    u = "ufat"
    */

    if (verificarTexto()) {
        textoEncriptado = texto.replace(/a|e|i|o|u/gi, function (x) {
            switch (x) {
                case "a":
                    return "ai";                    
                    break;
                case "e":
                    return "enter";
                    break;                   
                case "i":
                    return "imes";
                    break;
                case "o": 
                    return "ober";            
                    break;
                case "u":
                    return "ufat";
                    break;
                default:
                    return x;   
            }
        });

        salida.value = textoEncriptado;

    } else {
        swal("Error al Encriptar", "Solo se perminte letras minusculas y sin acento", "error");                
    }
}

function funcionDesencriptar() {
    var texto = entrada.value
    var textoDesencriptado = "";
    
    if (verificarTexto()) {
        textoDesencriptado = texto.replace(/ai|enter|imes|ober|ufat/gi, function (x) {
            switch (x) {
                case "ai":
                    return "a";                    
                    break;
                case "enter":
                    return "e";
                    break;                   
                case "imes":
                    return "i";
                    break;
                case "ober": 
                    return "o";            
                    break;
                case "ufat":
                    return "u";
                    break;
                default:
                    return x;   
            }
        });

        salida.value = textoDesencriptado;

    } else {
        swal("Error al Desencriptar", "Solo se perminte letras minusculas y sin acento", "error");
    }
}

function funcioncopiar(){
    entrada.value = salida.value;
    salida.value = ""
}

function funcionBlanquear() {
    mensaje.value = "";
    salida.value = "";
}

var entrada = document.querySelector("#textoIngresado");
var salida = document.querySelector("#textoEncriptado");
var mensaje = document.querySelector("#mensaje");
var encriptar = document.querySelector("#encriptar");
var desencriptar = document.querySelector("#desencriptar");
var copiar = document.querySelector("#copiar");

encriptar.onclick = funcionEncriptar;
desencriptar.onclick = funcionDesencriptar;
copiar.onclick = funcioncopiar;
entrada.onfocus = funcionBlanquear;

entrada.focus();
entrada.value="";
entrada.focus();
