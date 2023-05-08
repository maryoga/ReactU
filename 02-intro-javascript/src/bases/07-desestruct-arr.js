// Desestructuración de Arreglos
const personajes = ['Vito', 'Michael', 'Vicenzo'];

// console.log( personajes[0] );
// console.log( personajes[1] );
// console.log( personajes[2] );

// Si necesitamos extraer los personajes de manera independiente ¿cómo lo hacemos? hacemos una desestructuración del arreglo
const [ , , p3 ] = personajes;
console.log( p3 );

const retornaArreglo = () => {
  return ['ABC', 123];
}

const [ Letras, numeros ] = retornaArreglo();
console.log( Letras, numeros );

// Tarea
// 1. El 1er valor del arr se llamará nombre
// 2. se llamará setNombre
const useState = ( valor ) => {
  return [ valor, () => { console.log('Hola mundo') }];
}

// eslint-disable-next-line react-hooks/rules-of-hooks
const [ nombre, setNombre] = useState( 'Vito' );
console.log( nombre );
setNombre(); // esto el equivalente sería arr[1](); pero es mas recomendable setNombre();