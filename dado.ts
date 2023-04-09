/* • Al tirar un dado tenemos 1/6 de
probabilidades de sacar 6
• Si tiramos dos dados tenemos 1/36
probabilidades de sacar doble 6
• Al aumentar el número de dados la
probabilidad de sacar todos 6 es cada
vez menor

• Escriba un programa que calcule la
probabilidad de sacar todos los dados 6
siendo que tiramos N dados (dato
ingresado por el usuario)*/

import * as rls from "readline-sync";
const caraDado : number=6
let numDado: number= -1
let denominador: number=0;
let probabilidad: number =0;

while (numDado !=0) {
     numDado= rls.questionInt ("ingrese la cantidad de dados: ")
    denominador= Math.pow(caraDado, numDado)
    probabilidad= 1/denominador
    console.log(`la probabilidad de todos 6 es 1/${denominador} y ${probabilidad *100} %`)
}