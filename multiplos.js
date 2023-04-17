function esMultiplo(A, B) {
    var resultado;
    if (A % B === 0) {
        resultado = true;
    }
    else {
        resultado = false;
    }
    return resultado;
}
console.log(esMultiplo(43, 8));
