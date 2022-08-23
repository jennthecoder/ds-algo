
//O(n + m) => drop constant 0(n)
function maxConsecutiveSubsetSum(nums, n){
    let [leftPointer, rightPointer, maxSum] = [0, n, 0]
    while(rightPointer < nums.length){
        let temp = 0;
        //calculate sum of all numbers from leftPointer to n
        for (let i = leftPointer; i < rightPointer; i++) {
            temp += nums[i];
        }
        //update maxSum  if temp > current maxSum value;
        maxSum = Math.max(temp, maxSum);
        //slide window by 1
        leftPointer++, rightPointer++
    }
    return maxSum;
};

console.log(maxConsecutiveSubsetSum([4,5,7,9,20,4,9,3,11,4,3], 2))
