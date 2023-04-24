"use strict";
/* • Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.*/
exports.__esModule = true;
var rls = require("readline-sync");
var dimension = rls.questionInt("ingrese la dimension: ");
var arr = new Array(dimension);
var cero = 0;
var negativo = 0;
var positivo = 0;
function cargarArreglo(arr1) {
    for (var i = 0; i < arr1.length; i++) {
        arr1[i] = rls.questionInt("ingrese los numeros: ");
    }
}
function tiposDeNumeros(arr2) {
    for (var i = 0; i < arr2.length; i++) {
        if (arr2[i] === 0) {
            cero++;
        }
        else if (arr2[i] > 1) {
            positivo++;
        }
        else {
            negativo++;
        }
    }
    console.log("Cantidad de ceros: ".concat(cero, ". Cantidad de positivos: ").concat(positivo, ". Cantidad de negativos: ").concat(negativo, "."));
}
cargarArreglo(arr);
tiposDeNumeros(arr);
