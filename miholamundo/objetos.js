console.log(`Crea un archivo llamado objetos.js que contenga las siguientes líneas`)
console.log(`- Un objeto con tus datos personales (nombre, apellido, edad, altura, eresDesarrollador)`)
let datosPersonales = {
    nombre: "carlos",
    apellido: "garcia",
    edad: 29,
    altura: "183cm",
    isDevelepoer: true
}
console.log(datosPersonales)

console.log(`- Una variable que obtenga tu edad a partir del objeto anterior`)
let edad = datosPersonales.edad;
console.log(edad)

console.log(`- Una lista que contenga el objeto con tus datos personales y un nuevo objeto con los datos personales de tus dos mejores amig@s`)
let lista = [{ ...datosPersonales }]
console.log(lista)
let mejoresAmigos =
[
    {
        nombre: "namigo1",
        apellido: "aamigo1",
        edad: 30,
        altura: "300cm",
        isDevelepoer: true

    }, {
        nombre: "namigo2",
        apellido: "aamigo2",
        edad: 30,
        altura: "200cm",
        isDevelepoer: false

    }
]


console.log(`- Una nueva lista con los objetos de la lista anterior ordenados por edad, de mayor a menor`)
let listan=[...mejoresAmigos,...lista]
listan.sort((a,b)=>a.edad-b-edad)
console.log(listan)


