function inverterArray(array){
    let invertido = [];

    for (let i = array.length - 1; i >= 0; i--){
        invertido.push(array[i])
    }

    return invertido
}


console.log(inverterArray([1, 2, 3, 4, 5]));