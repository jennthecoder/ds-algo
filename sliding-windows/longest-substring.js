/*
Given a string s, find the length of the longest substring without repeating characters.
 */

function lengthOfLongestSubstring(s){
    const set = new Set();
    let [left, max] = [0, 0]
    for (let right = 0; right < s.length; right++) {
        while(set.has(s[right])){
            set.delete(s[left])
            left += 1;
        }

        set.add(s[right]);
        max = Math.max(max, set.size);
    }
    return  max
};

console.log(lengthOfLongestSubstring("abcabcbb"));
