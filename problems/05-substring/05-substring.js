/* 5. Substring
Define function substring(someStr, startIndex, endIndex)
Return the substring contained between startIndex (inclusive) and endIndex (exclusive).
If incorrect input is entered, throw an exception stating the input was incorrect.
For example substring('hello', 0, 3) should give 'hel' */
function substring(someStr, startIndex, endIndex) {
    
    let myStr= '' 
        if ((startIndex < 0) || (endIndex > someStr.length)) {
            throw String ("incorrect input")
        }
            else {
                for (let i = 0; i < someStr.length; i++) {
                    for (let j = startIndex; j < endIndex; j++){
                        myStr += someStr[i]
                    }
                    break;
                }
            }
    return myarr
}

console.log(substring("unity", 0,2))
