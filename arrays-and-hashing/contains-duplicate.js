/*
Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.*/

//[1,2,3,1] => true
//[1,2,3,4] =>  false

//Brute force approch Time complexity - 0(n2), space complexity of 0(1)
/*
function containsDuplicate (nums) {
    for(let i = 0; i < nums.length; i++){
        for(let j = i + 1; j < nums.length; j++){
            if(nums[i] === nums[j]){
                return true;
            }
        }
    }
    return false;
}
*/

//optinal approach Time complexity - 0(n), space complexity of 0(n)
function containsDuplicate(nums){
    let numbers = new Set();
    for (let i = 0; i < nums.length; i++) {
        let element = nums[i];
        if(numbers.has(element)){
            return true;
        }
        numbers.add(element);
    }
    return false;
}


export default containsDuplicate;
