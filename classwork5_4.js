// Given a word and a list of possible anagrams, select the correct sublist.

// Input Output

// “listen”, ["enlists", "google", "inlets", "banana"] [“inlets”]
// “pencil”, [“licnep”, “circular”, “pupil”, “nilcpe”, “leppnec”] [“licnep”, nilcpe]

anagram ("pencil", ["licnep", "circular", "pupil", "nilcpe", "leppnec"]);

function anagram (word, arr) {
        
    let count = true;
    let outcome = [];

    for ( let i = 0; i < arr.length; i++ ) { /* outer loop through array elements*/
        if ( arr[i].length === word.length ) {
            for ( let g = 0; g < word.length; g++) {  /* inner loop to check if every letter is present in an array element*/
                if ( arr[i].includes (word[g])) {
                    count = true;
                }   
                    else {
                        count = false;
                    }
            }
        }   
            else {
                count = false;
                continue;
        }
        
        if ( count ) {
            outcome.push(arr[i]);
        }
    }
    return outcome;
}

// ---------- DONE ---------- \\