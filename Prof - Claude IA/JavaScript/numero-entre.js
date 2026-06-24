function numeroEntre(array, min, max){
    let minMax = [];

    for(let i = 0; i < array.length; i++){
        if(array[i] >= min && array[i] <= max){
            minMax.push(array[i])
        }
    }

    return minMax
}


console.log(numeroEntre([1, 5, 10, 15, 20, 25], 10, 20));
// Retorna: [10, 15, 20]

console.log(numeroEntre([3, 7, 12, 18, 25], 5, 15));
// Retorna: [7, 12]