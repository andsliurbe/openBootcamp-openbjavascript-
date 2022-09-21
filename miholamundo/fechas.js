console.log(`Crea un archivo llamado fechas.js que contenga las siguientes líneas`)

console.log(`- La fecha de hoy`)
let fechaHoy = new Date();
console.log("RE:"+fechaHoy)

console.log(`- La fecha de tu nacimiento`)
let fechaNacimiento=new Date(1992,9,26)
console.log("RE: "+ fechaNacimiento)

console.log(`- Un variable que indique si hoy es más tarde (>) que la fecha de tu nacimiento`)
let masTarde=fechaHoy>fechaNacimiento?true:false;
console.log("RE:"+masTarde)

console.log(`- Una variable que contenga el día de tu nacimiento`)
let diaDeNaciento=fechaNacimiento.getDate();
console.log(`RE: ${diaDeNaciento}`)

console.log(`- Una variable que contenga el mes de tu nacimiento (recuerda que Enero es mes 0)`)
let mesDeNacimiento=fechaNacimiento.getMonth()+1;
console.log(`RE: ${mesDeNacimiento}` )



console.log(`- Una variable que contenga el año de tu nacimiento (con 4 dígitos)`)
let yearNacimiento=fechaNacimiento.getFullYear();
console.log(`RE: ${yearNacimiento}`)
