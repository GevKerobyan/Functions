// Write a function that accepts a string(a sentence) as a parameter and finds the longest word within
// the string․ If there are several words which are the longest ones, print the last word(words can be
// separated by space, comma or hyphen).

// Input Output

// “A revolution without dancing is a revolution not worth having.” “revolution”
// ”Which would be worse - to live as a monster, or to die as a good man?” “monster”

// let input = "A revolution without dancing is a revolution not worth having."



function longest (input) {
    let inputArr = input.split(" ");
    // console.log(inputArr);
    let long = inputArr[0];

    for (let i=1; i< inputArr.length; i++ ) {
        if ( inputArr[i].length >= long.length ) { /* inputArr[i].lenght-1 is done to eliminate any possible punctuation after any word */
            long = inputArr[i];
        } 
    }
    console.log(long);
}

longest ("A revolution without dancing is a sevolution not worth having.");


// ---------- NOT DONE ---------- \\