function cantidadDeDivisores(n) {
    var cantidad = 0;
    var resultado = false;
    for (var i = 1; i <= n; i++) {
        resultado = esMultiplo(n, i);
        if (resultado == true)
            cantidad++;
    }
    return cantidad;
}
function esMultiplo(dividendo, divisor) {
    if (dividendo % divisor === 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log("La cantidad de divisorees es: ", cantidadDeDivisores(16));
