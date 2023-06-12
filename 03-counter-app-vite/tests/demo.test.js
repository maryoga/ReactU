/* eslint-disable no-undef */

describe('Pruebas en <DemoComponent />', () => {
    test('Esta prueba no debe de fallar', () => {
        // 1. inicialización
        const message1 = 'Hola mundo';
    
        // 2. Estimulo
        const message2 = message1.trim();
    
        // 3. Observar el comportamiento... esperado. La siguiente es la condición para que pase la prueba, lo que estoy esperando.
        expect( message1 ).toBe( message2 );
    });
});

