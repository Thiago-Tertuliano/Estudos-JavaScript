function produtoAcumulado (array){
    let produto = 1;  
    let total = [];

    for (let i = 0; i < array.length; i++){
        produto *= array[i];  
        total.push(produto);  
    }

    return total;
}

console.log(produtoAcumulado([2, 3, 4]));  
console.log(produtoAcumulado([1, 2, 3, 4]));  