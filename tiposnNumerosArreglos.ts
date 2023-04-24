/* • Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.*/

import * as rls from "readline-sync"

let dimencion: number = rls.questionInt (" ingrese la dimencion: ");
let numArreglo: number[]= new Array(dimencion);
let cero: number= 0;
let positivos: number= 0;
let negativos: number= 0;

for (let i: number =0; i < numArreglo.length; i++) {
    numArreglo[i]= rls.questionInt ("ingrese los numeros: ");
    if (numArreglo[i] === 0){
        cero ++;
    } else if (numArreglo[i] > 1) {
        positivos ++;
    } else {
        negativos ++;
    }
} console.log (`cantidad de ceros: ${cero} cantidad de positivos: ${positivos} y cantidad de negativos: ${negativos}`);