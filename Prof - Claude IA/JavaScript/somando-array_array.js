function somarArray(array){
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    return soma;
}


console.log(somarArray([5, 10, 15, 20]))