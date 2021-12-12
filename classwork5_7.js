// Write a function to compute a new string from the given one by moving the first char to come after
// the next two chars, so "abc" yields "bca". Repeat this process for each subsequent group of 3 chars.
// Ignore any group of fewer than 3 chars at the end.

//          Input           Output

//      “dfgjkloyp”         “fgdkljypo”
//      “aweyoolp”          “weaooylp”


function switchString (input) {
    console.log(input);

    let arr = [];
    let count = input.length%3;
    let cutInput = input.substring(0, input.length-count); /* eliminating the leftover with less than 3 chars */
    let outputArr = [];
    let final;

    for ( let i = 0; i < cutInput.length; i+=3 ) { /* split the string to 3-char array elements */
        arr.push(cutInput.substring(i, i+3));
    }

    for ( let g = 0; g < arr.length; g++ ) { /* switch first and last chars */

        let temp = arr[g];

        arr[g] = temp[2]+temp[1]+temp[0];
        outputArr.push (arr[g]);
    }

    final = outputArr.join(""); /* join the result into a string an return */
    console.log(final);
    return(final);
}

switchString ("aweyoolp");

// ---------- DONE ---------- \\