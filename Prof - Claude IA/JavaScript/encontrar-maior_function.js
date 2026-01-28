function encontrarMaior(array) {
    let maior = array[0];

    for (let i = 0; i < array.length; i++) {
        if (array[i] > maior) {
            maior = array[i]
        }
    }

    return maior;
}



console.log(encontrarMaior([3, 7, 2, 9, 1]));
// Deve retornar: 9