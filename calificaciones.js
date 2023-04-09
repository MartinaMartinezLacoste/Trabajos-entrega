"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
var nombre = rls.question("ingrese nombre: ");
var practica = 1.10;
var problemas = 1.50;
var teoria = 1.40;
var notaFinal = 0;
while (nombre != "") {
    var practicaI = rls.questionInt("ingrese nota de la practica: ");
    var problemasI = rls.questionInt("ingrese nota del problema: ");
    var teoriaI = rls.questionInt("ingrese nota de la teoria: ");
    notaFinal = (practicaI * practica / 10) + (problemasI * problemas / 10) + (teoriaI * teoria / 10);
}
console.log(notaFinal);
