function substituir (array, valorAntigo, valorNovo){
    let novo = [];

    for(let i = 0; i < array.length; i++){
        if (array[i] !== valorAntigo){
            novo.push(array[i])
        } else if (array[i] === valorAntigo){
            novo.push(valorNovo)
        } 
    }

    return novo
}




console.log(substituir([1, 2, 3, 2, 4], 2, 99));
// Retorna: [1, 99, 3, 99, 4]

console.log(substituir(["a", "b", "c", "b"], "b", "z"));
// Retorna: ["a", "z", "c", "z"]