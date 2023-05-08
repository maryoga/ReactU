// Functions in JS
const saludar = function ( nombre ) {
    return `Hola, ${nombre}`;
}

// Arrow function
const saludar2 = ( nombre ) => {
    return `Hola, ${nombre}`;
}

const saludar3 = ( nombre ) => `Hola, ${nombre}`;
const saludar4 = ( ) => `Hola mundo`;

console.log( saludar('Hans'));
console.log( saludar2( 'Maryo' ));
console.log( saludar3( 'John'));
console.log( saludar4());

const getUser = ( ) => ({
    uid: 'ABC123',
    username: 'The Godfather'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformen a una función de flecha
// 2. Retornar un objeto implicito
// 3. Pruebas
const getUsuarioActivo = ( nombre ) => ({
    uid: 'ABC567',
    username: nombre
});

const usuarioActivo = getUsuarioActivo('Fernando');
console.log( usuarioActivo );