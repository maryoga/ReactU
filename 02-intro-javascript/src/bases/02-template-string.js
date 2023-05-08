const nombre = 'Maryo';
const apellido = 'Gaitan';

//const nombreCompleto = nombre + ' ' + apellido;
const nombreCompleto = `${ nombre } ${ apellido }`;
console.log( nombreCompleto );

function getSaludo(nombre) {
    return ' Hola mundo ' + nombre;
}

console.log( `Este es un texto: ${ getSaludo(nombreCompleto)}`);