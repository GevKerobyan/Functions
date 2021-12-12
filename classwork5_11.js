// Write a function, which receives two numbers as arguments and finds all numbers between them
// such that each digit of the number is even. The numbers obtained should be printed in a commaseparated
// sequence on a single line.

//      Input                        Output

//      19, 42           “20, 22, 24, 26, 28, 40, 42”

//      99, 199          “Such numbers does not exist.”


function midEvens (num1, num2) {
    
    let mixedNums = [];
    let evenNums = [];
    let bool = false;
    let mixedNumsStr;
    let final = "";
    
    for( let i = num1; i <= num2; i++) {
        
        if (i%2 === 0){
        mixedNums.push(i);
        }
    }
    
    for (let g = 0; g < mixedNums.length; g++) {
        mixedNumsStr = mixedNums[g].toString();
        for (let f = 0; f < mixedNumsStr.length; f++) {
    
            if (Number(mixedNumsStr[f]%2 === 0)) {
                bool = true;
            } else {
                bool = false;
                break;
            }       
        }
       
        if (bool) {
            evenNums.push(mixedNums[g]);
        }
        // if (!bool) {
        //     final = final.concat("Such numbers do not exist");
        //     console.log(final);
        //     return final;
        // }
    }
    final = evenNums.join(", ");
    console.log(final);
    return final;
}
    
midEvens(19, 42);

// ---------- SEMI-DONE ---------- \\