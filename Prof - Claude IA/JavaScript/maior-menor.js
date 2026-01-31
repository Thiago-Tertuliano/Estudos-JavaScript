function maiorMenor(array){
    let maior = array[0];  
    let menor = array[0];  

    for (let i = 0; i < array.length; i++){
        if (array[i] > maior){  
            maior = array[i];   
        }
        
        if (array[i] < menor){  
            menor = array[i];   
        }
    }

    return { maior: maior, menor: menor };  
}

console.log(maiorMenor([5, 2, 9, 1, 7]));
// Retorna: { maior: 9, menor: 1 } ✅