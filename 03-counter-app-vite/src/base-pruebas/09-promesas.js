import { getHeroeById } from './08-imp-exp'

export const getHeroeByIdAsync = ( id ) => {

    return new Promise( (resolve, reject) => {

        setTimeout( () =>  {
            const p1 = getHeroeById( id );

            if ( p1 ) {
                resolve( p1 );
            } else {
                reject( `Could not find hero ${ id }` );
            }
        }, 1500 );    
    });
}
