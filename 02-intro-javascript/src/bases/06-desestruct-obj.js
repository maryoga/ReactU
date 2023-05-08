// Desestructuración - Asignación Desestructurante
// Desestructuración de un Objeto
let character = {
    name: "Aragorn",
    kind: "human",
    role: "King of humans",
  };
  
  // Asignación Desestructurante
  let { name, role } = character;
  console.log(`${name} is ${role}`);
  
  // Desestructuración de un Arreglo
  const arr = [1, 2, 3];
  
  const iteratorOfTheArr = arr.entries();
  
  for (const [index, value] of iteratorOfTheArr) {
    console.log(index, value);
  }
  
  // Desestructuración - Asignación Desestructurante
  const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Ironman'
  };
  
  //const { nombre, edad, clave } = persona;
  
  // console.log( `${nombre} ${edad} ${clave} `);
  // console.log( persona.nombre );
  // console.log( persona.edad );
  // console.log( persona.clave );
  
  // Desestructuración, podemos usar valores por defecto, el rango no viene en el objeto persona que pasamos por argumento
  const useContext = ( { clave, nombre, edad, rango = 'Capitan' } ) => {
    //console.log( nombre, edad, rango );
    return {
      nombreClave: clave,
      anios: edad,
      latlng: {
        lat: 14.1232,
        lng: -12.3232
      }
    }
  }
  
  // eslint-disable-next-line react-hooks/rules-of-hooks
  const { nombreClave, anios, latlng: { lat, lng} } = useContext( persona );
  console.log( nombreClave, anios );
  console.log( lat, lng );