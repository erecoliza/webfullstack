// Stack y Heap (cómo inpactan los cambios en valores compuestos creados
// a partir de otros valores compuestos)
const usuario = {
    name: 'Aaron',
    id: 1,
}

const usuario2 = usuario;

console.log(usuario);
console.log(usuario2);

usuario2.name = "Pedro";

console.log(usuario);
console.log(usuario2);

// Objetos
const user1 = {
    nombre: 'Sherlock Holmes',
    edad: 60,
    genero: 'Masculino',
    intereses: ['Violin', 'Boxeo'],

    saludo: function () {
        console.log('Hola, soy ' + this.nombre + '.')
    }
}
// Por nombre en formato string
console.log(user1['edad']);
// Por notación de punto
console.log(user1.edad);

const user = {
    name: 'Pedro',
    age: 20,
    email: 'pedro@gmail.com',
    login: function () {
        console.log('El usuario se ha logeado');
    },
    logout: function () {
        console.log('El usuario se ha deslogeado');
    }
}
// Llamando métodos
console.log(user.login());
console.log(user.logout());

// Objeto Math
console.log(Math);
console.log(Math.PI);
console.log(Math.E);

const area = 7.7;

console.log(Math.round(area));
console.log(Math.floor(area));
console.log(Math.ceil(area));

console.log(Math.random());

const id = Math.round(Math.random() * 100);

console.log(id);

// IF - estructura de control condicional
const password = '12d#';

if (password.length >= 12 && password.includes('@')) {
    console.log('La contraseña es extremandamente fuerte');
} else if (password.length >= 8 || password.includes('#')) {
    console.log('La contraseña es lo suficientemente fuerte');
} else {
    console.log('La contraseña no es lo suficientmente larga');
}

// SWITCH
const calificacion = 7;

switch (calificacion) {
    case 1:
        console.log('Obtuviste un 1');
        break;
    case 2:
        console.log('Obtuviste un 2');
        break;
    case 3:
        console.log('Obtuviste un 3');
        break;
    case 4:
        console.log('Obtuviste un 4');
        break;
    case 5:
        console.log('Obtuviste un 5');
        break;
    case 6:
        console.log('Obtuviste un 6');
        break;
    case 7:
        console.log('Obtuviste un 7');
        break;
    case 8:
        console.log('Obtuviste un 8');
        break;
    case 9:
        console.log('Obtuviste un 9');
        break;
    case 10:
        console.log('Obtuviste un 10');
        break;
    default:
        console.log('No fuiste calificado');
}

// Ciclos (o Bucles - Loops)

for (let i = 0; i < 5; i++) {
    console.log('Ciclo: ', i);
}
// console.log('Ciclo: ', 0);
// console.log('Ciclo: ', 1);
// console.log('Ciclo: ', 2);
// console.log('Ciclo: ', 3);
// console.log('Ciclo: ', 4);

console.log('Ciclo terminado');

// While
let i = 0;
while (i < 5) {
    console.log('Ciclo: ', i);
    i++;
}

console.log('Ciclo terminado');

// Do... while
let i = 0;
do {
    console.log('Ciclo: ', i);
    i++;
} while (i < 5);

console.log('Ciclo terminado');

// MÁS EJEMPLOS:
let array = [10, 20, 30, 40, 50, 60, 70, 80, 90]
//            0   1   2   3   4   5   6   7   8

for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
}

// Encuentra al ganador
let puntajes = [50, 25, 0, 30, 100, 20, 10, 35, 70];

for (let i = 0; i < puntajes.length; i++) {

    if (puntajes[i] === 0) {
        continue;
    }

    console.log('Tu puntaje es:', puntajes[i]);

    if (puntajes[i] === 100) {
        console.log('Felicitaciones, eres el ganador!');
        break;
    }
}

// Imprimir Factura

const electrodomesticos = [
    { nombre: 'Televisor', precio: 40000, color: 'Gris' },
    { nombre: 'Heladera', precio: 100000, color: 'Blanco' },
    { nombre: 'PC', precio: 100000, color: 'Negro' },
    { nombre: 'Licuadora', precio: 10000, color: 'Rojo' },
    { nombre: 'Aspiradora', precio: 20000, color: 'Amarillo' },
    { nombre: 'Parlante', precio: 50000, color: 'Negro' },
    { nombre: 'Microondas', precio: 20000, color: 'Azul' },
    { nombre: 'Lavarropa', precio: 70000, color: 'Blanco' },
]

const impuestosPorProducto = [
    { nombre: 'IVA', importe: 0.21 },
    { nombre: 'Importación', importe: 0.3 },
    { nombre: 'Ingresos Brutos', importe: 0.1 },
]

console.log(electrodomesticos);

function imprimirFactura(productos, impuestos) {
    let total = 0;

    for (let i = 0; i < productos.length; i++) {
        const iva = productos[i].precio * impuestos[0].importe;
        const importacion = productos[i].precio * impuestos[1].importe;
        const ingresosBrutos = productos[i].precio * impuestos[2].importe;

        const precioConImpuestos = productos[i].precio + iva + importacion + ingresosBrutos;

        total = total + precioConImpuestos;
    }

    // AÑADIR MÁS COSAS A LA FACTURA
    return total;
}

const sumaTotal = imprimirFactura(electrodomesticos, impuestosPorProducto);

console.log(sumaTotal);