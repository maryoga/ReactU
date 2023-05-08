// import heroes, { owners } from '../data/heroes';
import heroes from '../data/heroes';

//console.log( owners );

// función simplificada - obtener el valor de un registro por "ID"
export const getHeroeById = (id) => heroes.find((heroe) => heroe.id === id );

// Obtener el valor los registros por "Owner", en este caso el find() no funciona poque solo regresa un registro, usar filter
export const getHeroeByOwner = (owner) => heroes.filter((heroe) => heroe.owner === owner);

//console.log(getHeroeById(2));
//console.log(getHeroeByOwner('DC'));

