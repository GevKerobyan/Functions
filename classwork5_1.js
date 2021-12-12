// Given an array of numbers. Write a function to separate odd and even numbers in different arrays.

//          Input                       Output

// [45, 12, 3, 6, 17, 0]        [45, 3, 17], [12, 6, 0]
//      [1, 3, 5, 9]                [1, 3, 5, 9], []



function separate (input){

    let odd = [];
    let even = [];

    for(i in input){

        if (input[i]%2 === 0) {
            even.push(input[i]);
        }   else {
            odd.push(input[i]);
        }
    }
console.log(even, odd);
}

separate([45, 12, 3, 6, 17, 0]);

// ---------- DONE ---------- \\