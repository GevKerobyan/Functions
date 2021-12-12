// Given a phone number. Write a function to clean it up, so it is valid. The rules are as follows:

//      If the phone number is less than 10 digits assume that it is a bad number
//      If the phone number is longer than 10, then it is a bad number
//      If the phone number is 10 digits assume that it is good
//      If the phone number consists of 11 symbols and the first one is + and others are numbers,
//         then trim + and return remaining 10 digits.
//      If the phone number contains + symbol more than one, consider it as a bad number.
//      If the phone number contains + symbol not as the first character, consider it as a badnumber.


"use strict";

function numberCheck (number) {
    let wrongNumMessage = "Wrong number type";
    let numCheckSwitch = true;
    
    if ( number[0] === "+" ) { /* check for a plus at the start */
        number = number.substring (1);
    }

    for ( let i = 0; i < number.length; i++ ) { /* check for other symbols in the rest of the number and the right length */
        
        if ( typeof +number[i] !== "number" || number.length !== 10) {
            numCheckSwitch = false;
        }
    }
    
    if ( numCheckSwitch ) {
        console.log(number);
        return number;
    } 
        else {
            console.log(wrongNumMessage);
            return wrongNumMessage;
        }
}

numberCheck("+1354268795");

// ---------- DONE ---------- \\