"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var dimencion = rls.questionInt(" ingrese la dimencion: ");
var numArreglo = new Array(dimencion);
var cero = 0;
var positivos = 0;
var negativos = 0;
for (var i = 0; i < numArreglo.length; i++) {
    numArreglo[i] = rls.questionInt("ingrese los numeros: ");
    if (numArreglo[i] === 0) {
        cero++;
    }
    else if (numArreglo[i] > 1) {
        positivos++;
    }
    else {
        negativos++;
    }
}
console.log("cantidad de ceros: ".concat(cero, " cantidad de positivos: ").concat(positivos, " y cantidad de negativos: ").concat(negativos));
