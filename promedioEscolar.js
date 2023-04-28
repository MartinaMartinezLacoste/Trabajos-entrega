"use strict";
/* • Desarrolle un algoritmo que
permita cargar alumnos y sus
notas en los tres trimestres
• Se debe permitir obtener el
promedio anual (es decir, de sus
tres notas) de un alumno
(ingresado por el usuario)
• Luego de resolverlo, pensar en
aprovechar métodos y discutir
cómo representar la información*/
exports.__esModule = true;
var rls = require("readline-sync");
var nombreAlumno = rls.question("Ingrese el nombre del alumno: ");
var notas1 = new Array(1);
var notas2 = new Array(1);
var notas3 = new Array(1);
function nota(arrA, arrB, arrC) {
    for (var i = 0; i < arrC.length; i++) {
        arrA[i] = rls.questionInt("Ingrela la nota: ");
        arrB[i] = rls.questionInt("Ingrela la nota: ");
        arrC[i] = rls.questionInt("Ingrela la nota: ");
    }
}
function promedio(arr1, arr2, arr3) {
    var promedio = 0;
    var suma = 0;
    for (var i = 0; i < arr1.length; i++) {
        suma = suma + (arr1[i] + arr2[i] + arr3[i]);
        promedio = suma * 100 / 30;
        console.log("Promedio anual: ".concat(promedio, "% "));
    }
}
nota(notas1, notas2, notas3);
promedio(notas1, notas2, notas3);
