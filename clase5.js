const profesores = [
    {
        nombre: 'Matias',
        edad: '33',
        profesion: 'Profesor',
    },
    {
        nombre: 'Cinthia',
        edad: '31',
        profesion: 'Coordinadora',
    },
    {
        nombre: 'Andres',
        edad: '27',
        profesion: 'Profesor',
    },
    {
        nombre: 'Guillermo',
        edad: '25',
        profesion: 'Tutor',
    }
  ]
  
  console.log(profesores);
  
  function callback(profesor, posicion, profesores) {
    const nuevoObjeto = {
      string: `Hola soy ${profesor.profesion}, mi nombre es ${profesor.nombre} y tengo ${profesor.edad}.`,
      posicion: posicion,
      perteneceA: profesores,
    }
    return nuevoObjeto;
  }
  
  const nuevoArray = profesores.map(callback);
  
  console.log(nuevoArray);

  const profesores = [
    {
        nombre: 'Matias',
        edad: 33,
        profesion: 'Profesor',
    },
    {
        nombre: 'Cinthia',
        edad: 31,
        profesion: 'Coordinadora',
    },
    {
        nombre: 'Andres',
        edad: 27,
        profesion: 'Profesor',
    },
    {
        nombre: 'Guillermo',
        edad: 25,
        profesion: 'Tutor',
    }
  ]
  
  // THIS
  // Es una palabra que referencia (en este ejemplo) al ARRAY sobre el que ejecuto el metodo
  
  Array.prototype.mapear = function(callback) {
    const nuevoArray = [];
  
    for(let i = 0; i < this.length; i++) {
      const retornoDelCallback = callback(this[i], i, this);
      nuevoArray.push(retornoDelCallback);
    }
  
    return nuevoArray;
  }
  
  function callback(profesor, posicion, profesores) {
    return {
      string: `Hola soy ${profesor.profesion}, mi nombre es ${profesor.nombre} y tengo ${profesor.edad}.`,
      posicion: posicion,
      perteneceA: profesores,
    };
  }
  
  // const profesoresMapeados = profesores.map(callback);
  const profesoresMapeados = profesores.mapear(callback);
  const numeros = [1, 2, 3, 4, 5, 6, 7];
  
  const numerosMapeados = numeros.mapear(numero => `Soy el numero: ${numero}`);
  
  // console.log(profesoresMapeados);
  // console.log(numerosMapeados);
  
  Array.prototype.filtrar = function(callback) {
    const nuevoArray = [];
  
    for(let i = 0; i < this.length; i++) {
      if (callback(this[i], i, this) === true) {
        nuevoArray.push(this[i]);
      }
    }
  
    return nuevoArray;
  }
  
  const profesoresMenoresDeTreinta = profesores.filtrar(profesor => profesor.edad < 30);
  
  // console.log(profesoresMenoresDeTreinta);

  const numeros = [1, 2, 3, 4, 5];

// function callback(acumulador, numero) {
//   return acumulador + numero;
// }

const suma = numeros.reduce(callback, 0);

// 0 + 1 = 1
// 1 + 2 = 3
// 3 + 3 = 6
// 6 + 4 = 10
// 10 + 5 = 15

console.log(suma);

const usuarios = [
  ['Agustin', '23', 'Profesor'],
  ['Oriana', '31', 'Enfermera'],
  ['Martina', '19', 'Mecanica'],
  ['Omar', '27', 'Soldado'],
]

function callback(acumulador, persona) {
  const nombre = persona[0];
  const edad = persona[1];
  const profesion = persona[2];

  return { };
}

const usuariosReducidos = usuarios.reduce(callback, {  } );

console.log(usuariosReducidos);