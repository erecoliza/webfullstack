const usuarios = [
    ['Agustin', '23', 'Profesor'],
    ['Oriana', '31', 'Enfermera'],
    ['Martina', '19', 'Mecanica'],
    ['Omar', '27', 'Soldado'],
]

function callback(acumulador, usuario) {
    const nombre = usuario[0];
    const edad = usuario[1];
    const profesion = usuario[2];

    return {
        nombres: [...acumulador.nombres, nombre],
        edades: [...acumulador.edades, edad],
        profesiones: [...acumulador.profesiones, profesion]
    }
}

const usuariosReducidos = usuarios.reduce(callback, { nombres: [], edades: [], profesiones: [] });

console.log(usuariosReducidos);

const usuarios = [
    ['Agustin', 23, 'Profesor'],
    ['Oriana', 31, 'Enfermera'],
    ['Martina', 19, 'Mecanica'],
    ['Omar', 27, 'Soldado'],
]

function callback(acumulador, usuario, index, array) {

    const edad = usuario[1];

    return (acumulador + edad);
}

const usuariosReducidos = (usuarios.reduce(callback, 0)) / usuarios.length;

console.log(usuariosReducidos);

function crearContador() {
    let contador = 0;
    console.log('Contador de crearContador', contador);

    return function incrementar() {
        // console.log('Contador previo a incrementar', contador);

        contador = contador + 1;

        console.log('Contador incrementado', contador);
    }
}

const contador1 = crearContador();

contador1();
contador1();
contador1();

console.log('--------------');

const contador2 = crearContador();

contador2();
contador2();
contador2();

function crearImpresoraDeMensajes(tipo, estilos) {

    return function imprimirMensaje(mensaje) {
        console.log(`%c ${tipo}: ${mensaje}`, estilos);
    }
}

const imprimirError = crearImpresoraDeMensajes('Error', 'background: red; color: white; padding: 1rem;');
const imprimirWarning = crearImpresoraDeMensajes('Warning', 'background: yellow; color: black');
const imprimirExito = crearImpresoraDeMensajes('Exito', 'background: green; color: white');

imprimirError('Su conexion es baja')
imprimirError('El servidor esta dado de baja')
imprimirError('Su consulta no esta disponible en este momento')

imprimirWarning('Atencion! Su suscripcion va a caducar')

imprimirExito('El mail ha sido enviado correctamente')


const array = [1, 2, 3]
const string = 'hola'
const string2 = new String('Adios')

console.log(array);
console.log(string.length);
console.log(string2);

// Función constructora
class Jedi {
    constructor(nombre, color) {
        this.arma = 'Sable de Luz';
        this.colorDelSable = color;
        this.poder = 'La fuerza';
        this.nombre = nombre;
        this.hablar = function () {
            console.log('Que la fuerza te acompane');
        };
    }
}
  
  // Creación de instancias
  let yoda = new Jedi('Yoda', 'Verde');
  let obiWan = new Jedi('Obi Wan', 'Azul');
  yoda.hablar();
  
  // Imprimimos en la consola
  console.log(yoda)
  console.log(obiWan)