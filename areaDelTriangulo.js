/*
function baseTriangulo () {
    let i: number;
    let base: number;
    for (i= 1; i <=7; i ++){
    base=i;
     }
}

function alturaTriangulo () {
    let i: number;
    let altura: number;
    for (i=2; i <=14; i+2){
        altura= i;
    }
}
const base: number []= [ 1,2,3,4,5,6,7];
const altura: number []= [2,4,6,8,10,12,14];

function areaDelTriangulo ():number{
 return ( base * altura )/2
 
}
function calculandoTriangulos () {
    let resultado: number = areaDelTriangulo
}
console.log (`el area de ${areaDelTriangulo}`)*/
function calcularAreaTriangulo(base, altura) {
    return (base * altura) / 2;
}
function calculandoTriangulos() {
    var resultado = calcularAreaTriangulo(1, 2);
    console.log("El area es: ", resultado);
    resultado = calcularAreaTriangulo(2, 4);
    console.log("El area es: ", resultado);
    resultado = calcularAreaTriangulo(3, 6);
    console.log("El area es: ", resultado);
    resultado = calcularAreaTriangulo(4, 8);
    console.log("El area es: ", resultado);
    resultado = calcularAreaTriangulo(5, 10);
    console.log("El area es: ", resultado);
    resultado = calcularAreaTriangulo(6, 12);
    console.log("El area es: ", resultado);
    resultado = calcularAreaTriangulo(7, 14);
    console.log("El area es: ", resultado);
}
