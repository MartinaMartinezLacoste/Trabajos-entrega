
import * as rls from "readline-sync";

let base : number = rls.questionInt ("ingrese la base: ");
let exponente: number = rls.questionInt ("ingrese el exponente: ");

function potencias (base: number, exponente: number): number{
    if (exponente < 0) {
        console.log("Ingrese un exponeten mayor a cero: ")
        exponente = rls.questionInt("Ingrese un numero mayor a cero: ");
    }
 let resultado: number;  
 resultado = (base ** exponente); 
 return resultado; 
}

console.log (potencias(base, exponente));

