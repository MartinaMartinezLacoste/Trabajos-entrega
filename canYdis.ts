/*• Leer valores del usuario hasta que introduzca un 0
• El usuario puede introducir valores numéricos, tanto
positivos como negativos
• Contar la cantidad de valores introducidos que sean
mayores a 0 y el porcentaje de positivos respecto del total*/

import * as rls from "readline-sync";
let num: number= -1;
let contadorT: number=0;
let contadorP: number = 0;
let porcentaje: number = 0;
while (num !=0) {
    num= rls.questionInt("ingrese su numero: ")
 if (num > 0) {
    contadorT++;
    contadorP++;
 } else if (num < 0){
        contadorT ++;
    }
 } porcentaje = (contadorP * 100 / contadorT);
 
 console.log (`${contadorP} positivos ${porcentaje}% total`);