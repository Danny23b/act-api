const { sumar, esMayorDeEdad } = require("./operaciones");

describe("Pruebas de operaciones", () => {

    test("Debe sumar correctamente dos números", () => {
        expect(sumar(2, 3)).toBe(5);
    });

    test("Debe identificar una persona mayor de edad", () => {
        expect(esMayorDeEdad(20)).toBe(true);
    });

    test("Debe identificar una persona menor de edad", () => {
        expect(esMayorDeEdad(15)).toBe(false);
    });

});