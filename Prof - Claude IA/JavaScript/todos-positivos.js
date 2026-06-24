function todosPositivos(array){
    for (let i = 0; i < array.length; i++){
        if (array[i] <= 0){  
            return false;     
        }
    }
    return true; 
}

console.log(todosPositivos([1, 2, 3, 4]));  // true ✅
