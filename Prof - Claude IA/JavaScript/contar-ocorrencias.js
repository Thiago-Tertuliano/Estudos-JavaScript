function contarOcorrencias(array, n){
    let contador = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] === n){
            contador++
        }
    }

    return contador;

}

console.log(contarOcorrencias([1, 2, 3, 2, 4, 2], 2));
// Retorna: 3

console.log(contarOcorrencias(["oi", "tchau", "oi", "oi"], "oi"));
// Retorna: 3