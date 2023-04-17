"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var base = rls.questionInt("ingrese la base: ");
var exponente = rls.questionInt("ingrese el exponente: ");
function potencias(base, exponente) {
    if (exponente < 0) {
        console.log("Ingrese un exponeten mayor a cero: ");
        exponente = rls.questionInt("Ingrese un numero mayor a cero: ");
    }
    var resultado;
    resultado = (Math.pow(base, exponente));
    return resultado;
}
console.log(potencias(base, exponente));
