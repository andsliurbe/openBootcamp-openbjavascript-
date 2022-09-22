console.log(`Crea un archivo JS que contenga las siguientes líneas`)

console.log(`- Una función sin parámetros que devuelva siempre "true"`)
function sinParametro(){
    return true;
}
console.log(`RE: sin Parametro = ${sinParametro()}`)
console.log(`- Una función asíncrona que utilice un setTimeout y pase por consola un "Hola soy una promesa" 5 segundos después de haberse ejecutado`)
function funcionAsync(){
        return new Promise((resolve)=>{
            setTimeout(() => {
                    resolve(`Hola Soy una promesa`)
            }, 5000);
        });
        
}
async function llamadaFuncionAsync(){
            const resultado= await funcionAsync();
            console.log(resultado);
};          
llamadaFuncionAsync();

console.log(`- Una función generadora de índices pares automáticos`)
let va=Math.floor(Math.random()*100);

console.log(va)
console.log(va%2)
function* indicesParesAutomaticos(max){
        let indice= Math.floor(Math.random()*max);
            console.log(indice)    
        while(indice%2!=0){
                indicesParesAutomaticos(max);
            }
            yield indice;
}
 
console.log("RE: "+indicesParesAutomaticos(1000).next().value)
