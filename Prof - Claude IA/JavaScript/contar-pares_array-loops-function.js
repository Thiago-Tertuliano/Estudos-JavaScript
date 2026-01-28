function contarPares(array) { 
    let pares = 0; 
    
    for (let i = 0; i < array.length; i++) { 
        if (array[i] % 2 === 0) { 
            pares++; 
        }
    }
    
    return pares; 
}

console.log(contarPares([1, 2, 3, 4, 5, 6])); 
console.log(contarPares([10, 15, 20, 25])); 