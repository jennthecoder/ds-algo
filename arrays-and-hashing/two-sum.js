/*
Given an array of integers nums and an integer target, return indices of the two numbers such that they add up to target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

You can return the answer in any order.
*/

/*
function twoSum(nums, target){
    //brute force approach - Time complexity 0(n2)
    for (let i = 0; i < nums.length; i++) {
        const num = nums[i];
        for (let j = i + 1; j < nums.length; j++) {
            const next = nums[j];
            let difference = target - num;
            if(next === difference){
                return [i, j];
            }
        }
    }
}
*/

//optimal approach

// utilize map to store difference as key and indeces as values
/*
key - value - example based on for nums = [2, 11,15, 7] with target 9
 2: 0
 11: 1
 15: 2

*/

function twoSum(nums, target){
    let map = {}
    for (let index = 0; index < nums.length; index++) {
        const num = nums[index];
        let difference = target - num;
        if(map[difference] !== undefined){
            return [map[difference], index]
        }
        map[nums[index]] = index
    }
    return "sum does not exist";
}

export default twoSum;
