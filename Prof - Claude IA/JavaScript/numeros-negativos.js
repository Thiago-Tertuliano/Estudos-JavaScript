function testeA (array){
    let b = [];

    for (let i = 0; i < array.length; i++){
        if (array[i] < 0){
            b.push(array[i])
        }
    }

    return b
}
console.log(testeA([5, -3, 8, -1, 10, -5, 2]))
