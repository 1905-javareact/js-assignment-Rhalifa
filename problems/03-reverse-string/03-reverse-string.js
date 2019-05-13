/* 3. Reverse String
Define function: reverseStr(someStr)
Reverse and return the String. */
function reverseStr(someStr) {
    let myStr = '' 
    for (let i = someStr.length - 1; i >= 0; i--) {
       myStr += someStr[i]
    }

    return myStr
}

let str = 'paris'

console.log(reverseStr(str))