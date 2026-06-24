function copiarArray(array) {

    let copia = [];

    for (let i = 0; i < array.length; i++){
        copia.push(array[i]);
    }

    return copia;
}


console.log(copiarArray([1, 2, 3]))