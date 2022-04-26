const sumarUno = a => a + 1;

const resultado = sumarUno(12);

console.log(resultado);

const calcularAreaCirculo = radio => 3.14 * radio**2;

const area = calcularAreaCirculo(5);

console.log(area);

const saludar = function(nombre, momentoDelDia) {
    const saludo = `Good ${momentoDelDia}, ${nombre}!` 
    return saludo;
}

const saludo = saludar('Aaron', 'Night');
const saludo2 = saludar('Francesca', 'Morning');
console.log(saludo);
console.log(saludo2);

const electrodomesticos = ["Lavarropa", "Heladera", "Horno"];

console.log(electrodomesticos)

electrodomesticos[2] = "Cocina";

console.log(electrodomesticos)

electrodomesticos[1] = "Licuadora";

console.log(electrodomesticos)


const estudiantes = ['Martin', 'Fernando', 'Sara', 'Samuel', 'John', 'Harry'];

const arrayNuevo = estudiantes.slice(2, 5);

console.log(estudiantes);

console.log(arrayNuevo);


const estudiantes = ['Martin', 'Fernando', 'Sara', 'Samuel', 'John', 'Harry'];
const estudiantes2 = ['Martin', 'Fernando', 'Sara', 'Samuel', 'John', 'Harry'];

const arrayNuevo = [...estudiantes, ...estudiantes2, 'Juana', 'Ramon'];

console.log(arrayNuevo);

const estudiantes = ['Martin', 'Fernando', 'Sara', 'Samuel', 'John'];

// Version NO-MUTABLE de push
const push = (array, nuevoelemento) => [...array, nuevoelemento];
// Version NO-MUTABLE de pop
const pop = array => array.slice(0, -1);
// Version NO-MUTABLE de shift
const shift = array => array.slice(1);
// Version NO-MUTABLE de unshift
const unshift = (array, nuevoelemento) => [nuevoelemento, ...array];

const nuevoArrayEstudiantes = push(estudiantes, 'Harry');
const nuevoArrayEstudiantes2 = pop(estudiantes);
const nuevoArrayEstudiantes3 = shift(estudiantes);
const nuevoArrayEstudiantes4 = unshift(estudiantes, 'Carla');

console.log(estudiantes);

console.log(nuevoArrayEstudiantes);
console.log(nuevoArrayEstudiantes2);
console.log(nuevoArrayEstudiantes3);
console.log(nuevoArrayEstudiantes4);

