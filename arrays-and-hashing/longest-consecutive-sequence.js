/*
Given an unsorted array of integers nums, return the length of the longest consecutive elements sequence.

You must write an algorithm that runs in O(n) time.
*/


function longestConsequitive(nums) {
  const set = new Set(nums);
  let max = 0;

  for (let i = 0; i < nums.length; i++) {
      const num = nums[i];
        //check if num is the beginning of a new sequence, it its not move to the next element.
      if(set.has(num - 1)){
          continue;
      }
      
      let currentMax = 1;
      while(set.has(num + currentMax)){
          currentMax++;
      }
      if(currentMax > max){
          max = currentMax;
      }
  }
  return max;
}

console.log(longestConsequitive([100,4,200,1,3,2]))
