function cantidadDeDivisores (n: number): number {
  let cantidad: number = 0;
  let resultado: boolean = false;
  for (let i= 1; i <= n; i ++ ){
   resultado = esMultiplo(n,i);
   if (resultado == true)
    cantidad ++;
  }
  return cantidad;
}
function esMultiplo(dividendo: number, divisor: number): boolean {
if (dividendo % divisor === 0){
    return true;
}else {
return false;
}
}
console.log ("La cantidad de divisorees es: ", cantidadDeDivisores (16));