function contarVogais(palavra){
    let arrayPalavra = palavra.split("")
    let contador = 0;  

    for (let i = 0; i < arrayPalavra.length; i++){
        if (arrayPalavra[i] === "a" || arrayPalavra[i] === "e" || arrayPalavra[i] === "i" || arrayPalavra[i] === "o" || arrayPalavra[i] === "u") {
            contador++;  
        }
    }

    return contador;  
}

console.log(contarVogais("javascript"));  
console.log(contarVogais("programacao"));  