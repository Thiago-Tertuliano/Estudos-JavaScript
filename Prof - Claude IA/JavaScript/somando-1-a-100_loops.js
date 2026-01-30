function soma(){
    let soma = 0; // ✅ Começa do zero!

    for (let i = 1; i <= 100; i++){
        soma += i;
    }

    console.log(soma); 
}

soma();