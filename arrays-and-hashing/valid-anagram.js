/*
Given two strings s and t, return true if t is an anagram of s, and false otherwise.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/


//brute force approach 0(n log(n))
/*
function isAnagram(s, t) {
    return s.length !== t.length ? false : s.split('').sort().join('') === t.split('').sort().join('');
}
*/

//optimal approach - Time complexity 0(n)
function isAnagram(s, t){
    if(s.length !== t.length) return false;
    const newS = mapify(s);
    const newT = mapify(t);
    for(let i = 0; i < s.length; i++){
        if(newS[s[i]] !== newT[s[i]]){
            return false;
        }
    }
    return true;
}

//  turn string into map, which  each letter acting as key and number of occurences as values -- see example below.
/*
key value
a : 3
n: 1
g: 1
r: 1
m: 1
*/
function mapify(str){
    let map = {}
    for(let i = 0; i < str.length; i++){
        if(!map[str[i]]){
            map[str[i]] = 0;
        }
        map[str[i]] += 1;
    }
    return map;
}


export default isAnagram;
