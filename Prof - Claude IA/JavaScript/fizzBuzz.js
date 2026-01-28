function fizzBuzz() {

    for (let i = 1; i <= 30; i++) {
        if (i % 3 === 0 && i % 5 === 0) { // PRIMEIRO: divisível por ambos
            console.log("FizzBuzz");
        } else if (i % 3 === 0) { // DEPOIS: só por 3
            console.log("Fizz");
        } else if (i % 5 === 0) { // DEPOIS: só por 5
            console.log("Buzz");
        } else { // SENÃO: o número
            console.log(i);
        }
    }
}

fizzBuzz();


