/*
A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.
*/

//O(n)
/*
function isPalindrome (s){
    if(!s.length) return true;
    //remove space and special characters, then lowercase
    const string = s.replace(/[^a-zA-Z0-9]/ig, "").toLowerCase()
    const reversedString = string.split("").reverse().join("")
    return string === reversedString;
}
*/


console.log(isPalindrome("A man, a plan, a canal: Panama")) //True;
