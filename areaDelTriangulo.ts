/* . realice un programa que devuelva el area del triangulo usando los siguientes pares de base-altura: 
     . (1,2)(2,4)(3,6)(4,8)(5,10)(6,12)(7,14)
    . implemente un metodo llamado calcularAreaTriangulo que reciba dos numeros por parametro (uno llamado base y otro altura). */

function calcularAreaTriangulo (base : number, altura : number): number{
    let resultado : number ;
    resultado = (base * altura)/2
    return  resultado
}
console.log("El area del triangulo es:",calcularAreaTriangulo(1,2));
console.log("El area del triangulo es:",calcularAreaTriangulo(2,4));
console.log("El area del triangulo es:",calcularAreaTriangulo(3,6));
console.log("El area del triangulo es:",calcularAreaTriangulo(4,8));
console.log("El area del triangulo es:",calcularAreaTriangulo(5,10));
console.log("El area del triangulo es:",calcularAreaTriangulo(6,12));
console.log("El area del triangulo es:",calcularAreaTriangulo(7,14));
