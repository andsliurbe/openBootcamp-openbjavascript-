//- Una variable que contenga la lista de la compra (mínimo 5 elementos)
let listaCompra= ["atun","soflan","harina","arroz","Dulce De Leche"];
console.log("//- Una variable que contenga la lista de la compra (mínimo 5 elementos)")
console.log(`RE: ${listaCompra}`)

console.log(`// - Modifica la lista de la compra y añádele "Aceite de Girasol"`)
listaCompra.push("Aceite de Girasol");
console.log(`RE: ${listaCompra}`)

console.log(`// - Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"`)
listaCompra.pop();
console.log(`RE: ${listaCompra}`)

console.log(`// - Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)`)
let peliculasFavoritas=[
    {titulo:'toy story',director:'John Lasseter',fecha:new Date('1995/12/25')},
    {titulo:'Buscando a Nemo',director:'Andrew Stanton',fecha:new Date('2003/05/30')},
    {titulo:'Los Increíbles',director:'Brad Bird',fecha:new Date('2010/12/17')}
    ]
    peliculasFavoritas.forEach((valor)=>console.log(`RE: -titulo ${valor.titulo} -director:${valor.director} -fecha:${valor.fecha}`))


console.log(`// - Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)`) 
let listaPosterior= peliculasFavoritas.filter((valor)=>valor.fecha>new Date('2010/01/01'))
listaPosterior.forEach(valor=>console.log(`RE: ${valor.titulo}`));

    
console.log(`// - Una nueva lista que contenga los directores de la lista de películas original (utilizando map)`)
const  listaDirectores =peliculasFavoritas.map(valor=>valor.director)
console.log(`RE: ${listaDirectores}`)

console.log(`// - Una nueva lista que contenga los títulos de la lista de películas original (utilizando map`)
const listaTitulos=peliculasFavoritas.map(valor =>valor.titulo) 
console.log(listaTitulos)

console.log(`// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)`)
const listaConcat=listaDirectores.concat(listaTitulos);
console.log(listaConcat)

console.log(`// - Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)`)
const listaFactorPropagacion=...listaDirectores.concat(...listaTitulos);