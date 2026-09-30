function sumar(a, b) {
    return a + b;
}

function esMayorDeEdad(edad) {
    if (edad >= 18) {
        return true;
    } else {
        return false;
    }
}

module.exports = {
    sumar,
    esMayorDeEdad
};