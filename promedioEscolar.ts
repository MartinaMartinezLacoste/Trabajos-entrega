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

import * as rls from "readline-sync"

let nombreAlumno: string =  rls.question("Ingrese el nombre del alumno: ");
let notas1: number[] = new Array (1);
let notas2: number[] = new Array (1);
let notas3: number[] = new Array (1);

function nota(arrA: number[], arrB: number[], arrC : number[]): void{
 for(let i: number = 0; i < arrC.length; i ++){
 arrA[i] = rls.questionInt("Ingrela la nota: ");
 arrB[i] = rls.questionInt("Ingrela la nota: ");
 arrC[i] = rls.questionInt("Ingrela la nota: ");
 }
}
function promedio(arr1: number[], arr2: number[], arr3: number[]): void{
    let promedio: number = 0;
    let suma: number = 0;
    for(let i: number = 0; i < arr1.length; i ++){
        suma = suma + (arr1[i] + arr2[i] + arr3[i]);
        promedio = suma * 100 / 30;
        console.log (`Promedio anual: ${promedio}% `);
    } 
}
nota(notas1, notas2, notas3);
promedio(notas1, notas2, notas3);
