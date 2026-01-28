function inverterString(texto) {
    let arrayDeLetras = texto.split(""); 
    let arrayInvertido = arrayDeLetras.reverse(); 
    let stringInvertida = arrayInvertido.join(""); 
    
    return stringInvertida; 
}

console.log(inverterString("Thiago")); 