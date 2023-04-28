/* • Diseñar un algoritmo que recorra las
butacas de una sala de cine y determine
cuántas butacas desocupadas hay
• Suponga que para modelar este
problema, se utiliza un arreglo con
valores lógicos
• La presencia de un valor verdadero (true) en
el arreglo indica que la butaca está ocupada
• La presencia de un valor falso (false) en el
arreglo indica que la butaca está desocupada*/
var butacas = [true, false, false, true, true, false, true, false, true, true, false, true, true, true, true, false];
function butacasDesocupadas(arr) {
    var cantidad = 0;
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] == false) {
            cantidad++;
        }
    }
    console.log(cantidad);
}
butacasDesocupadas(butacas);
