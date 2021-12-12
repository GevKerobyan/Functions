// Write a function which receives two strings and 
// removes appearances of the second string from the first one.

//                  Input                                   Output

//        “This is some text.”, “is”                    “Th some text.”
// “Yes, London. You know: fish, chips, 
// cup ‘o tea, bad food, worse weather”, “o”        “Yes, Lndn. Yu knw: fish, chips, cup ‘ tea, bad fd, wrse weather”


function erase (longStr, shortStr) {
    let lowlongStr = longStr.toLowerCase();
    let lowshortStr = shortStr.toLowerCase();

    if (lowlongStr.includes(lowshortStr)) {
        lowlongStr = lowlongStr.replaceAll (lowshortStr, "");
        console.log(lowlongStr);
        return lowlongStr;
    }
}

erase ('This is some text.', "is");

// ---------- DONE ---------- \\