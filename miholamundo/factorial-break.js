// - factorial-break.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while, una bifurcación if y una sentencia break


let numero=10 ;
let factorial =numero * (numero-1);
let secuencia=(numero-1)
while(secuencia>0){
    if((secuencia-1)==0){
        break;
    }
    factorial*=(secuencia-1);
    secuencia--;
}
console.log(factorial)