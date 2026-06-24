function duplicarPares (array){
    let pares = [];
    for(let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            pares.push(array[i] * 2)
        } else {
            pares.push(array[i])
        }
    }

    return pares
}


console.log(duplicarPares([1, 2, 3, 4, 5]));
// Retorna: [1, 4, 3, 8, 5]
// (2*2=4, 4*2=8)

console.log(duplicarPares([10, 15, 20]));
// Retorna: [20, 15, 40]