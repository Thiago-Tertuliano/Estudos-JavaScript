function mediaPares(array){
    let soma = 0;
    let contador = 0;  

    for (let i = 0; i < array.length; i++){
        if (array[i] % 2 === 0){
            soma += array[i];  
            contador++;        
        }
    }

    let media = soma / contador;  

    return media;
}

console.log(mediaPares([1, 2, 3, 4, 5, 6]));  