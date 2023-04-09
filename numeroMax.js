"use strict";
exports.__esModule = true;
var rls = require("readline-sync");
/* • Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/
var num1 = 0;
var num2 = rls.questionInt("ingrese un numero: ");
while (num2 != num1) {
    num2 = rls.questionInt("ingrese un numero: ");
    if (num2 > num1) {
        num1 = num2;
    }
    else if (num2 < -num1) {
        num1 = -num2;
    }
}
console.log("el numero mayor es", num2);
