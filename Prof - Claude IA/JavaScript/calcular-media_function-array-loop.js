function calcularMedia(array) {
    let soma = 0;

    for (let i = 0; i < array.length; i++) {
        soma += array[i];
    }

    let media = soma / array.length;
    
    return media;
}

console.log(calcularMedia([10, 20, 30, 40])); // 25 ✅
console.log(calcularMedia([5, 10])); // 7.5 ✅
console.log(calcularMedia([1, 2, 3, 4, 5, 6, 7, 8])); // 4.5 ✅