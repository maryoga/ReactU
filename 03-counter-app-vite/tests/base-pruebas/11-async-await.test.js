import { getImagen } from "../../src/base-pruebas/11-async-await";

describe('Test to 11-async-await.js', () => {
    test('getImagen must return an error if the image API KEY does not exist', async() => {

         const resp = await getImagen();
        //  console.log( url);
        //  expect( typeof url).toBe('string');
         expect( resp ).toBe('Imagen not found');

    });
});