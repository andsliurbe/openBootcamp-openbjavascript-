// actorial-for.js -> Este archivo debe calcular el factorial de 10 utilizando un solo bucle for
let numero = 10;
let factorial =numero *(numero-1) ;
for (let i = (numero-1) ; i>1 ;  i--){
factorial =factorial*(i-1);
} 
console.log(factorial)