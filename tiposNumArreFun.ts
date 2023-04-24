/* • Almacene en un arreglo de dimensión N números (la
cantidad es ingresada por el usuario).
• Muestre cuántos números son positivos, cuántos son
negativos y cuántos ceros hay.*/

import * as rls from "readline-sync"

const dimension: number = rls.questionInt ("ingrese la dimension: ");
let arr: number []= new Array (dimension);
let cero: number=0;
let negativo: number=0;
let positivo: number=0;
function cargarArreglo (arr1: number[]): void{
    for (let i: number=0; i < arr1.length; i ++){
        arr1[i]= rls.questionInt ("ingrese los numeros: ");
    } 
}
function tiposDeNumeros (arr2: number[]): void{
    for (let i: number= 0; i < arr2.length; i++){
        if (arr2[i] === 0){
            cero ++
        } else if (arr2[i] > 1){
            positivo++
        }else{
            negativo++
        }
    }console.log(`Cantidad de ceros: ${cero}. Cantidad de positivos: ${positivo}. Cantidad de negativos: ${negativo}.`);
}
cargarArreglo(arr);
tiposDeNumeros(arr)
