/* 7. Palindrome
Define function isPalindrome(someStr)
Return true if someStr is a palindrome, otherwise return false */
function isPalindrome(someStr) {
    
    let isPalindrome = false
    let len = someStr.length
    for (let i = 0; i < someStr.length; i++) {

        if (someStr[i] !== someStr[len - 1 - i]){
            isPalindrome = false
        } else {
             isPalindrome = true
        }
    }
     return isPalindrome
}

console.log(isPalindrome("moei"))