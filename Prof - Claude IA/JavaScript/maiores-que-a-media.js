function maioresQueMedia (array){
    let soma = 0;
    
    for (let i = 0; i < array.length; i++){
        soma += array[i];
    }
    
    let media = soma / array.length;
    
    let maioresMedia = [];
    for (let i = 0; i < array.length; i++){
        if (array[i] > media){
            maioresMedia.push(array[i]);  
        }
    }
    
    return maioresMedia;
}

console.log(maioresQueMedia([1, 2, 3, 4, 5]));  