// - factorial-while.js -> Este archivo debe calcular el factorial de 10 utilizando un bucle while

let numero=10 ;
let factorial =numero * (numero-1);
let secuencia=(numero-1)
while(secuencia>1){
    factorial*=(secuencia-1);
    secuencia--;
}
console.log(factorial )