/* • Diseñar un algoritmo que muestre por pantalla la tabla de
multiplicación del número ingresado por el usuario
• Para definir hasta qué número desea que muestre la tabla de
multiplicación, el usuario también deberá ingresar dicho valor*/

import * as rls from "readline-sync";
const num1: number= rls.questionInt ("ingrese el numero: ");
const num2: number= rls.questionInt ("ingrese hasta que numero: ");
let resultado: number = 0;

for (let i: number= 0; i <= num2; i ++){
  resultado= num1 * i
console.log (`${num1} x ${i} = ${resultado}`)
}
