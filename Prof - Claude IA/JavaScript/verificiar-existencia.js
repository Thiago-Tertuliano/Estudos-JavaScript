function contemElemento(array, elemento){
    for (let i = 0; i < array.length; i++) {
        if (array[i] === elemento) {  
            return true;  
        }
    }
    return false;  
}

console.log(contemElemento([10, 20, 30], 20));  
console.log(contemElemento([10, 20, 30], 99));  