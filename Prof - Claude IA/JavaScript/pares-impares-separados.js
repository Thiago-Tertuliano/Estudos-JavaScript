function separarParImpar(array){
    let pares = []
    let impares = []

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            pares.push(array[i])
        } else {
            impares.push(array[i])
        }
    }

    return {pares: pares, impares: impares}
}


console.log(separarParImpar([1, 2, 3, 4, 5, 6]));
// Retorna: { pares: [2, 4, 6], impares: [1, 3, 5] }