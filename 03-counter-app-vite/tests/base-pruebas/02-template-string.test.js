import { getSaludo } from '../../src/base-pruebas/02-template-string';

// definimos el agrupador con describe
describe('Pruebas en archivo 02-template-string', () => {
    test('getSaludo debe retornar "Hola MaryoGA" ', () => {
        const name = 'MaryoGA';
        const message = getSaludo( name );

        expect( message ).toBe(`Hola ${ name }`)
    });
});