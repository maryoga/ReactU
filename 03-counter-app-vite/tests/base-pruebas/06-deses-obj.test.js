import { usContext } from "../../src/base-pruebas/06-deses-obj";

describe('Test to 06-deses-obj', () => {
    test('usContext must be return an object', () => {
        const clave = 'Gatusso';
        const edad = 34;
        const result = usContext( {clave, edad} );

        expect(result.nombreClave ).toBe(clave);
        expect(result.anios ).toBe(edad);
        expect(result.latlng ).toEqual({
            lat: 14.1232,            
            lng: -12.3232
        })
    });
});