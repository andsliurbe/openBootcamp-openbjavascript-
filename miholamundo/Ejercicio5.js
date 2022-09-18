
console.log(" - Una variable que contenga tu altura en centímetros (entero)");
let altura=183;
console.log("RE:"+altura);

console.log(" - Una variable que contenga tu altura en metros (número de coma flotante)");
let alturaMts=altura/100;
console.log("RE:"+alturaMts);

console.log(" - Una variable que contenga tu peso en kilogramos (número de coma flotante)");
let miPesoEnKilogramos=70.0;
console.log("RE:"+miPesoEnKilogramos);

console.log(" - Una variable que contenga tu altura en metros redondeada hacia arriba");
let alturaMtsRedondeadoArriba=Math.ceil((altura/100));
console.log("RE:"+alturaMtsRedondeadoArriba);

console.log(" - Una variable que contenga tu peso en kilogramos redondeado hacia abajo");
let alturaMtsRedondeadoAbajo=Math.floor((altura/100));
console.log("RE:"+alturaMtsRedondeadoAbajo);

console.log(" - Una variable que contenga si \"el máximo valor que se puede obtener en Javascript + 1\" es igual al máximo valor que se puede obtener en Javascript");
let evalMaxVal=((Number.MAX_VALUE+1)==(Number.MAX_VALUE))?true:false;
console.log((Number.MAX_VALUE+1))
console.log((Number.MAX_VALUE))
console.log("RE:"+evalMaxVal);