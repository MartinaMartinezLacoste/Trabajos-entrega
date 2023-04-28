import * as rls from "readline-sync";

const dimension: number = rls.questionInt ("ingrese la dimension: ");
let arr: number []= new Array (dimension);

function cargarArreglo (arr1: number[], arr2: number []): void{
    for (let i: number=0; i < arr1.length; i ++){
        arr1[i]= rls.questionInt ("ingrese los numeros: ");
        arr2[i]= rls.questionInt ("ingrese los numeros: ");
    } 
}
function productoEscalar ( )