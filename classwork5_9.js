// Write a function which receives an array and a number as arguments and returns a new array from
// the elements of the given array which are larger than the given number.

// Input Output

// [10, 25, 16, -5, 30, 15, 24] , 16        [25, 30, 24]
// [1, 1, 2, -3, 0, 8, 4, 0], 9             “Such values do not exist.”

function larger ( input, measure ) {
    let output = [];
    let count;
    for ( let i = 0; i < input.length; i++ ) {
        if (input[i] > measure) {
            output.push(input[i]);
            count = true;
        } else {
            count = false;
        }
    }
    if (count) {
    return output;
    } else {
        return "Such values do not exist.";
    }
}

console.log(larger([10, 25, 16, -5, 30, 15, 24], 30));

// ---------- DONE ---------- \\