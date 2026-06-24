function existeNegativo (array){
    for (let i = 0; i < array.length; i++){
        if (array[i] <= 0){
            return true
        } 
    }

    return false
}

console.log(existeNegativo([1, 2, 3, 4]));
// Retorna: false

console.log(existeNegativo([1, -2, 3]));
// Retorna: true