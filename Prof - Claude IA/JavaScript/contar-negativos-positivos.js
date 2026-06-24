function contarNegPos (array) {
    let negativos = 0;
    let positivos = 0;

    for (let i = 0; i < array.length; i++){
        if (array[i] > 0){
            positivos++
        } else {
            negativos++
        }
    }

    return {positivos, negativos}
}


console.log(contarNegPos([1, -2, 3, -4, 5, -6]));
// Retorna: { negativos: 3, positivos: 3 }

console.log(contarNegPos([10, 20, -5, 30]));
// Retorna: { negativos: 1, positivos: 3 }