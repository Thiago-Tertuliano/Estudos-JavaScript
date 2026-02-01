function ultimosN (array, n){
    let ultimos = [];

    for(let i = array.length - n; i < array.length; i++){
        ultimos.push(array[i]);
    }

    return ultimos;
}

console.log(ultimosN([1, 2, 3, 4, 5], 3));  
console.log(ultimosN(["a", "b", "c", "d"], 2));  