/* 6. Even Number
Define function: isEven(someNum)
Return true if even, false if odd.
Do not use % operator. */

function isEven(someNum) {

    check = false

       if (someNum == 0) {
           check = true
       }
       else if (someNum == 1){
            check = false
       }
       else if (someNum > 0) {
            isEven(someNum - 2)
       }
       else{
           isEven( - someNum)
       }

       return check
}

console.log(isEven(4))