function somarPositivos(array) {
    let soma = 0; 
    
    for (let i = 0; i < array.length; i++) {
        if (array[i] > 0) { 
            soma += array[i]; 
        }
    }
    
    return soma; 
}

console.log(somarPositivos([5, -3, 8, -1, 10, -5]));
