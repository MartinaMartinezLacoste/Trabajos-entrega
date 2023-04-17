function esMultiplo(A: number, B: number): boolean{
    let resultado: boolean
    if (A % B === 0){
       resultado =  true;
    } else{
        resultado = false;
    } return resultado
}
console.log(esMultiplo(43,8));

