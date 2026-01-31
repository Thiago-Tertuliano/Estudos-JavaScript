function removerValor (array, n){
    let corretos = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] !== n){
            corretos.push(array[i])
        }
    }

    return corretos
}


console.log(removerValor([1, 2, 3, 2, 4, 2, 5], 2));
// Retorna: [1, 3, 4, 5]

console.log(removerValor(["a", "b", "c", "b"], "b"));
// Retorna: ["a", "c"]