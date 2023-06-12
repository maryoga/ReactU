import { string } from "prop-types";
import { retornaArreglo } from "../../src/base-pruebas/07-deses-arr";

describe('Test to 07-deses-arr', () => {
    test('must be return an String and a number', () => {
        const [ letters, numbers] = retornaArreglo();
        expect( letters ).toBe( 'ABC' );
        expect( numbers ).toBe( 123 );

        expect( typeof letters ).toBe( 'string' );
        expect( typeof numbers ).toBe( 'number' );
        expect( letters ).toEqual( expect.any(String) );
    });
});