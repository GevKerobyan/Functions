// Write a function that calculates sum, difference, multiplication and division between given array
// elements depending on passed operation symbol. Write appropriate function for each operation.


// "use strict"

function calc (arr, symbol) {
    let outcome;
    switch (symbol) {
       
        case "+": 
            outcome = 0;
            for (let i = 0; i < arr.length; i++) {
                outcome += arr[i];
            }
            return outcome;
                break;

        case "-":
            outcome = arr[0];
            for (let i = 1; i < arr.length; i++) {
                outcome -= arr[i];
            }
            return outcome;
                break;
        
        case "*":
            outcome = 1;
            for (let i = 0; i < arr.length; i++) {
                outcome *= arr[i];
                }
            return outcome;
                break;

        case "/":
            outcome = arr[0];
            for (let i = 1; i < arr.length; i++) {
                outcome /= arr[i];
                }
                return outcome;
                    break;
    }
    return outcome;
}

console.log(calc ([45,55,2,6,65,85], "/"));


// ---------- DONE ---------- \\