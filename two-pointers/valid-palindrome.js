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


function isPalindrome (s) {
    if(!s.length) return true;
    s = s.toLowerCase();
    return isValid(s);
}

function isValid(s){
    let [left,right] = [0, s.length - 1];

    while(left < right){
        while((left < right) && isNonAlphaNumeric(s[left])) left++;
        while((left < right) && isNonAlphaNumeric(s[right])) right--;

        const isSame = s[left] === s[right]
        if(!isSame) return false;

        left++; right--;
    }
    return true;
}


function isNonAlphaNumeric(char) {
    const isNonAlpha = char < 'a' || 'z' < char;
    const isNonNumeric = char < '0' || '9' < char;

    return isNonAlpha && isNonNumeric;
}

console.log(isPalindrome("A man, a plan, a canal: Panama")) //True;
