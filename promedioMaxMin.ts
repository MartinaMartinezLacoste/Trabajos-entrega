/*• Diseñar un algoritmo que
lea números enteros hasta
teclear 0
• Determinar y mostrar el
máximo, el mínimo y la
media de todos los
números ingresados
• Pensar cuidadosamente
cómo debemos inicializar
las variables*/

import * as rls from "readline-sync";
let numMax : number = 1;
let numMin : number = 1000000;
let numIngresado : number = -1;
let promedio : number = 0;
let contador : number = 0;
let suma : number = 0;
while (numIngresado != 0){
    numIngresado = rls.questionInt("ingrese un numero: ");
    if (numIngresado < numMin && numIngresado != 0){
       numMin = numIngresado
       contador ++;
       suma +=  numIngresado
    }
    else if (numIngresado > numMax){
        numMax = numIngresado
        contador ++;
        suma += numIngresado
    }
    promedio = (suma / contador)
}console.log(`Numero maximo ${numMax}, Numero minimo ${numMin} y promedio ${promedio}%.`)