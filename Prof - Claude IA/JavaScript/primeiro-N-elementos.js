function primeirosN(array, n){
    let primeiros = [];

    for(let i = 0; i < n; i++){     
        primeiros.push(array[i]);  
    }

    return primeiros;
}

console.log(primeirosN([1, 2, 3, 4, 5], 3));  
console.log(primeirosN(["a", "b", "c", "d"], 2));  