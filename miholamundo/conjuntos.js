console.log(`Un nuevo Set con los nombres de tu familia`)
var familia=new Set(["carlos","rony","luis"])
console.log(familia)

console.log(`- Modifica el Set original añadiendo tu nombre (duplicado) (debería darte lo mismo)`)
familia.add("carlos")
console.log(familia)

console.log(`Modifica el Set original añadiendo el nombre "Javascript" (ya que empieza a formar parte de tu vida ;)`) 
familia.add("Javascript")
console.log(familia)