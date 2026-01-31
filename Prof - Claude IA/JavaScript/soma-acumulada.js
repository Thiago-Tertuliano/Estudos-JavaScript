function somaAcumulada (array){
    let soma = 0;
    let resultado = [];

    for (let i = 0; i < array.length; i++){
        soma += array[i];
        resultado.push(soma)
    }

    return resultado
}


console.log(somaAcumulada([1, 2, 3, 4]));
// [1, 1+2=3, 1+2+3=6, 1+2+3+4=10]
// Retorna: [1, 3, 6, 10]

console.log(somaAcumulada([5, 10, 15]));
// [5, 5+10=15, 5+10+15=30]
// Retorna: [5, 15, 30]