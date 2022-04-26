// Imprimir Factura (ACTUALIZADO)

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

function imprimirFactura(productos, impuestos) {
    let total = 0;
    let items = ['LISTADO DE PRODUCTOS'];

    for (let i = 0; i < productos.length; i++) {
        const iva = productos[i].precio * impuestos[0].importe;
        const importacion = productos[i].precio * impuestos[1].importe;
        const ingresosBrutos = productos[i].precio * impuestos[2].importe;

        const precioConImpuestos = productos[i].precio + iva + importacion + ingresosBrutos;

        items.push(`${productos[i].nombre} --- $ ${precioConImpuestos}`)
        total = total + precioConImpuestos;
    }

    const totalStr = `TOTAL: $ ${total}`;
    items.push(totalStr);

    return items;
}

const factura = imprimirFactura(electrodomesticos, impuestosPorProducto);

console.log(factura);

// Block-scope

let edad = 30;

if (true) {
    let edad = 40;
    let nombre = 'Robert';
    console.log('Dentro de este 1er bloque', edad, nombre);

    if (true) {
        let edad = 50;
        console.log('Dentro de este 2do bloque', edad, nombre);
    }
}

console.log('Fuera del bloque', edad, nombre);

// Que es un bloque?
// Cuales son los valores que se imprimen en consola dentro de cada bloque?

// Callbacks
function saludarUsuario(usuario) {
    return `Hola ${usuario}!`
}

function despedirUsuario(usuario) {
    return `Adiós ${usuario}!`
}

function decirBuenosDias (usuario) {
    return `Buen dia ${usuario}`
}

function crearSaludo(usuario, saludar) {
    const saludo = saludar(usuario);
    return saludo;
}

const saludo = crearSaludo('Numen', saludarUsuario);
const saludo2 = crearSaludo('Numen', despedirUsuario);
const saludo3 = crearSaludo('Numen', decirBuenosDias);

console.log(saludo);
console.log(saludo2);
console.log(saludo3);

// Ejemplo de servir bebidas
const servirTe = () => 'Taza de Te';
const servirCafe = () => 'Taza de Cafe';
const servirAgua = () => 'Vaso de Agua';
const servirGaseosa = () => 'Vaso de Gaseosa';

function servirBebida (cantidad, callback) {
    const bebidasCorrespondientes = [];

    for (let i = 0; i < cantidad; i++) {
        const bebida = callback();
        bebidasCorrespondientes.push(bebida);
    }

    return bebidasCorrespondientes;
}

const tazasDeCafe = servirBebida(10, servirCafe);
const vasosDeGaseosa = servirBebida(50, servirGaseosa);

console.log(tazasDeCafe);
console.log(vasosDeGaseosa);