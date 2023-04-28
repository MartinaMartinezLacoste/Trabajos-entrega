/* • Leer valores hasta que se introduzca un cero (0)
• El usuario puede introducir valores positivos y negativos
• Encontrar el máximo de los elementos que se introdujeron
• Analizar cómo cambia el programa para hallar el mínimo*/

import * as rls from "readline-sync"
let num : number = 0;
let numIn : number = 1;
let maxValue=-99999;

while (numIn != 0){
    numIn = rls.questionInt("ingresu un numero: ")
 if (numIn > num) {
    num = numIn;
    }
}
  console.log(`el numero mayor es ${num}`);