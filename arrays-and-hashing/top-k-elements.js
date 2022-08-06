/*
Given an integer array nums and an integer k, return the k most frequent elements. You may return the answer in any order.
*/


// brute force - O(n log(n));
function topKfrequent(nums, k){
    let map = {};
    let result = [];
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        if(map[num] === undefined){
            map[num] = 0;
        }
        map[num] += 1;

    }

    //sort key based on value
    let sortedNums =  Object.keys(map).sort((a, b) => a[1] - b[1]);
    return sortedNums.slice(0, k);
}

console.log(topKfrequent([1,1,1,2,2,3], 2));
