/*
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.
*/


//Input: strs = ["eat","tea","tan","ate","nat","bat"]
//Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

//brute force approach - 0(n * m log(m))
/*
function groupAnagram(strs){
    let result = {}
    for (let index = 0; index < strs.length; index++) {
        const str = strs[index];
        let sortedStr = str.split('').sort().join('');
        if(result[sortedStr] === undefined){
            result[sortedStr] = [];
        }
        result[sortedStr].push(strs[index])

    }
    return Object.values(result);

}
*/


const alphabet = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    J: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 24,
    y: 25,
    z: 26
}

/*
Logic: hash each str.
1. every letter of the alphabet is assigned an interger
2. create a fized array of size 26 and fill empty indexes with 0s;
3 for strs that have e,a,t we will have [
  1, 0, 0, 0, 1, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1, 0, 0, 0, 0,
  0, 0
]
which can be seen as [
  1a, 0, 0, 0, 1e, 0, 0, 0,
  0, 0, 0, 0, 0, 0, 0, 0,
  0, 0, 0, 1t, 0, 0, 0, 0,
  0, 0
]
if we had 2 a in the word, we would have 2 at index 0.

4. utilize the array representing the hashed str as key, if key does not exist then add the key with an empty array as the value. Otherwise, push the current element we are looping through into the array that has its hashed values as key.

5. Finally, return the values on the object.
*/

// optimized approach - O(n) 
function groupAnagrams(strs){
    let result = {}

    for (let index = 0; index < strs.length; index++) {
        const str = strs[index];
        let hashedStr = hashStr(str);
        if(result[hashedStr] === undefined){
            result[hashedStr] = [];
        }
        result[hashedStr].push(strs[index])
    }
    return Object.values(result);
}

function hashStr(str){
    let hash = Array(26).fill(0);
    for (let index = 0; index < str.length; index++) {
        const el = str[index];
        hash[alphabet[el]] += 1;

    }
    return hash;
}
function topKfrequent() {

}
