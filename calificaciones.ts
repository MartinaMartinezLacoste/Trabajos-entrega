/*Calcular las calificaciones de un grupo de alumnos, donde la nota
final de cada alumno se calcula según el siguiente criterio:
• la parte práctica vale el 10%
• la parte de problemas vale el 50%
• la parte teórica el 40%
Se debe ingresar el nombre del alumno y sus tres notas, se
escribirá el resultado y se volverá a pedir los datos del siguiente
alumno hasta que el nombre sea una cadena vacía
Las notas deben estar entre 0 y 10 (si no lo están, no imprimirá las
notas, mostrará un mensaje de error y continuará con otro alumno)*/

import * as rls from "readline-sync";
let nombre: string = rls.question ("ingrese nombre: ");
let practica: number = 0.10;
let problemas: number = 0.50;
let teoria: number = 0.40;
let notaFinal: number = 0;
while (nombre != ""){
    let practicaI: number= rls.questionInt ("ingrese nota de la practica: ");
    let problemasI: number= rls.questionInt ("ingrese nota del problema: ");
    let teoriaI: number= rls.questionInt ("ingrese nota de la teoria: ");
    if ((practicaI <0 || problemasI <0 || teoriaI <0) || (practicaI >10 || problemasI >10 || teoriaI >10)){
        console.log("ingrese un numero valido");
    } else{
         notaFinal = ((practicaI * practica ) + (problemasI * problemas) + (teoriaI * teoria ));
        console.log ("nota final", notaFinal);
    } nombre = rls.question ("ingrese nombre: ");
}