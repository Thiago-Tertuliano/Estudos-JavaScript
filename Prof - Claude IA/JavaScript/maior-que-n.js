function maioresQue(array, n){
    let numM = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] > n){
            numM.push(array[i])
        } 
    }

    return numM;
}

console.log(maioresQue([1, 2, 3, 4, 5], 3));