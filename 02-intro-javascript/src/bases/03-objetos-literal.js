const persona = {
    nombre: 'Maryo',
    apellido: 'Gaitan',
    edad: 45,
    direccion: {
        ciudad: 'New York',
        zip: 1234567,
        lat: 14.3232,
        lng: 34.9233,
    }
};

//console.table( persona );
//para crear una copia de un objeto, no hay que hacer la sig. linea: const persona2 = persona;, si tenemos que crear un clon hacer lo 
//sig.; crear un nuevo objeto e incluir sus propieades con valores nuevos, pero para facilitar eso, utilizar el operador spread que
//apareció desde el ECMA6, este es utilizado para hacer un clon o extraer cada una de esas propidades y asignarselas a ese nuevo obj.
//de este modo tendremos un clon del objeto.
const persona2 = { ...persona };
persona2.nombre = 'Vito';

console.log( persona );
console.log( persona2 );